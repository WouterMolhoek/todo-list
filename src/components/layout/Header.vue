<template>
  <header class="header">
    <h1>TodoList</h1>
    <b-select placeholder="10" v-model="option">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </b-select>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    option: {
      get() {},
      set(value) {
        this.getTodos(value);
      }
    }
  },
  methods: {...mapActions(["getTodos"])}
};
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

