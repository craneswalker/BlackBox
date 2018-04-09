<template>
  <div class="d-flex justify-content-center jumbotron">
    <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    <div class="card-body">
      <h4 class="card-title">What Next?</h4>

      <div v-if="tasks[0]">
        <p>(click the task to show details)</p>
        <h1 @click="descriptionToggle = !descriptionToggle" class="card-title"> 
          <i>{{tasks[0].title}}</i>
        </h1>
        <section :class='{hidden : descriptionToggle}'>
          <p>{{tasks[0].details}}</p>
        </section>
        <button class="btn btn-primary btn-sm" @click.prevent="taskToDone">Task Completed?</button>
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
export default {
  name: 'ToDo',
  props:[
      'tasks',
      'doneTasks'
  ],
  data() {
    return{
      descriptionToggle: true, 
      doneTask:{
        title: '',
        details: ''
      },
      task:{
        title: '',
        details: ''
      },
    }
    mounted:{
      console.log(doneTasks)
    }
  },
  methods:{
    taskToDone() {
      this.copyDoneTask(this.doneTask)
      this.doneTask = {
        title: '',
        details: ''
      },
      this.removeFromTasks(this.tasks)
    },

    copyDoneTask(doneTasks) {
      this.doneTasks.push(this.tasks[0])
    },

    removeFromTasks(tasks) {
      this.tasks.splice(0,1)
    }
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
