<template>

  <main>

    <h1 class="mb-10">Canjear Cupon</h1>

    <section class="row">

      <!-- COLUMN TO FILL -->
      <div class="col-sm-4"></div>

      <div class="col-sm-12 col-md-4 text-center">

        <!-- TITLE -->
        <h3 class="my-5">Cupón:</h3>

        <!-- INPUT -->
        <b-form-group 
          id="input-group-2" 
          label-for="coupon_id"
        >
          <b-form-input
            style="font-size: 20px"
            class="text-center"
            size="lg"
            id="coupon_id"
            v-model="text"
            placeholder="B53A339B-C54A-425A-9C99-5E6BCB"
          ></b-form-input>
        </b-form-group>

        <!-- BUTTON -->
        <b-button variant="primary" size="lg" class="col-sm-12">
          <i class="fas fa-plus"></i> Agregar Cupón
        </b-button>

      </div>

      <!-- COLUMN TO FILL -->
      <div class="col-sm-4"></div>

    </section>


  </main>

</template>

<script>
export default {

}
</script>

<style>

</style>