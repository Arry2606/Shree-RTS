const coreValues = [
  "Fresh Daily",
  "100% Veg",
  "Hygienic Kitchen",
  "Home Style",
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-highest dark:bg-surface-container-lowest">
      <div className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-gutter px-5 py-section-padding md:flex-row md:px-margin-desktop">
        <div className="max-w-xs">
          <div className="mb-4 font-headline-md text-headline-md text-primary">
            Shree Ram Tiffin
          </div>
          <p className="font-body-md text-on-surface-variant">
            Providing the best home-style tiffin services in Gurugram since
            2024. Quality you can trust, taste you will love.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-label-md font-bold uppercase tracking-widest text-primary">
            Core Values
          </p>
          <ul className="flex flex-col gap-2">
            {coreValues.map((value) => (
              <li
                key={value}
                className="font-label-sm text-on-surface-variant"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-label-md font-bold uppercase tracking-widest text-primary">
            Connect
          </p>
          <a
            className="font-label-sm text-on-surface-variant transition-colors hover:text-primary"
            href="tel:9711467998"
          >
            Contact Support
          </a>
          <a
            className="font-label-sm text-on-surface-variant transition-colors hover:text-primary"
            href="#plans"
          >
            Subscription Plans
          </a>
          <p className="mt-4 font-label-sm text-on-surface-variant">
            © 2024 Shree Ram Tiffin Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
