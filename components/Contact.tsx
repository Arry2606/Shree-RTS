import Image from "next/image";
import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

const CONTACT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFMZnjLCh6E8yq1kpIcJ2K5AwMM0yWQT5zyXu31qiC2mV0yrkjuBMPrVkvvPn-DRXWi9Y3ACmwcS70ItTkI3T7uarUvc1I55fSr7HJiR-HvzNGapbPBAzUjki487X_8ofpUGCx9ccm5geanPRz-Y9KZx7A6G4jdoN6k-C3TTAdnGH9g90kFV32iDDQEC9ai9S_kJHjH2Al5JYOiCiXVPi_m7KVkVTwicKrQe5cR6bA-EPQyFxoiT5mMtYA9oE_Op-OfCHQrzssxvk";

const CONTACT_ALT =
  "An artistic high-angle aerial view of a clean, organized residential layout in Gurugram, India, featuring lush green areas and structured housing. The lighting is bright and sunny, representing a clear day in the city. The overall aesthetic is clean, professional, and reliable, reinforcing the local nature of the business.";

export default function Contact() {
  return (
    <section className="bg-surface py-section-padding" id="contact">
      <div className="mx-auto grid max-w-container-max gap-stack-lg px-5 md:grid-cols-2 md:px-margin-desktop">
        <Reveal>
          <h2 className="mb-stack-md font-headline-md text-headline-md text-primary">
            Get in Touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MaterialIcon
                name="location_on"
                className="text-brand-accent"
              />
              <div>
                <p className="font-title-lg text-primary">Our Kitchen</p>
                <address className="not-italic font-body-md text-on-surface-variant">
                  316 F, Housing Board Colony,
                  <br />
                  Sector 39, Gurugram
                </address>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MaterialIcon name="call" className="text-brand-accent" />
              <div>
                <p className="font-title-lg text-primary">Call Us Directly</p>
                <a
                  className="block font-body-md text-on-surface-variant transition-colors hover:text-primary"
                  href="tel:9711467998"
                >
                  9711467998
                </a>
                <a
                  className="block font-body-md text-on-surface-variant transition-colors hover:text-primary"
                  href="tel:9999331665"
                >
                  9999331665
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MaterialIcon name="chat" className="text-brand-accent" />
              <div>
                <p className="font-title-lg text-primary">WhatsApp Ordering</p>
                <a
                  className="font-body-md font-semibold text-brand-green"
                  href="https://wa.me/919711467998"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="h-[400px] overflow-hidden rounded-2xl border border-outline-variant shadow-lg">
          <Image
            className="h-full w-full object-cover"
            src={CONTACT_IMAGE}
            alt={CONTACT_ALT}
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
