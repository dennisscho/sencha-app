Ext.define('ToDo.view.ToDoList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.todolist',
	config: {
		itemTpl: '{title}',
		emptyText: "No ToDo\'s left!",
		loadingText: "Loading...",
		disableSelection: true,
		onItemDisclosure: true
	}
});