<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home page</router-link>
    <hr>
    <AddTodo @add-todo="addTodo"/>
    <hr>
    <TodoList
        v-if="todos.length"
        v-bind:todos="todos"
              @remove-todo="removeTodo"/>
    <p v-else>No todos!</p>
  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
export default {
  name: "Todos",
  components: {TodoList, AddTodo},
  data()
  {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          this.todos = json
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