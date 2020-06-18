<template>
  <section>
       

        <b-carousel
            :progress="progress"
            :progress-type="progressType">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero is-medium is-${carousel.color}`">
                    <div class="hero-body has-text-centered">
                            <div class="half-circle"></div>
                            <div class="banner_content">
                            <h2 class="slogan animated fadeInDownBig">{{carousel.slogan}}</h2>
                            <h1 class="title animated fadeInUpBig">{{carousel.title}}</h1>
                            </div>
                        
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </section>
</template>

<script>
export default {
    name:'bannerSlider',
    data() {
        return {
            progress: true,
            progressType: 'is-primary',
            carousels: [
                { title: 'TOP COMPANIES ON OUR MARKETPLACE', color: 'grey' , slogan: 'we are here for help you' },
                { title: 'TOP COMPANIES ON OUR MARKETPLACE', color: 'dark' , slogan: 'we are here for help you' },
                { title: 'TOP COMPANIES ON OUR MARKETPLACE', color: 'primary', slogan: 'we are here for help you' },
                { title: 'TOP COMPANIES ON OUR MARKETPLACE', color: 'info', slogan: 'we are here for help you' }
            ]
        }
    }
}
    
</script>
<style scoped>
.hero.is-medium .hero-body {
    padding-bottom: 5rem;
    padding-top: 5rem;
}
.banner_content{width:auto; display:inline-block; vertical-align:middle; margin-left:-80px;}

   .half-circle {vertical-align:middle;
    width: 100px;
    height: 200px;
    background-color: none;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 100px;
    border: 10px solid #d3a511;
    border-right: 0;
    display:inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.banner_content h2.slogan{ color:#d3a511;}
h1.title,h2.slogan{ font-size: 37px;
    font-weight: 700;
    text-shadow: 1px 4px 12px #000;
    text-transform: initial;
    color: #fff;
    background: 0 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px 20px;
    margin: 0;}
.hero.is-grey{ background: url("http://www.ascentsolution.com/img/home-slider/banner-1.png") no-repeat;  background-size:100% auto;}
.hero.is-dark{ background: url("http://www.ascentsolution.com/img/home-slider/banner-2.png") no-repeat; background-size:100% auto;}
.hero.is-primary{ background: url("http://www.ascentsolution.com/img/home-slider/banner-3.png") no-repeat; background-size:100% auto;}
.hero.is-info{ background: url("http://www.ascentsolution.com/img/home-slider/banner-4.png") no-repeat; background-size:100% auto;}
</style>>