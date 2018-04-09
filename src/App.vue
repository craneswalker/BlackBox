<template>
  <div>
      <link  rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
      <Navigation></Navigation> 
      <div class="themePicker d-flex justify-content-center">    
      </div>
      <div id="app">
        <router-view :tasks="tasks" :doneTasks="doneTasks"/>
      </div>
  </div>
</template> 

<script>
import Navigation from '@/components/Navigation'
import Done from '@/components/Done'
import Landing from '@/components/Landing'
import Input from '@/components/Input'
import ToDo from '@/components/ToDo'

export default {
  name: 'App',
  components: {
    Navigation,
    Landing,
    Input,
    Done,
    ToDo,
  },
  data() {
    return {
      tasks:[],
      doneTasks:[]
    }
  },
  mounted() {
    this.loadTasks()
    this.loadDoneTasks()
  },
  methods: {
    loadTasks() {
      fetch("../static/tasks.json")
        .then(response => response.json())
        .then(tasks => this.tasks = tasks)
    },
    loadDoneTasks(){
      fetch("../static/doneTasks.json")
        .then(response => response.json())
        .then(doneTasks => this.doneTasks = doneTasks)
    },
    }, 

}
</script>

<style>
</style>
