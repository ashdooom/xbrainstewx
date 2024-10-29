import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import { db } from '../../util/firebase';
import { collection, addDoc } from 'firebase/firestore';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    console.log("Incoming POST request to /commissions");

    const { name, email, phoneNumber, projectDetails } = await request.json();
    console.log("Parsed request data:", { name, email, phoneNumber, projectDetails });

    if (!name || !email || !phoneNumber || !projectDetails) {
      console.error("Validation failed. Missing fields.");
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    console.log("Attempting to add document to Firestore...");
    const docRef = await addDoc(collection(db, 'commission-requests'), {
      name,
      email,
      phoneNumber,
      projectDetails,
      timestamp: new Date(),
    });
    console.log("Document added with ID:", docRef.id);

    console.log("Attempting to send email via SendGrid...");
    await sendgrid.send({
      to: email,
      from: 'confirmation@xbrainstewx.com',
      templateId: 'd-776bf58e9dbf4461aa83cbcbdcff5de5',
      dynamicTemplateData: { name, projectDetails, phoneNumber }
    });
    console.log("Email sent successfully");

    return NextResponse.json({ message: 'Emails sent and data stored successfully!' }, { status: 200 });

  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ message: 'Error handling request.', error: error.message }, { status: 500 });
  }
}
