<template>
  <div class="content">
    <TutorialModal :info="buttonActive" @link="clickLink"/>
    <div class="line"></div>
    <Home/>
    <div class="line"></div>
    <Tutorial @link="clickLink"/>
    <div class="line"></div>
    <Benefits/>
    <div class="line"></div>
    <Questions/>
    <div class="line"></div>
    <CarouselBox/>
    <InfoPlataforma/>
    <!-- <div class="line"></div>
    <Rating/> -->
  </div>
</template>

<script>
import Home from '../home/home_component.view';
import Tutorial from '../tutorial/tutorial_component.view';
import TutorialModal from '../tutorial-modal/tutorial-modal_component.view';
import Benefits from '../benefits/benefits_component.view';
import CarouselBox from '../carousel-box/carousel-box_component.view';
import Questions from '../questions/questions_component.view';
// import Rating from '../rating/rating_component.view';
import Modal from '../modal/modal_component.view';
import InfoPlataforma from '../info-plataforma/info-plataforma_component.view'


export default {
  name: 'Content',
  components: {
    Modal,
    Tutorial,
    TutorialModal,
    Home,
    Benefits,
    CarouselBox,
    Questions,
    InfoPlataforma,
    // Rating,
  },
  data() {
    return {
      buttonActive: false,
    };
  },
  methods: {
    clickLink() {
      if (this.buttonActive == true) {
        this.buttonActive = false;

      } else {
        this.buttonActive = true;
      }
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.content {
  padding-top: 95px;
  padding-bottom: 100px;
}

.line {
  margin: auto;
  max-width: 302px;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}
</style>