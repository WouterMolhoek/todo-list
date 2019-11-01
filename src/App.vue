<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todos/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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
