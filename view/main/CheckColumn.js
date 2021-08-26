Ext.define("MyApp.view.main.CheckColumn", {
  extend: "Ext.grid.column.Check",
  xtype: "personalcheckcolumn",
  fieldLabel: "check",
  name: "deleteColumn",
  text: "Delete?",
  controller: "main",
  listeners: {
    checkchange: "onDelete",
  },
});
