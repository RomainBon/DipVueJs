import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store
({
    state:
    {
        todos:[]

    },
    getters:
    {
      count(state)
      {
        return state.todos.lenght;
      },
      count(state)
      {
        return state.todos;
      }
    },
    mutations:
    {
      POPULATE_TODO(state , todos)
      {
        state.todos =todos;
      }
    },
    action:
    {
      getTodos()
      {
        api.get('/todos')
          .then((responce) => {
            context.commit('POPULATE_TODO',responce.data);
          }).catch((e) => { this.error.push(e); });
      }
    }
  })
