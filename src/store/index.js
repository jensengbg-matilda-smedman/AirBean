import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: 'http://localhost:5000',
    menu: Array,
    order: Object,
    cart: [],
    show: {
      showCart: false,
      showMenu: false
    }
  },
  mutations: {
    toggleMenu(state) {
      state.show.showMenu = !state.show.showMenu
    },
    toggleCart(state) {
      state.show.showCart = !state.show.showCart
    },
    showProducts(state, data) {
      state.menu = data
    },
    emptyCart(state) {
      state.cart = []
    },
    //Adds coffee to cart
    addItemToCart(state, coffee) {
      let cartItems = state.cart.find(item => item.id == coffee.id);

      if(cartItems) {
        cartItems.quantity++
      } else {
        state.cart.push(coffee)
        Vue.set(coffee, 'quantity', 1)
      }
    },
    confirmOrder (state, coffee) {
      state.order = coffee.data
    },
    //Adds product-item if up-arrow is pushed in cart
    addMenuItem(state, coffee){
      let cartItem = state.cart.find(item => item.id == coffee.id);
      if(cartItem){
        cartItem.quantity++
      }
    },
    //Removes product-item if up-arrow is pushed in cart
    removeMenuItem(state, coffee) {
      let index = state.cart.findIndex(item => item.id == coffee.id);
      let cartItem = state.cart[index];
      if(cartItem.quantity > 1){
        cartItem.quantity--
      } else {
        //Remove item from cart if quantity is less than 1
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {
    //Fetches coffee products from db
    async getMenuItems(ctx) {
      let data = await ax.get(`${ctx.state.apiURL}/products`);
      ctx.commit('showProducts', data.data);
    },
    //Fetches order information from db
    async orderItems(ctx) {
      let data = await ax.post(`${ctx.state.apiURL}/orders`, {
        items: ctx.state.cart
      });
      ctx.commit('toggleCart'),
      ctx.commit('confirmOrder', data),
      ctx.commit('emptyCart')
    }
  },
  getters: {
    //Adds the items "on top of eachother"
    cartQuantity(state) {
      let items = state.cart.map(item => {
        return item.quantity
      })
      return items.reduce(function (quantity, product) {
        return quantity + product
      }, 0)
    },
    //Changes the total cost depending on products and quantity in cart
    totalCost(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price
      })
      return items.reduce(function (price, product) {
        return price + product;
      }, 0)
    }
  }
})