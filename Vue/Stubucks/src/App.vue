<template>
  <div id="app">
    <Navigation/>
    <!-- <Home/> -->
    <router-view/>
    
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Home from './components/Home'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import Menu from './components/Menu'
import Rewards from './components/Rewards'
import Locations from './components/Locations'
import Join from './components/Join'
import Specials from './components/Specials'

export default {
  name: 'App',
  components: {
    'Home': Home,
    'Navigation': Navigation,
    'Coffee': Coffee,
    'Tea': Tea,
    'Menu': Menu,
    'Rewards': Rewards,
    'Locations': Locations,
    'Specials': Specials,
    'Join': Join
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
