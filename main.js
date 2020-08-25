const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.get('/', (req, res) => res.send('Hello World'));
app.post('/send-email', async (req, res) => {
    console.log(req.body);
    /*
    Request = 
    transporter {
        host - port - aut {user -pass}
    }
    message {
        form - to - subject - message // html 
    }
    */
    const {
        host, 
        port, 
        autuser, 
        autpass, 
        mailto,
        mailfrom,
        subject, 
        message,
        messageHtml } = req.body;
  
    const transporter = nodemailer.createTransport({ 
        host: host,
        port: port,
        secure: false,
        auth: {
            user: autuser,
            pass: autpass,
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
          res.send('Error en datos de SMTP ' + error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });
    const info = await transporter.sendMail({
        from: mailfrom,
        to: mailto,
        subject: subject,
        text: message,
        html: messageHtml,
    });
    console.log('¿Mensaje enviado? = ', info.messageId);

    res.send(info.messageId);
});
app.listen(3000, () => {
    console.log('servidor en 3000');
});
    