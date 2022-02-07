<template>
    <div class="buttonContent">
        <button @click="$emit('simulation')">Simule</button>
    </div>
</template>

<script>
    export default {
        name: 'ButtonSimule',
}
</script>

<style scoped>
button{
    width: 330px;
    height: 63px;
    background: #11BB77;
    box-shadow: 0px 3.15551px 31.5551px rgba(231, 234, 238, 0.07);
    border-radius: 16.8294px;
}

.buttonContent{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: rgba(4, 37, 25, 0.9);
    width: 100%;
    height: 100px;
    z-index: 2;
}
</style>
