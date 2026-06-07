import Image from "next/image";
import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

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
            src="/get_in_touch.png"
            alt="A tiffin image"
            width={800}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
