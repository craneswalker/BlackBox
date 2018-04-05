<template>
  <div>
      <link  rel="stylesheet" :href="cdnApi">
      <Navigation></Navigation>
      <div class="themePicker d-flex justify-content-center">    
        <button @click=randomTheme>Change Theme</button>
      </div>
      <div id="app">
        <router-view :CurrentTasks="tasks" :taskToDone="done"/>
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
      done:[],
      apis:[],
      cdnApi:"https://bootswatch.com/4/lux/bootstrap.min.css",
    }
  },
  mounted() {
    this.loadTasks()
    this.loadDone()
    this.loadApi()
  },
  methods: {
    randomTheme() {
      cdnApi == function randomCDN(apis){
        math.random(apis.cssmin)
      } 
    },
    loadTasks() {
      fetch("../../static/tasks.json")
        .then(response => response.json())
        .then(tasks => this.tasks = tasks)
    },
    loadDone(){
      fetch("../../static/done.json")
        .then(response => response.json())
        .then(done => this.done = done)
    },
    loadApi(){
      fetch("https://bootswatch.com/api/4.json")
        .then(response => response.json())
        .then(apis => this.apis = apis)
    },
    taskToDone(task) {
    }
    }, 

}
</script>

<style>
</style>
