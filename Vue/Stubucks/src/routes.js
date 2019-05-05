import Home from './components/Home'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import Menu from './components/Menu'
import Rewards from './components/Rewards'
import Locations from './components/Locations'
import Join from './components/Join'
import Specials from './components/Specials'

export default [
    { path: '/', component: Home},
    { path: '/coffee', component: Coffee},
    { path: '/tea', component: Tea},
    { path: '/menu', component: Menu},
    { path: '/locations', component: Locations},
    { path: '/join', component: Join},
    { path: '/specials', component: Specials},
    { path: '/rewards', component: Rewards}
]