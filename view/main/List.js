Ext.define("MyApp.view.main.List", {
  extend: "Ext.grid.Grid",
  xtype: "mainlist",

  requires: ["MyApp.store.Personnel"],

  store: {
    type: "personnel",
  },

  title: " ",

  columns: [
    {
      text: "Title",
      itemId: "title",
      dataIndex: "title",
      width: 200,
    },
    {
      text: "Genre",
      itemId: "genre",
      dataIndex: "genre",
      width: 150,
    },
    {
      text: "Artist, Group, or Anime",
      itemId: "artistGroupOrAnime",
      dataIndex: "artistGroupOrAnime",
      width: 250,
    },
    {
      text: "Estimated Discovery Time",
      itemId: "estimatedDiscoveryTime",
      dataIndex: "estimatedDiscoveryTime",
      width: 250,
    },
    {
      text: "Link",
      itemId: "link",
      dataIndex: "link",
      flex: 1,
    },
    {
      xtype: "personalcheckcolumn",
    },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
