import Image from "next/image";
import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeb8jt6KSeAYhIzTe69oGVuUZBI_hPxMvtmrywtF6OcvSoW_s4zgPz543Wg3JvgMhYPXL4WpMuiczV4Jt-ZLP71XFs2QaryXVyHmhbCATF7YTNlomyEvF4g15KEYtA09kw_wAJYZPG8djcDxWpZLMGP6eORFX5pxt3qe72G_GnVxL13tMximY4WLd_aicU5hxGDBrro2a3yMqcSnrju0_Yn5kalVYqfnyE37luPgxM3WlTZHgKHLki7X4XXpNll0Ub8cp5dVd_GdAe";

const HERO_ALT =
  "A beautifully arranged premium Indian thali on a dark wooden table, featuring golden-brown paranthas, steaming dal in brass bowls, and fresh salad. The scene is bathed in warm, soft morning light, creating a welcoming and authentic home-style atmosphere with rich earthy tones and vibrant textures.";

export default function Hero() {
  return (
    <section className="relative flex min-h-[870px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover"
          src={HERO_IMAGE}
          alt={HERO_ALT}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-container-max gap-stack-lg px-5 md:grid-cols-2 md:px-margin-desktop">
        <Reveal>
          <h1 className="mb-stack-md font-display-lg text-display-lg-mobile leading-tight text-primary md:text-display-lg">
            Fresh Homemade Tiffins Delivered Across Gurugram
          </h1>
          <p className="mb-stack-lg max-w-lg font-body-lg text-body-lg text-on-surface-variant">
            Healthy, hygienic and affordable meals prepared daily with
            home-style taste. The warmth of a mother&apos;s kitchen, delivered to your doorstep.
          </p>
          <div className="flex flex-wrap gap-stack-md">
            <a
              className="flex items-center gap-2 rounded-full bg-brand-green px-8 py-4 font-label-md text-on-primary shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              href="https://wa.me/919711467998"
            >
              <MaterialIcon name="chat" filled />
              WhatsApp Us
            </a>
            <a
              className="flex items-center gap-2 rounded-full border-2 border-brand-accent px-8 py-4 font-label-md text-primary transition-all hover:bg-brand-accent/10"
              href="tel:9711467998"
            >
              <MaterialIcon name="call" />
              9711467998
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
