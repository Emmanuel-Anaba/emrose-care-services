import Image from "next/image";
import { formatName, getImage } from "@/lib/utlis";
import { services_list } from "@/lib/lists";

export default function Services() {
  return (
    <main className="py-6 md:py-8">
      <div className="page-heading">
        <p>Our Services</p>
        <span>Explore our wide range of Emrose care courses</span>
      </div>
      <section className="page-body-grid md:grid-cols-2 lg:grid-cols-3">
        {services_list.map(({ title, desc }, i) => (
          <div key={i} className="service-card">
            <div>
              <Image
                src={getImage(title, "png")}
                alt={formatName(title)}
                fill
                sizes="(width: 160px)"
              />
            </div>
            <p>{title}</p>
            <span dangerouslySetInnerHTML={{ __html: desc }}></span>
          </div>
        ))}
      </section>
    </main>
  );
}
