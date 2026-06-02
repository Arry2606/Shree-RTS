import MaterialIcon from "./MaterialIcon";
import Reveal from "./Reveal";

const badges = [
  { icon: "eco", label: "Fresh Daily Meals" },
  { icon: "payments", label: "Affordable Pricing" },
  { icon: "home", label: "Home Style Taste" },
  { icon: "schedule", label: "Timely Delivery" },
];

export default function TrustBadges() {
  return (
    <section className="bg-surface-container-low py-stack-lg">
      <div className="mx-auto flex max-w-container-max flex-wrap justify-between gap-gutter px-5 md:px-margin-desktop">
        {badges.map((badge) => (
          <Reveal key={badge.label} className="flex items-center gap-3">
            <MaterialIcon
              name={badge.icon}
              className="text-4xl text-brand-accent"
            />
            <span className="font-label-md font-semibold text-on-surface">
              {badge.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
