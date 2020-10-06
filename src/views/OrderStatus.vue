<template>
  <main id="orderStatus" class="preload">
    <p> {{ order.orderNum }} </p>
    <img src="./../assets/coffeedrone.svg" alt="drone">
    <h5>Levereras om {{ order.arrival }} minuter.</h5>
    <button @click="goTo">Ok, cool!</button>
  </main>
</template>

<script>
export default {
  name: "OrderStatus",
  computed: {
    order() {
      return this.$store.state.order
    }
  },
  methods: {
    goTo() {
      this.$router.push('/menu')
    }
  }
};
</script>

<style scoped lang="scss">
#orderStatus {
  button {
    width: 184px;
    height: 55px;
    background: #FFFFFF;
    border: #FFFFFF;
    border-radius: 50px;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #2F2926;
    
  }
}
img {
  transition: transform 5s;
}
img:hover {
  transform: scale(1.5, 1.5);
}

</style>