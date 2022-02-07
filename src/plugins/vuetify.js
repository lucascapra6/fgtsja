import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#4725B0",
        fieldColor: "#6468ff",
        fontColorDark: "#7B7D8A",
        fontColorLight: "#25253D",
        secondary: "#57178E",
        backgroundDark: "#34344C",
        background: "#f3f3f3",
        backgroundLight: "#FAFAFA",
        orange: "#F6A72A",
        red: "#DC3545",
        purpura: "#8937E8",
        greenPrimary: "#2A4747",
        greenDark: "#343E41",
        blue: "#2B7EC4",
        selled: "#2fcb1d"
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 480,
      sm: 800,
      md: 1264,
      es: 1366,
      lg: 1600,
      xl: 1904,
    },
  },
});
