<template>
  <main id="home">
    <aside class="logo">
      <img id="airbean" src="./../assets/airbean.png" alt="Logo" />
    </aside>
    <h1>AIR BEAN</h1>
    <p>DRONEDELIVERED COFFEE</p>
  </main>
</template>

<script>
export default {
  name: "Home",
  //Automatically re-routes to /menu
 mounted() {
    setTimeout(() => {
      this.$router.replace("/menu");
    }, 2000);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rufina&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");
#home {
  .logo {
    width: 4rem;
    height: 4rem;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  h1 {
    font-family: "Rufina", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 42px;
  }
  p {
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 9px;
  }
}
</style>
