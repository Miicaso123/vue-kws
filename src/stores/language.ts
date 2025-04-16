import { defineStore } from 'pinia';

interface Translations {
  header: {
    about: string;
    services: string;
    brands: string;
    events: string;
    contacts: string;
  };
  hero: {
    title: string;
  };
}

const translations: Record<'Ru' | 'Kz', Translations> = {
  Ru: {
    header: {
      about: 'О нас',
      services: 'Услуги',
      brands: 'Бренды',
      events: 'События',
      contacts: 'Контакты',
    },
    hero: { 
      title: 'КОМПАНИЯ KAZAKHSTAN WINES & SPIRITS - ВЕДУЩИЙ ИМПОРТЕР ПРЕМИАЛЬНЫХ ВИН И СПИРТНЫХ НАПИТКОВ НА ТЕРРИТОРИИ КАЗАХСТАНА.',
    },
  },
  Kz: {
    header: {
      about: 'Біз туралы',
      services: 'Қызметтер',
      brands: 'Брендтер',
      events: 'Іс-шаралар',
      contacts: 'Байланыстар',
    },
    hero: {
      title: 'KAZAKHSTAN WINES & SPIRITS КОМПАНИЯСЫ – ҚАЗАҚСТАНДАҒЫ ПРЕМИАЛЬДЫ ШАРАПТАР МЕН ІШІМДІКТЕРДІҢ ЖЕТЕКШІ ИМПОРТТАУШЫСЫ.',
    },
  },
};

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'Ru' as 'Ru' | 'Kz',
  }),
  getters: {
    translations(state): Translations {
      return translations[state.currentLanguage];
    },
  },
  actions: {
    setLanguage(lang: 'Ru' | 'Kz') {
      this.currentLanguage = lang;
    },
  },
});
