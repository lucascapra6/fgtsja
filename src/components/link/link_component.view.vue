<template>
    <div class="linkContent">
        <button @click="$emit('link')">Tutorial</button>
    </div>
</template>

<script>
    export default {
        name: 'Link',
}
</script>

<style scoped>
.linkContent{
    display: flex;
    justify-content: center;
}

button{
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    text-decoration-line: underline;
    margin-bottom: 30px;
    color: #11BB77;
}
</style>
