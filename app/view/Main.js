Ext.define('ToDo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    alias: 'widget.maincontainer',
    initialize: function() {
        this.callParent(arguments);

        var sortButton = {
            xtype: 'button',
            ui: 'action',
            text: 'Sort',
            handler: this.onSortButtonTap,
            scope: this
        };

        var newButton = {
            xtype: 'button',
            ui: 'action',
            text: 'New',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'ToDo',
            items: [sortButton, {
                    xtype: 'spacer'
                },
                newButton
            ]
        };

        var todoList = {
            xtype: 'todolist',
            store: Ext.getStore('ToDos'),
            listeners: {
                disclose: {
                    fn: this.onToDoDisclose,
                    scope: this
                }
            }
        };

        this.add([topToolbar, todoList]);

    },
    config: {
        layout: {
            type: 'fit'
        }
    },
    onNewButtonTap: function() {
        this.fireEvent('newToDo', this);
    },
    onToDoDisclose: function(list, record, target, index, event, options) {
        this.fireEvent('toDoDisclose', this, record);
    },
    onSortButtonTap: function(){
        this.fireEvent('sort', this);
    }
});