Ext.define('ToDo.model.ToDo', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{name: 'title', type: 'string'},
			{name: 'description', type: 'string'},
			{name: 'date', type: 'date'},
			{name: 'priority', type: 'int'}
		],
		validations: [
			{type: 'presence', field: 'title', message: 'Please enter a title.'}
		]
	}
});