<template>
    <main class="m-0 vh-100 row justify-content-center align-items-center">
        <section class="col-auto p-5 text-center">
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
            end: new Date('2022-12-05T16:37:00')
        };
    },

    destroyed(){
        if(this.$router.history.current.name == 'payment'){
            this.$router.push({ name: 'order-status' })
        }
    },

    methods: {
        finish() {
            console.log('finish');
        }
    }

}

</script>

<style>

</style>