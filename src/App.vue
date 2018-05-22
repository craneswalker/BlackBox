<template>
  <div v-cloak>
      <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css">
      <Navigation></Navigation> 
      <transition name="fade">
        <router-view :ApiUrl="ApiUrl" />
      </transition>
  </div>
</template> 

<script>
import Navigation from '@/components/Navigation'
import Done from '@/components/Done'
import Landing from '@/components/Landing'
import Input from '@/components/Input'
import ToDo from '@/components/ToDo'
import Edit from '@/components/Edit'
import TaskAdded from '@/components/status/TaskAdded'
import TaskUpdated from '@/components/status/TaskUpdated'
import TaskFinished from '@/components/status/TaskFinished'



export default {
  name: 'App',
  components: {
    Navigation,
    Landing,
    Input,
    Done,
    ToDo,
    Edit,
    TaskAdded,
    TaskUpdated,
    TaskFinished
  },
  data() {
    return {
      ApiUrl: 'https://powerful-harbor-21413.herokuapp.com'
    }
  }
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

.faded {
  color:#444
}

</style>

