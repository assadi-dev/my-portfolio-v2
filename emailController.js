const nodemailer = require("nodemailer");

module.exports.sendMail = (req, res) => {
  const credential = {
    host: process.env.SMTP,
    port: process.env.PORT_SMTP,
    secure: false,
    auth: {
      user: process.env.IDENTIFIANT,
      pass: process.env.PASSWORD,
    },
  };

  const { from_name, from_email, sujet, message } = req.body;
  const to = "assadi.halifa@gmail.com";
  const from = from_email;
  const subject = sujet;
  const body = message;

  const transporter = nodemailer.createTransport(credential);

  try {
    transporter.sendMail(
      {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: `Vous avez reçus un email de la part de ${from_name}, ${body}`, // plain text body
        html: `<p>Bonjour Mr Assadi,</p> <p>Email : ${from}</p>  <p>Vous avez reçus un email de la part de ${from_name},</p> ${message}`, // html body
      },

      (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).json(error);
        } else {
          res.status(200).json({ message: `Email reçus`, info: info.response });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.staus(500).json(error);
    t;
  }
};
