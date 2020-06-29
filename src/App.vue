<template>
  <div id="app">
  <scroll-fixed-header :fixed.sync="fixed" :threshold="53">
  <div>
  <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
             <img src="data:image/png;base64,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" height="203" width="129" alt="">
            <!-- <strong class="logo"><span>O</span>NPOINT<strong class="hrfirm">HRFIRM</strong></strong>

                <img
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
