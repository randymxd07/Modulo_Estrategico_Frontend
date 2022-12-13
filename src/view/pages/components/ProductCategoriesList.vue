<template>

  <main class="col-sm-12">

    <!-- TITLE -->
    <h3>Categorías</h3>

    <!-- CATEGORIES -->
    <section
      class="card card-custom card-shadowless gutter-b card-stretch card-shadowless mt-5"
    >
      <!--begin::Nav Tabs-->
      <ul
        class="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0 flex-column flex-sm-row"
        role="tablist"
      >

        <!-- ITEM: ALL -->
        <li
            @click="getProducts"
            class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0 cursor-pointer"
        >
          <a
            class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
            data-toggle="pill"
          >
            <span class="nav-icon py-2 w-auto">
              <span class="svg-icon svg-icon-3x">
                <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
              </span>
            </span>
            <span class="nav-text font-size-lg py-2 font-weight-bold text-center">
             Todas
            </span
            >
          </a>
        </li>

        <!-- ITEMS -->
        <li
            @click="getProductsByCategory(data)"
            v-for="(data, index) in categories"
            :key="index"
            class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0 cursor-pointer"
        >
          <a
            class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
            data-toggle="pill"
          >
            <span class="nav-icon py-2 w-auto">
              <img width="40px" height="40px" :src="'assets/'+data.name+'.png'" alt="">
            </span>
            <span class="nav-text font-size-lg py-2 font-weight-bold text-center">
              {{data.name}}
            </span
            >
          </a>
        </li>
        
        <!-----------------------
            ITEM: MORE OPTIONS 
        ------------------------->
        <li class="nav-item d-flex col flex-grow-1 flex-shrink-0 mr-0 mb-3 mb-lg-0">

          <!-- BUTTON -->
          <a
            v-b-modal.modal-1
            class="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
            data-toggle="pill"
          >
            <span class="nav-icon py-2 w-auto">
              <img width="40px" height="40px" src="assets/List.png" alt="">
            </span>
            <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
              Más Opciones
            </span>
          </a>

          <!-- MODAL -->
          <b-modal 
            centered 
            ok-only 
            size="xl"
            id="modal-1"
            title="Más Categorías"
          >
            
            <!-- ITEM -->
            <section
              v-for="(data, index) in 6"
              :key="index"
              class="mb-5"
            >
              <a
                class="border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                data-toggle="pill"
                href="#tab_forms_widget_2"
              >
                <span class="nav-icon py-2 w-auto">
                  <span class="svg-icon svg-icon-3x">
                    <inline-svg src="media/svg/icons/Layout/Layout-4-blocks.svg" />
                  </span>
                </span>
                <span class="nav-text font-size-lg py-2 font-weight-bolder text-center">
                  Main Categories
                </span>
              </a>
            </section>
            
          </b-modal>

        </li>

      </ul>
      
      <!--begin::Nav Content-->
      <div class="tab-content m-0 p-0">
        <div
          class="tab-pane active"
          id="forms_widget_tab_1"
          role="tabpanel"
        ></div>
        <div class="tab-pane" id="forms_widget_tab_2" role="tabpanel"></div>
        <div class="tab-pane" id="forms_widget_tab_3" role="tabpanel"></div>
        <div class="tab-pane" id="forms_widget_tab_4" role="tabpanel"></div>
        <div class="tab-pane" id="forms_widget_tab_6" role="tabpanel"></div>
      </div>

    </section>

  </main>

</template>

<script>

import restaurantApi from "@/core/services/api/restaurantApi.js";
import { mapActions, mapMutations } from 'vuex';

export default {

  name: "widget-1",

  data() {
    return {
      categories: [],
    };
  },

  async created(){
    await restaurantApi.get('product-categories?number=7')
    .then(({data}) => {
      data.data.forEach(ele => {
        this.categories.push(ele);
      });
    })
    .catch(err => {
      console.error(err.response.data);
    });
  },

  methods: {

    ...mapMutations("productsStore", ["setProducts"]),

    ...mapActions("productsStore", ["getProducts"]),

    async getProductsByCategory(data){

      await restaurantApi.get("products/byCategory/"+data.id)
      .then(({data}) => {

        let products = [];

        data.data.forEach(element => {

          if(element.discount != null){
            element.price = Number(element.price - ((+element.discount / 100) * element.price)).toFixed(2);
          }

          products.push({
            element,
            quantity: 1
          });

        });

        this.setProducts(products);

      })
      .catch(({response}) => {

        console.error(response.data);

      })

    },

  },
  
};
</script>
