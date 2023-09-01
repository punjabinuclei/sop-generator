const nodemailer = require('nodemailer');

async function sendEmail(formData, sop) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // E.g., 'Gmail'
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: 'EFFIZENT',
      to: formData.email,
      subject: 'Statement of Purpose',
      text: `
        Dear ${formData.fullName},

        Thank you for using our SOP Generation Tool. Here is your customized Statement of Purpose:

        ${sop}
      `,
      attachments: [
        {
          filename: 'sop.txt',
          content: sop, 
        },
      ],
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
