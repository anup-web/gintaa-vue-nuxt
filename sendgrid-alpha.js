#! /usr/bin/env node

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'team@gintaa.com',
    from: 'info@gintaa.com',
    subject: 'gintaa-web-app-nuxt has pushed new alpha build',
    text: 'New build job of gintaa-web-app-nuxt is triggered. \n Website : alpha.gintaa.com \n Regards, \n Gintaa DevOps Team' 
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));