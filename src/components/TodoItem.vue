<template>
  <div
    class="p-3 text-light m-2"
    style="border-radius: 5px"
    :class="[todo.checked ? 'bg-success' : 'bg-primary']"
  >
    <input v-model="todo.checked" type="checkbox" 
    @click="$emit('update-checked', !todo.checked, todo.id)" />

    <i class="bi bi-star-fill ml-2" v-if="todo.isImportant"></i>
    {{ capitalizeTitle }}

    <span>(<timeago :datetime="todo.created_at" :auto-update="30"></timeago>)</span>

    <TodoAction
      @delete1="$emit('delete')"
      @edit="$emit('edit')"
      :checked="todo.checked"
    >
    </TodoAction>
  </div>
</template>


<script>
import TodoAction from "./TodoAction.vue";
import {format} from 'timeago.js'


export default {
  name: "TodoItem",
  props: ["todo"],
  components: {
    TodoAction,
  },
  data() {
    return {};
  },
  computed: {
    capitalizeTitle: function () {
      return this.todo.title
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");

    },

    formattedDate(){
      return format(this.todo.created_at)
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>