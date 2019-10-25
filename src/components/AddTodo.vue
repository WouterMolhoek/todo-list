<template>
    <form id="add-todo" @submit="addTodo">
        <section>
            <b-field label="Type a ToDo">
                <b-input v-model="title" placeholder="No label" rounded></b-input>
            </b-field>
        </section>
        <button class="button is-medium is-success" @click="success">Add ToDo</button>
    </form>
</template>

<script>

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.$emit('add-todo', newTodo)
            this.title = '';
        },
        success() {
            this.$buefy.toast.open({
                duration: 2000,
                message: 'Made a new TODO!',
                type: 'is-success'
            })
        }
    }
}

</script>

<style scoped>
  #add-todo {
      max-width: 700px;
      height: 100px;
      margin: 20px auto 0px auto;
      border-radius: 3px;
      box-shadow: 5px 5px 0px rgba(0,0,0,0.15);
      display: flex;
      background-color: #ffffff;
      padding: 25px;
      justify-content: space-between;
      align-items: center;
  }
</style>