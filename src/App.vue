<template>
  <div v-cloak>
      <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
      <Navigation></Navigation> 
      <transition name="fade">
        <router-view :tasks="tasks" :doneTasks="doneTasks" :loadTasks="loadTasks" :loadDoneTasks="loadDoneTasks"/>
      </transition>
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
    ToDo
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
      fetch("https://cors.io/?https://powerful-harbor-21413.herokuapp.com/todo")
        .then(response => response.json())
        .then(response => this.tasks = response)
    },
    loadDoneTasks(){
      fetch("https://cors.io/?https://powerful-harbor-21413.herokuapp.com/done")
        .then(response => response.json())
        .then(response => this.doneTasks = response)
    },
  }, 

}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
