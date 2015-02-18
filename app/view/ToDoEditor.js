Ext.define('ToDo.view.ToDoEditor', {
	extend: 'Ext.form.Panel',
	alias: 'widget.todoeditor',
	requires: 'Ext.form.FieldSet',
	initialize: function() {
		this.callParent(arguments);
		//Hinzufuegen von Komponenten zur GUI
		var backButton = {
			xtype: 'button',
			text: 'Back',
			ui: 'back',
			handler: 'onBackButtonTap',
			scope: this
		};

		var saveButton = {
			xtype: 'button',
			text: 'Save',
			ui: 'action',
			handler: 'onSaveButtonTap',
			scope: this
		};

		var topToolbar = {
			xtype: 'toolbar',
			docked: 'top',
			title: 'New ToDo',
			items: [backButton, {
				xtype: 'spacer'
			}, saveButton]
		};

		var titleTextField = {
			xtype: 'textfield',
			label: 'Title',
			required: true,
			name: 'title'
		};
		//FieldSets fassen mehrere Formularelemente zusammen
		var toDoFieldSet = {
			xtype: 'fieldset',
			title: 'ToDo Information',
			items: [titleTextField]
		};

		var deleteButton = {
			xtype: 'button',
			text: 'Delete',
			ui: 'decline',
			handler: 'onDeleteButtonTap',
			scope: this
		};

		this.add([topToolbar, toDoFieldSet, deleteButton]);
	},
	config: {
		layout: {
			align: 'center'
		}
	},
	onBackButtonTap: function() {
		this.fireEvent('backToMain', this);
	},
	onSaveButtonTap: function(){
		this.fireEvent('saveToDo', this);
	},
	onDeleteButtonTap: function(){
		this.fireEvent('deleteToDo', this);
	}
});