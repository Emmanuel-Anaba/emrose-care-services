import { about_us_list } from "@/lib/lists";

export default function AboutUs() {
  return (
    <main className="py-6 md:py-8">
      <div className="page-heading">
        <p>About Us</p>
        <span>
          We are dedicated to providing exceptional Health Training services.
          Learn more about our journey and mission through our short video
          introduction below.
        </span>
      </div>
      <section className="page-body-grid md:grid-cols-2">
        <iframe
          className="aspect-video w-full m-auto"
          src="https://www.youtube.com/embed/4BtqOGnluaM?si=hD6FMTKCJ_LTGew1"></iframe>
        <div className="grid gap-6">
          {about_us_list.map(({ title, desc }, i) => (
            <div key={i}>
              <p className="text-lg font-medium">{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
