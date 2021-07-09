import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Feedback from '@betahuhn/feedback-js';
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
    extend(HeaderPrimary.prototype, 'oninit', function () {
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
            inputPlaceholder: app.translator.trans('justoverclock-feedback.forum.feedback-widget.placeholder'),
            submitText: app.translator.trans('justoverclock-feedback.forum.feedback-widget.submit'), //'Submit', // text for submit button
            backText: app.translator.trans('justoverclock-feedback.forum.feedback-widget.back'), //'Back', // text for back button
            contactText: app.translator.trans('justoverclock-feedback.forum.feedback-widget.contact-text'), // text for other contact option
            typeMessage: app.translator.trans('justoverclock-feedback.forum.feedback-widget.type-message'), // message for selecting feedback type
            success: app.translator.trans('justoverclock-feedback.forum.feedback-widget.success'), // message displayed on successfull submission
            position: opts.position, // position of button left/right
            primary: app.forum.attribute('themePrimaryColor'), // primary color
            background: opts.backgroundColor, // background color
            color: opts.fontColor, // font color
            types: {
                general: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.general'),
                    icon: '⚠️',
                },
                idea: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.idea'),
                    icon: '💡',
                },
                bug: {
                    text: app.translator.trans('justoverclock-feedback.forum.feedback-widget.types.bug'),
                    icon: '🐛',
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
