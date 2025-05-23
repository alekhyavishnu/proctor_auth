const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Add this function to mask the email address
function maskEmail(email) {
  const [name, domain] = email.split('@');
  if (name.length <= 4) {
    return `${name[0]}***@${domain}`;
  }
  return `${name.slice(0,2)}***${name.slice(-2)}@${domain}`;
}

async function sendMail(to, otp) {
  const maskedEmail = maskEmail(process.env.EMAIL_USER);
  await transporter.sendMail({
    from: `"noreply-proctor" <${maskedEmail}>`,
    to,
    subject: 'Your OTP To Access Capgemini Proctor',
    text: `Your OTP is: ${otp}`,
  });
}

module.exports = { sendMail };