import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY); 

export async function POST(request) {
  try {
    const { name, email, phoneNumber, projectDetails } = await request.json();

    const userEmail = sendgrid.send({
      to: email, 
      from: 'confirmation@xbrainstewx.com',
      templateId: 'd-776bf58e9dbf4461aa83cbcbdcff5de5', 
      dynamicTemplateData: {
        name: name,
        projectDetails: projectDetails,
        phoneNumber: phoneNumber,
      },
    });

    const adminEmail = sendgrid.send({
      to: 'ashley@xbrainstewx.com',
      from: 'confirmation@xbrainstewx.com', 
      subject: 'New Commission Request',
      html: `
        <p>You have a new commission request from ${name}.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `, 
    });
    await Promise.all([userEmail, adminEmail]);

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ message: 'Error sending emails.' }, { status: 500 });
  }
}
