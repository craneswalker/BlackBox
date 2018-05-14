<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">What Next?</h4>

      <div v-if="tasks.todos[0]">
        <p>(click the task to show details)</p>
        <h1 @click="descriptionToggle = !descriptionToggle" class="card-title"> 
          <i>{{tasks.todos[0].title}}</i>
        </h1>
        <section :class='{hidden : descriptionToggle}'>
          <p>{{tasks.todos[0].details}}</p>
        </section>
        <button class="btn btn-primary btn-sm" @click="taskToDone">Task Completed?</button>
      </div>
      <div v-else>
        <p>(You have no tasks to do right now!)</p>
        <router-link class="btn btn-primary btn-sm" to="/Input">Make A New Task</router-link>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
var moment = require('moment')
export default {
  name: 'ToDo',
  props:[
      'tasks',
      'doneTasks'
  ],
  data() {
    return{
      moment:moment,
      descriptionToggle: true, 
      doneTask:{
        title: '',
        details: '',
        date: ''
      },
      task:{
        title: '',
        details: '',
        date: ''
      },
    }
  },
  methods:{
    taskToDone(){
      fetch('https://powerful-harbor-21413.herokuapp.com/done', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.tasks.todos[0].title,
          details: this.tasks.todos[0].details,
        })
      })
      this.deleteTask()
      this.loadTasks()
      this.loadDoneTasks()
    },

    deleteTask(){
      fetch('https://powerful-harbor-21413.herokuapp.com/todo/1', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        }, 
      })
    }

    // taskToDone() {
    //   fetch("https://cors.io/?https://powerful-harbor-21413.herokuapp.com/done", {
    //     method: 'POST'
    //   })
    //   .then(function(response) {
    //     tasks.todos
    //   }).catch(function(err) {
    //     // Error :(
    //   });
    // }

    // taskToDone() {
    //   const currentDate = moment()
    //   const formattedDate = currentDate.format('dddd')
    //   console.log(formattedDate)
    //   this.copyDoneTask(this.doneTask)
    //   this.doneTask = {
    //     title: '',
    //     details: '',
    //     date: formattedDate
    //   },
    //   this.removeFromTasks(this.tasks)
    // },

    // copyDoneTask(doneTasks) {
    //   this.doneTasks.push(this.tasks[0])
    // },

    // removeFromTasks(tasks) {
    //   this.tasks.splice(0,1)
    // }
  }
}
</script>

<style scoped>
.card {
  min-height: 311px;
  min-width: 320px;
}
.btn {
  border: 2px solid white;
}
.hidden {
  display: none;
}
</style>
