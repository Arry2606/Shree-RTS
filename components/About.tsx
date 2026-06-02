import Image from "next/image";
import Reveal from "./Reveal";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCM2-NGdtAX9I_qiqIKAVcaPE7Ie9aVTxZusl_1b5Ksqk4P9TzzZ2hyUs1elOnCpxRc97UfYh8GtYFexQtr1pvxRMDEzzjacMnQYT7ZmXzxXUt8p94ZB1a3QDg9ujyS49phIMG8lIoZkqaoK6j4QNWqw8CcJzbyAyxpIqSFUalHcEubSv7yqYqkleF9RhYFai_UrbPNGFRX6B5RRw4jryBujJWIQbxzKdqPw9MankiTS3IoHPm6BUhIZy1tcuanZPCfyz0koRM49FSM";

const ABOUT_ALT =
  "A clean, hygienic professional kitchen scene where a cook is preparing fresh vegetarian ingredients. The focus is on quality produce and meticulous preparation, emphasizing a healthy, wholesome approach to cooking. Soft, natural lighting highlights the freshness of green vegetables and stainless steel surfaces.";

export default function About() {
  return (
    <section className="bg-surface py-section-padding">
      <div className="mx-auto grid max-w-container-max items-center gap-gutter px-5 md:grid-cols-12 md:px-margin-desktop">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-32 w-32 border-l-4 border-t-4 border-brand-accent/30" />
            <Image
              className="relative z-10 rounded-xl shadow-2xl"
              src={ABOUT_IMAGE}
              alt={ABOUT_ALT}
              width={600}
              height={700}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -bottom-8 -right-8 hidden rounded-xl bg-primary p-8 text-on-primary md:block">
              <p className="text-display-lg font-bold leading-none">100%</p>
              <p className="font-label-sm uppercase tracking-widest">
                Pure Vegetarian
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7">
          <h2 className="mb-stack-md font-headline-md text-headline-md text-primary">
            Nourishing Gurugram with Love & Quality
          </h2>
          <p className="mb-stack-md font-body-md leading-relaxed text-on-surface-variant">
            At Shree Ram Tiffin Services, we believe that good food is the
            foundation of a good life. We cater specifically to the needs of busy
            professionals, hardworking students, and families in Gurugram who
            crave the comforting taste of home-cooked meals.
          </p>
          <p className="mb-stack-lg font-body-md leading-relaxed text-on-surface-variant">
            Our kitchen follows strict hygiene protocols, using only fresh,
            locally sourced ingredients to ensure every bite is as nutritious
            as it is delicious. We take pride in our &quot;No Preservatives&quot;
            policy, serving you food just like your mother would.
          </p>
          <div className="h-px w-24 bg-brand-accent" />
        </Reveal>
      </div>
    </section>
  );
}
