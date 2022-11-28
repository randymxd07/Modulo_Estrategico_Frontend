<template>

    <main>

        <h1 class="mb-10">Crea un Oferta</h1>

        <form>

            <section class="row">

                <article class="col-sm-12 col-md-6">
                    <label
                        class="form-label mb-3 col-sm-12"
                        for="front_identification_image"
                    >
                        Selecciona una imagen promocional para tu oferta
                    </label>
                    <input
                        hidden
                        type="file"
                        id="front_identification_image"
                        accept=".jpg, .jpeg, .png"
                        @change="uploadFrontIdentificationImage($event)"
                        class="form-control form-control-lg form-control-solid"
                    />
                    <label class="col-sm-12" for="front_identification_image">
                        <img
                            alt="image"
                            class="img-fluid"
                            v-if="front_identification_image"
                            :src="front_identification_image"
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
                            <b-form-group id="" label="Titulo de la Oferta" label-for="">
                                <b-form-input
                                id=""
                                v-model="text"
                                placeholder="Escribe el titulo de la oferta"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Porcentaje de Descuento" label-for="">
                                <b-form-input
                                    id=""
                                    v-model="text"
                                    placeholder="0.00%"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </article>
                    </div>
                    
                    <div class="row">
                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Fecha de Inicio" label-for="">
                                <b-form-datepicker placeholder="Selecciona una fecha de inicio" id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Fecha de Finalizacion" label-for="">
                                <b-form-datepicker placeholder="Selecciona una fecha de finalizacion" id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                            </b-form-group>
                        </article>
                    </div>

                    <div class="row">
                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Tipo de Oferta" label-for="">
                                <b-form-select v-model="selected" :options="options"></b-form-select>
                            </b-form-group>
                        </article>
                        
                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Tipo de Producto" label-for="">
                                <b-form-select v-model="selected" :options="optionProducts"></b-form-select>
                            </b-form-group>
                        </article>
                    </div>

                    <div class="row">
                        <article class="col">
                            <b-button class="col-sm-12" variant="primary">
                                <i class="fas fa-ban"></i> Cancelar
                            </b-button>
                        </article>
                        <article class="col">
                            <b-button class="col-sm-12" variant="success">
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
export default {
    data(){
        return{
            selected: null,
            optionProducts: [
                { value: null, text: 'Selecciona un tipo de producto', disabled: true },
                { value: 'Pizzas', text: 'Pizzas' },
                { value: 'Bebidas', text: 'Bebidas' },
                { value: 'Hamburguesas', text: 'Productos Enlatados' }
            ],
            options: [
                { value: null, text: 'Selecciona un tipo de oferta', disabled: true },
                { value: 'Oferta de Tiempo Limitado', text: 'Oferta de Tiempo Limitado' },
                { value: 'Oferta por Cliente', text: 'Oferta por Cliente' },
                { value: 'Oferta por Usuario', text: 'Oferta por Usuario' }
            ]
        }
    }
}
</script>

<style>

</style>