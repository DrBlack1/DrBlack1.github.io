<template>
  <header>
    <div id="top-bar">
      <p id="offer">Free shipping on orders of £30+ | Use Code STULOVE > offer details</p>
      <p id="find-nearest">Find nearest store</p>
    </div>
    <div id="logo-container">
      <img id="logo-img" v-bind:src="logoImg">
    </div>
    <nav>
      
      <router-link class="links" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() { 
  return {
    logoImg: require('./Images/stubucks-logo.png'),
  // Navigation links
    links: [ 
      { 
         id: 0,
         text: 'Home', 
         page: '/home' 
      },
      { 
         id: 1,
         text: 'Coffee', 
         page: '/coffee' 
      },
      { 
         id: 2,
         text: 'Tea', 
         page: '/tea' 
      },
      { 
         id: 3,
         text: 'Menu', 
         page: '/menu' 
      },
      { 
         id: 4,
         text: 'Rewards', 
         page: '/rewards' 
      },
      { 
         id: 5,
         text: 'Want to join our team?', 
         page: '/join' 
      },
      { 
         id: 6,
         text: 'Locations', 
         page: '/locations' 
      },
      { 
         id: 7,
         text: 'Specials', 
         page: '/specials' 
      }
    ],
    }
}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700');

header {
    background-color: #0e141d;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index:200;
    top: 0;
}

#top-bar {
  text-align: center;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}

#offer {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  margin-right: 20%;
}

#find-nearest {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 0;
  /* margin-right: 3%; */
  background-color: #067655;
  color: white;
  padding-top: 1%;
  padding-bottom: 0.5%;
  padding-left: 3%;
  padding-right: 2%;
}

#logo-container {
  align-self: flex-start;
  margin-left: 3%;
  /* margin-top: 1%; */
}

#logo-img {
  position: absolute;
  width: 10%;
}

.links {
  padding-right: 3%;
}

nav {
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
  text-align: center;
}

nav a {
  padding-top: 2%;
  padding-bottom: 2%;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 768px) {
  
  header {
    width: 100vw;
  }

  #top-bar {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  }

  #offer {
    display: none;
  }

  #find-nearest {
    display: none;
  }

  .links {
    display: none;
  }

  nav {
    margin-top: 50px;
    width: 100vw;
  }

  #logo-container {
  margin-top: 10px;
  }

}

</style>