const WHATSAPP_NUMBER = "5500000000000";
const WHATSAPP_FALLBACK = "https://wa.me/";

const buildWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);

  if (WHATSAPP_NUMBER === "5500000000000") {
    return `${WHATSAPP_FALLBACK}?text=${encodedMessage}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  const message =
    link.getAttribute("data-message") ||
    "Olá! Quero falar com a equipe da Ruiz Mídias.";

  link.setAttribute("href", buildWhatsAppLink(message));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
});

const year = document.getElementById("current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}
