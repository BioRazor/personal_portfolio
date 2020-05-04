<template lang="pug">
    vs-row(vs-justify="center" )
        vs-col(type="flex" vs-justify="center" vs-aling="center")
          vs-card
            div(slot="header")
              h2.card_text Backend
            p.card_text {{$t("backend_description")}}

            div.stats
              vs-row(vs-w=12 vs-justify="center")
                vs-col(vs-w="6")
                  span
                    font-awesome-icon(:icon='["fab", "python"]' style="color:black;" size="3x") 
                    p.card_text Python
                vs-col(vs-w="6")
                  span
                    font-awesome-icon(:icon='["fab", "python"]' style="color:black;" size="3x") 
                    p.card_text.django django
                vs-col(vs-w="12")
                  span
                    font-awesome-icon(:icon='["fab", "python"]' style="color:black;" size="3x") 
                    p.card_text.django django-rest
</template>

<script>
export default {};
</script>

<style scoped>
.card_text {
  color: black;
}
.django {
  font-family: "Roboto", Corbel, Avenir, "Lucida Grande", "Lucida Sans",
    sans-serif;
}
.stats {
  margin-top: 15px;
}
p {
  font-size: 20px;
}
</style>
