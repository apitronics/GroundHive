$(function() {

  App.Models.Bee = Backbone.Model.extend({

    // An override for compatibility with CouchDB
    idAttribute: "_id",

    // couch database to use in url generating
    db: 'config',

    // An override for compatibility with CouchDB
    url: function() {
      var url
      if (_.has(this, 'id') && this.get('_rev')) {
        url = '/config/' + this.id + "?rev=" + this.get('_rev')
      }
      else if (_.has(this, 'id') ) {
        url = '/config/' + this.id 
      }
      else {
        url = '/config'
      }
      return url
    },

    schema: {
      'name': 'Text',
      'address': 'Hidden'
    }    

  })

})
