<template>

    <div>
        <h1>{{ $store.state.counter}}</h1>
        <button @click="increament">Tambah 1</button>
    </div>

</template>
<script>
export default {
    methods: {
        increament(){
            this.$store.commit('incrementCounter');
        }
    },
}
</script>
