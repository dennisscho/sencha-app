Ext.define('ToDo.view.ToDoEditor', {
	extend: 'Ext.form.Panel',
	alias: 'widget.todoeditor',
	requires: ['Ext.form.FieldSet', 'Ext.field.DatePicker', 'Ext.field.Slider'],
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

		var descriptionTextArea = {
			xtype: 'textareafield',
			label: 'Description',
			name: 'description'
		};

		//FieldSets fassen mehrere Formularelemente zusammen
		var toDoFieldSet = {
			xtype: 'fieldset',
			title: 'ToDo Information',
			items: [titleTextField, descriptionTextArea]
		};

		var deleteButton = {
			xtype: 'button',
			text: 'Delete',
			ui: 'decline',
			handler: 'onDeleteButtonTap',
			scope: this
		};

		var datePickerField = {
			xtype: 'datepickerfield',
			label: 'Date',
			name: 'date',
			picker: {
				xtype: 'datepicker',
				yearFrom: 2015,
				yearTo: 2030
			}
		};

		var datePickerFieldSet = {
			xtype: 'fieldset',
			items: [datePickerField]
		};

		var prioritySlider = {
			xtype: 'sliderfield',
			value: 1,
			minValue: 1,
			maxValue: 10,
			name: 'priority',
			label: 'Priority'
		};

		var prioritySliderFieldSet = {
			xtype: 'fieldset',
			items: [prioritySlider]
		};

		this.add([topToolbar, toDoFieldSet, datePickerFieldSet, prioritySliderFieldSet, deleteButton]);
	},
	onBackButtonTap: function() {
		this.fireEvent('backToMain', this);
	},
	onSaveButtonTap: function() {
		this.fireEvent('saveToDo', this);
	},
	onDeleteButtonTap: function() {
		this.fireEvent('deleteToDo', this);
	}
});