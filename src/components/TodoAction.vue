<template>
    <div class="mr-2 float-right" >
        <i class="bi bi-trash " v-on:click="$emit('delete1')"></i>
        <i class="bi bi-pencil-fill ml-2" v-on:click="$emit('edit')" v-if="!checked"></i>

    </div>


</template>

<script>


export default {
    name : 'TodoAction',
    props : ['checked'],
    methods: {
    },
}
</script>