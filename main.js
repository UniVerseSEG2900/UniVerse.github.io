function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    sidebar.classList.toggle("active");
    menuIcon.classList.toggle("hidden");
}


// languages translations
const translations = {
    en: {
        title: "UniVerse",
        description: "Universal Translation Glasses",
        overviewHeader: "What are Universal Translation Glasses?",
        overviewDescription: "Overview of product + features",
        pricingHeader: "Pricing",
        contactUsHeader: "Contact Us",
        contactUsMessage: "How can we help you?"
    },
    fr: {
        title: "UniVerse",
        description: "Lunettes de traduction universelles",
        overviewHeader: "Qu'est-ce que les lunettes de traduction universelles?",
        overviewDescription: "Aperçu du produit + caractéristiques",
        pricingHeader: "Tarification",
        contactUsHeader: "Contactez-Nous",
        contactUsMessage: "Comment pouvons-nous vous aider?"
    },
    es: {
        title: "UniVerse",
        description: "Gafas de Traducción Universal",
        overviewHeader: "¿Qué son las gafas de traducción universal?",
        overviewDescription: "Descripción general del producto y características",
        pricingHeader: "Precios",
        contactUsHeader: "Contáctenos",
        contactUsMessage: "¿Cómo podemos ayudarle?"
    }
};

// Function to update the page based on the language that is selected
function updateLanguage(language) {
    document.querySelector('.headerblack h1').textContent = translations[language].title;
    document.querySelector('#homepage p').textContent = translations[language].description;
    document.querySelector('#overviewpage h2').textContent = translations[language].overviewHeader;
    document.querySelector('#overviewpage p').textContent = translations[language].overviewDescription;
    document.querySelector('#pricingpage h2').textContent = translations[language].pricingHeader;
    document.querySelector('#contactuspage h1').textContent = translations[language].contactUsHeader;
    document.getElementById('concerns').placeholder = translations[language].contactUsMessage;
}

// Event Listener that updates the page when a language is selected
document.getElementById('languageSelector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});