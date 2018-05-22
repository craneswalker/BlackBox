<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title text-center faded">What Next?</h4>

      <div v-if="tasks.todos[0]" class="text-center">
        <p class="faded">(click the task to show details)</p>
        <h1 @click="descriptionToggle = !descriptionToggle" class="card-title"> 
          <i>{{tasks.todos[0].title}}</i>
        </h1>
        <section :class='{hidden : descriptionToggle}'>
          <p>{{tasks.todos[0].details}}</p>
        </section>
        <button class="btn btn-primary btn-md" @click.prevent="taskToDone">Task Completed?</button>
        <router-link class="btn btn-primary btn-sm faded" to="/Input">Create Another Task</router-link>
        <button class="btn btn-primary btn-sm faded" @click="showAllTasks = !showAllTasks">Edit Tasks</button>        
        <section :class='{hidden : showAllTasks}'>
          <Edit :tasks ="tasks" :ApiUrl ="ApiUrl"/>
        </section>
      </div>
      <div v-else class="text-center">
        <p>(You have no tasks to do right now!)</p>
        <router-link class="btn btn-primary btn-md" to="/Input">Make A New Task</router-link>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import Edit from '@/components/Edit'

var moment = require('moment')
export default {
  name: 'ToDo',
  components:{
    Edit,
    },
  data() {
    return{
      descriptionToggle: true, 
      showAllTasks: true,
      tasks: [],
      task:{
        id: '',
        title: '',
        details: '',
        date: ''
      },
    }
  },
  
  props: ['ApiUrl'],  

  mounted() {
    this.loadTasks()
  }, 
  
  methods: {
    loadTasks() {
      fetch(this.ApiUrl + '/todo')
        .then(response => response.json())
        .then(response => {
        this.tasks = response
      })
    },

    taskToDone(){
      fetch(this.ApiUrl + '/done', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.tasks.todos[0].title,
          details: this.tasks.todos[0].details,
          date: moment().format("dddd, MMMM Do")
        })
      })
      this.deleteTask()
    },

    deleteTask(){
      let currentId = this.tasks.todos[0].id
      fetch(this.ApiUrl + `/todo/${currentId}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        }, 
      })
      this.reRoute()
    },

    reRoute(){
      this.$router.push('TaskFinished')
    }
  }
}
</script>

<style scoped>
.card {
  min-height: 311px;
  min-width: 320px;
}
.btn-md {
  border: 2px solid #444;
  margin-bottom: 10px
}
.hidden {
  display: none;
}
.faded {
  color:#444
}
</style>
