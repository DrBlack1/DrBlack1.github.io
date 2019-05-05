<template>
  <div class="home">
    <section id="hero">
      <div id="hero-text">
      <h1><mark>Love</mark> your Stu</h1>
      <p>Look at our range and choose the Stu that suits you.</p>
      <button id="choose-coffee">Choose your coffee</button>
      </div>
    </section>

    <section id="something-new">
      <h1>Try something <mark>new</mark>?</h1>
    </section>
    <section id="new-product">
      <div id="new-product-col1">
        <img id="new-product-img" src="./Images/StubrewIcedCoffee.png">
      </div>
      <div id="new-product-col2">
        <h1>The new <mark>StuBrew</mark></h1>
        <p>A delicious new <mark>nitro brew</mark> developed carefully on the darkside of the moon, instilled with the freshness of Stu himself.</p>
      </div>
    </section>
    <section id="stu-shop-title">
      <h1>The Stu <mark id="shop-mark">Shop</mark></h1>
    </section>

    <section id="stu-shop">
      <div id="shop-col1">
        <img id="shop-coffee-img" src="./Images/buyCoffee-crop.jpg">
        <h1>Shop Coffee</h1>
        <hr id="desktop-hr-col1">
        <p>Hand-roasted coffee, delivered fresh for ultimate flavour.</p>
        <hr id="mobile-hr-col1">
      </div>
      <div id="shop-col2">
        <img id="shop-tea-img" src="./Images/buyTea-crop.jpg">
        <h1>Shop Tea</h1>
        <hr id="desktop-hr-col2">
        <p>Our finest selection of premium whole leaf tea.</p>
        <hr id="mobile-hr-col2">
      </div>
      <div id="shop-col3">
        <img id="shop-equip-img" src="./Images/buyEquipment.png">
        <h1>Shop Equipment</h1>
        <hr id="desktop-hr-col3">
        <p>Brewers and presses for making the perfect Stu at home.</p>
        <hr id="mobile-hr-col3">
      </div>
    </section>
    <footer>
      <nav id="footer-nav">
        <div id="nav-col1">
        <ul id="help-links">
        <li><h1>Help</h1></li>
          <li>My account</li>
          <li>Stu Cards</li>
          <li>Stu Rewards</li>
          <li>Shipping & Returns</li>
          <li>Current Offers</li>
          <li>Contact Us</li>
        </ul>
        <ul id="company-links">
        <li><h1>Company Info</h1></li>
          <li>Code Ethics</li>
          <li>Responsible Sourcing</li>
          <li>Supply Chain</li>
          <li>Limited Partners</li>
          <li>Office Coffee</li>
        </ul>
        <ul id="about-links">
          <li><h1>About Us</h1><li>
          <li>Join Stu</li>
          <li>Social Responsibility</li>
          <li>Our People</li>
          <li>Newsroom</li>
        </ul>
        </div>
        <div id="nav-col2">
          <h1>Share</h1>
        <ul id="social-links">
          <li><a href="https://facebook.com"><img src="./Images/icon-facebook.png"></a></li>
          <li><a href="https://instagram.com"><img src="./Images/icon-instagram.png"></a></li>
          <li><a href="https://linkedin.com"><img src="./Images/icon-linkedin.png"></a></li>
          <li><a href="https://twitter.com"><img src="./Images/icon-twitter.png"></a></li>
          <li><a href="https://pinterest.com"><img src="./Images/icon-pinterest.png"></a></li>
        </ul>
        </div>
      </nav>
        <section id="site-info">
          <div id="site-info-col1">
            <p>Starbucks Chester</p>
            <p>Cheshire</p>
            <p>Since 2019</p>
          </div>
          <div id="site-info-col2">
            <p>Stubucks Coffee | Privacy Policy | Terms of Service</p>
            <p>Stubucks is not a registered trademark, infact it was just something Stuart made Dan make even though he didn’t have any sparetime. 
            But he likes designing stuff so that’s OK.</p>
          </div>
        </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,700');


h1 {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

/* HERO SECTION */
#hero {
  margin: 0;
  height: 100vh;
  width: 100vw;
  background-image: url('./Images/StubucksHero.jpg'); 
  background-size: cover;
  background-repeat: no-repeat;
}

#hero-text {
  position: absolute;
  margin-top: 40vh;
  margin-left: 10vw;
  /* text-align: left; */
}

#hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 4.5rem;
  color: white;
  margin-bottom: 1vh;
}

#hero p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: white;
  margin-top: 0;
}

mark {
  color: #067655;
  background: none;
}

/* CHOOSE COFFEE BUTTON */

#choose-coffee {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  color: white;
  background-color: black;
  padding: 1.5vh;
  border-radius: 5px;
  border: none;
}

#choose-coffee:hover {
  cursor: pointer;
}

/* NEW PRODUCT SECTION */

#something-new {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
}

#new-product {
  background-color: #0e141d;
  display: flex;
  flex-direction: row;
  width: 100vw;
}

