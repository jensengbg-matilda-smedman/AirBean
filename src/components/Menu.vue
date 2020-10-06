<template>
  <article id="navMenu">
    <section>
      <img src="./../assets/close.png" alt="close" @click="toggleMenu" class="closeButton" />
    </section>
    <nav>
      <a href="#" @click="goTo('/menu')">Menu</a>
      <p id="line"></p>
      <a href="#" @click="goTo('/about')">About</a>
      <p id="line"></p>
      <a href="#" id="disabled">Min Profil</a>
      <p id="line"></p>
      <a href="#" @click="goTo('/status')">Orderstatus</a>
    </nav>
  </article>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
    goTo(route) {
      this.$store.commit('toggleMenu')
      if(route !== this.$route.path){
        this.$router.push(route);
      }
    }
  }
};
</script>

<style lang="scss">
#navMenu {
  background: #2f2926;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  section {
    
    img {
      margin: 1rem;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;  
    a {
      font-family: PT Serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      color: #FFFFFF;
      text-decoration: none;
      margin: 1rem;
      &.router-link-exact-active {
        color: lightpink;
      }
    }
    #disabled {
      color: rgba(94, 93, 93, 0.445);
    }
    #line {
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      width: 10%;
    }
  }
}


</style>