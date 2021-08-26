/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MyApp.view.main.MainController", {
  extend: "Ext.app.ViewController",
  requires: ["MyApp.view.main.SelectedItemForm"],
  alias: "controller.main",

  onItemSelected: function (sender, record) {
    if (Ext.getCmp("formpanel")) {
      this.hideForm();
    }
    var popupForm = new MyApp.view.main.SelectedItemForm();
    popupForm.selectedRecordId = record[0].data.id;
    var textfields = Ext.ComponentQuery.query("textfield");
    textfields.forEach((textfield) => {
      textfield.setValue(record[0].data[textfield.name]);
    });
    popupForm.triggerSource = "Record Click";
    popupForm.show();
  },

  onUpdateButtonClick: function (click, event) {
    if (Ext.getCmp("formpanel")) {
      this.hideForm();
    }
    var popupForm = new MyApp.view.main.SelectedItemForm();
    popupForm.triggerSource = "Button Click";
    popupForm.show();
  },

  onSave: function (click) {
    var openedForm = Ext.getCmp("formpanel");
    var formTextfields = openedForm.items ? openedForm.items.items : [];
    var updatedListItem = {};
    formTextfields.forEach((textfield) => {
      if (textfield.name) {
        updatedListItem[textfield.name] = textfield.rawValue;
      }
    });
    var requestMethod =
      openedForm.triggerSource === "Record Click" ? "PUT" : "POST";
    updatedListItem.id = openedForm.selectedRecordId;
    var url = "http://localhost:3000/song-and-music";
    this.ajaxRequest(url, requestMethod, updatedListItem);
    this.hideForm();
  },

  onDelete: function (cell, rowIndex, checked, record, event, eOpts) {
    var me = this;
    Ext.Msg.confirm(
      "Delete",
      "Are you sure you wish to delete this item?",
      function (choice) {
        if (choice === "yes") {
          var url = Ext.String.format(
            "http://localhost:3000/song-and-music/{0}",
            record.id
          );
          me.ajaxRequest(url, "DELETE", undefined);
        }
      }
    );
  },

  onCancel: function (click) {
    this.hideForm();
  },

  hideForm: function () {
    var openedForm = Ext.getCmp("formpanel");
    openedForm.setHidden(true);
    openedForm.destroy();
  },

  ajaxRequest: function (url, requestMethod, jsonData) {
    Ext.Ajax.request({
      url: url,
      method: requestMethod,
      jsonData: jsonData,
      success: function () {
        var store = Ext.data.StoreManager.lookup("songAndMusicStore");
        store.reload();
      },
      failure: function () {
        Ext.Msg.alert("Failed!");
      },
    });
  },
});
