<template>

  <section class="col-sm-12">

    <!-- CONTENT -->
    <div class="row">

      <!-- CARDS -->
      <article class="col-sm-12 col-md-3 mb-5" v-for="data in products" :key="data">

        <!-- CARD -->
        <div class="card">

          <!-- CARD IMAGE -->
          <div class="card bg-dark text-white text-right">

            <!-- IMAGE -->
            <img
              width="600"
              height="150"
              :src="data.image_url" 
              class="card-img-top" 
              alt="..."
            >

            <!-- PRICE -->
            <div class="card-img-overlay">
              <b class="bg-primary rounded card-title p-3">
                RD${{data.price}}
              </b>
            </div>

          </div>
          
          <!-- CARD BODY -->
          <div class="card-body">

            <!-- TITLE -->
            <article class="">

              <!-- PRODUCT NAME -->
              <h5 class="card-title mb-3">
                {{data.name}}
              </h5>

              <b-form-rating
                variant="warning" 
                inline 
                :value="data.score"
              ></b-form-rating>

              <!-- ESTIMATED TIME -->
              <p class="mt-3">
                Tiempo Estimado: <span class="text-primary">{{data.estimated_time}}</span>
              </p>

            </article>

            <!-- DESCRIPTION -->
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <!-- ADD CART BUTTON -->
            <button class="col-sm-12 btn btn-primary">
              <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>

          </div>

        </div>

      </article>

    </div>

  </section>
  
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {

    computed: {
        ...mapState("productsStore", ["products"])
    },

    methods: {
        ...mapActions("productsStore", ["getProducts"])
    },

    async created(){
        await this.getProducts();
    },

};

</script>

<style></style>