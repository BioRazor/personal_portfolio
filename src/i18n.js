import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    HiIm: "Hello, I'm",
    resumeDegree: "IT Engineer from Venezuela",
    resumeDescription: "Generalist, specialized in Web Development",
    resume_spec:
      "I develop WebApps with <a href='https://vuejs.org/' target='_blank'>VueJS</a> and <a href='https://djangoproject.com/' target='_blank'>Django</a>.",
    social: "You can find me in:",
    experience_title: "My Experience",
    experience_1:
      "My main training comes from my experience at the Metropolitan Water Park, where I was the <a href='https://www.linkedin.com/in/biorazor/detail/treasury/position:1316338935/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACcrytYBNw5Wr9g3xsQP5EgJ8V7PjqmPtVY%2C1579867301895)&section=position%3A1316338935&treasuryCount=1' target='_blank'>Systems Manager</a>, and from the Platzi Expert Subscription, where I acquire much of my knowledge.",
    buy_platzi:
      "If you are interested in Platzi, and you buy it, do it with <a href='https://platzi.com/r/d3a/' target='_blank'>this link</a>, and we both win 1 month Free! ❤",
    backend_description:
      "My fortress where I have specialized with Python and Django.",
    frontend_description:
      "My complement, in formation as FullStack, I am developing with Javascript and VueJS. And their respective companions.",
    manangement_decription: `
      During my work as Systems Manager I had the opportunity not only to lead teams of up to 15 people. I also actively participated in management decision making, designing and feeding our management tool the Balanced Score Card.
      <br><br>
      I developed the company's Business Intelligence with tools such as Python, Power Bi and Excel. Extracting and analyzing data from the database of the Park's centralized management system, Semnox Parafait.    
      <br><br>
      Establishing at the same time technological tools of Communication and organization for the different departments.    
      <br><br>
      All this, maintaining and innovating on the technological platform of the park, which had structured networks of optical fiber, Mikrotik, Ubiquiti and Cisco equipment, Biometric Access Controls and IP Video Surveillance Cameras.
      <br><br>
      All this information can be extended in LinkedInd with the following <a href='https://www.linkedin.com/in/biorazor/detail/treasury/position:1316338935/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACcrytYBNw5Wr9g3xsQP5EgJ8V7PjqmPtVY%2C1579867301895)&section=position%3A1316338935&treasuryCount=1' target='_blank'>link</a>
    `,
    tech_description: `During my professional career I have had the opportunity to use several tools, for organization, communication, presentations, business intelligence, networks, and more...`
  },

  es: {
    HiIm: "Hola, Soy",
    resumeDegree: "Ingeniero en Informática de Venezuela",
    resumeDescription: "Generalista, especializado en Desarrollo Web",
    resume_spec: "Desarrollo WebApps con VueJS and Django.",
    social: "Puedes encontrarme en:",
    experience_title: "Mi Experiencia",
    experience_1:
      "Mi principal formación viene de mi experiencia en el Parque Acuático Metropolitano, donde estuve como <a href='https://www.linkedin.com/in/biorazor/detail/treasury/position:1316338935/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACcrytYBNw5Wr9g3xsQP5EgJ8V7PjqmPtVY%2C1579867301895)&section=position%3A1316338935&treasuryCount=1' target='_blank'>Gerente de sistemas</a>, y de la Suscripción a Platzi Expert, donde adquiero gran parte de mis conocimientos.",
    buy_platzi:
      "Si te interesa Platzi,y lo compras, hazlo con <a href='https://platzi.com/r/d3a/' target='_blank'>este link</a>, y ambos ganamos 1 mes Gratis! ❤",
    backend_description:
      "Mi fortaleza donde me he especializado con Python y Django.",
    frontend_description:
      "Mi complemento, en formación como FullStack, me estoy desenvolviendo con Javascript y VueJS. Y sus respectivos acompañantes.",
    manangement_decription: `
      Durante mi labor como Gerente de Sistemas tuve la oportunidad no solo de liderar equipos de hasta 15 personas. También participe activamente en la toma de decisiones de dirección, al diseñar y alimentar nuestra herramienta de gestión el Balanced Score Card.
      <br><br>
      Desarrolle la Inteligencia de Negocios de la empresa con herramientas como Python, Power Bi y Excel. Extrayendo y analizado la data de la base de datos del sistema de gestión centralizada del Parque, Semnox Parafait.  
      <br><br>
      Estableciendo a su vez herramientas tecnologías de Comunicación y organización para los diferentes departamentos.    
      <br><br>
      Todo esto, manteniendo e innovando sobre la plataforma tecnologica del parque, que contaba con redes estructuradas de fibra optica, equipos Mikrotik, Ubiquiti y Cisco, Controles de Acceso Biometrico y Camaras de VideoVigilancia IP.
      <br><br>
      Toda esta informacion la puedes ampliar en LinkedIn a traves de <a href='https://www.linkedin.com/in/biorazor/detail/treasury/position:1316338935/?entityUrn=urn%3Ali%3Afsd_profileTreasuryMedia%3A(ACoAACcrytYBNw5Wr9g3xsQP5EgJ8V7PjqmPtVY%2C1579867301895)&section=position%3A1316338935&treasuryCount=1' target='_blank'>este enlace</a>.
    `,
    tech_description: `Durante mi carrera profesional he tenido la oportunidad de utilizar varias herramientas, para la organización, comunicación, presentaciones, inteligencia de Negocios, redes y más...`
  }
};

const i18n = new VueI18n({
  locale: "en",
  messages
});

export default i18n;
