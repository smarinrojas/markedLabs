<template>
    <div class="container-2">
        <button @click="printDoc" class="d-print-none btn-primary w-100">Imprimir etiquetas</button>
        <div v-for="(sample, index) in samplesList" :key="index" class="sample-tag">
            <div>Numero de muestra</div>
            <div>{{(index + 1)}} </div>
            <div>Nombre del propietario: </div>
            <div>{{sample.property}}</div>
            <div>Cedula</div>
            <div>{{sample.propertyIdentification}}</div>
            <div>Fecha de muestreo</div>
            <div>{{sample.dateOfSampling}}</div>
            <div>Ciudad</div>
            <div>{{sample.city}}</div>
            <div>Vereda</div>
            <div>{{sample.sidewalk}}</div>
            <div>Porcentaje sombrio</div>
            <div>{{sample.shadowPercent}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SamplesTags",
    data:function(){
        return({
            samplesList: this.$store.state.samples 

        })
    },

    methods:{
        printDoc(){
            window.print()
        },
        getSamplesData(){
            this.samplesList = this.$store.state.samples[0].tableContent
        }
    },
    mounted(){
        this.getSamplesData()
    }
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-wrap: wrap;
}
    .sample-tag{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: .3rem;
        border: $border;
        max-width: 10cm;
        

        div{
            padding: .2rem;
            border-bottom: $border;
        }
        div:nth-child(odd){
            font-weight: bolder;
        }
    }

    @media print{

        @page :first {
            margin: 2cm 1cm;
        }
        
        @page :left {
        margin: .5cm;
        }

        @page :right {
        margin: .5cm;
        }

                
        body {
        font-size: 9pt;
        line-height: 1.3;
        }

        .d-print-none{
            display: none;
        }

    }
</style>