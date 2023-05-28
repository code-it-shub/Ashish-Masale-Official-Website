import formData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export async function GET(request) {
  return new Response("hello");
}
export async function POST(request) {
  let body = await request.json();
  let name = body.name;
  
  const mailgun = new Mailgun(formData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: body.email,
    to: "shubhamprakash8991@gmail.com",
    subject: "Contact form Query",
    text: `Hello, you have a notification from the ${body.name} from ${body.country} ${body.state} ${body.city}
    phone Number : ${body.phone}
    Query type : ${body.querytype}
    message : ${body.message}
    
    `,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  // Response.status(200).json({ name: 'John Doe' });
  return new Response(`submitted`);
}
