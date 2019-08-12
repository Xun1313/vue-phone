<template>
  <div class="my-5 d-flex flex-column align-items-center container">
    <ul class="list-group list-group-horizontal my-3 rounded w-75">
      <li class="list-group-item w-100 text-center" :class="{'bg-secondary':order}">輸入訂單資料</li>
      <li class="list-group-item w-100 text-center" :class="{'bg-secondary':pay}">確認付款</li>
      <li class="list-group-item w-100 text-center" :class="{'bg-secondary':finish}">完成</li>
    </ul>
    <div class="progress w-75">
      <div
        class="progress-bar bg-secondary"
        role="progressbar"
        :style="{width:length}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order:true,
      pay:false,
      finish:false,
      length:'33%'
    }
  },
  methods: {
    
  },
  created() {
    this.$bus.$on("progress", (order,pay,finish,length) => {
      this.order=order
      this.pay=pay
      this.finish=finish
      this.length=length
    });
  },
}
</script>

<style lang="scss">
</style>
