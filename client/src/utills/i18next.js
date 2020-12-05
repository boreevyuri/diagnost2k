import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'cz',
    debug: true,
    useDataAttrOptions: true,
    whitelist: ['en', 'cz', 'ru'],
    backend: {
      loadPath: 'https://diagnost2k.cz/translation/{{lng}}.json',
    },
  });

// i18next
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'cz',
//     debug: true,
//     whitelist: ['en', 'cz', 'ru'],
//     useDataAttrOptions: true,
//     resources: {
//       cz: { translation: require('./translations/cz.json') },
//       en: { translation: require('./translations/en.json') },
//       ru: { translation: require('./translations/ru.json') },
//     },
//   });

export default i18next;
