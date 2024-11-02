import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';
import { db } from '../../util/firebase';
import { collection, addDoc } from 'firebase/firestore';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    console.log("Incoming POST request to /commissions");

    // Parse JSON data with error handling
    let parsedData;
    try {
      parsedData = await request.json();
    } catch (jsonError) {
      console.error("Failed to parse request body:", jsonError);
      return NextResponse.json({ message: 'Invalid JSON payload.' }, { status: 400 });
    }

    const { name, email, phoneNumber, projectDetails } = parsedData;
    console.log("Parsed request data:", { name, email, phoneNumber, projectDetails });

    if (!name || !email || !phoneNumber || !projectDetails) {
      console.error("Validation failed. Missing fields.");
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Firestore operation
    console.log("Firestore config check:", db ? "Initialized" : "Missing");
    console.log("Attempting to add document to Firestore...");
    const docRef = await addDoc(collection(db, 'commission-requests'), {
      name,
      email,
      phoneNumber,
      projectDetails,
      timestamp: new Date(),
    });
    console.log("Document added with ID:", docRef.id);
    console.log("SENDGRID_API_KEY is", process.env.SENDGRID_API_KEY ? "Present" : "Missing");
    console.log("Attempting to send email via SendGrid...");
    console.log("Connecting to MySQL...");
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
    if (error.response) {
      console.error("Error response from SendGrid:", error.response.body);
    }
    return NextResponse.json({ message: 'Error handling request.', error: error.message }, { status: 500 });
  }
}
