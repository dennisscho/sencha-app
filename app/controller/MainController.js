Ext.define('ToDo.controller.MainController', {
	extend: 'Ext.app.Controller',
	requires: 'Ext.ActionSheet',
	config: {
		refs: {
			mainContainer: 'maincontainer',
			toDoEditor: 'todoeditor',
			calendar: 'todocalendar'
		},
		control: {
			mainContainer: {
				newToDo: 'onNewToDo',
				toDoDisclose: 'onToDoDisclose',
				sort: 'onSort'
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
	},
	onSort: function(){
		var sortActionSheet = Ext.create('Ext.ActionSheet', {
			items: [{
				text: 'Sort by priority',
				handler: this.sortByPriority,
				scope: this
			}, {
				text: 'Sort by date',
				handler: this.sortByDate,
				scope: this
			},{
				text: 'cancel',
				ui: 'decline'
			}],
			defaults: {
				listeners: {
					tap: function(){
						sortActionSheet.hide();
					}
				}
			},
			hidden: true
		});

		Ext.Viewport.add(sortActionSheet);
		sortActionSheet.show();
	},
	sortByPriority: function(){
		Ext.getStore('ToDos').sort('priority', 'DESC');
	},
	sortByDate: function(){
		Ext.getStore('ToDos').sort('date', 'ASC');
	}
});