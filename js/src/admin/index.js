import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
  app.extensionData.for('justoverclock-feedback').registerSetting({
    setting: 'justoverclock-feedback.ContactMail',
    name: 'ContactMail',
    type: 'email',
    label: app.translator.trans('flarum-ext-feedback.admin.contactmail'),
    help: app.translator.trans('flarum-ext-feedback.admin.contactdesc'),
  });
});
