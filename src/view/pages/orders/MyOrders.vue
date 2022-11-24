<template>

  <main>

    <h1 class="mb-10">Mis Ordenes</h1>

    <v-app>

      <v-expansion-panels>

          <v-expansion-panel class="mb-5" multiple style="border-radius: 20px" v-for="data in 5" :key="data.id">

              <v-expansion-panel-header>

                  <div class="col-sm-12 col-md-6 text-left">

                      <div class="row">
                          <h3>Randy Martínez Cepeda</h3>
                      </div>

                      <div class="row">
                          <h5 class="lead">23/11/2022</h5>
                      </div>

                  </div>

                  <div class="col-sm-12 col-md-6 text-right text-blue">
                      <h5>RD$ 1,285</h5>
                  </div>

              </v-expansion-panel-header>

              <v-expansion-panel-content class="text-center">
      
                  <img class="img-fluid bg-primary mb-5" width="600px" height="200px" src="assets/daraguma-banner.png" alt="Daraguma Image">
                  <h4>2022-11-23 8:10:00</h4>
                  <span class="lead">www.daragumard.com</span>
                  <p class="lead">(849) 858-2406</p>

                  <div class="table-responsive-xxl">

                      <b-table-simple class="table" sticky-header="450px" fixed hover>

                          <!-- TABLE TITLE -->
                          <b-thead>
                              <b-tr>
                                  <b-th>PRODUCTO</b-th>
                                  <b-th>CANTIDAD</b-th>
                                  <b-th>PRECIO</b-th>
                                  <b-th>TIEMPO ESTIMADO</b-th>
                              </b-tr>
                          </b-thead>

                          <!-- TABLE BODY -->
                          <b-tbody v-for="data in productsInCart" :key="data.id">
                              <b-tr>
                                  <b-td>{{data.name}}</b-td>
                                  <b-td>{{data.quantity}}</b-td>
                                  <b-td>RD$ {{data.price}}</b-td>
                                  <b-td>{{data.estimated_time}}</b-td>
                              </b-tr>
                          </b-tbody>

                      </b-table-simple>

                      <router-link :to="{ name: 'payment' }">
                        <b-button size="lg" variant="primary" class="col-sm-5 my-5">
                          <i class="fas fa-redo-alt"></i> Volver a Ordenar
                        </b-button>
                      </router-link>

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
            id: '',
            name: "Pizza de Peperoni",
            price: 850,
            quantity: 1,
            estimated_time: '30m',
        },
        {
            id: '',
            name: "Flan",
            price: 85,
            quantity: 1,
            estimated_time: '5m',
        },
        {
            id: '',
            name: "Big Special Burguer",
            price: 350,
            quantity: 1,
            estimated_time: '30m',
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