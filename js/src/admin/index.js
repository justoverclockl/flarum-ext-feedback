import app from 'flarum/admin/app';

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
    app.extensionData.for('justoverclock-feedback').registerSetting({
        setting: 'justoverclock-feedback.ContactMail',
        name: 'ContactMail',
        type: 'email',
        label: app.translator.trans('justoverclock-feedback.admin.contactmail'),
        help: app.translator.trans('justoverclock-feedback.admin.contactdesc'),
    });
});
