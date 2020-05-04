<template lang="pug">
  vs-row(vs-w="12" vs-justify="center")
    vs-col(vs-lg="6" vs-sm="6" vs-xs="12" vs-type="flex")
      vs-navbar(v-model="activeItem" class="nabarx" type="gradient border" color="#1b262c")
        div(slot="title")
          vs-navbar-title D3A
        vs-navbar-item(index="1")
          vs-button(type="gradient" color="primary" icon="home" @click="activeItem = 1" to="/")
        vs-navbar-item(index="2")
          vs-button(type="gradient" color="danger" @click="activeItem = 2" to="/experience") Experience
        //- vs-navbar-item(index="3")
        //-   vs-button(type="gradient" color="warning" @click="activeItem = 3" :to="{ name: 'Experience'}") About Me
        vs-navbar-item(index="4")
          vs-button(type="gradient" color="success" @click="selectLang('en')") ENG
        vs-navbar-item(index="5") 
          vs-button(type="gradient" color="dark" @click="selectLang('es')") ES
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    activeItem: 0
  }),
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.vs-navbar {
  border-radius: 20px;
  padding: 8px;
  background: transparent !important;
  border: 1px solid white;
  margin-top: 10px;
}
</style>
