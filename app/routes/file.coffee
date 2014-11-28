`import Ember from 'ember'`
`import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';`

FileRoute = Ember.Route.extend AuthenticatedRouteMixin,

  model: (params)->
    @store.find 'file', params.file_id

`export default FileRoute`