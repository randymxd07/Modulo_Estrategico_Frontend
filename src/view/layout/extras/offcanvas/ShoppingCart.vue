<template>

  <div class="topbar-item">

    <!-------------------------
        SHOPPING CART BUTTON
    --------------------------->
    <div id="kt_quick_notifications_toggle">
      <div class="btn btn-clean">
        <i class="fas fa-shopping-cart"></i>
        <b-badge variant="light">{{productsInCart.length}}</b-badge>
      </div>
    </div>

    <!------------
        CONTENT
    -------------->
    <div
      id="kt_quick_notifications"
      ref="kt_quick_notifications"
      class="offcanvas offcanvas-right p-10"
    >

      <!-- HEADING -->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between mb-10"
      >

        <!-- TITLE -->
        <h3 class="font-weight-bold m-0">
          Carrito de Compras
          <!-- <small class="text-muted font-size-sm ml-2">24 New</small> -->
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

          <!-- ITEM -->
          <template v-for="(item, i) in productsInCart">
            <a class="navi-item mb-5" :key="i">
              <div class="navi-link rounded">
                <div class="symbol symbol-50 mr-3">
                  <div class="symbol-label">
                    <i class="icon-lg" v-bind:class="item.icon" />
                  </div>
                </div>
                <div class="navi-text">
                  <div class="font-weight-bold font-size-lg">
                    {{ item.name }}
                  </div>
                  <div class="text-muted">
                    RD$ {{ item.price }}
                  </div>
                </div>
                <button class="btn btn-outline-primary">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>

              <section class="card p-3">
                <div class="row justify-content-center">
                  <b-button variant="primary"><b>-</b></b-button>
                  <h1 class="mx-10 text-dark">1</h1>
                  <b-button variant="primary"><b>+</b></b-button>
                </div>
              </section>
            </a>
          </template>

          <hr>

          <!-- TOTAL PAYMENT -->
          <section class="my-5">
            <h3>Total a Pagar: <span>RD$ {{getTotalAccount()}}</span></h3>
          </section>

          <!-- PAY BUTTON -->
          <router-link 
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

export default {
  name: "KTQuickPanel",
  data() {
    return {
      productsInCart: [
        {
          id: '',
          name: "Pizza de Peperoni",
          price: 850,
          icon: "flaticon-shopping-basket text-primary"
        },
        {
          id: '',
          name: "Flan",
          price: 85,
          icon: "flaticon-shopping-basket text-primary"
        },
        {
          id: '',
          name: "Big Special Burguer",
          price: 350,
          icon: "flaticon-shopping-basket text-primary"
        },
      ]
    };
  },
  mounted() {
    // Init Quick Offcanvas Panel
    KTLayoutQuickNotifications.init(this.$refs["kt_quick_notifications"]);
  },
  methods: {
    getTotalAccount(){
      var sum = 0;
      this.productsInCart.forEach(ele => {
        sum += ele.price;
      });
      return sum;
    },
  },
};
</script>
