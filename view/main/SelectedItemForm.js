Ext.define("MyApp.view.main.SelectedItemForm", {
  extend: "Ext.form.Panel",
  id: "formpanel",
  title: 'Modify the fields, then click "Save" to update the record',
  xtype: "widget.fieldset",
  fullscreen: true,
  controller: "main",
  width: 600,
  height: 450,
  centered: true,
  border: true,

  items: [
    {
      xtype: "textfield",
      name: "title",
      label: "Title",
      maxLengthText: 1,
    },
    {
      xtype: "textfield",
      name: "genre",
      label: "Genre",
      maxLengthText: 1000,
    },
    {
      xtype: "textfield",
      name: "artistGroupOrAnime",
      label: "Artist, Group, or Anime",
      allowBlank: true,
      maxLengthText: 1000,
    },
    {
      xtype: "textfield",
      name: "estimatedDiscoveryTime",
      label: "Estimated Discovery Time",
      allowBlank: true,
      maxLengthText: 2000,
    },
    {
      xtype: "textfield",
      name: "link",
      label: "Link",
      allowBlank: true,
      maxLengthText: 2000,
    },
  ],

  buttons: {
    save: "onSave",
    cancel: "onCancel",
  },
});
