<template>
    <header>
        <a href="#" class="logo">
            <v-img
            alt="Logo"
            src="../../assets/logoGreen.png"
            ></v-img>
        </a>
          <div id="menu-btn" @click="menuActive=!menuActive" :class={active:menuActive}>
            <div class="menu-btn_burguer"></div>
          </div>
      <div id="navigation" :class="{fade:menuActive}">
        <div class="img-title">
          <img src="../../assets/logoWhite.png" alt="">
        </div>
        <div class="menu-itens">
          <nav>
            <ul>
              <li><a href="#tutorial" @click="menuActive=false" >Como contratar</a></li>
              <li><a href="#benefits" @click="menuActive=false">Quem pode pegar?</a></li>
              <li><a href="#questions" @click="menuActive=false">Perguntas frequentes</a></li>
              <li><a href="#description" @click="menuActive=false">O que é?</a></li>
            </ul>
          </nav>
          <div class="social-media flex justify-center">
            <a href=""><img src="../../assets/instagram.png" alt=""></a>
            <a href=""><img src="../../assets/facebook.png" alt=""></a>
            <a href=""><img src="../../assets/twitter.png" alt=""></a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
        menuActive:false
    };
  },
  methods: {
      abrirSimulacao() {
        this.menuActive = false
        this.$emit('simulation')
      }
  }
}
</script>

<style scoped>
header{
    background: white;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 30px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
}

.logo{
    position: relative;
    width: 81px;
    height: 33px;
    z-index: 0;
}

#menu-btn {
  cursor: pointer;
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 5;
}
#navigation {
  background: #1F2D27;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: -100%;
  transition: all .5s ease-in-out;
}
#navigation.fade {
right: 0px;
}
.menu-itens {
  display: flex;
  flex-direction: column;
  color: white;
  margin: auto;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}
.menu-itens li {
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  color: #FFFFFF;
}
.menu-itens ul li:not(:first-child) {
 margin-top: 20px;
}

.social-media {
}.social-media a {
  margin: 80px 5px;
 }

.menu-itens li  {
  list-style: none;
}
.menu-itens li a {
  color: white;
  text-decoration: none;
}
.img-title {
  text-align: center;
  margin-top: 89px;
}
.menu-btn_burguer
{
  width: 30px;
  height: 5px;
  background: #1F2D27;
  border-radius: 5px;
  transition: all .5s ease-in-out;
  position: fixed;
  z-index: 6;
}
.menu-btn_burguer::before,
.menu-btn_burguer::after
{
    content: '';
    position: absolute;
    width: 30px;
    height: 5px;
    background: #1F2D27;
    border-radius: 5px;
    transition: all .5s ease-in-out;
}
.menu-btn_burguer::before
{
    transform: translateY(-10px);
}
.menu-btn_burguer::after
{
    transform: translateY(10px);
}


/* Animation*/
#menu-btn.active .menu-btn_burguer{
    transform: translateX(-50px);
    background: transparent;
}

#menu-btn.active .menu-btn_burguer::before{
    transform: rotate(45deg) translate(35px, -35px);
    background: white;
}

#menu-btn.active .menu-btn_burguer::after{
    transform: rotate(-45deg) translate(35px, 35px);
    background: white;
}
</style>