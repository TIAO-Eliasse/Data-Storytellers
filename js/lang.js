// lang.js

// Fonction pour afficher la langue choisie
function setLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    if (el.getAttribute("data-lang")) {
      el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
    }
  });

  localStorage.setItem("lang", lang);
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // Récupérer la langue sauvegardée ou mettre anglais par défaut
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  // Ajouter le switch pour tous les boutons data-lang-btn
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      const chosenLang = btn.getAttribute("data-lang-btn");
      setLanguage(chosenLang);
    });
  });
});
