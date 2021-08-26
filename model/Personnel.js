Ext.define("MyApp.model.Personnel", {
  extend: "Ext.data.Model",

  fields: [
    "title",
    "genre",
    "artistGroupOrAnime",
    "estimatedDiscoveryTime",
    "link",
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:3000/song-and-music/entity",
  },
});
