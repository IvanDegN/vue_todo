<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home page</router-link>
    <hr>
    <AddTodo @add-todo="addTodo"/>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="todos.length"
        v-bind:todos="todos"
              @remove-todo="removeTodo"/>
    <p v-else>No todos!</p>
  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "Todos",
  components: {TodoList, AddTodo, Loader},
  data()
  {
    return {
      todos: [],
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          setTimeout( () => {
            this.todos = json
            this.loading = false
          }, 1000 )

        })
  },
  methods:{
    removeTodo(id)
    {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo){
      this.todos.push(todo);
    }
  }
}

</script>


<style scoped>

</style>