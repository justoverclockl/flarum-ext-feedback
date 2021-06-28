import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage';
import Feedback from '@betahuhn/feedback-js';

app.initializers.add('justoverclock/flarum-ext-feedback', () => {
  extend(IndexPage.prototype, 'oninit', function (vdom) {

    const baseUrl = app.forum.attribute('baseUrl') + '/feedback';
    const Contact = 'mailto:'+ app.forum.attribute('ContactMail');

    const options = {
      id: 'feedback', // id to identify the form on the backend
      endpoint: baseUrl, // enpoint of your backend to handle the submission
      emailField: true, // show email input field, default: false
      btnTitle: 'Feedback', // title of button
      title: 'Flarum Feedback', // text at the top
      contactText: 'Or send an email!', // text for other contact option
      contactLink: Contact, // link for other contact option
      typeMessage: 'What feedback do you have?', // message for selecting feedback type
      success: 'Thanks! 👊', // message displayed on successfull submission
      failedTitle: 'Oops, an error ocurred!', // title displayed on error
      failedMessage: 'Please try again. If this keeps happening, try to send an email instead.', // default error message if backend doesn't return one
      position: 'right', // position of button left/right
      primary: 'rgb(53, 222, 118)', // primary color
      background: '#fff', // background color
      color: '#000' // font color
    }
      new Feedback(options).attach();
  })
})
