<template>
  <v-app>
    <Loading v-show="status"/>
    <Modal/>
    <Navigation/>
    <Content/>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Loader />
    <Warning />
  </v-app>
</template>

<script>
import Loading from '$components/loading/loading_component.view';
import Navigation from '$components/navigation/navigation_component.view';
import Loader from '$components/loader/loader_component.view.vue';
import Modal from '$components/modal/modal_component.view.vue';
import Warning from '$components/warning/warning_component.view.vue';
import Content from '$components/content/content_component.view.vue';


export default {
  components: {
    Loading,
    Loader,
    Warning,
    Modal,
    Navigation,
    Content,
    },
  name: 'App',
  data(){
    return{
      status: '',
    }
  },
  created(){
    this.status= true;
    setTimeout(()=>{ this.status = false}, 700);
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Nunito Sans', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  transform: translateY(-2em);
  opacity: 0;
}
</style>
