Ext.define("MyApp.view.main.UpdateButton", {
  extend: "Ext.Button",
  xtype: "updatebutton",
  text: "Add new record",
  controller: "main",
  autoWidth: false,
  width: 160,
  height: 48,
  cls: "btn",
  listeners: {
    tap: "onUpdateButtonClick",
  },
});
