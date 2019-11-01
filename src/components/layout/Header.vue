<template>
    <header class="header">
        <h1>TodoList</h1>
        <select placeholder="10" @change="getTodos($event.target.value)">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Header",
  methods: {
    ...mapActions(['getTodos'])
  }
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    height: 64px;
    padding-left: 50px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

