export default {
  install (Vue, options) {
    Vue.prototype.goToCart = function () {
      this.$axios.post('/findProductCart', {
        uid: this.user.uid
      }).then((res) => {
        this.$router.push({
          name: 'cart',
          params: { cartData: res.data, user: this.user }
        })
      })
    }
    Vue.prototype.goToInfo = function () {
      this.$axios.post('/findOrderInfo', {
        uid: this.user.uid
      }).then((res) => {
        console.log(res.data)
        this.$router.push({
          name: 'info',
          params: { orderData: res.data, user: this.user }
        })
      })
    }
  }
}
