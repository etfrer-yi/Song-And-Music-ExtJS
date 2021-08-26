Ext.define("MyApp.store.Personnel", {
  extend: "Ext.data.Store",

  alias: "store.personnel",
  storeId: "songAndMusicStore",

  model: "MyApp.model.Personnel",

  proxy: {
    type: "ajax",
    api: {
      create: "http://localhost:3000/song-and-music",
      read: "http://localhost:3000/song-and-music",
      update: "http://localhost:3000/song-and-music",
      destroy: "http://localhost:3000/song-and-music",
    },
  },

  autoLoad: true,
});
