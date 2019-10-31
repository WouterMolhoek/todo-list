<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from  'axios';

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo 
  },
  data() {
    return {
      todos: [],
      isLoading: true,
      isFullPage: true
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);

      // If all the tiles have been removed, change background to an image
      if (this.todos.length == 0) {
        const container = document.getElementById('tile-container');
        container.classList.add('empty-img');
      }
    },
    addTodo(newTodo) {

      // If the background has been changed to an image, change it back
      if (this.todos.length + 1 != 0) {
        const container = document.getElementById('tile-container');
        container.classList.remove('empty-img');
      }

      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
        .then(res => this.todos.unshift(res.data))
        .catch(err => console.log(err));

    }
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .then(res => {
          this.todos = res.data
          this.isLoading = false

          // If all the tiles have been removed, change background to an image
          if (this.todos.length == 0) {
            const container = document.getElementById('tile-container');
            container.classList.add('empty-img');
          }
      })
      .catch(err => console.log(err));
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background-color: lavender;
    position: absolute;
    width: 100%;
    min-height: 100%;
  }

  .empty-img {
    background-image: url(assets/empty.svg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 250px;
  }

  .empty-img::after {
    content: 'No tiles...';
    font-style: italic;
    position: absolute;
    margin-top: 20px;
  }

</style>
