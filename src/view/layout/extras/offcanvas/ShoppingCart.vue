<template>

  <div class="topbar-item">

    <!-------------------------
        SHOPPING CART BUTTON
    --------------------------->
    <div id="kt_quick_notifications_toggle">
      <div class="btn btn-clean">
        <i class="fas fa-shopping-cart"></i>
        <b-badge variant="light">{{cart.length}}</b-badge>
      </div>
    </div>

    <!------------
        CONTENT
    -------------->
    <div
      id="kt_quick_notifications"
      ref="kt_quick_notifications"
      class="offcanvas offcanvas-right p-9"
    >

      <!-- HEADING -->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between mb-10"
      >

        <!-- TITLE -->
        <h3 class="font-weight-bold m-0">
          Carrito de Compras
        </h3>

        <!-- CLOSE BUTTON -->
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_notifications_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>

      </div>

      <!-- CONTENT -->
      <div class="offcanvas-content pr-5 mr-n5">

        <div class="navi navi-icon-circle navi-spacer-x-0">

          <b-alert v-if="cart.length == 0" class="p-5 text-center h4" variant="secondary" show fade>
            No hay productos agregados
          </b-alert>

          <!-- ITEM -->
          <template v-else v-for="(item, i) in cart">
            <a class="navi-item mb-5" :key="i">
              <div class="navi-link rounded">

                <div class="symbol symbol-50 mr-3">
                  <div class="symbol-label">
                    <i class="icon-lg flaticon-shopping-basket text-primary" />
                  </div>
                </div>

                <div class="navi-text">

                  <!-- PRODUCT NAME -->
                  <div class="font-weight-bold font-size-lg">
                    {{ item.element.name }}
                  </div>

                  <!-- PRODUCT PRICE -->
                  <div class="text-muted">
                    RD$ {{ item.element.price }}
                  </div>

                </div>

                <!-- TRASH BUTTON -->
                <button @click="deleteCartProduct(item)" class="btn btn-outline-primary">
                  <i class="fas fa-trash-alt"></i>
                </button>

              </div>

              <section class="card p-3">

                <div class="row justify-content-center">

                  <!-- MINUS BUTTON -->
                  <b-button @click="decrement(item)" variant="primary">
                    <b>-</b>
                  </b-button>

                  <!-- QUANTITY -->
                  <h1 class="mx-10 text-dark">{{item.quantity}}</h1>

                  <!-- PLUS BUTTON -->
                  <b-button @click="increment(item)" variant="primary">
                    <b>+</b>
                  </b-button>

                </div>

              </section>
            </a>
          </template>

          <hr>

          <!-- TOTAL PAYMENT -->
          <section v-if="cart.length != 0" class="my-5">
            <h3>Total a Pagar: <span>RD$ {{getTotalAccount()}}</span></h3>
          </section>

          <!-- PAY BUTTON -->
          <router-link
            v-show="(getTotalAccount() != 0)"
            :to="{ name: 'payment' }" 
            type="button"
            class="col-sm-12 btn btn-lg btn-outline-primary"
          >
            <i class="fas fa-money-bill-alt"></i> Ir a Pagar
          </router-link>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

import KTLayoutQuickNotifications from "@/assets/js/layout/extended/quick-notifications.js";
import { mapMutations, mapState } from 'vuex';

export default {

  name: "KTQuickPanel",

  computed: {
    ...mapState("productsStore", [
      "cart"
    ]),
  },

  mounted() {

    KTLayoutQuickNotifications.init(this.$refs["kt_quick_notifications"]);
    
    if(this.cart.length == 0){

      const items = JSON.parse(localStorage.getItem('cart'));

      if(items) {
        this.getLocalStorageCartProducts(items);
      }

    }

  },

  methods: {

    ...mapMutations("productsStore", [
      "getLocalStorageCartProducts",
      "increment",
      "decrement",
      "deleteCartProduct"
    ]),

    getTotalAccount(){
      
      var sum = 0;

      this.cart.forEach(ele => {
        sum += (+ele.element.price * ele.quantity);
      });

      return sum;

    },

  },

};
</script>
