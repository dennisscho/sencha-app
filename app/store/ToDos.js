Ext.define('ToDo.store.ToDos', {
	extend: 'Ext.data.Store',
	requires: 'Ext.data.proxy.LocalStorage',
	config: {
		model: 'ToDo.model.ToDo',
		proxy: {
			type: 'localstorage',
			id: 'todo-app-store'
		}
	}
});