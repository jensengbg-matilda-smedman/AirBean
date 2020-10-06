<template>
  <aside id="cart">
    <h2>Din beställning</h2>
    <article v-for="(item, index) in coffeeItem" :key="index">
      <div class="coffee-item">
        <h4 class="item-title">{{ item.title }}</h4>
        <h4 class="dots"></h4>
        <div>
          <img
            src="./../assets/arrow-up.svg"
            alt="arrow up"
            @click.prevent="addMenuItem(item)"
          />
          <h6 class="item-quantity">{{ item.quantity }}</h6>
          <img
            src="./../assets/arrow-down.svg"
            alt="arrow down"
            @click.prevent="removeMenuItem(item)"
          />
        </div>
      </div>
      <div class="description">
        <p class="item-price">{{ item.price }} kr</p>
      </div>
    </article>
    <div class="totalPrice">
      <div>
        <h3 class="item-total">Total</h3>
        <h3 class="dots"></h3>
        <h3 class="item-cost">{{ totalCost }} kr</h3>
      </div>
      <p>inkl moms + drönarleverans</p>
    </div>
    <button id="buy" @click="buyCoffee">Take my money!</button>
  </aside>
</template>

<script>
export default {
  name: "Cart",
  props: {
    coffeeItem: Array,
  },
  methods: {
    //Give error message if the cart is emty, if cart is not emty re-route to /status
    buyCoffee() {
      if (this.coffeeItem.length == 0) {
        alert('Du har inget kaffe i din varukorg än!');
      } else {
        this.$store.dispatch("orderItems");
        this.$router.push("/status");
      }
    },
    //On the up/down buttons, change value of product
    addMenuItem(item) {
      this.$store.commit('addMenuItem', item)
    },
    removeMenuItem(item){
      this.$store.commit('removeMenuItem', item)
    }
  },
  computed: {
    totalCost() {
      return this.$store.getters.totalCost;
    }
  },
}
</script>

<style lang="scss">
h2 {
  padding-bottom: 1rem;
}
#cart {
  position: fixed;
  z-index: 1;
  background: #ffffff;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  margin-top: 5rem;
  border-radius: 5px;
  article {
    display: flex;
    flex-direction: column;
    width: 90%;
    .coffee-item {
      display: flex;
      flex-direction: row;
      .dots {
        flex: 1;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.5rem;
      }
      div {
        display: flex;
        flex-direction: column;
        img {
          width: 0.7rem;
          height: 0.7rem;
        }
      }
    }
  }
  .totalPrice {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-top: 4rem;
    div {
      display: flex;
      flex-direction: row;
      .dots {
        flex: 1;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
        margin-bottom: 0.3rem;
      }
    }
  }
  #buy {
    width: 248px;
    height: 55px;
    background: #2f2926;
    font-family: PT Serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
button {
  margin: 2rem;
}
</style>