<template>

    <main class="container">

        <h3 class="mb-10">Realizar Pago</h3>
        
        <v-app>

            <v-expansion-panels v-if="cart.length != 0"  v-model="panel" multiple style="border-radius: 20px">

                <v-expansion-panel v-for="data in 1" :key="data.id">

                    <v-expansion-panel-header>

                        <div class="col-sm-12 col-md-6 text-left">

                            <div class="row">
                                <h3>{{fullname}}</h3>
                            </div>

                            <div class="row">
                                <h5 class="lead">{{getDate()}}</h5>
                            </div>

                        </div>

                        <div class="col-sm-12 col-md-6 text-right">
                            <h5>TOTAL A PAGAR: <span class="text-primary">RD$ {{getTotalAccount().toFixed(2)}}</span></h5>
                        </div>

                    </v-expansion-panel-header>

                    <v-expansion-panel-content v-if="cart.length != 0" class="text-center">
            
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
                                        <b-th>SUBTOTAL</b-th>
                                    </b-tr>
                                </b-thead>

                                <!-- TABLE BODY -->
                                <b-tbody v-for="data in cart" :key="data.id">
                                    <b-tr>
                                        <b-td>{{data.element.name}}</b-td>
                                        <b-td>{{data.quantity}}</b-td>
                                        <b-td>RD$ {{data.element.price}}</b-td>
                                        <b-td>RD$ {{(data.quantity * data.element.price).toFixed(2)}}</b-td>
                                    </b-tr>
                                </b-tbody>

                            </b-table-simple>

                        </div>

                    </v-expansion-panel-content>

                </v-expansion-panel>

            </v-expansion-panels>
            
            <!-- <img v-show="(soldTickets.length === 0)" src="@/assets/images/no-data-found.png" alt="No Data Found"> -->

            <section>

                <form class="row my-5">

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
                        <!-------------------------
                            PAY WITH CASH BUTTON 
                        --------------------------->
                        <button
                            @click="payWithCash"
                            v-if="(selectedPaymentMethod != 2)"
                            :disabled="(selectedPaymentMethod && selectedOrderType) == null"
                            type="button"
                            class="col-sm-12 btn btn-lg btn-primary"
                        >
                            <i class="fas fa-money-bill-alt"></i> Pagar
                        </button>
                        <!-------------------------
                            PAY WITH CARD BUTTON 
                        --------------------------->
                        <button
                            v-else
                            :disabled="(selectedPaymentMethod && selectedOrderType) == null"
                            v-b-modal.modal-1
                            type="button"
                            class="col-sm-12 btn btn-lg btn-primary"
                        >
                            <i class="fas fa-money-bill-alt"></i> Pagar
                        </button>
                    </article>

                    <!-- MODAL -->
                    <b-modal
                        hide-footer
                        centered
                        size="md" 
                        id="modal-1" 
                        title="Ingresa tu Tarjeta de Crédito"
                    >
                        <form class="container">
                            <section class="row">
                                <article class="col-sm-12">
                                    <b-form-group
                                        id="email"
                                        label="Correo electrónico"
                                        label-for="email"
                                    >
                                        <b-form-input
                                            size="lg"
                                            id="email"
                                            type="email"
                                            placeholder="Ingresa tu correo electrónico"
                                            required
                                        ></b-form-input>
                                    </b-form-group>
                                </article>
                                <article class="col-sm-12">
                                    <b-form-group
                                        id="card"
                                        label="Tarjeta"
                                        label-for="card"
                                    >
                                        <b-form-input
                                            :state="(cardNumber.length == 19) ? true : null"
                                            v-model="cardNumber"
                                            v-maska="'#### #### #### ####'"
                                            size="lg"
                                            id="card"
                                            placeholder="#### #### #### ####"
                                            required
                                        ></b-form-input>
                                    </b-form-group>
                                </article>
                                <article class="col-sm-6">
                                    <b-form-input
                                        class="mb-5"
                                        size="lg"
                                        id="MMAA"
                                        v-model="MMAA"
                                        v-maska="'## / ##'"
                                        placeholder="MM / AA"
                                        required
                                    ></b-form-input>
                                </article>
                                <article class="col-sm-6">
                                    <b-form-input
                                        class="mb-5"
                                        size="lg"
                                        id="cvv"
                                        v-model="CVV"
                                        v-maska="'###'"
                                        placeholder="CVV"
                                        required
                                    ></b-form-input>
                                </article>
                                <article class="col-sm-12">
                                    <b-form-group
                                        id="card"
                                        label="Nombre en la Tarjeta"
                                        label-for="card"
                                    >
                                        <b-form-input
                                            size="lg"
                                            id="card"
                                            v-model="cardName"
                                            placeholder="Escribe el nombre de la tarjeta"
                                            required
                                        ></b-form-input>
                                    </b-form-group>
                                </article>
                                <article class="col-sm-12">
                                    <b-form-checkbox
                                        class="mb-5"
                                        size="lg"
                                        id="saveCard"
                                        name="saveCard"
                                        :value="true"
                                        :unchecked-value="false"
                                    >
                                        Guardar la información de la tarjeta 
                                    </b-form-checkbox>
                                </article>
                                <article class="col-sm-12">
                                    <b-button 
                                        @click="payWithCard"
                                        type="button" 
                                        class="col-sm-12" 
                                        size="lg" 
                                        variant="primary"
                                    >
                                        <i class="fas fa-credit-card"></i> Realizar Pago
                                    </b-button>
                                </article>
                            </section>
                        </form>
                    </b-modal>

                </form>

            </section>

        </v-app>

    </main>

