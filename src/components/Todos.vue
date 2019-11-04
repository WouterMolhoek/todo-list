<template>
  <div id="tile-container" class="tile is-ancestor">
    <div v-for="todo in allTodos" :key="todo.id">
      <div class="tile tile-card" v-bind:class="{ 'is-completed': todo.completed}">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification">
            <header class="tile-header">
              <p class="tile-title">{{todo.title}}</p>
            </header>
            <section>
              <p class="tile-content">{{todo.msg}}</p>
            </section>
            <footer class="tile-footer">
              <div class="field">
                <b-checkbox type="is-success" v-model="todo.completed">Completed</b-checkbox>
              </div>
              <b-dropdown aria-role="list">
                <b-icon class="button-icon" icon="dots-vertical" slot="trigger" size="is-small"></b-icon>
                <b-dropdown-item aria-role="listitem" @click="deleteTile(todo.id)">
                  <div class="media">
                    <b-icon class="media-left" icon="delete"></b-icon>
                    <div class="media-content">
                      <h3>Delete</h3>
                      <small>This todo will be removed</small>
                    </div>
                  </div>
                </b-dropdown-item>
              </b-dropdown>
            </footer>
          </article>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  data: function() {
    return {
      isLoading: true
    };
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo"]),
    deleteTile(id) {
      this.$store.dispatch("deleteTodo", id).then(() => {
        if (this.allTodos.length == 0) {
          this.notification();
        }
      });
    },
    notification() {
      this.$buefy.notification.open({
        duration: 10000,
        message: `You have no todos, make one!`,
        position: "is-bottom-left",
        type: "is-info",
        hasIcon: true
      });
    }
  },
  created() {
    this.$store.dispatch("getTodos", 10).then(() => {
      this.isLoading = false;
    });
  }
};
</script>

<style scoped>
#tile-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: columns;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 400px;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

article.tile.is-child.notification {
  padding: 22px !important;
}

div.notifaction-container {
  position: fixed !important;
  bottom: 10px;
  left: 10px;
  width: 300px !important;
}

div.tile.is-ancestor:last-child {
  margin-bottom: 0px !important;
}

div.field:not(:last-child) {
  margin-bottom: 0px !important;
}

.tile-card {
  width: 400px;
}

article.tile {
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff475;
}

.tile-title {
  font-size: 20px;
  font-weight: bold;
}

.tile-title::first-letter {
  text-transform: uppercase;
}

.tile-header {
  min-height: 32px;
  padding-bottom: 10px;
  width: 90%;
}

.is-completed {
  text-decoration: line-through;
}

.tile-footer {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.button-icon {
  cursor: pointer;
}

.empty-img {
  background-image: url(../assets/empty.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 250px;
}

.empty-img::after {
  content: "No tiles...";
  font-style: italic;
  position: absolute;
  margin-top: 20px;
}
</style>