"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { formatName, getImage } from "@/lib/utlis";
import { our_team_list } from "@/lib/lists";
import "swiper/css";
import "swiper/css/pagination";

export default function OurTeam() {
  return (
    <main className="py-6 md:py-8">
      <div className="page-heading">
        <p>Our Team</p>
        <span>Take a look of our team members</span>
      </div>
      <section className="page-body">
        <Swiper
          loop={true}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 5,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 80 },
          }}
          modules={[Autoplay, Pagination]}>
          {our_team_list.map(({ name, role, job_desc }, i) => (
            <SwiperSlide key={i}>
              <div>
                <div className="w-full h-52 relative">
                  <Image
                    src={getImage(name, "jpg")}
                    priority
                    alt={`a-photo-of-${formatName(name)}`}
                    fill
                    sizes="(height: 208px)"
                  />
                </div>
                <div className="grid gap-2 p-4">
                  <p className="text-lg font-medium">{name}</p>
                  <p className="text-sm">{role}</p>
                  <p>{job_desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
