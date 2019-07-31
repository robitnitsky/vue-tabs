import VueRouter from 'vue-router'
import TabContent from '../components/TabContent'

const routes = [
  { path: '/tab/:id', component: TabContent, props: {default: true, text: 'sdfsdfsdf'} },
]

export default new VueRouter({
  routes
})