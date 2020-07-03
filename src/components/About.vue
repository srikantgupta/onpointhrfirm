<template>
    <div class="mng_header">
<div class="bgimg-3">
  <div class="caption">
  <span class="subpage_heading">ABOUT US</span>
  </div>
</div>
<div class="about_content">
    <h1>Find the Solution That Best Fits Your Business</h1>
</div>
<div class="about_content2">
<img src="http://www.ascentsolution.com/img/about.png">
<div class="about_des">
    <h2>ABOUT <span>Us</span></h2>
    <span>WELCOME TO ON POINT HR (P) LIMITED</span>
    <p>At On Point HR Firm we sincerely believe in rising above through innovative hiring and engaging with the most powerful asset on earth “PEOPLE”
Our Philosophy is “To blend talent and passion for our client’s success”
We are an extension of our client’s HR team and must perform as a responsible representative of their organization.

</p>
<ul>
  <li>	Management Profile </li>
	<li>Vision &amp; Mission</li>
	<li>Core Values</li>

</ul>
<span>
  We do Recruit for overseas into Contract staffing
</span>
<p>We are a team of dedicated HR professionals with expertise in Executive Search &amp; Select, HR Advisory, Payroll &amp; Labour Laws Compliances and Industrial Relations. With a team of skilled and passionate HR professionals, understanding client requirements in depth and provide one step solution to them is our prime goal .We recognize that each organization has unique needs and we design solutions as per their need.</p>
<p>We commit to provide Exemplary Performance for all levels.</p>
</div>
</div>

<!--<div style="position:relative;">
  <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
  <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
  </div>
</div>-->






    </div>
</template>
<script>
    export default{
        name:'About'
    }
</script>
<style scoped>
.about_content2{ display: inline-block; width: 100%;}
.about_content2 img{ display: inline-block; width: 50%; height:auto; float: left;}
.about_des{display: inline-block; text-align: left; width: 50%; height:auto; padding: 2%; box-sizing: border-box; float:right; color:rgb(137, 137, 137);}

.about_des h2{font-size: 30px; float:left; width:100%; text-align:left;
    margin-bottom: 20px;
    font-weight: 600;
    text-transform: uppercase;}
   .about_des h2 span {color: #d3a511; font-weight: 600; display:inline-block; font-size: 30px; text-transform: uppercase;}
   .about_des span {font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
    color: #555555;
    display: block;}
    .about_des p{    font-size: 16px;
    margin-bottom: 10px;
    color: #555555;
    line-height: 28px;
    text-align: justify;}

.about_content{background: #d3a511;
    padding: 29px 0px; margin-bottom:0;}
 .about_content h1{
   font-size: 32px;
    color: #fff;
    font-weight: 600;
    
    letter-spacing: .64px;
    padding-top: 6px;
    
 }
.insight_section{list-style: none; width: 100%; display:inline-block; text-align: center;}
.insight_section li{width: 300px; display:inline-block; text-align: left; margin-right: 2%;}
.insight_section li:last-child{margin-right: 0px;}
.bgimg-1, .bgimg-2, .bgimg-3 {
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.mng_header{margin-top: -53px;}
.bgimg-1 {
	background-image: url("https://mdbootstrap.com/img/Photos/Others/city13.jpg");
  min-height: 100%;
}

.bgimg-2 {
	background-image: url("https://mdbootstrap.com/img/Photos/Others/img%20%2844%29.jpg");
  
  min-height: 400px;
}
@keyframes mymove {
  from {left: 0px;}
  to {left: 200px;}
}
.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}
/*#how-it-work-page{height:50vh;background-image:url(slider-image-1.e4a236bbb7e4c8c99c95.jpg);background-position:center center;background-size:cover;background-repeat:repeat!important;-webkit-animation:80s linear infinite marquee}.how-it-works-img{position:absolute;top:0;right:0;bottom:0;z-index:-1;width:100%;background-position:center;background-size:cover;background-attachment:scroll}.how-it-works-img .overlay{position:absolute;left:0;top:0;right:0;bottom:0;opacity:.3;background:#1c1d21}.short-note-works{float:none!important;margin:auto!important}.short-note-works p{color:#fff;font-family:"Open Sans",Sans-serif!important;font-size:24px;font-weight:400;line-height:40px;margin:50px auto!important;text-align:center}@-webkit-keyframes marquee{0%{background-position:0}100%{background-position:3000px}}
/* .bgimg-3 {background-image: url("http://mdbootstrap.com/img/Photos/Others/nature4.jpg"); */
/* .bgimg-3 {
background-image: url(http://mdbootstrap.com/img/Photos/Others/nature4.jpg);
    height: 50vh;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat !important;
    position: relative;
  
   
    -webkit-animation: 80s linear infinite marquee;
} */
.bgimg-3 {
  background: gray url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) repeat 0 0;
  background-size: 100%;
    width: 100%;
  margin: 0;
  text-align: center;
  height: 300px;
  padding-top: 120px;
  box-sizing: border-box;
  -webkit-animation: slide 30s linear infinite;
}

.bgimg-3 h1 {
  font-family: sans-serif;
}

@-webkit-keyframes slide {
    from { background-position: 0 0; }
    to { background-position: +800px 0; }
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
  }
}
@media only screen and (max-width: 767px) {
.about_content2 img{ display:none;}
.about_des{width: 100%;}
.about_des h2, .about_des h2 span{    font-size: 24px; margin-bottom:0px;}
.about_content h1{
    font-size: 15px;}
    .about_des span{
    font-weight: 600;
    font-size: 16px;}
    .bgimg-3{    background-size: 100% auto;    height: auto;}
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