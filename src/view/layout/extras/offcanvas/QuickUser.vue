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
        <div class="navi navi-spacer-x-0 p-0">
          
          <!-- HEADING -->
          <h5 class="mb-5">Ultimas 4 compras</h5>

          <!-- ITEM -->
          <router-link
            v-for="data in lastOrders"
            :key="data.id"
            :to="{ name: 'payment' }"
            @click.native="closeOffcanvas"
            href="#"
            class="navi-item"
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
                <div class="font-weight-bold">{{data.created_at.split('T')[0]}}</div>
                <div class="text-muted" v-for="(orderDetail, index) in data.order_details" :key="index">
                  {{orderDetail.product_name}}
                </div>
              </div>
            </div>
          </router-link>

          <router-link :to="{ name: 'my-orders' }" class="btn btn-primary col-sm-12 mt-5">
            <i class="fas fa-eye"></i> Ver Más
          </router-link>

        </div>

        <!-- SEPARATOR -->
        <div class="separator separator-dashed my-7"></div>

        <!------------
            COUPONS
        -------------->
        <div>

          <!-- HEADING -->
          <h5 class="mb-5">Cupones Activos</h5>

          <template v-for="(item, i) in list">

            <!-- ITEM -->
            <div
              class="d-flex align-items-center rounded p-5 gutter-b"
              v-bind:class="`bg-light-${item.type}`"
              v-bind:key="i"
            >

              <!-- ICON -->
              <span
                class="svg-icon mr-5"
                v-bind:class="`svg-icon-${item.type}`"
              >
                <!-- <span class="svg-icon svg-icon-lg">
                  <inline-svg :src="item.svg" />
                </span> -->
                <img 
                  class="img-fluid" 
                  width="40px" 
                  height="40px" 
                  src="assets/Coupon.png" 
                  alt=""
                >
              </span>

              <!-- TITLE -->
              <div class="d-flex flex-column flex-grow-1 mr-2">
                <a
                  class="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  {{ item.title }}
                </a>
                <span class="text-muted font-size-sm">
                  {{ item.desc }}
                </span>
              </div>

              <!-- ALT -->
              <span
                class="font-weight-bolder py-1 font-size-lg"
                v-bind:class="`text-${item.type}`"
              >
                {{ item.alt }}
              </span>
              
            </div>

          </template>

          <router-link :to="{ name: 'my-coupons' }" class="btn btn-primary col-sm-12">
            <i class="fas fa-eye"></i> Ver Más
          </router-link>

        </div>

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

export default {
  name: "KTQuickUser",
  data() {
    return {
      user: {},
      lastOrders: [],
      list: [
        {
          title: "Cupon de Hamburguesas Ricas",
          desc: "Valido por 2 Días",
          alt: "-28%",
          svg: "media/svg/icons/Home/Library.svg",
          type: "warning"
        },
        {
          title: "Cupon 2 x 1 en Pizzas",
          desc: "Valido por 2 Días",
          svg: "media/svg/icons/Communication/Write.svg",
          type: "success"
        },
        {
          title: "Cupon de Especial de Noviembre",
          desc: "Valido por 2 Días",
          alt: "-27%",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          type: "danger"
        },
        {
          title: "Cupon de bebida gratis",
          desc: "Valido por 2 Días",
          alt: "-100%",
          svg: "media/svg/icons/General/Attachment2.svg",
          type: "info"
        }
      ]
    };
  },
  async created(){
    await restaurantApi.get('orders/getLastFour')
    .then(({data}) => {
      data.data.forEach(ele => {
        this.lastOrders.push(ele);
      })
      console.log(this.lastOrders);
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
  }
};
</script>
