export default {
  goTocart: function () {
    this.$axios.post('/findProductCart', {
      uid: this.user.uid
    }).then((res) => {
      this.$router.push({
        name: 'cart',
        params: { cartData: res.data, user: this.user }
      })
    })
  }
}