</template>

<script>

import { maska } from 'maska'
import { mapState } from 'vuex';
import restaurantApi from '@/core/services/api/restaurantApi.js';

export default {

    directives: { maska },

    data(){
        return{
            fullname: '',
            cardNumber: '',
            MMAA: '',
            CVV: '',
            cardName: '',
            showSetCardModal: false,
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
            orderDetails: [],
            panel: [0],
        }
    },

    computed: {
        ...mapState("productsStore", [
            "cart"
        ])
    },

    methods: {

        getDate(){
            return new Date().toLocaleDateString('es-ES');
        },

        getFullDate(){
            return new Date().toLocaleString();
        },

        getTotalAccount(){
            var sum = 0;
            if(this.cart.length != 0){
                this.cart.forEach(ele => {
                    sum += (+ele.element.price * ele.quantity);
                });
            }
            return sum;
        },

        validateInputs(){

            (this.selectedPaymentMethod == null) ? this.selectedPaymentMethodState = false : this.selectedPaymentMethodState = true;
            (this.selectedOrderType == null) ? this.selectedOrderTypeState = false : this.selectedOrderTypeState = true;

        },

        async payWithCash(){

            this.validateInputs();

            if((this.selectedPaymentMethod == 1 && this.selectedOrderType) != null){

                this.orderDetails = [];

                if(this.cart.length != 0){
                    this.cart.forEach(ele => {
                        this.orderDetails.push({
                            product_id: ele.element.id,
                            quantity: ele.quantity,
                            discount: ele.element.discount,
                        })
                    });
                }

                let json = {
                    order_type_id: this.selectedOrderType,
                    payment_method_id: this.selectedPaymentMethod,
                    latitude: localStorage.getItem('latitude'),
                    longitude: localStorage.getItem('longitude'),
                    status: true,
                    order_details: this.orderDetails
                }

                // console.log(JSON.stringify(json, null, 3));

                await restaurantApi.post('orders', json)
                .then(({data}) => {
                    // console.log(data);
                    localStorage.setItem('paymentOrders', JSON.stringify(this.cart));
                    localStorage.setItem('order_id', JSON.stringify(data.data.id));
                    this.$router.push({ name: 'order-status' })
                })
                // .catch(({response}) => {
                //     console.error(response.data);
                // })

            }

        },

        async payWithCard(){

            this.validateInputs();

            if((this.selectedPaymentMethod == 2 && this.selectedOrderType) != null){

                this.orderDetails = [];

                this.cart.forEach(ele => {
                    this.orderDetails.push({
                        product_id: ele.element.id,
                        quantity: ele.quantity
                    })
                });

                let json = {
                    order_type_id: this.selectedOrderType,
                    payment_method_id: this.selectedPaymentMethod,
                    latitude: localStorage.getItem('latitude'),
                    longitude: localStorage.getItem('longitude'),
                    status: true,
                    order_details: this.orderDetails
                }

                // console.log(JSON.stringify(json, null, 3));

                await restaurantApi.post('orders', json)
                .then(({data}) => {
                    // console.log(data);
                    localStorage.setItem('paymentOrders', JSON.stringify(this.cart));
                    localStorage.setItem('order_id', JSON.stringify(data.data.id));
                    this.$router.push({ name: 'order-status' })
                })
                // .catch(({response}) => {
                //     console.error(response.data);
                // })

            }

        },

    },

    async created(){

        // console.log(this.cart);

        if(this.cart.length == 0){
            this.$router.push({ name: 'dashboard' })
        }

        navigator.geolocation.watchPosition(pos => {
            localStorage.setItem('longitude', pos.coords.longitude);
            localStorage.setItem('latitude', pos.coords.latitude);
            // console.log('Longitude: '+pos.coords.longitude, '\n\nLatitude: '+pos.coords.latitude);
        })

        this.fullname = JSON.parse(localStorage.getItem('user')).fullname;

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