<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>
    <TodoList v-bind:todos="todos"
    @remove-todo="removeTodo"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  components: {TodoList},
  data()
  {
    return {
      todos: [
        {id: 1, title: 'Купить молоко', completed: true},
        {id: 2, title: 'Купить мясо', completed: false},
        {id: 3, title: 'Купить сыр', completed: false},
      ]
    }
  },
  methods:{
    removeTodo(id)
    {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
