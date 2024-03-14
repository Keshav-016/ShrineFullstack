import nodemailer from 'nodemailer';
const password = 'wpps vfza giaf kfvj';
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'kkeshavkumar1209@gmail.com',
        pass: `${password}`,
    },
});


export async function sendEmail(email) {
    const info = await transporter.sendMail({
        from: '"Keshav" <kkeshavkumar1209@gmail.com>',
        to: `${email}`,
        subject: "Hello ✔",
        html: "<b>Hello world?</b>",
    });
    console.log("Message sent: %s", info.messageId);
}

