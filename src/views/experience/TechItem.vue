<template lang="pug">    
    div.stats
        vs-row(vs-w=12 vs-justify="center")
            vs-col(vs-w="3" v-for="(icon, idx) in icons" :key="idx")
                span
                font-awesome-icon(:icon="icon.classes" style="color:black;" size="3x") 
                p.card_text {{icon.name}}
</template>

<script>
export default {
  name: "TechItem",
  props: {
    icons: {
      type: Array,
      required: true
    }
  }
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
