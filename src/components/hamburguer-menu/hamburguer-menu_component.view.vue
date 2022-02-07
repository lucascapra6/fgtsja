<template>
    <div id="navigation">
        <div class="align-center img-title">
            <img src="../../assets/logoWhite.png" alt="">
        </div>
        <ul class="menu-itens">
            <li>Simular</li>
            <li>Como contratar?</li>
            <li>Perguntas frequentes</li>
            <li>Quem pode pegar?</li>
            <li>Avaliação</li>
            <li>O que é?</li>
        </ul>
        <div class="social-media flex justify-center">
            <a href=""><img src="../../assets/instagram.png" alt=""></a>
            <a href=""><img src="../../assets/facebook.png" alt=""></a>
            <a href=""><img src="../../assets/twitter.png" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: {
        changeMenu: String
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
#navigation
{
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: #1F2D27;
    z-index: -2;
    display: grid;
    place-items: center;
    transition: .5s;
}

#navigation.active
{
    right: 0;
}


#navigation.menu-itens
{
    position: relative;
    display: flex;
    flex-direction: column;
}

#navigation.menu-itens li
{
    list-style: none;
}

#navigation.menu-itens li:before
{
    content: attr(data-text);
    position: absolute;
    top: 50%;
    right: 450px;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 8em;
    font-weight: 700;
    pointer-events: none;
    opacity: 0;
    letter-spacing: 20px;
    transition: 0.5s;
    white-space: nowrap;
}

#navigation.menu-itens li:hover:before
{
    opacity: 0.5;
    letter-spacing: 0px;
}

#navigation.menu-itens li a
{
    position: relative;
    display: inline-block;
    padding: 6px 15px;
    text-decoration: none;
    background:red;
    color: black;
    font-size: 2em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
}

#navigation.menu-itens:hover li a
{
    opacity: 0.4;
    background-blend-mode: darken;
    color: #aa0000;
}

#navigation.menu-itens li a:hover
{
    transform: scale(1.4);
    z-index: 1000;
    background: #aa0000;
    color: white;
    opacity: 1;
}

#navigation ul li a:before
{
    content: '';
    position: absolute;
    top: 0;
    left: -100px;
    width: 80px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8),transparent);
    transform: skew(35deg);
    transition: 0s;
}

#navigation ul li a:hover:before
{
    left: calc(100% + 100px);
    transition: 0.5s;
    transition-delay: 0.2s;
}

.menu {
    background: #1F2D27;
}
.flex {
    display: flex;
}
.align-center {
    text-align: center;
}
.align-end {
text-align: end;
}
.justify-center {
    justify-content: center;
}


/*/////////////////////////////*/

.img-title img {
    margin: 51px auto 0px auto;
}
.menu-itens {
    list-style: none;
    padding: 0 20px;
}
.menu-itens li {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    color: white;
    padding: 10px;
    margin: 10px auto;
    cursor: pointer;
}
.social-media img {
    padding: 10px;
}
</style>