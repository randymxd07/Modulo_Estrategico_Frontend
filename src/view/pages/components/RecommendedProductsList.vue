<template>

  <!-- CONTENT -->
  <div class="row">

    <!-- CARDS -->
    <article class="col-sm-12 mb-5" v-for="(data, index) in recommendedProducts" :key="index">

      <!-- CARD -->
      <div class="card">

        <!-- CARD IMAGE -->
        <div class="card bg-dark text-white text-right">

          <!-- IMAGE -->
          <img
            width="600"
            height="150"
            :src="data.element.image_url" 
            class="card-img-top" 
            alt="..."
          >

          <!-- PRICE -->
          <div class="card-img-overlay">
            <b class="bg-primary rounded card-title p-3">
              RD${{data.element.price}}
            </b>
            <b v-if="data.element.discount != null" class="bg-warning rounded card-title p-3">
              -{{+data.element.discount}}%
            </b>
          </div>

        </div>
        
        <!-- CARD BODY -->
        <div class="card-body">

          <!-- TITLE -->
          <article class="">

            <!-- PRODUCT NAME -->
            <h5 class="card-title mb-3">
              {{data.element.name}}
            </h5>

            <b-form-rating
              readonly
              v-model="data.element.score"
              :value="data.element.score"
              show-clear
              variant="warning" 
              inline 
            ></b-form-rating>

            <!-- ESTIMATED TIME -->
            <p class="mt-3">
              Tiempo Estimado: <span class="text-primary">{{data.element.estimated_time}}</span>
            </p>

          </article>

          <!-- DESCRIPTION -->
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>

          <!-- ADD CART BUTTON -->
          <button @click="setProductsToCart(data)" class="col-sm-12 btn btn-primary">
            <i class="fas fa-cart-plus"></i> Agregar al Carrito
          </button>

        </div>

      </div>

    </article>

  </div>

</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex';

export default {

  computed: {
    ...mapState("productsStore", ["recommendedProducts"])
  },

  methods: {

    ...mapActions("productsStore", ["getRecommendedProducts"]),

    ...mapMutations("productsStore", ["setProductsToCart"]),

  },

  async created(){
    await this.getRecommendedProducts();
  },

};

</script>

<style></style>