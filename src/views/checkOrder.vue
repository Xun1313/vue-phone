<template>
  <form class="info">
    <div class="form-group">
      <label for="useremail">Email</label>
      <input
        type="email"
        class="form-control"
        name="email"
        id="useremail"
        v-model="form.user.email"
        placeholder="請輸入 Email"
        v-validate="'required|email'"
        :class="{ 'is-invalid': errors.has('email') }"
      />
      <p class="text-danger" v-if="errors.has('email')">
        {{ errors.first('email') }}
      </p>
    </div>

    <div class="form-group">
      <label for="username">收件人姓名</label>
      <input
        type="text"
        class="form-control"
        name="name"
        id="username"
        v-model="form.user.name"
        placeholder="輸入姓名"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('name') }"
      />
      <p class="text-danger" v-if="errors.has('name')">必須輸入姓名</p>
    </div>

    <div class="form-group">
      <label for="usertel">收件人電話</label>
      <input
        type="tel"
        class="form-control"
        id="usertel"
        name="tel"
        v-model="form.user.tel"
        placeholder="請輸入電話"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('tel') }"
      />
      <p class="text-danger" v-if="errors.has('tel')">必須輸入電話</p>
    </div>

    <div class="form-group">
      <label for="useraddress">收件人地址</label>
      <input
        type="text"
        class="form-control"
        name="address"
        id="useraddress"
        v-model="form.user.address"
        placeholder="請輸入地址"
        v-validate="'required'"
        :class="{ 'is-invalid': errors.has('address') }"
      />
      <p class="text-danger" v-if="errors.has('address')">必須輸入地址</p>
    </div>

    <div class="form-group">
      <label for="comment">留言</label>
      <textarea
        name
        id="comment"
        class="form-control"
        cols="30"
        rows="10"
        v-model="form.message"
      ></textarea>
    </div>
    <button type="button" class="send" @click="createOrder">送出訂單</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          address: '',
          email: '',
          name: '',
          tel: ''
        } //如果物件下一層沒有user的屬性(form.user=>undefined),下兩層就變成undefined.email會報錯
      }
    }
  },

  methods: {
    createOrder() {
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_API}/api/adam/order`
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: this.form }).then(res => {
            if (res.data.success) {
              console.log('訂單已建立', res)
              this.$router.push(`/check-out/check-pay/${res.data.orderId}`)
            }
          })
        } else {
          console.log('欄位不完整')
        }
        this.$store.dispatch('updateLoading', false)
      })
    }
  },
  created() {
    /* this.$store.dispatch('updateLoading',true)
    this.$store.dispatch('updateLoading',false) */
    this.$bus.$emit('progress', 1)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
.info {
  width: 100%;
  @include padTOdeskTop {
    width: 500px;
  }
  margin: auto;
}
.send {
  background-color: $important;
  color: white;
  text-align: center;
  width: 150px;
  padding: 10px;
  display: block;
  transition: 0.5s all;
  margin-left: auto;
  outline: none;
  &:hover {
    background-color: darken($important, 10%);
  }
}
h5 {
  font-size: 18px;
}
</style>
