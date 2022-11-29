<template>

  <!-- DASHBOARD -->
  <main>

    <section class="row">

      <!-- OFFERS -->
      <OffersList/>

      <!-- CATEGORIES -->
      <ListWidget1/>

      <!-- PRODUCTS -->
      <ProductsList/>

    </section>

  </main>

</template>

<script>

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

import ListWidget1 from '@/view/content/widgets/list/Widget1';
import ProductsList from "@/view/pages/components/ProductsList";
import OffersList from "@/view/pages/components/OffersList";

export default {

  name: "dashboard",

  components: {
    ListWidget1,
    ProductsList,
    OffersList,
  },
  
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },

};

</script>