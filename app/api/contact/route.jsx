import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const username = process.env.EMAIL_USERNAME;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.PERSONAL_EMAIL;

    console.log(username, password, myEmail)

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const dog = formData.get('dog')
    const day = formData.get('day')
    const time = formData.get('time')


    const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: username,
            pass: password
        }
    });


    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `Website activity from ${email}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Wants to visit: ${dog}</p>
            <p>Day: ${day}</p>
            <p>Time: ${time}</p>
            `,
        })
    
        return NextResponse.json({ message: "Success: email was sent" })
    
    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
};