<template>

  <!-- Dashboard -->
  <main>

    <section class="row">

      <article class="col-sm-12">
        <h3>Categorías</h3>
        <ListWidget1/>
      </article>

      <article class="col-sm-12">
        <h3>Offertas</h3>
        
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
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Dashboard" }]);
  },
  methods: {}
};
</script>
