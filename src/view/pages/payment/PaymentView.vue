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
                                <h5 class="lead">{{getDate()}}</h5>
                            </div>

                        </div>

                        <div class="col-sm-12 col-md-6 text-right text-blue">
                            <h5>RD$ {{getTotalAccount()}}</h5>
                        </div>

                    </v-expansion-panel-header>

                    <v-expansion-panel-content class="text-center">
            
                        <img class="img-fluid bg-primary mb-5" width="600px" height="200px" src="assets/daraguma-banner.png" alt="Daraguma Image">
                        <h4>{{getFullDate()}}</h4>
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
                                <b-tbody v-for="data in cart" :key="data.id">
                                    <b-tr>
                                        <b-td>{{data.element.name}}</b-td>
                                        <b-td>{{data.quantity}}</b-td>
                                        <b-td>RD$ {{data.element.price}}</b-td>
                                        <b-td>{{data.element.estimated_time}}</b-td>
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>

                        </div>

                    </v-expansion-panel-content>

                </v-expansion-panel>

            </v-expansion-panels>

            <!-- <img v-show="(soldTickets.length === 0)" src="@/assets/images/no-data-found.png" alt="No Data Found"> -->

            <section >

                <form @submit.prevent.stop="onSubmit" class="row my-5">

                    <!-- SELECTS -->
                    <article class="col-sm-12 col-md-4 mb-5">
                        <h5>Metodo de Pago</h5>
                        <b-form-select :state="(selectedPaymentMethod != null) ? true : selectedPaymentMethodState" v-model="selectedPaymentMethod" :options="paymentMethodOptions" class="m-0" size="lg"></b-form-select>
                    </article>
                    
                    <!-- COLUMN TO FILL -->
                    <div class="col-sm-12 col-md-5 mb-5">
                        <h5>Tipo de Orden</h5>
                        <b-form-select :state="(selectedOrderType != null) ? true : selectedOrderTypeState" v-model="selectedOrderType" :options="orderTypeOptions" class="m-0" size="lg"></b-form-select>
                    </div>

                    <article class="col-sm-12 col-md-3 mb-5">
                        <br>
                        <button type="submit" class="col-sm-12 btn btn-lg btn-primary">
                            <i class="fas fa-money-bill-alt"></i> Pagar
                        </button>
                    </article>

                </form>

            </section>

        </v-app>

    </main>

</template>

<script>

import { mapState } from 'vuex';
import restaurantApi from '@/core/services/api/restaurantApi.js';

export default {

    data(){
        return{
            selectedPaymentMethod: null,
            selectedPaymentMethodState: null,
            selectedOrderType: null,
            selectedOrderTypeState: null,
            paymentMethodOptions: [
                { value: null, text: 'Selecciona un metodo de pago', disabled: true },
            ],
            orderTypeOptions: [
                { value: null, text: 'Selecciona un tipo de orden', disabled: true },
            ],
            panel: [0],
        }
    },

    computed: {
        ...mapState("productsStore", [
            "cart",
        ])
    },

    methods: {

        getDate(){
            return new Date().toLocaleDateString('es-ES').replace("/", "-").replace("/", "-");
        },

        getFullDate(){
            return new Date().toLocaleString().replace("/", "-").replace("/", "-");
        },

        getTotalAccount(){
          var sum = 0;
          this.cart.forEach(ele => {
            sum += (+ele.element.price * ele.quantity);
          });
          if(this.cart.length == 0){
            this.$router.push({ name: 'dashboard' })
          }
          return sum;
        },

        validateInputs(){

            (this.selectedPaymentMethod == null) ? this.selectedPaymentMethodState = false : this.selectedPaymentMethodState = true;
            (this.selectedOrderType == null) ? this.selectedOrderTypeState = false : this.selectedOrderTypeState = true;

        },

        onSubmit(){

            this.validateInputs();

            if((this.selectedPaymentMethod && this.selectedOrderType) != null){

                // TODO: SI SE SELECCIONA EL METODO DE PAGO EFECTIVO ENTONCES PASA A LA PANTALLA DEL ESTADO DEL PEDIDO //

                // TODO: SI SE SELECICONA EL METODO DE PAGO CON TARJETA ENTONCES PUEDO ABRIR UN MODAL PARA QUE SE DIGITE LA TARJETA (HACER UNA SIMULACION PORQUE STRIPE REQUIRE CERTIFICADO SSL) LUEGO SE LLEVA A LA PANTALLA DE ESTADO DEL PEDIDO //
                
                // TODO: SI SE SELECCIONA EL TIPO DE ORDEN A DOMICILIO LUEGO DE LA PANTALLA DEL ESTADO DEL PEDIDO DEBO MOSTRAR UN MAPA CON LA RUTA DEL CLIENTE //

                alert("Todo bien!!!")

            }

        },

    },

    async created(){

        await restaurantApi.get('payment-methods')
        .then(({data}) => {
            data.data.forEach(ele => {
                this.paymentMethodOptions.push({
                    text: ele.description,
                    value: ele.id
                });
            });
        })
        .catch(({response}) => {
            console.error(response.data);
        });
        
        await restaurantApi.get('order-types')
        .then(({data}) => {
            data.data.forEach(ele => {
                this.orderTypeOptions.push({
                    text: ele.description,
                    value: ele.id
                });
            });
        })
        .catch(({response}) => {
            console.error(response.data);
        });

    },


}

</script>

<style>
.text-blue{
    color: blue;
}
</style>