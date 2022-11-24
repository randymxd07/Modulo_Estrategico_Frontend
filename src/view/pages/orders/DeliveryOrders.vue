<template>

  <main>

    <h1 class="mb-10">Ordenes Asignadas</h1>

    <v-app>

      <v-expansion-panels>

          <v-expansion-panel class="mb-5" multiple style="border-radius: 20px" v-for="(data, index) in 5" :key="data.id">

              <v-expansion-panel-header>

                  <div class="col-sm-12 col-md-6 text-left">

                      <div class="row">
                          <h3>Order #{{index}}</h3>
                      </div>

                      <div class="row">
                          <h5 class="lead">23/11/2022</h5>
                      </div>

                  </div>

                  <div class="col-sm-12 col-md-6 text-right text-blue">
                      <h5>RD$ 1,285</h5>
                  </div>

              </v-expansion-panel-header>

              <v-expansion-panel-content>
      
                  <section  class="text-center">
                    <img class="img-fluid bg-primary mb-5" width="600px" height="200px" src="assets/daraguma-banner.png" alt="Daraguma Image">
                    <h4>2022-11-23 8:10:00</h4>
                    <span class="lead">www.daragumard.com</span>
                    <p class="lead">(849) 858-2406</p>
                  </section>

                  <div class="table-responsive-xxl">

                      <b-table stacked :items="productsInCart"></b-table>

                      <section  class="text-center">
                        <router-link  :to="{ name: 'payment' }">
                          <b-button size="lg" variant="primary" class="col-sm-5 my-5">
                            <i class="fas fa-check"></i> Aceptar Orden
                          </b-button>
                        </router-link>
                      </section>

                  </div>

              </v-expansion-panel-content>

          </v-expansion-panel>

      </v-expansion-panels>

      <!-- <img v-show="(soldTickets.length === 0)" src="@/assets/images/no-data-found.png" alt="No Data Found"> -->

    </v-app>

  </main>

</template>

<script>
export default {
  data(){
    return{
      productsInCart: [
        {
            Nombre_Cliente: "Rafael Garcia Molina",
            Telefono: "(809 347-2383)",
            Direccion: "1637 Brookview Drive, Santa Clara, California, USA",
        },
      ]
    }
  }
}
</script>

<style>
.text-blue{
  color: blue;
}
</style>