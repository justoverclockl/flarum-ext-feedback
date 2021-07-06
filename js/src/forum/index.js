import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage';
import Feedback from '@betahuhn/feedback-js';

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
    extend(IndexPage.prototype, 'oninit', function (vnode) {
        const apiUrl = app.forum.attribute('apiUrl') + '/feedback';
        const opts = app.forum.attribute('feedback');

        if (!opts) {
            console.warn('justoverclock/flarum-ext-feedback is not correctly configured!');
            return;
        }

        const options = {
            endpoint: apiUrl,
            events: true,
            emailField: opts.email, // show email input field, default: false
            btnTitle: app.translator.trans('justoverclock-feedback.forum.button-title'), // title of button
            title: app.translator.trans('justoverclock-feedback.forum.feedback-widget.title'), // text at the top
            contactText: app.translator.trans('justoverclock-feedback.forum.feedback-widget.contact-text'), // text for other contact option
            typeMessage: app.translator.trans('justoverclock-feedback.forum.feedback-widget.type-message'), // message for selecting feedback type
            success: app.translator.trans('justoverclock-feedback.forum.feedback-widget.success'), // message displayed on successfull submission
            failedTitle: app.translator.trans('justoverclock-feedback.forum.feedback-widget.failed-title'), // title displayed on error
            failedMessage: app.translator.trans('justoverclock-feedback.forum.feedback-widget.failed-message'), // default error message if backend doesn't return one
            position: opts.position, // position of button left/right
            primary: app.forum.attribute('themePrimaryColor'), //'rgb(53, 222, 118)', // primary color
            background: '#fff', // background color
            color: '#000', // font color
            types: {
                general: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.general'),
                    icon: '⚠️',
                },
                idea: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.idea'),
                    icon: '💡',
                },
                love: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.love'),
                    icon: '💖',
                },
            },
        };
        new Feedback(options).renderButton();

        window.addEventListener('feedback-submit', (event) => {
            app.request({
                method: 'POST',
                url: apiUrl,
                body: event.detail,
            });
        });
    });
});
