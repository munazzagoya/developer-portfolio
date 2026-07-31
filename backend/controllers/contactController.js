const transporter = require("../config/nodemailer");

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Email sent successfully!",
    });

  } catch (error) {
    console.error("========== EMAIL ERROR ==========");
console.error(error);
console.error("================================");;

    res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
};

module.exports = { sendMessage };