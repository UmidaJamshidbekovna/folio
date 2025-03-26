
import { createMemoryHistory, createRouter } from 'vue-router'

import About from '@/components/About.vue'
import Jobs from '@/components/Jobs.vue'
import Services from '@/components/Services.vue'
import Work from '@/components/Work.vue'

const routes = [
  { path: '/', component: About },
  { path: '/jobs', component: Jobs },
  { path: '/services', component: Services },
  { path: '/work', component: Work },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router