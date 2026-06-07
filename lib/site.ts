export const siteConfig = {
  name: "Shree Ram Tiffin Services",
  shortName: "Shree Ram Tiffin",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  title:
    "Shree Ram Tiffin Services - Homemade Food Delivery in Gurugram",
  description:
    "Authentic, healthy, and hygienic homemade tiffin services in Gurugram. Serving Sectors 31-50 with fresh vegetarian meals for students and professionals.",
  keywords: [
    "Tiffin service Gurugram",
    "homemade food delivery",
    "veg tiffin",
    "healthy meals Gurugram",
    "Shree Ram Tiffin",
    "Sector 39 tiffin",
  ],
  locale: "en_IN",
  phonePrimary: "+919711467998",
  phoneSecondary: "+919999331665",
  whatsappUrl: "https://wa.me/919711467998",
  icons: {
    icon: "/favicon.ico", 
    apple: "/apple-touch-icon.png", 
  }
} as const;

export const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeb8jt6KSeAYhIzTe69oGVuUZBI_hPxMvtmrywtF6OcvSoW_s4zgPz543Wg3JvgMhYPXL4WpMuiczV4Jt-ZLP71XFs2QaryXVyHmhbCATF7YTNlomyEvF4g15KEYtA09kw_wAJYZPG8djcDxWpZLMGP6eORFX5pxt3qe72G_GnVxL13tMximY4WLd_aicU5hxGDBrro2a3yMqcSnrju0_Yn5kalVYqfnyE37luPgxM3WlTZHgKHLki7X4XXpNll0Ub8cp5dVd_GdAe";
