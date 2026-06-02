import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

export default function TiffinPlans() {
  return (
    <section
      className="bg-surface-container-lowest py-section-padding"
      id="plans"
    >
      <div className="mx-auto max-w-container-max px-5 md:px-margin-desktop">
        <Reveal className="mb-stack-lg text-center">
          <h2 className="mb-4 font-headline-md text-headline-md text-primary">
            Our Tiffin Plans
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Simple, transparent pricing for daily nutrition. Salad is
            complimentary with every meal.
          </p>
        </Reveal>
        <div className="grid gap-gutter md:grid-cols-3">
          <Reveal className="flex flex-col rounded-2xl border border-outline-variant bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-stack-md">
              <span className="text-label-sm font-bold uppercase tracking-widest text-brand-accent">
                Essential
              </span>
              <h3 className="mt-2 font-headline-md text-2xl text-primary">
                Mini Plan
              </h3>
            </div>
            <div className="mb-stack-md flex items-baseline gap-1">
              <span className="text-4xl font-bold text-primary">₹100</span>
              <span className="font-label-md text-on-surface-variant">
                /per meal
              </span>
            </div>
            <ul className="mb-stack-lg flex-grow space-y-4">
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Dal
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Sabzi
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Roti x4
              </li>
              <li className="flex items-center gap-3 font-body-md italic text-on-surface-variant">
                <MaterialIcon name="add" className="text-sm text-brand-green" />
                Complimentary Salad
              </li>
            </ul>
            <div className="border-t border-outline-variant pt-6">
              <p className="mb-2 font-label-md text-on-surface">
                Monthly Subscription
              </p>
              <p className="text-2xl font-bold text-primary">
                ₹2700{" "}
                <span className="ml-2 text-sm font-normal line-through text-on-surface-variant">
                  ₹3000
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal className="relative flex flex-col rounded-2xl bg-primary p-8 shadow-xl md:-translate-y-4">
            <div className="absolute right-8 top-0 -translate-y-1/2 rounded-full bg-brand-accent px-4 py-1 text-label-sm font-bold uppercase text-primary">
              Popular
            </div>
            <div className="mb-stack-md">
              <span className="text-label-sm font-bold uppercase tracking-widest text-on-primary/60">
                Satisfying
              </span>
              <h3 className="mt-2 font-headline-md text-2xl text-on-primary">
                Large Plan
              </h3>
            </div>
            <div className="mb-stack-md flex items-baseline gap-1">
              <span className="text-4xl font-bold text-on-primary">₹120</span>
              <span className="font-label-md text-on-primary/70">/per meal</span>
            </div>
            <ul className="mb-stack-lg flex-grow space-y-4">
              <li className="flex items-center gap-3 font-body-md text-on-primary/90">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-accent"
                />
                Dal
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-primary/90">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-accent"
                />
                Sabzi
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-primary/90">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-accent"
                />
                Roti
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-primary/90">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-accent"
                />
                Chawal
              </li>
              <li className="flex items-center gap-3 font-body-md italic text-on-primary/90">
                <MaterialIcon name="add" className="text-sm text-brand-accent" />
                Complimentary Salad
              </li>
            </ul>
            <div className="border-t border-on-primary/20 pt-6">
              <p className="mb-2 font-label-md text-on-primary/80">
                Monthly Subscription
              </p>
              <p className="text-2xl font-bold text-on-primary">
                ₹3240{" "}
                <span className="ml-2 text-sm font-normal line-through text-on-primary/50">
                  ₹3600
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal className="flex flex-col rounded-2xl border border-outline-variant bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-stack-md">
              <span className="text-label-sm font-bold uppercase tracking-widest text-brand-accent">
                Premium
              </span>
              <h3 className="mt-2 font-headline-md text-2xl text-primary">
                Shahi Plan
              </h3>
            </div>
            <div className="mb-stack-md flex items-baseline gap-1">
              <span className="text-4xl font-bold text-primary">₹150</span>
              <span className="font-label-md text-on-surface-variant">
                /per meal
              </span>
            </div>
            <ul className="mb-stack-lg flex-grow space-y-4">
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Dal & Sabzi
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Chawal
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Roti
              </li>
              <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                <MaterialIcon
                  name="check_circle"
                  className="text-sm text-brand-green"
                />
                Sweets
              </li>
              <li className="flex items-center gap-3 font-body-md italic text-on-surface-variant">
                <MaterialIcon name="add" className="text-sm text-brand-green" />
                Complimentary Salad
              </li>
            </ul>
            <div className="border-t border-outline-variant pt-6">
              <p className="mb-2 font-label-md text-on-surface">
                Monthly Subscription
              </p>
              <p className="text-2xl font-bold text-primary">
                ₹4050{" "}
                <span className="ml-2 text-sm font-normal line-through text-on-surface-variant">
                  ₹4500
                </span>
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-stack-lg rounded-xl bg-surface-container p-6 text-center">
          <p className="font-body-md text-on-surface">
            <MaterialIcon
              name="info"
              className="mr-2 align-middle text-primary"
            />
            <strong>Monthly Package Policy:</strong> Enjoy flexibility with our
            monthly plan - consume 30 meals within a period of 40 days.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
