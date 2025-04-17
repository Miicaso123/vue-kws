// import { defineStore } from 'pinia';
// import axios from 'axios';

// interface WelcomeSection {
//   id: number;
//   title: string;
//   subtitle: string;
//   main_text: string;
//   img: string;
// }

// interface MainTwoState {
//   sections: WelcomeSection[];
//   loading: boolean;
//   error: string | null;
// }

// export const useMainTwoSectionStore = defineStore('mainTwoSection', {
//   state: (): MainTwoState => ({
//     sections: [],
//     loading: false,
//     error: null,
//   }),

//   actions: {
//     async fetchData() {
//       if (this.sections.length > 0) return; 
//       this.loading = true;
//       this.error = null;

//       try {
//         const res = await axios.get('https://pma.kws.kz/api/welcome-section');
//         const sections = res.data.sections;
//         if (Array.isArray(sections) && sections.length > 0) {
//           this.sections = sections;
//         } else {
//           this.error = 'Секции не найдены';
//         }
//       } catch (err) {
//         this.error = 'Ошибка при загрузке данных';
//         console.error('Ошибка при загрузке данных welcome-section:', err);
//       } finally {
//         this.loading = false;
//       }
//     },
//   },
// });
