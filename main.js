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

// Function to change text based on selected language
function updateLanguage(language) {
    document.querySelector('.headerblack h1').textContent = translations[language].title;
    document.querySelector('#homepage p').textContent = translations[language].description;
    document.querySelector('#overviewpage h2').textContent = translations[language].overviewHeader;
    document.querySelector('#overviewpage p').textContent = translations[language].overviewDescription;
    document.querySelector('#pricingpage h2').textContent = translations[language].pricingHeader;
    document.querySelector('#contactuspage h1').textContent = translations[language].contactUsHeader;
    document.querySelector('#concerns').placeholder = translations[language].contactUsMessage;
}

// Event listener for language selection
document.getElementById('languageSelector').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateLanguage(selectedLanguage);
});
