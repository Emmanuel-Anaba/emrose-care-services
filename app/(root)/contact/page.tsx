import ContactForm from "@/components/contactform";
import { IoFingerPrint } from "react-icons/io5";
import { contact_list } from "@/lib/lists";

export default function Contact() {
  return (
    <main className="py-6 md:py-8">
      <div className="page-heading">
        <p>
          Get In T<IoFingerPrint className="text-xl" />
          uch
        </p>
        <span>Reach out to us for any inquiries or feedback.</span>
      </div>
      <section className="page-body-grid md:grid-flow-col">
        <div className="grid grid-rows-2 gap-4">
          <ul className="grid">
            {contact_list.map(({ icon: Icon, text }, i) => (
              <li key={i}>
                <Icon className="text-2xl" /> {"  "}
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.551410346888!2d-81.40662252450213!3d28.55320027570816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a47c5dd6d87%3A0xe7dfe83a48f4aa7b!2sLincoln%20Building%2C%201805%20W%20Colonial%20Dr%2C%20Orlando%2C%20FL%2032804%2C%20USA!5e0!3m2!1sen!2ske!4v1718975614133!5m2!1sen!2ske"></iframe>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
