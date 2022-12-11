<template>

     <main>

        <section v-if="orderStatus == 'inPreparation'" class="m-0 vh-100 row justify-content-center align-items-center">
            <section class="col-auto p-5 text-center">
                <article class="col-auto p-5 text-center">
                    <article class="col-sm-12">
                        <h1>Tu pedido ya está siendo preparado</h1>
                        <p class="lead">Tiempo estimado para tu orden:</p>
                    </article>
                    <article class="col-sm-12 mt-10">
                        <Countdown :date="end" @onFinish="finish()"/>
                    </article>
                    <article class="col-sm-12">
                        <img width="400px" height="400px" class="img-fluid bordered" src="@/view/pages/orders/assets/images/loading_food_03.gif" alt="">
                    </article>
                </article>
            </section>
        </section>

        <section v-else-if="orderStatus == 'finished'" class="m-0 vh-100 row justify-content-center align-items-center">
            <section class="col-auto p-5 text-center">
                <article class="col-sm-12">
                    <h1>Tu pedido ya está listo!!!</h1>
                </article>
                <article class="col-sm-12">
                    <img class="img-fluid" src="@/view/pages/orders/assets/images/check.gif" alt="">
                </article>
                <article class="col-sm-12 mt-10">
                    <router-link :to="{ name: 'dashboard' }">
                        <b-button @click="finish2" variant="success" size="lg">
                            <i class="fas fa-chevron-circle-left"></i> Volver al Inicio
                        </b-button>
                    </router-link>
                </article>
            </section>
        </section>

        <section v-else class="m-0 vh-100 row justify-content-center align-items-center">
            <article class="col-auto p-5 text-center">
                <article class="col-sm-12">
                    <h1>Tu pedido fue enviado a la cocina</h1>
                    <p class="lead">Espera hasta que tomen tu orden</p>
                </article>
                <article class="col-sm-12">
                    <img width="400px" height="400px" class="img-fluid bordered" src="@/view/pages/orders/assets/images/loading_food_02.gif" alt="">
                </article>
            </article>
        </section>

    </main>

</template>

<script>

import Countdown from "@/view/pages/components/Countdown.vue";
import { mapMutations, mapState } from 'vuex';

export default {

    components: { 
        Countdown 
    },

    computed: {
        ...mapState("orderStatusStore", [
            "orderStatus"
        ])
    },

    data () {
        return {
            end: '',
        };
    },

    created(){

        const orderStatus = localStorage.getItem('orderStatus');

        this.setOrderStatus(orderStatus);

        if(orderStatus == "new"){
            setTimeout(() => {
                this.$router.go();
            }, 10000);
        }

        if(orderStatus == "inPreparation"){

            setTimeout(() => {
                this.$router.go();
            }, 10000);

            if(localStorage.getItem('selected_estimated_time') == null){
    
                let sumMins = 0;
    
                const cartArr = JSON.parse(localStorage.getItem('selectedCart'));
    
                cartArr.order_details.forEach(ele => {
                    sumMins += +ele.estimated_time.split(':')[1]
                })
    
                let date = new Date().toISOString();
    
                const dateToTimeStamp = new Date(date).getTime() + sumMins * 60000;
    
                const newDate = new Date(dateToTimeStamp).toISOString();
    
                localStorage.setItem('selected_estimated_time', newDate);
    
                this.end = newDate;
    
            } else {
    
                this.end = localStorage.getItem('selected_estimated_time');
    
            }

        }
        
    },

    destroyed(){
        if(this.$router.history.current.name == 'selected-payment'){
            this.$router.push({ name: 'selected-order-status' })
        } else {
            this.$router.go();
        }
    },

    methods: {

        ...mapMutations("orderStatusStore", ["setOrderStatus"]),

        finish() {
            localStorage.removeItem('selectedCart');
            localStorage.removeItem('selected_estimated_time');
            localStorage.removeItem('paymentOrders');
            localStorage.removeItem('longitude');
            localStorage.removeItem('latitude');
            this.setOrderStatus('finished');
        },

        finish2() {
            localStorage.removeItem('selectedCart');
            localStorage.removeItem('selected_estimated_time');
            localStorage.removeItem('paymentOrders');
            localStorage.removeItem('longitude');
            localStorage.removeItem('latitude');
            localStorage.removeItem('orderStatus');
        }

    }

}

</script>

<style>

</style>