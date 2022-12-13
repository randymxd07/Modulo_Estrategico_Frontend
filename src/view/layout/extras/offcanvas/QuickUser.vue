<template>

  <div class="topbar-item mr-4">

    <div
      class="btn btn-icon btn-sm btn-clean btn-text-dark-75"
      id="kt_quick_user_toggle"
    >
      <span class="svg-icon svg-icon-lg">
        <inline-svg src="media/svg/icons/General/User.svg" />
      </span>
    </div>

    <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!-----------
          HEADER
      ------------->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <h3 class="font-weight-bold m-0">
          Perfil del Usuario
          <!-- <small class="text-muted font-size-sm ml-2">12 messages</small> -->
        </h3>
        <a
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>

      <!------------
          CONTENT
      -------------->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative;"
      >

        <!-----------
            HEADER
        ------------->
        <div class="d-flex align-items-center mt-5">

          <!-- PROFILE PHOTO -->
          <div class="symbol symbol-100 mr-5">
            <img class="symbol-label" :src="picture" alt="" />
            <i class="symbol-badge bg-success"></i>
          </div>

          <!-- FULLNAME, EMAIL AND SIGNOUT BUTTON -->
          <div class="d-flex flex-column">

            <!-- FULLNAME -->
            <a
              href="#"
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              {{user.fullname}}
            </a>

            <!-- <div class="text-muted mt-1">Application Developer</div> -->

            <!-- EMAIL -->
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        src="media/svg/icons/Communication/Mail-notification.svg"
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    {{user.email}}
                  </span>
                </span>
              </a>
            </div>

            <!-- SIGNOUT BUTTON -->
            <button class="btn btn-light-primary btn-bold" @click="onLogout">
              <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
            </button>

          </div>

        </div>

        <!-- SEPARATOR -->
        <div class="separator separator-dashed mt-8 mb-5"></div>

        <!---------------------
            SHOPPING HISTORY
        ----------------------->
        <section class="navi navi-spacer-x-0 p-0">
          
          <!-- HEADING -->
          <h5 class="mb-5">Ultimas 4 compras</h5>

          <!-- ITEM -->
          <div
            @click="goToPayment(data.id)"
            v-for="data in lastOrders"
            :key="data.id"
            class="navi-item cursor-pointer"
          >
            <div class="navi-link text-hover-primary">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-success">
                    <i class="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <div class="font-weight-bold">{{data.created_at.split(' ')[0]}}</div>
                <div class="text-muted" v-for="(orderDetail, index) in data.order_details" :key="index">
                  {{orderDetail.product_name}}
                </div>
              </div>
            </div>
          </div>

          <router-link :to="{ name: 'my-orders' }" class="btn btn-primary col-sm-12 mt-5">
            <i class="fas fa-eye"></i> Ver Más
          </router-link>

        </section>

        <!-- SEPARATOR -->
        <div class="separator separator-dashed my-7"></div>

        <!-------------------
            ACTIVE COUPONS
        --------------------->
        <ActiveCoupons/>

      </perfect-scrollbar>

    </div>

  </div>

</template>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>

<script>
import { LOGOUT } from "@/core/services/store/auth.module";
import KTLayoutQuickUser from "@/assets/js/layout/extended/quick-user.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";
import restaurantApi from '@/core/services/api/restaurantApi.js';
import { mapMutations } from 'vuex';
import ActiveCoupons from "@/view/layout/extras/offcanvas/components/ActiveCoupons.vue";

export default {

  name: "KTQuickUser",

  data() {
    return {
      user: {},
      lastOrders: [],
      
    };
  },

  components: {
    ActiveCoupons,
  },

  async created(){
    await restaurantApi.get('orders/getLastFour')
    .then(({data}) => {
      data.data.forEach(ele => {
        this.lastOrders.push(ele);
      })
    })
    .catch(({response}) => {
      console.error(response.data);
    })
  },

  mounted() {
    // Init Quick User Panel
    KTLayoutQuickUser.init(this.$refs["kt_quick_user"]);
    this.user = JSON.parse(localStorage.getItem("user"));
  },

  methods: {

    ...mapMutations("productsStore", ["setSelectedCart"]),

    async goToPayment(id){

      await restaurantApi.get(`orders/${id}`)
      .then(({data}) => {
        this.setSelectedCart(data.data);
        this.$router.push({ name: 'selected-payment' });
      })
      // .catch(({response}) => {
      //   console.error(response.data);
      // })

    },

    onLogout() {
      this.$store
        .dispatch(LOGOUT)
        .then(() => this.$router.go());
    },

    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide();
    }

  },

  computed: {
    picture() {
      return process.env.BASE_URL + "media/users/300_21.jpg";
    }
  },

};
</script>
