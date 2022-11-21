<template>

  <!-- Dashboard -->
  <main>

    <section class="row">

      <!-- OFFERS -->
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

      <!-- CATEGORIES -->
      <article class="col-sm-12">

        <!-- TITLE -->
        <h3>Categorías</h3>

        <!-- CATEGORIES -->
        <ListWidget1/>

      </article>

    </section>

  </main>

</template>

<script>

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";

export default {

  name: "dashboard",

  components: {
    ListWidget1,
  },

  data(){

    return{

      offerImages: [
        { image: "assets/offer1.jpg" },
        { image: "assets/offer2.jpg" },
        { image: "assets/offer3.jpg" },
        { image: "assets/offer4.jpg" },
        { image: "assets/offer5.jpg" },
        { image: "assets/offer6.jpg" },
        { image: "assets/offer7.jpg" },
      ]

    }

  },

  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },

  methods: {}

};

</script>
