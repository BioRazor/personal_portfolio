<template lang="pug">
  div
    div.name      
      span
        |{{$t("HiIm")}}
      b.highlight
        |  David Abreu
    p.description 💻 {{$t("resumeDegree")}}
    p.description {{$t("resumeDescription")}}
    p(v-html="$t('resume_spec')").description
    p.description {{$t("social")}}
    vs-row(vs-w="12" vs-justify="space-around")
    
      span.icons(v-for="(icon, idx) in icons" :key="idx")
        vs-button(color="primary" type="filled" :href="icon.href" target="_blank")
          font-awesome-icon(:icon="icon.classes" :style="{'color': icon.color}") 
          |  {{icon.label}}
    
        
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      icons: [
        {
          classes: ["fab", "linkedin"],
          color: "white",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/biorazor/"
        },
        {
          classes: ["fab", "twitter"],
          color: "white",
          label: "Twitter",
          href: "https://twitter.com/DA2abreu"
        },
        {
          classes: ["fab", "github"],
          color: "white",
          label: "GitHub",
          href: "https://github.com/BioRazor"
        },
        {
          classes: ["fab", "instagram"],
          color: "white",
          label: "Instagram",
          href: "https://instagram.com/BioRazor/"
        },
        {
          classes: ["fab", "facebook"],
          color: "white",
          label: "Facebook",
          href: "https://facebook.com/BioRazor/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.name {
  font-size: 32pt;
}
.highlight {
  color: rgb(35, 130, 255);
}
.description {
  font-size: 25pt;
}
.icons {
  padding: 20px 0;
}
</style>
