import type { AnchorHTMLAttributes } from "react";

/** External link attributes for WhatsApp (UX + security, no copy change). */
export const whatsappLinkProps: Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "rel" | "target"
> = {
  rel: "noopener noreferrer",
  target: "_blank",
};
