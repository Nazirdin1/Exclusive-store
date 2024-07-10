
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from "./locales/ru/ru.json";
import en from "./locales/en/en.json"
import ky from "./locales/ky/ky.json"


i18n
.use(initReactI18next)
.init({
    resources: {
        ru: {
            translation: ru
        },
        en: {
            translation: en 
        },
        ky: {
            translation: ky
        },
    },
    lng:'en',
    fallbackLng:'ru',
})

export default i18n