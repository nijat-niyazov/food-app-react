import { logo, logow } from "@/assets/images";

export const logoImage = localStorage.getItem("theme") === "light" ? logo : logow;
