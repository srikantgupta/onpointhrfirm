<template>
<div class="mng_header">
<div class="bgimg-3">
  <div class="caption">
  <span class="subpage_heading">WE LOVE TO HEAR FROM YOU</span>
  </div>
</div>
    <div>
      

<div class="section_title">
        <h2>Our Vision</h2>
        <div class="line"></div>
    </div>
<div class="padding_20 home_content text-left">
    <p>At SAR, our vision is to partner with
premier clients with the intention of providing

</p>
<ul>
  <li>Commitment to our work</li>
	<li>Believe in team work</li>
	<li>Accountability of our work and being professional in everything  </li>       
  <li>we do Maintaining Integrity</li>

  </ul>
</div>



        <ul class="contact_us">
            <li>
                <h3>212,sector-14,Sonipat <br/>(Haryana)</h3>
               
            </li>
             <li>
            
                <h3>	
                        hr@onpointhr.in</h3>
                        <h3>sales@onpointhr.in</h3>
                        
            </li>
            <li><h3> <a href="tel:+919991923636">+919991923636</a></h3>
                                        <h3><a href="tel:+919910750994">+919910750994</a></h3>
                                      
            </li>
        </ul>
        <div class="map_section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.3596995871641!2d77.02861492918124!3d29.0039965718035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db184f66b386d%3A0x6ed4280ee592fa1a!2sVikram%20Palace!5e0!3m2!1sen!2sus!4v1592425772427!5m2!1sen!2sus" width="100%"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    <div class="about_content">
    <h1>Find the Solution That Best Fits Your Business</h1>
</div>
    </div>
    </div>
</template>
<script>
    export default{
        name:'Contact'
    }
</script>
<style>
.padding_20{ padding:0 3%}
.text-left{ text-align:left;}
.home_content p{ font-size: 24px; font-weight:bold;}
.about_content{background: #d3a511;
    padding: 29px 0px;}
 .about_content h1{
   font-size: 32px;
    color: #fff;
    font-weight: 600;
    
    letter-spacing: .64px;
    padding-top: 6px;
    
 }
iframe{height: 350px;}
.bgimg-3 {
  position: relative;
  opacity: 0.65;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.bgimg-3 {
  background: gray url(https://images.unsplash.com/photo-1475691058852-37b5d9b6a878?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) repeat 0 0;
  background-size: 100% 110%;
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
ul.contact_us{ display:inline-block; list-style:none; width:100%;
background:gray url("http://www.ascentsolution.com/img/home-slider/foot.png") repeat 0 0;
text-align:center; padding:40px 0px; margin:20px 0px;opacity:0.7; z-index:-1;
}
ul.contact_us li h3{text-transform: lowercase; font-size:14px; color:#ffffff;}
ul.contact_us li h3 a,ul.contact_us li h3 a:hover{color:#ffffff;}
ul.contact_us li{ min-height:200px; vertical-align: text-bottom;  z-index:1;  display:inline-block; width:29%; background:rgba(59,59,61, 0.8); color:#ffffff !important; margin-right:20px; text-align:left; padding:2%; box-sizing:border-box;}
@media only screen and (max-width: 767px) {
.bgimg-3{    background-size: 100% 100%;    height: 150px;}
span.subpage_heading {
    font-size: 19px;}
     ul.contact_us {
    margin: 3%;
    padding: 0;
    width: auto;}
    ul.contact_us li{        width: 78%;
    height: auto;
    /* color: #ffffff !important; */
    min-height: auto;
    word-break: break-all;
    padding: 12%;}
    ul.contact_us li h3, ul.contact_us li a{    color: #ffffff;
    text-transform: lowercase;
    letter-spacing: 0px;}
    .about_content h1{font-size: 22px;}
    .map_section{padding:2%}
}

@media only screen and (max-width: 480px) {

}


@media only screen and (min-width: 640px) and (max-width: 767px) {

}
</style>