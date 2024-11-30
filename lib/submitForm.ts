import emailjs from "@emailjs/browser";

export default async function submitForm(values: Record<string, unknown>) {
  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const public_key = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  return await emailjs.send(service_id!, template_id!, values, {
    publicKey: public_key,
    limitRate: {
      throttle: 30000,
    },
  });
}
