<template>
  <div id="app">
  <scroll-fixed-header :fixed.sync="fixed" :threshold="53">
  <div>
  <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <strong class="logo"><span>O</span>NPOINT<strong class="hrfirm">HRFIRM</strong></strong>
               <!-- <img
src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
alt="Lightweight UI components for Vue.js based on Bulma"
                >-->
            </b-navbar-item>
        </template>
        <template slot="end">
            <!--<b-navbar-item>
                 <router-link to="/">Home</router-link>
            </b-navbar-item>-->
                 <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/industrypractice">Industry Practice</router-link>
                <router-link class="navbar-item" to="/contact">Contact</router-link>  
        </template>
    </b-navbar>
    </div>
</scroll-fixed-header>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <Home />
    <About />
    <Contact /> -->   
    <router-view></router-view>

    <footer id="footer_component">
    
    <b-navbar>
        <template slot="end">
                 <router-link class="navbar-item" to="/">Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/industrypractice">Industry Practice</router-link>
                <router-link class="navbar-item" to="/contact">Contact</router-link>  
        </template>
    </b-navbar>
          <div class="hiring_block">
            <h3>For Hiring Solutions</h3>
            <div class="line"></div>
             <h4>Drop an Email  : <a href="tel:555-555-5555">555-555-5555</a></h4>
              <h4><a href="mailto:webmaster@example.com"> webmaster@example.com</a></h4>
          </div>
          <div class="touch_block">
            <h3>GET IN TOUCH</h3>
            <div class="line"></div>
            <h4>Address:</h4>
            <p>308, IIIrd Floor, Classic Airport Tower,Plot No.15, Sector-10, Central Market, Dwarka, New Delhi-110075</p>
          </div>
     
    </footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import About from './components/About.vue'
// import Contact from './components/ContactUs.vue'


export default {
  name: 'App',
  data() {
      return {
        fixed: false
      }
    },
  components: {
   
    // Home,
    // About,
    // Contact
  }
}
</script>

<style>
span.subpage_heading{
  font-size: 37px;
    font-weight: 700;
    text-shadow: 1px 4px 12px #000;
    text-transform: initial;
    color: #ffffff;
    background:none;
    background: 0 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 20px;
    margin: 0;
}
strong.logo{ letter-spacing: 0;
    color: #d3a511;
    font-size: 14px;}
    strong.logo span{font-size: 31px;
    letter-spacing: -3px;}
   strong.logo strong.hrfirm{    font-size: 9px;
    color: #e74c3c;}
.mng_header{margin-top: -53px;}
.navbar-menu a.navbar-item:hover,.navbar-menu a.navbar-item:active,.navbar-menu a.navbar-item:focus{background: none !important; }
.navbar-menu a.router-link-exact-active.router-link-active, a.navbar-item:hover{ color:#ffffff !important; border-bottom:2px solid #d3a511; box-sizing:border-box;}

.router-link-active{ background:none; color:#bababa;}
#footer_component{background:#012834; padding:20px 20px; text-align: left;}
#footer_component p{color:#ffffff; vertical-align: middle; text-align: center; font-weight: bold; padding:10px 0px;}
#footer_component .navbar{ background: none; width:20%; display: inline-block;}
#footer_component .navbar-start,#footer_component .navbar-brand{ display: none;}
#footer_component .navbar-menu{ width:100%; display: inline-block;}
#footer_component .navbar-end{ width:100%; display: inline-block; text-align: left;}
#footer_component .navbar-end a{ width:100%; display: inline-block; text-transform: uppercase; color:#ffffff; font-weight: normal; border-bottom:1px solid #ffffff; margin-bottom:10px;}
#footer_component .navbar-end a:hover,#footer_component a.router-link-exact-active.router-link-active{ border-bottom:1px solid #d3a511;}
.touch_block,.hiring_block{
  background: none;
    width: 40%;
    display: inline-block;
    padding: 0px 0px 0 10%;
    vertical-align: top;
    box-sizing: border-box;
    text-align:left;
}
#footer_component .touch_block p{ font-size:12px; text-align:left;}
.touch_block h4,.hiring_block h4{letter-spacing: 0.5px; text-transform: uppercase; color:#ffffff; font-weight: bold; }
.touch_block h3,.hiring_block h3{letter-spacing: 0.5px; text-transform: uppercase; color:#ffffff; font-weight: bold; }
.touch_block h4 a,.hiring_block h4 a{ color:#ffffff; font-weight: normal; border-bottom:1px solid #ffffff; margin-bottom:10px;}
.line {
    border: 2px solid #d3a511;
    width: 30%;
    position: relative;
    top: 5px; margin-bottom: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}
.scroll-fixed-header.is-fixed .navbar{background:#012834;}
.scroll-fixed-header.is-fixed .navbar a.navbar-item:hover,.scroll-fixed-header.is-fixed .navbar .navbar-link:hover{background: none !important;}
a.navbar-item:hover, .navbar-link:hover{background:#012834;}
.scroll-fixed-header .navbar{background: none; }

.scroll-fixed-header .navbar .navbar-end a.navbar-item {color: #ffffff;
    font-weight: bold;
    padding: 0;
    margin: 11px 23px 0 0;
    /* line-height: 0; */
    height: 22px;
    border-bottom: 2px solid none;
    display: inline-block; }
 
/*		Tablet Layout: 768px.
		Gutters: 24px.
		Outer margins: 28px.
		Inherits styles from: Default Layout.
-----------------------------------------------------------------
cols    1     2      3      4      5      6      7      8
px      68    160    252    344    436    528    620    712    */


@media only screen and (min-width: 768px) and (max-width: 1159px) {

}



/*		Mobile Layout: 320px.
		Gutters: 24px.
		Outer margins: 34px.
		Inherits styles from: Default Layout.
---------------------------------------------
cols    1     2      3
px      68    160    252    */
@media only screen and (max-width: 767px) {
  .scroll-fixed-header .navbar{background: #012834; }

.navbar-menu{
  position: absolute !important;
    width: 100%;
    border-top: 2px solid #bababa;
    background: #012834;
}
.navbar-menu .navbar-item{border-bottom: 1px solid #ffffff;}
.navbar-burger{color: #fff;
    left: -25px;}
}

@media only screen and (max-width: 480px) {

}

/*		Wide Mobile Layout: 480px.
		Gutters: 24px.
		Outer margins: 22px.
		Inherits styles from: Default Layout, Mobile Layout.
------------------------------------------------------------
cols    1     2      3      4      5
px      68    160    252    344    436    */
@media only screen and (min-width: 640px) and (max-width: 767px) {

}

</style>
