<template>

  <!-- DASHBOARD -->
  <main>

    <section class="row">

      <!-- OFFERS -->
      <OffersList/>

      <!-- CATEGORIES -->
      <ProductCategoriesList/>

      <!-- PRODUCTS -->
      <ProductsList/>

    </section>

  </main>

</template>

<script>

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

import OffersList from "@/view/pages/components/OffersList";
import ProductCategoriesList from '@/view/pages/components/ProductCategoriesList';
import ProductsList from "@/view/pages/components/ProductsList";

export default {

  name: "dashboard",

  components: {
    OffersList,
    ProductCategoriesList,
    ProductsList,
  },
  
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },

};

</script>