Ext.define('ToDo.model.ToDo', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'title', type: 'string'}
		],
		validations: [
			{type: 'presence', field: 'title', message: 'Please enter a title.'}
		]
	}
});