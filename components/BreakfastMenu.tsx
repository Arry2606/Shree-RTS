import Reveal from "./Reveal";

const breakfastRows: {
  left: { name: string; price: string };
  right: { name: string; price: string };
}[] = [
  {
    left: { name: "Tawa Aloo Pyaaj Parantha", price: "100" },
    right: { name: "Poori Sabzi", price: "160" },
  },
  {
    left: { name: "Tawa Aloo Parantha", price: "80" },
    right: { name: "Poha", price: "80" },
  },
  {
    left: { name: "Tawa Onion Parantha", price: "100" },
    right: { name: "Namkeen Jave", price: "100" },
  },
  {
    left: { name: "Tawa Plain Parantha", price: "30" },
    right: { name: "Plain Maggie", price: "50" },
  },
  {
    left: { name: "Tawa Gobhi Parantha", price: "100" },
    right: { name: "Veg Maggie", price: "70" },
  },
  {
    left: { name: "Tawa Paneer Paratha", price: "80" },
    right: { name: "Besan Ke Chille", price: "80" },
  },
  {
    left: { name: "Tawa Mooli Paratha", price: "100" },
    right: { name: "Potato Sandwich", price: "60" },
  },
  {
    left: { name: "Tawa Methi Parantha", price: "80" },
    right: { name: "Veg Grilled Sandwich", price: "80" },
  },
];

const mobileOnlyRows = [
  { name: "Poori Sabzi", price: "160" },
  { name: "Poha", price: "80" },
];

export default function BreakfastMenu() {
  return (
    <section className="bg-surface py-section-padding" id="breakfast">
      <div className="mx-auto max-w-container-max px-5 md:px-margin-desktop">
        <Reveal className="mb-stack-lg flex flex-col items-end justify-between gap-gutter md:flex-row">
          <div>
            <h2 className="mb-2 font-headline-md text-headline-md text-primary">
              Breakfast Menu
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Delicious ways to start your morning. High-protein and freshly
              prepared.
            </p>
          </div>
          <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
            <p className="font-label-sm font-bold text-primary">
              ⚠️ ORDER NOTICE
            </p>
            <p className="font-body-md text-primary">
              One day in advance or latest by 7:00 AM.
            </p>
          </div>
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border border-outline-variant bg-white shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-primary text-on-primary">
                <tr>
                  <th className="p-6 font-label-md">Item Name</th>
                  <th className="p-6 text-right font-label-md">Price (₹)</th>
                  <th className="hidden p-6 font-label-md md:table-cell">
                    Item Name
                  </th>
                  <th className="hidden p-6 text-right font-label-md md:table-cell">
                    Price (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {breakfastRows.map((row) => (
                  <tr
                    key={row.left.name}
                    className="transition-colors hover:bg-surface-container"
                  >
                    <td className="p-6 font-body-md">{row.left.name}</td>
                    <td className="p-6 text-right font-label-md">
                      {row.left.price}
                    </td>
                    <td className="hidden p-6 font-body-md md:table-cell">
                      {row.right.name}
                    </td>
                    <td className="hidden p-6 text-right font-label-md md:table-cell">
                      {row.right.price}
                    </td>
                  </tr>
                ))}
                {mobileOnlyRows.map((row) => (
                  <tr key={`mobile-${row.name}`} className="md:hidden">
                    <td className="p-6 font-body-md">{row.name}</td>
                    <td className="p-6 text-right font-label-md">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
