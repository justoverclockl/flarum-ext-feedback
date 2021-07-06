let opts;

export default () =>
    opts ||
    (opts = ['right', 'left'].reduce((o, key) => {
        o[key] = app.translator.trans(`justoverclock-feedback.admin.${key}_label`);

        return o;
    }, {}));
