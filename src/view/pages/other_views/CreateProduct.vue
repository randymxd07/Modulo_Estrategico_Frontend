<template>

    <main>

        <h1 class="mb-10">Crea un Producto</h1>

        <form enctype="multipart/form-data" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">

            <section class="row">

                <article class="col-sm-12 col-md-6">
                    <label
                        class="form-label mb-3 col-sm-12"
                        for="image_url"
                    >
                        Selecciona una imagen para tu producto
                    </label>
                    <input
                        hidden
                        ref="image_url"
                        type="file"
                        id="image_url"
                        accept=".jpg, .jpeg, .png, .webp"
                        @change="uploadImage($event)"
                        class="form-control form-control-lg form-control-solid"
                    />
                    <label class="col-sm-12" for="image_url">
                        <img
                            alt="image"
                            class="img-fluid"
                            v-if="image_src"
                            :src="image_src"
                        />
                        <div
                            v-else
                            class="cursor-pointer alert bg-light-primary border border-primary border-dashed w-100 p-14 text-center"
                        >
                        <i class="fas fa-3x fa-upload text-primary"></i>
                        </div>
                    </label>
                </article>

                <article class="col-sm-12 col-md-6">

                    <div class="row">
                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="name" label="Nombre" label-for="name">
                                <b-form-input
                                id="name"
                                v-model="name"
                                placeholder="Escribe el nombre del producto"
                                ></b-form-input>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="price" label="Precio" label-for="price">
                                <b-form-input
                                    v-money="money"
                                    v-model="price"
                                    class="text-right"
                                    id="price"
                                    placeholder="RD$ 0.00"
                                ></b-form-input>
                            </b-form-group>
                        </article>
                    </div>
                    
                    <div class="row">
                        <article class="col-sm-12 col-md-6">
                            <b-form-group 
                                id="product_category_id" 
                                label="Categoría de Producto" 
                                label-for="product_category_id"
                            >
                                <b-form-select 
                                    id="product_category_id"
                                    v-model="product_category_id" 
                                    :options="productCategories"
                                ></b-form-select>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6 mb-5">
                            <label class="form-label" for="estimated_time">
                                Tiempo Estimado de Preparación
                            </label>
                            <b-form-timepicker
                                v-model="estimated_time" 
                                locale="de" 
                                show-seconds
                                id="estimated_time"
                                placeholder="Selecciona un tiempo estimado"
                            ></b-form-timepicker>
                        </article>
                    </div>

                    <div class="row">
                        <article class="col-sm-12">
                            <b-form-textarea
                                id="description"
                                v-model="description"
                                placeholder="Escribe una breve descripcion del producto"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </article>
                    </div>

                    <div class="row mt-5">
                        <article class="col">
                            <b-button type="reset" class="col-sm-12" variant="primary">
                                <i class="fas fa-ban"></i> Cancelar
                            </b-button>
                        </article>
                        <article class="col">
                            <b-button type="submit" class="col-sm-12" variant="success">
                                <i class="fas fa-save"></i> Guardar
                            </b-button>
                        </article>
                    </div>

                </article>

            </section>

        </form>

    </main>

</template>

<script>

import {VMoney} from 'v-money';
import restaurantApi from "@/core/services/api/restaurantApi";

export default {

    directives: {money: VMoney},

    data(){
        return{
            name: '',
            description: '',
            product_category_id: null,
            price: '',
            image_url: null,
            image_src: null,
            estimated_time: '',
            score: 0,
            productCategories: [
                { value: null, text: 'Selecciona una categoria de producto', disabled: true },
            ],
            money: {
                decimal: '.',
                thousands: ',',
                precision: 2,
            },
        }
    },

    async created(){
        await restaurantApi.get('product-categories')
        .then(({data}) => {
            data.data.forEach(ele => {
                this.productCategories.push({
                    text: ele.name,
                    value: ele.id,
                });
            });
        })
        .catch(err => {
            console.error(err.response.data);
        });
    },

    methods: {

        uploadImage($event){

            const file = $event.target.files[0];

            this.image_src = URL.createObjectURL(file);

            const reader = new FileReader()

            let rawImg;

            reader.onloadend = () => {
                rawImg = reader.result.replace("webp", "png").replace("jpeg", "png");
                this.image_url = rawImg;
            }

            reader.readAsDataURL(file);

        },

        async onSubmit(){

            let json = {
                name:  this.name,
                description: this.description,
                product_category_id: this.product_category_id,
                price: this.price,
                image_url: this.image_url,
                estimated_time: this.estimated_time,
                score: 0,
                status: true,
            };

            // console.log(JSON.stringify(json, null, 3));

            await restaurantApi.post('products', json)
            .then(data => {
                console.log(data);
                this.$router.go();
            })
            .catch(({response}) => {
                console.error(response.data);
                if(response.data.status == 401){
                    localStorage.clear();
                    this.$router.go();
                }
            })

        },

        onReset(){
            this.name = '';
            this.description = '';
            this.product_category_id = null;
            this.price = '';
            this.image_url = null;
            this.image_src = null;
            this.estimated_time = '';
            this.score = 0;
        },

    },

}

</script>

<style>

</style>