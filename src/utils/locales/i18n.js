import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next'
import XHR from "i18next-xhr-backend";

import translationEn from "./en/translation.json";
import translationCh from "./ch/translation.json";

i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available
    keySeparator: ".", // we do not use keys in form messages.welcome
    interpolation: {
        formatSeparator: ",",
        escapeValue: false // react already safes from xss
    },
    resources: {
        en: translationEn,
        ch: translationCh
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
        // withRef: false,
        // wait: false
    }
});

export default i18n;