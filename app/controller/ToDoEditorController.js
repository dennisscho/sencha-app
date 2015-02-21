Ext.define('ToDo.controller.ToDoEditorController', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			toDoEditor: 'todoeditor',
			mainContainer: 'maincontainer'
		},
		control: {
			toDoEditor: {
				backToMain: 'onBackToMain',
				saveToDo: 'onSaveToDo',
				deleteToDo: 'onDeleteToDo'
			}
		}
	},
	slideRight: {
		type: 'slide',
		direction: 'right'
	},
	onBackToMain: function() {
		this.transitionToMain();
	},
	transitionToMain: function() {
		var mainContainer = this.getMainContainer();
		Ext.Viewport.animateActiveItem(mainContainer, this.slideRight);
	},
	onSaveToDo: function() {
		this.setNewValuesForToDo();
		if (this.toDoHasErrors()) {
			return;
		}
		this.addToDoToStore();
		this.transitionToMain();
	},
	setNewValuesForToDo: function() {
		var toDoEditor = this.getToDoEditor();
		var currentToDo = toDoEditor.getRecord();
		var newValues = toDoEditor.getValues();

		currentToDo.set('title', newValues.title);
		currentToDo.set('description', newValues.description);
		currentToDo.set('date', newValues.date);
		currentToDo.set('priority', newValues.priority);
	},
	toDoHasErrors: function() {
		var toDoEditor = this.getToDoEditor();
		var currentToDo = toDoEditor.getRecord();
		var errors = currentToDo.validate();

		if (!errors.isValid()) {
			Ext.Msg.alert('Error!', errors.getByField('title')[0].getMessage(), Ext.emptyFn);
			currentToDo.reject();
			return true;
		} else {
			return false;
		}

	},
	addToDoToStore: function() {
		var toDoEditor = this.getToDoEditor();
		var currentToDo = toDoEditor.getRecord();
		var toDoStore = Ext.getStore('ToDos');
		toDoStore.add(currentToDo);
		toDoStore.sync();
	},
	removeToDoFromStore: function(){
		var toDoEditor = this.getToDoEditor();
		var currentToDo = toDoEditor.getRecord();
		var toDoStore = Ext.getStore('ToDos');
		toDoStore.remove(currentToDo);
		toDoStore.sync();
	},
	onDeleteToDo: function(){
		this.removeToDoFromStore();
		this.transitionToMain();
	}
});