#new-product-col1 {
  margin-left: 10%;
  margin-top: 9%;
  margin-bottom: 7%;
  width: 50vw;
}

#new-product-col2 {
  margin-right: 10%;
  margin-top: 9%;
  margin-bottom: 7%;
  width: 50vw;
}

#new-product-img {
  width: 30vw;
}

#new-product h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  text-align: right;
  margin-top: 30%;
  color: white;
}

#new-product p {
  font-family: 'Montserrat', sans-serif;
  text-align: right;
  font-size: 2rem;
  color: white;
}

/* ----- SHOP SECTION ----- */

#stu-shop-title {
  background-color: #2b706f;
  padding-top: 3vh;
  padding-bottom: 3vh;
}

/* #stu-shop-title h1 {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 2.25rem;
  text-align: center;
} */

#shop-mark {
  color: #0e141d
}

#stu-shop {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10%;
  margin-bottom: 10%;
  text-align: center;
}

#stu-shop h1 {
  margin-top: 5%;
  margin-bottom: 5%;
}

#desktop-hr-col1, #desktop-hr-col2, #desktop-hr-col3 {
  border: solid black 0.75px;
  width: 15vw;
}

#mobile-hr-col1, #mobile-hr-col2, #mobile-hr-col3 {
  display: none;
}

#shop-coffee-img {
  border-radius: 50%;
  width: 20vw;

}

#shop-tea-img {
  border-radius: 50%;
  width: 20vw;
}

#shop-equip-img {
  width: 20vw;
}


#stu-shop h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.25rem;
}

#stu-shop p {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 1rem;
}

/* FOOTER */

footer {
  background-color: #e7e7e7;
}

#footer-nav {
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  flex-wrap: wrap;
  width: 100vw;
  height: 60vh;
  align-content: center;
}

#footer-nav ul  {
  font-family: 'Montserrat', sans-serif;
  list-style-type: none;
  margin: 0;
}

#nav-col1 {
  width: 30vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}

#nav-col1 ul { 
  padding-bottom: 5%;
  margin-right: 10%;
}

#nav-col1 ul li { 
  font-weight: 200;
  padding-bottom: 5%;
}


#nav-col2 {
  margin-left: 20%;
  width: 50vw; 
}

#social-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  
}

#social-links img {
  padding-top: 20px;
  padding-right: 15px;
  width: 50px;
}

#site-info {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  color: white;
  background-color: #0e141d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3%;
  padding-bottom: 3%;
}

#site-info p {
  margin: 0;
}

#site-info-col1 {
  margin-left: 12%;
  width: 40vw;
}

#site-info-col2 {
  text-align: right;
  width: 60vw;
  margin-right: 12%;

}



@media screen and (max-width: 600px) {

  #site-info {
    padding-top: 10%;
    margin-top: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #nav-col2 {
    margin-left: 8%;
    width: 90vw;
    margin-bottom: 10%;
  }

  #nav-col1 {
    width: 90vw;
  }

  #footer-nav {

    margin-left: 3%;
    width: 90vw;
  }

  footer {
    padding-top: 30%;
  }

  #stu-shop p {
  width: 60vw;
  }

  #stu-shop h1 {
  width: 70vw;
  margin-top: 1%;
  margin-bottom: 1%;
  }
  
  #desktop-hr-col1, #desktop-hr-col2, #desktop-hr-col3 {
  display: none;
  }
  
  #shop-coffee-img, #shop-tea-img, #shop-equip-img {
  width: 20vw;
  align-self: flex-start;
  position: absolute;
  margin-left: 70%;
  }

  #shop-col1, #shop-col2, #shop-col3 {
    width: 90vw;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    align-items: flex-start;
  }

  #stu-shop {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }

  #stu-shop-title {
    text-align: center;
    font-size: 1.5rem;
  }
  
  #new-product p {
    text-align: center;
    font-size: 1.75rem;
    line-height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  #new-product h1 {
    margin-top: 1vh;
    font-size: 3rem;
    text-align: center;
  }

  #new-product-img {
    width: 50vw;
  }

  #new-product-col2 {
  margin-left: 7%;
  margin-top: 0;
  margin-bottom: 10%;
  height: 40vh;
  width: 100vw;
}

  #new-product-col1 {
  margin-left: 25%;
  margin-top: 12%;
  margin-bottom: 0;
  height:40vh;
  width: 100vw;
}

  #new-product {
  flex-wrap: wrap;
}

  #choose-coffee {
  font-size: 2rem;
  color: white;
  background-color: #067655;
  padding: 1.5vh;
  border-radius: 5px;
  border: none;
  margin-top: 10vh;
}

  #hero p {
    margin-left: 8vw;
    margin-right: 8vw;
    font-size: 2.5rem;
  }
  #hero h1 {
  font-size: 3.75rem;
  margin-bottom: 3vh;
  }

  #hero-text {
  text-align: center;
  margin-left: 0;
}

  #hero {
    background-size: cover;
    background-position: center center;
    background-color: rgba(14, 20, 29, 0.5);
    background-blend-mode: multiply;
  }
}



</style>
