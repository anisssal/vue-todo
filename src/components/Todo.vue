<template>
  <div>
    <div class="m-2 alert alert-danger" v-if="isInputError">
      Task tidak boleh kosong
    </div>
    <input type="text" v-model="newTodo.title" />

    <button
      @click="addTodoItem"
      class="ml-3 btn btn-success"
      v-if="!isEditMode"
    >
      Tambah
    </button>
    <button @click="updateTodoItem" class="ml-3 btn btn-success" v-else>
      Update
    </button>

    <div class="form-check">
      <input
        v-model="newTodo.isImportant"
        type="checkbox"
        class="form-check-input"
      />
      Penting
    </div>
    <hr />

    <TodoItem
      v-for="(t, index) in todos"
      :key="index"
      :todo="t"
      v-on:delete="deleteTodoFromList(t, index)"
      @edit="editTodo(t, index)"
      @update-checked="updateChecked"
    >
    </TodoItem>
    <Loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      :loader="'dots'"
    />
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
import TodoService from "../service/TodoService";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Todo",
  components: {
    TodoItem,
    Loading,
  },
  data() {
    return {
      newTodo: {
        title: "",
        isImportant: false,
        checked: false,
      },
      // ====
      todos: [],
      isInputError: false,
      isLoading: false,
      isEditMode: false,
      editIndex: -1,
    };
  },
  async mounted() {
    try {
      const todoDocs = await TodoService.getAllTodos();

      todoDocs.forEach((todo) => {
        const item = todo.data();
        item.id = todo.id;
        this.todos.push(item);
      });
    } catch (e) {
      console.log("error ");
      console.log(e);
    }
  },
  methods: {
    updateChecked(isChecked, id){
        const todo = {
          checked : isChecked , 
          id : id 
        }
        TodoService.updateTodo(todo)
    },
    editTodo: function (item, index) {

      let stringItem = JSON.stringify(item)

      this.newTodo = JSON.parse(stringItem)

      this.isEditMode = true;
      this.editIndex = index;
    },
    updateTodoItem: async function () {
      if (this.newTodo.title == "") {
        this.isInputError = true;
        return;
      } 

      this.isLoading = true

      try {

        await TodoService.updateTodo(this.newTodo);
        this.todos[this.editIndex] = this.newTodo;

        this.isLoading = false 

      } catch (e) {

        this.isLoading = false 
        
        console.log(e);
      } 
        // reset input
        this.editIndex = -1;
        this.isEditMode = false;
        this.newTodo = {
          title: "",
          checked: false,
          isImportant: false,
        };
    },

    deleteTodoFromList(item, index) {
      const answer = confirm("Yakin ingin menghapus");
      if (!answer) {
        return;
      }
      // show loading
      this.isLoading = true;
      TodoService.deleteTodo(item.id)
        .then(() => {
          this.todos.splice(index, 1);
          this.isLoading = false;
        })
        .catch((e) => {
          console.log("error when deleting item");
          console.log(e);
          this.isLoading = false;
        });
    },
    addTodoItem: async function () {
      if (this.newTodo.title == "") {
        this.isInputError = true;
        return;
      }
      const todo = this.newTodo;
      
      todo.created_at = Date.now();


      this.isLoading = true;
      try {
        const docTodo = await TodoService.insertTodo(todo);

        // cek kalau berhasil insert ke firebase
        if (docTodo) {
          todo.id = docTodo.id;
          this.todos.push(todo);
        }
        this.isLoading = false;
      } catch (error) {
        console.log(e);
        console.log("error");
      }

      // reset input
      this.newTodo = {
        title: "",
        isImportant: false,
        checked: false,
      };
      // reset error input indicator
      this.isInputError = false;
    },
  },
};
</script>