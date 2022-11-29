<template>

    <article class="col-sm-12 justify-content-start">

        <!-- TITLE -->
        <h3>Ofertas</h3>

        <!-- CAROUSEL -->
        <carousel-3d 
          autoplay
          :autoplayTimeout="5000" 
          :autoplayHoverPause="true"
          :perspective="0"
          :display="11"
          :width="450"
          :height="300"
          class="cursor-pointer"
        >
          <slide v-for="(data, index) in offerImages" :key="index" :index="index">
            <template>
                <img width="450" height="300" :src="data.image">
            </template>
          </slide>
        </carousel-3d>

    </article>

</template>

<script>

import offerImages from "@/core/data/offerImages.js";

export default {

    data(){

        return{

            offerImages,

        }
        
    },

}

</script>

<style>

</style>