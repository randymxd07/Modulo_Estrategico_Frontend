<template>
  
  <main>

    <h1 class="mb-10">Mis Cupones</h1>

    <div class="card container">

      <section v-for="(item, i) in list" v-bind:key="i">

        <!-- ITEM -->
        <div
          class="d-flex align-items-center rounded p-5 my-5"
          v-bind:class="`bg-light-${item.type}`"
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
              href="#"
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
            class="font-weight-bolder py-1 font-size-lg mr-10"
            v-bind:class="`text-${item.type}`"
          >
            {{ item.alt }}
          </span>

          <b-button class="p-5" variant="primary">
            <i class="fas fa-check"></i> Aplicar
          </b-button>
          
        </div>

      </section>

    </div>

  </main>

</template>

<script>
export default {
  data(){
    return{
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
    }
  }
}
</script>

<style>

</style>