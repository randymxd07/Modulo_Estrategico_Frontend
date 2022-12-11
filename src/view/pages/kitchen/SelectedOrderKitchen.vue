<template>

  <main class="container p-10">

    <h1>Cocina</h1>

    <section v-if="haveOrders == false" class="row mt-10">

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Nuevas
            </h3>
            <div class="my-5" v-for="(elem, index) in 1" :key="index">
            </div>
        </article>

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Preparandose
            </h3>
            <div class="my-5">
            </div>
        </article>

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Terminadas
            </h3>
            <section v-if="finishedOrders.length != 0">
                <div class="my-5">
                </div>
            </section>
        </article>

    </section>

    <section v-else class="row mt-10">

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Nuevas
            </h3>
            <section v-if="newOrders.length != 0">
                <div class="card my-5" v-for="(elem, index) in newOrders" :key="index">
                    <h4 class="card-header">
                        {{fullname}}
                    </h4>
                    <div class="p-5 m-0" v-for="data in elem.order_details" :key="data">
                        <p class="text-muted">
                            {{data.product_name}}
                            <span>
                                <b-badge>{{data.quantity}}</b-badge>
                            </span>
                        </p> 
                    </div>
                    <b-button @click="setOrdersInPreparation" variant="primary mx-5 mb-5">
                        Preparar
                    </b-button>
                </div>
            </section>
        </article>

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Preparandose
            </h3>
            <section v-if="ordersInPreparation.length != 0">
                <div class="card my-5" v-for="(elem, index) in ordersInPreparation" :key="index">
                    <h4 class="card-header">
                        {{fullname}}
                    </h4>
                    <div class="p-5 m-0" v-for="data in elem.order_details" :key="data">
                        <p class="text-muted">
                            {{data.product_name}}
                            <span>
                                <b-badge>{{data.quantity}}</b-badge>
                            </span>
                        </p> 
                    </div>
                    <b-button @click="setFinishedOrders" variant="primary mx-5 mb-5">
                        Terminado
                    </b-button>
                </div>
            </section>
        </article>

        <article class="col-sm-4 card">
            <h3 class="card-header text-center">
                Terminadas
            </h3>
            <section v-if="finishedOrders.length != 0">
                <div class="card my-5" v-for="(elem, index) in finishedOrders" :key="index">
                    <h4 class="card-header">
                        {{fullname}}
                    </h4>
                    <div class="p-5 m-0" v-for="data in elem.order_details" :key="data">
                        <p class="text-muted">
                            {{data.product_name}}
                            <span>
                                <b-badge>{{data.quantity}}</b-badge>
                            </span>
                        </p> 
                    </div>
                    <b-button @click="finish" variant="primary mx-5 mb-5">
                        Finalizar
                    </b-button>
                </div>
            </section>
        </article>

    </section>

  </main>

</template>

<script>
import { mapMutations } from 'vuex'
import restaurantApi from '@/core/services/api/restaurantApi.js';

export default {
    
    data(){
        return {
            haveOrders: false,
            fullname: '',
            newOrders: [],
            ordersInPreparation: [],
            finishedOrders: [],
        }
    },

    methods: {
        
        ...mapMutations("orderStatusStore", ["setOrderStatus"]),

        async setOrdersInPreparation(){

            this.newOrders.forEach(ele => {
                this.ordersInPreparation.push(ele);
            });

            this.newOrders = [];

            this.setOrderStatus('inPreparation');

            const order_id = localStorage.getItem('order_id');

            await restaurantApi.post(`orders/sendOrderInPreparationEmail/${order_id}`)
            .then(({data}) => {
                console.log(data);
            })
            .catch(({response}) => {
                console.log(response.data);
            })

        },
        
        setFinishedOrders(){
            this.ordersInPreparation.forEach(ele => {
                this.finishedOrders.push(ele);
            });
            this.ordersInPreparation = [];
            this.setOrderStatus('finished');
        },

        finish(){
            this.finishedOrders = [];
        },

    },

    created(){

        setTimeout(() => {
            this.$router.go();
        }, 10000);

        const orders = JSON.parse(localStorage.getItem('paymentOrders'));

        if(orders.length != 0){
            this.haveOrders = true;
        } else {
            this.setOrderStatus('new');
        }
        
        this.fullname = JSON.parse(localStorage.getItem("user")).fullname;
        
        if(localStorage.getItem('orderStatus') == "new"){
            this.newOrders = JSON.parse(localStorage.getItem('paymentOrders'));
        }

        if(localStorage.getItem('orderStatus') == "inPreparation"){
            this.ordersInPreparation = JSON.parse(localStorage.getItem('paymentOrders'))
        }

        if(localStorage.getItem('orderStatus') == "finished"){
            this.finishedOrders = JSON.parse(localStorage.getItem('paymentOrders'))
        }

    }

}

</script>

<style>

</style>