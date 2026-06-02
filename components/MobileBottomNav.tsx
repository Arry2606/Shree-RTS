import MaterialIcon from "./MaterialIcon";

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full overflow-hidden rounded-t-xl bg-surface shadow-lg shadow-[0_-4px_16px_rgba(74,44,42,0.08)] dark:bg-surface-container md:hidden">
      <a
        className="flex flex-1 items-center justify-center gap-2 py-4 font-label-md text-primary transition-all active:scale-[0.98] active:opacity-90"
        href="tel:9711467998"
      >
        <MaterialIcon name="call" />
        Call Now
      </a>
      <a
        className="flex flex-1 items-center justify-center gap-2 bg-tertiary py-4 font-label-md text-on-tertiary transition-all active:scale-[0.98] active:opacity-90"
        href="https://wa.me/919711467998"
      >
        <MaterialIcon name="chat" filled />
        WhatsApp
      </a>
    </div>
  );
}
