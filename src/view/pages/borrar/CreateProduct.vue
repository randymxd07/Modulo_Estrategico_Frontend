<template>

    <main>

        <h1 class="mb-10">Crea un Producto</h1>

        <form>

            <section class="row">

                <article class="col-sm-12 col-md-6">
                    <label
                        class="form-label mb-3 col-sm-12"
                        for="front_identification_image"
                    >
                        Selecciona una imagen para tu producto
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
                            <b-form-group id="" label="Nombre" label-for="">
                                <b-form-input
                                id=""
                                v-model="text"
                                placeholder="Escribe el nombre del producto"
                                required
                                ></b-form-input>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Precio" label-for="">
                                <b-form-input
                                    class="text-right"
                                    id=""
                                    v-model="text"
                                    placeholder="RD$ 0.00"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </article>
                    </div>
                    
                    <div class="row">
                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Categoría de Producto" label-for="">
                                <b-form-select v-model="selected" :options="options"></b-form-select>
                            </b-form-group>
                        </article>

                        <article class="col-sm-12 col-md-6">
                            <b-form-group id="" label="Tiempo Estimado de Preparación" label-for="">
                                <b-form-timepicker v-model="value" locale="en" placeholder="Selecciona un tiempo estimado"></b-form-timepicker>
                            </b-form-group>
                        </article>
                    </div>

                    <div class="row">
                        <article class="col-sm-12">
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                placeholder="Escribe una breve descripcion del producto"
                                rows="3"
                                max-rows="6"
                            ></b-form-textarea>
                        </article>
                    </div>

                    <div class="row mt-5">
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
            options: [
                { value: null, text: 'Selecciona una categoria de producto', disabled: true },
                { value: 'Salsas', text: 'Salsas' },
                { value: 'Productos Lacteos', text: 'Productos Lacteos' },
                { value: 'Productos Enlatados', text: 'Productos Enlatados' }
            ]
        }
    }
}
</script>

<style>

</style>