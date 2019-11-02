<template>
    <form id="add-todo" @submit="addNewTodo">
        <section>
            <b-field label="Type a ToDo">
                <b-input v-model="title" placeholder="New Todo" required rounded></b-input>
            </b-field>
        </section>
        <footer>
            <b-button type="is-text" style="text-decoration: none;" native-type="submit">Add ToDo</b-button>
        </footer>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        addNewTodo(e) {
            e.preventDefault();
            const newTodo = {
                title: this.title,
                completed: false
            }
            this.addTodo(newTodo);
            this.title = '';
            this.success()
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
    max-width: 600px;
    min-height: 130px;
    margin: 50px auto 0px auto;
    border-radius: 3px;
    box-shadow: 5px 5px 0px rgba(0,0,0,0.15);
    background-color: #ffffff;
    padding: 25px;
  }

  #add-todo footer {
    justify-content: flex-end;
    align-items: center;
    display: flex;
    height: 54px;
    margin-top: 10px;
  }
</style>