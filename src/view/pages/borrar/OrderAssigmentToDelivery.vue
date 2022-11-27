<template>

  <main>

    <h1 class="mb-10">Asignar Orden a Delivery</h1>

    <section class="col-sm-12 col-md-6">

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
            
                        <section>
                        
                            <form class="row">

                                <article class="col-sm-12 col-md-6">
                                    <b-form-group id="input-group-2" label="Asignar Delivery" label-for="input-2">
                                        <b-form-select v-model="selected" :options="options"></b-form-select>
                                    </b-form-group>
                                </article>
                                
                                <article class="col-sm-12 col-md-6">
                                    <b-form-group id="input-group-2" label="Cliente" label-for="input-2">
                                        <b-form-input
                                            disabled
                                            id="input-2"
                                            v-model="name"
                                            placeholder="Nombre del Cliente"
                                        ></b-form-input>
                                    </b-form-group>
                                </article>

                                <article class="col-sm-12">
                                    <p class="lead">{{address}}</p>
                                </article>

                                <article class="col-sm-12">
                                    <b-button class="col-sm-12" variant="primary" size="lg">
                                        <i class="fas fa-check"></i> Despachar Orden
                                    </b-button>
                                </article>

                            </form>

                        </section>

                    </v-expansion-panel-content>

                </v-expansion-panel>

            </v-expansion-panels>

            <!-- <img v-show="(soldTickets.length === 0)" src="@/assets/images/no-data-found.png" alt="No Data Found"> -->

        </v-app>

    </section>

  </main>

</template>

<script>
export default {
  data(){
    return{
        name: 'Randy Martinez Cepeda',
        address: '1637 Brookview Drive, Santa Clara, California, USA',
        productsInCart: [
            {
                Nombre_Cliente: "Rafael Garcia Molina",
                Telefono: "(809 347-2383)",
                Direccion: "1637 Brookview Drive, Santa Clara, California, USA",
            },
        ],
        selected: null,
        options: [
            { value: null, text: 'Selecciona un Delivery', disabled: true },
            { value: '314321235', text: 'Juan Perez' },
            { value: '234805738', text: 'Ignacio Arias' },
        ],
    }
  }
}
</script>

<style>
.text-blue{
  color: blue;
}
</style>