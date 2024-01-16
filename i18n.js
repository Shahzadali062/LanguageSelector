// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './src/translations/en.json'; // Create this file
import esTranslation from './src/translations/es.json'; // Create this file

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', 
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language in case translation fails
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export default i18n;
