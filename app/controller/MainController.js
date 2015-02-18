Ext.define('ToDo.controller.MainController', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			mainContainer: 'maincontainer',
			toDoEditor: 'todoeditor'
		},
		control: {
			mainContainer: {
				newToDo: 'onNewToDo',
				toDoDisclose: 'onToDoDisclose'
			}
		}
	},
	launch: function() {
		this.callParent(arguments);
		Ext.getStore('ToDos').load();
	},
	onNewToDo: function() {
		this.transferToDoToEditor();
		this.transitionToToDoEditor();
	},
	transferToDoToEditor: function() {
		var newToDo = Ext.create('ToDo.model.ToDo', {
			title: ''
		});
		this.getToDoEditor().setRecord(newToDo);
	},
	leftSlide: {
		type: 'slide',
		direction: 'left'
	},
	transitionToToDoEditor: function() {
		var toDoEditor = this.getToDoEditor();
		Ext.Viewport.animateActiveItem(toDoEditor, this.leftSlide);
	},
	onToDoDisclose: function(list, record){
		this.getToDoEditor().setRecord(record);
		this.transitionToToDoEditor();
	}
});