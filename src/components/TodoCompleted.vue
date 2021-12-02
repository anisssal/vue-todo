<template>
    <div>
        <h1>Todo Completed</h1>

    <TodoItem
        v-for="(t, index) in todos"
      :key="index"
      :todo="t"
    >
    </TodoItem>
    </div>
</template>

<script>

import TodoItem from './TodoItem'
import TodoService from '../service/TodoService'

export default {
    data() {
        return {
            todos : []
        }
    },
    components : {
        TodoItem
    },
  async mounted() {
      try{
        const completedTodo = await TodoService.getCompletedTodos()
        completedTodo.forEach(todo =>{
            this.todos.push(todo.data())
        })
      }catch(e){

      }


    },

}
</script>