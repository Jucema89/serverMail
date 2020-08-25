# serverMail
Servidor mail creado con Nodejs / Express y Nodemailer; recibe parámetros SMTP y envía el mail con nodemailer.

# Modo de uso
- funciona en el port:3000, la peticion POST debe ir a localhost:3000/send-email
- El req.body debe contener: 
        host: servidor smtp
        port: pueto del sevidor smtp: number
        autuser: usuario smtp: string
        autpass: clave de smtp: string
        mailto: direccion de mail que recibe: string
        mailfrom: direccion de mail que envia:string (no importa si no es valida)
        subject: asunto del mail: string: string
        message: mensaje en Texto: string
        messageHtml: mensaje en formato HTML: string
        
  - Este transporter ignora el TLS del mail: 
    tls: {
            rejectUnauthorized: false
        }
        
se recomienda leer: http://nodemailer.com/message/



