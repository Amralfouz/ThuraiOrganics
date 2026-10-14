export const site = {
  phone: "070 609 0960",
  phoneHref: "+94706090960",
  whatsapp: "94706099960",
  whatsappDisplay: "070 609 9960",
  email: "thuraiorganics@gmail.com",
  location: "Sammanthurai, Eastern Province, Sri Lanka",
  tagline: "Fresh from Nature — Pure, Healthy, Organic.",
};
export const media = (path) =>
  `${import.meta.env.BASE_URL}${path.split("/").map(encodeURIComponent).join("/")}`;
export const enquiry = (name) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(name ? `Hello Thurai Organics! I am interested in ${name}. Could you please share the price, availability, and ordering details?` : "Hello Thurai Organics! I would like to enquire about your products and agricultural solutions.")}`;
export const mission = [
  "Provide fresh and healthy organic produce directly from farm to customer.",
  "Support sustainable and chemical-free farming practices.",
  "Supply high-quality organic compost and eco-friendly pesticides.",
  "Provide complete gardening and farm requirements under one trusted brand.",
  "Encourage home gardening and organic agriculture within local communities.",
  "Contribute toward a greener and healthier future.",
];
export const vision =
  "To become one of Sri Lanka’s leading organic agriculture and gardening solution providers by promoting sustainable farming, healthy lifestyles, and environmentally friendly agricultural practices.";
