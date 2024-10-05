import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import { db } from '../util/firebase';
import { collection, addDoc } from 'firebase/firestore';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phoneNumber, projectDetails } = await request.json();

    if (!name || !email || !phoneNumber || !projectDetails) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, 'commission-requests'), {
      name,
      email,
      phoneNumber,
      projectDetails,
      timestamp: new Date(),
    });

    await sendgrid.send({
      to: email,
      from: 'confirmation@xbrainstewx.com',
      templateId: 'd-776bf58e9dbf4461aa83cbcbdcff5de5',
      dynamicTemplateData: {
        name,
        projectDetails,
        phoneNumber,
      },
    });

    await sendgrid.send({
      to: 'ashley@xbrainstewx.com',
      from: 'confirmation@xbrainstewx.com',
      subject: 'New Commission Request',
      html: `
        <p>You have a new commission request from <strong>${name}</strong>.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `,
    });

    return NextResponse.json({ message: 'Emails sent and data stored successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending emails or saving data:', error);

    return NextResponse.json({ message: 'Error handling request.' }, { status: 500 });
  }
}
