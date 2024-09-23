import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextResponse } from 'next/server';

const ses = new SESClient({ region: "us-east-1" });

export async function POST(req) {
  const { name, email, phoneNumber, projectDetails } = await req.json();
  
  const recipientEmail = "ashley@xbrainstewx.com"; 

  const params = {
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nProject Details: ${projectDetails}`,
        },
      },
      Subject: {
        Data: "New Form Submission",
      },
    },
    Source: "confirmation@xbrainstewx.com",
  };

  try {
    await ses.send(new SendEmailCommand(params));
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (err) {
    console.error("Error sending email: ", err);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
