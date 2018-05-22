import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Input from '@/components/Input';
import Done from '@/components/Done';
import ToDo from '@/components/ToDo';
import TaskAdded from '@/components/status/TaskAdded';
import TaskUpdated from '@/components/status/TaskUpdated';
import TaskFinished from '@/components/status/TaskFinished'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input,
      props: true,
    },
    {
      path: '/Done',
      name: 'Done',
      component: Done,
      props: true,
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: ToDo,
      props: true,
    },
    {
      path: '/TaskAdded',
      name: 'TaskAdded',
      component: TaskAdded,
      props: true,
    },
    {
      path: '/TaskUpdated',
      name: 'TaskUpdated',
      component: TaskUpdated,
      props: true,
    },
    {
      path: '/TaskFinished',
      name: 'TaskFinished',
      component: TaskFinished,
      props: true,
    },
  ],
});
