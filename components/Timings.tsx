import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

const serviceTimings = [
  {
    icon: "sunny",
    title: "Breakfast",
    order: "Order: By 7 AM / Day Prior",
    delivery: "Delivery: 8:00 AM - 10:00 AM",
  },
  {
    icon: "wb_sunny",
    title: "Lunch",
    order: "Order: 9:00 AM - 11:30 AM",
    delivery: "Delivery: 12:30 PM - 3:00 PM",
  },
  {
    icon: "nights_stay",
    title: "Dinner",
    order: "Order: 4:00 PM - 6:30 PM",
    delivery: "Delivery: 8:00 PM - 9:30 PM",
  },
];

const sectors = [
  "Sector 31",
  "Sector 32",
  "Sector 38",
  "Sector 39",
  "Sector 40",
  "Sector 46",
  "Sector 47",
  "Sector 48",
  "Sector 49",
  "Sector 50",
];

export default function Timings() {
  return (
    <section
      className="bg-surface-container-low py-section-padding"
      id="timings"
    >
      <div className="mx-auto max-w-container-max px-5 md:px-margin-desktop">
        <div className="grid gap-stack-lg md:grid-cols-2">
          <Reveal>
            <h2 className="mb-stack-md font-headline-md text-headline-md text-primary">
              Service Timings
            </h2>
            <div className="space-y-6">
              {serviceTimings.map((timing) => (
                <div key={timing.title} className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                    <MaterialIcon name={timing.icon} />
                  </div>
                  <div>
                    <p className="font-title-lg text-primary">{timing.title}</p>
                    <p className="font-body-md text-on-surface-variant">
                      {timing.order}
                    </p>
                    <p className="font-body-md font-semibold text-primary">
                      {timing.delivery}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="mb-stack-md font-headline-md text-headline-md text-primary">
              Delivery & Service Areas
            </h2>
            <div className="rounded-2xl border border-outline-variant bg-white p-8 shadow-sm">
              <div className="mb-stack-md flex items-center gap-4">
                <MaterialIcon
                  name="local_shipping"
                  className="text-3xl text-brand-accent"
                />
                <p className="font-body-md text-on-surface">
                  ₹8 per km beyond 2 km from our kitchen.
                </p>
              </div>
              <p className="mb-4 font-label-md font-bold uppercase tracking-wider text-primary">
                Primary Service Sectors
              </p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full bg-surface-container px-4 py-2 font-label-md"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
