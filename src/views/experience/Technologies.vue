<template lang="pug">
    vs-row(vs-justify="center")
        vs-col(type="flex" vs-justify="center" vs-aling="center")
          vs-card
            div(slot="header")
              h2.card_text Technologies
            p(v-html="$t('tech_description')").card_text
            tech-item(:icons="icons" style="margin-top:20px;")
</template>

<script>
import TechItem from "./TechItem";
export default {
  name: "Technologies",
  components: {
    TechItem
  },
  data() {
    return {
      icons: [
        {
          name: "Excel",
          classes: ["fa", "file-excel"]
        },
        {
          name: "PowerPoint",
          classes: ["fa", "file-powerpoint"]
        },
        {
          name: "Trello",
          classes: ["fab", "trello"]
        },
        {
          name: "Power BI",
          classes: ["fa", "tools"]
        },
        {
          name: "Semnox Parafait",
          classes: ["fa", "tools"]
        },
        {
          name: "Windows Server",
          classes: ["fab", "windows"]
        },
        {
          name: "Sysman",
          classes: ["fa", "tools"]
        },
        {
          name: "Mikrotik",
          classes: ["fa", "tools"]
        },
        {
          name: "Ubiquiti",
          classes: ["fa", "tools"]
        },
        {
          name: "Anviz CrossChex",
          classes: ["fa", "tools"]
        }
      ]
    };
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
