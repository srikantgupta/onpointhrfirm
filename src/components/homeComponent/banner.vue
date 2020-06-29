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
.hero.is-grey{ background: url("https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat;  background-size:100% 100%;}
.hero.is-dark{ background: url("https://images.unsplash.com/photo-1568598035424-7070b67317d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80") no-repeat; background-size:100% 100%;}
.hero.is-primary{ background: url("https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80") no-repeat; background-size:100% 100%;}
.hero.is-info{ background: url("https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat; background-size:100% 100%;}
</style>>