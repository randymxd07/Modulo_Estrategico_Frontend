<template>
    <main class="m-0 vh-100 row justify-content-center align-items-center">
        
        <section v-if="orderIsReady == false" class="col-auto p-5 text-center">
            <article class="col-sm-12">
                <h1>Tiempo estimado para entregarte tu pedido</h1>
            </article>
            <article class="col-sm-12 mt-10">
                <Countdown :date="end" @onFinish="finish()"/>
            </article>
            <article class="col-sm-12">
                <img class="img-fluid" src="@/view/pages/orders/assets/images/loading_food.gif" alt="">
            </article>
        </section>
        
        <section v-show="orderIsReady == true" class="col-auto p-5 text-center">
            <article class="col-sm-12">
                <h1>Tu pedido ya está listo!!!</h1>
            </article>
            <article class="col-sm-12">
                <img class="img-fluid" src="@/view/pages/orders/assets/images/check.gif" alt="">
            </article>
            <article class="col-sm-12 mt-10">
                <router-link :to="{ name: 'dashboard' }">
                    <b-button variant="success" size="lg">
                        <i class="fas fa-chevron-circle-left"></i> Volver al Inicio
                    </b-button>
                </router-link>
            </article>
        </section>

    </main>

</template>

<script>

import Countdown from "@/view/pages/components/Countdown.vue";

export default {

    components: { 
        Countdown 
    },

    data () {
        return {
            end: '',
            orderIsReady: false,
        };
    },

    created(){

        if(localStorage.getItem('estimated_time') == null){

            let sumMins = 0;

            const cartArr = JSON.parse(localStorage.getItem('cart'));

            cartArr.forEach(ele => {
                sumMins += +ele.element.estimated_time.split(':')[1]
            })

            let date = new Date().toISOString();

            const dateToTimeStamp = new Date(date).getTime() + sumMins * 60000;

            const newDate = new Date(dateToTimeStamp).toISOString();

            localStorage.setItem('estimated_time', newDate);

            this.end = newDate;

        } else {

            this.end = localStorage.getItem('estimated_time');

        }
        
    },

    destroyed(){
        if(this.$router.history.current.name == 'payment'){
            this.$router.push({ name: 'order-status' })
        } else {
            this.$router.go();
        }
    },

    methods: {
        finish() {
            this.orderIsReady = true;
            localStorage.removeItem('cart');
            localStorage.removeItem('estimated_time');
            localStorage.removeItem('longitude');
            localStorage.removeItem('latitude');
        }
    }

}

</script>

<style>

</style>