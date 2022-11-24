<template>
    <main>

        <h1 class="mb-10">Mis Direcciones</h1>

        <v-app>

            <v-expansion-panels>

                <v-expansion-panel class="mb-5" style="border-radius: 20px" v-for="data in addressess" :key="data.id">

                    <v-expansion-panel-header>

                        <div class="col-sm-12 col-md-6 text-left">

                            <div class="row">
                                <h3 class="flaticon2-location"> {{data.title}}</h3>
                            </div>

                            <div class="row">
                                <h5 class="lead">{{data.address}}</h5>
                                <p class="lead">{{data.reference}}</p>
                            </div>

                        </div>

                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                        <iframe 
                            class="col-sm-12"
                            :src="data.url" 
                            height="450" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
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
            addressess: [
                {
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230186.95418866532!2d-100.44352624902072!3d25.649037315110775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2sdo!4v1669255701574!5m2!1ses!2sdo',
                    title: 'Trabajo',
                    address: 'AV HIDALGO NO. 95, EL CARMEN, 04100,  Distrito Federal, Coyoacán, México', 
                    reference: 'Calle B, la casa amarilla',
                },
                { 
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7121080.362176141!2d-103.92841424405393!3d26.22995516532958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2sdo!4v1669255576423!5m2!1ses!2sdo',
                    title: 'Mi Casa',
                    address: 'INSURGENTES SUR 2383, SAN ANGEL, San Angel, ALVARO OBREGON, México', 
                    reference: 'Cerca del OXXO',
                },
                { 
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758762.6440114956!2d-104.79782302703157!3d23.072679922407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1ses!2sdo!4v1669255768007!5m2!1ses!2sdo',
                    title: 'Casa de Carol',
                    address: 'ISAURO ALFARO 108 NO. 3A, TAMPICO, Tamaulipas, Tampico, México',
                    reference: 'Por el parque, al lado del residencial Don Camilo',
                },
            ],
        }
    }
}
</script>

<style>

</style>