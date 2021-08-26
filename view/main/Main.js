/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define("MyApp.view.main.Main", {
  extend: "Ext.tab.Panel",
  xtype: "app-main",

  requires: [
    "Ext.MessageBox",
    "Ext.layout.Fit",
    "MyApp.view.main.UpdateButton",
  ],

  controller: "main",
  viewModel: "main",

  defaults: {
    tab: {
      iconAlign: "top",
    },
  },
  tabBarPosition: "bottom",
  items: [
    {
      title: "Song and Music list",
      iconCls: "x-fa fa-home",
      layout: "fit",
      items: [
        {
          xtype: "mainlist",
        },
        {
          xtype: "updatebutton",
        },
      ],
    },
  ],
});
