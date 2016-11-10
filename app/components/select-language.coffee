`import Ember from 'ember'`
`import ENV from 'irene/config/environment';`

SelectLanguageComponent = Ember.Component.extend

  classNames: ["control"]

  i18n: Ember.inject.service()

  actions:
    setLocale: ->
      lang = @$('select').val()
      @set 'i18n.locale', lang
      data =
        lang: lang
      @get("ajax").post ENV.endpoints.lang, data: data

`export default SelectLanguageComponent`
