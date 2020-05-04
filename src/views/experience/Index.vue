<template lang="pug">
    div
      h1 My Experience
      p(v-html="$t('experience_1')")
      br
      p(v-html="$t('buy_platzi')")
      br
      vs-tabs(alignment="fixed")
        vs-tab(label="Web Development" icon="public")
          back-end
          front-end
        vs-tab(label="Manangement" icon="explore")
          manangement
        vs-tab(label="Technologies" icon="devices")
          technologies
                  
</template>

<script>
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Technologies from "./Technologies";
import Manangement from "./Manangement";
export default {
  name: "Experience",
  components: {
    FrontEnd,
    BackEnd,
    Manangement,
    Technologies
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 15px;
}
p {
  font-size: 20px;
}
.card_text {
  color: black;
}
.stats {
  margin-top: 15px;
}
.django {
  font-family: "Roboto", Corbel, Avenir, "Lucida Grande", "Lucida Sans",
    sans-serif;
}
</style>
