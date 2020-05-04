<template lang="pug">
  vs-row(vs-justify="center")
    vs-col(type="flex" vs-justify="center" vs-aling="center")
        vs-card
            div(slot="header")
                h2.card_text Front-End
            p.card_text {{$t("frontend_description")}}

            div.stats
                vs-row(vs-w=12 vs-justify="center")
                    vs-col(vs-w="6")
                        span
                        font-awesome-icon(:icon='["fab", "js"]' style="color:black;" size="3x") 
                        p.card_text Javascript
                    vs-col(vs-w="6")
                        span
                        font-awesome-icon(:icon='["fab", "vuejs"]' style="color:black;" size="3x") 
                        p.card_text Vue JS
                    vs-col(vs-w="6")
                        span
                        font-awesome-icon(:icon='["fab", "vuejs"]' style="color:black;" size="3x") 
                        p.card_text PrimeVue
                    vs-col(vs-w="6")
                        span
                        font-awesome-icon(:icon='["fab", "bootstrap"]' style="color:black;" size="3x") 
                        p.card_text Bootstrap
</template>

<script>
export default {
  name: "FrontEnd"
};
</script>

<style scoped>
.card_text {
  color: black;
}
p {
  font-size: 20px;
}
</style>
