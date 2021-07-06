import app from 'flarum/admin/app';
import positionOpts from './util/postitionOpts';

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
    app.extensionData
        .for('justoverclock-feedback')
        .registerSetting({
            setting: 'justoverclock-feedback.ContactMail',
            name: 'ContactMail',
            type: 'email',
            label: app.translator.trans('justoverclock-feedback.admin.contactmail'),
            help: app.translator.trans('justoverclock-feedback.admin.contactdesc'),
        })
        .registerSetting({
            setting: 'justoverclock-feedback.collect-email',
            name: 'CollectEmail',
            type: 'boolean',
            label: app.translator.trans('justoverclock-feedback.admin.collect-email'),
            help: app.translator.trans('justoverclock-feedback.admin.collect-email-help'),
        })
        .registerSetting({
            setting: 'justoverclock-feedback.position',
            options: positionOpts(),
            name: 'Position',
            type: 'select',
            label: app.translator.trans('justoverclock-feedback.admin.position'),
            help: app.translator.trans('justoverclock-feedback.admin.position-help'),
            default: 'right',
        });
});
