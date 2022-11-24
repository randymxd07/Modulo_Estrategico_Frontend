<template>

    <main class="container">

        <h3 class="mb-10">Realizar Pago</h3>
        
        <v-app>

            <v-expansion-panels v-model="panel" multiple style="border-radius: 20px">

                <v-expansion-panel v-for="data in 1" :key="data.id">

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

                        </div>

                    </v-expansion-panel-content>

                </v-expansion-panel>

            </v-expansion-panels>

            <!-- <img v-show="(soldTickets.length === 0)" src="@/assets/images/no-data-found.png" alt="No Data Found"> -->

            <section class="row my-5">

                <!-- SELECTS -->
                <article class="col-sm-12 col-md-4 mb-5">
                    <h5>Metodo de Pago</h5>
                    <b-form-select v-model="selectedPaymentMethod" :options="paymentMethodOptions" class="m-0" size="lg"></b-form-select>
                </article>
                
                <!-- COLUMN TO FILL -->
                <div class="col-sm-12 col-md-5 mb-5">
                    <h5>Tipo de Orden</h5>
                    <b-form-select v-model="selectedOrderType" :options="orderTypeOptions" class="m-0" size="lg"></b-form-select>
                </div>

                <article class="col-sm-12 col-md-3 mb-5">
                    <br>
                    <button class="col-sm-12 btn btn-lg btn-primary">
                        <i class="fas fa-money-bill-alt"></i> Pagar
                    </button>
                </article>

            </section>

        </v-app>

    </main>

</template>

<script>
export default {
    data(){
        return{
            selectedPaymentMethod: null,
            selectedOrderType: null,
            paymentMethodOptions: [
                { value: null, text: 'Selecciona un metodo de pago', disabled: true },
                { value: 'Efectivo', text: 'Efectivo' },
                { value: 'Tarjeta', text: 'Tarjeta' },
            ],
            orderTypeOptions: [
                { value: null, text: 'Selecciona un tipo de orden', disabled: true },
                { value: 'Domicilio', text: 'Ordenar a Domicilio' },
                { value: 'Restaurante', text: 'Ordenar desde el Restaurante' },
            ],
            panel: [0],
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