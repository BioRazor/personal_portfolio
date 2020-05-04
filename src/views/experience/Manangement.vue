<template lang="pug">
    vs-row(vs-justify="center")
        vs-col(type="flex" vs-justify="center" vs-aling="center")
          vs-card
            div(slot="header")
              h2.card_text Manangement
            p(v-html="$t('manangement_decription')").card_text
</template>

<script>
export default {
  name: "Manangement"
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
