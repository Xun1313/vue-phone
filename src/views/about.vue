<template>
  <section class="container about">
    <article class="about-group">
      <h3 class="about-group-title" ref="about">關於我們</h3>
      <div class="line"></div>
      <article class="about-group-item">
        <h4 class="about-group-item-title">實體店面</h4>
        <h5 class="about-group-item-content">台北市中正區市民大道三段2號1樓R105-2櫃</h5>
        <h5 class="about-group-item-content">台中市西區公益路154號</h5>
        <h5 class="about-group-item-content">高雄市建國二路100號1樓</h5>
        <router-link class="about-group-item-more" to="/place">了解更多</router-link>
      </article>
      <article class="about-group-item">
        <h4 class="about-group-item-title">一般問題</h4>
        <h5 class="about-group-item-content">Q: 請問訂購數量有限制嗎？</h5>
        <p>為了確保每位會員的購買權益，我們針對每個品項皆有購買數量限制。</p>
        <h5 class="about-group-item-content">Q: 訂購完成後可以變更數量、款式或者是顏色嗎？</h5>
        <p>僅提供會員訂購服務且有數量限制，為了加速您的訂購服務，訂單一旦成立就會進行後續流程，若您需要修改訂單，建議您立即取消該筆訂單，再重新下單即可。</p>
        <h5 class="about-group-item-content">Q: 可以訂制客製化的商品嗎？</h5>
        <p>mobile會不定時舉辦行銷活動並搭配不同的客製化手機方案，請隨時關注 mobile 網路商店網站，或致電 mobile 網路商店客服中心，我們會竭誠為您服務。</p>
      </article>
      <article class="about-group-item">
        <h4 class="about-group-item-title">人才招募</h4>
        <h5 class="about-group-item-content">誠徵門市人員：上班時間 10:00~19:00</h5>
        <p>詳情請撥打02-987654321</p>
      </article>
    </article>
    <article class="about-group">
      <h3 class="about-group-title" ref="shop">購物說明</h3>
      <div class="line"></div>
      <article class="about-group-item">
        <h4 class="about-group-item-title">購物須知</h4>
        <h5 class="about-group-item-content">1. 本站提供優質商品。請您瀏覽網站商品及選定欲購買的商品、款式及顏色。亦可透過商品搜尋尋找符合條件商品，進入商品頁面選擇商品。</h5>
        <h5 class="about-group-item-content">
          2. 點選所需款式及顏色，按下［加入購物車］鍵。請進入購物車，仔細核對購物商品、金額、顏色及調整所欲訂購的數量。如欲使用優惠券請在此填入優惠券代碼，確認無誤後，即前往結帳。
        </h5>
        <h5 class="about-group-item-content">
          3. 請填寫收件方式、收件時間及索取發票方式。再次確認金額。付款方式可選擇：信用卡一次付清及信用卡分期付款、 網路ATM及ATM轉帳。 若您使用信用卡付款，請填妥信用卡資料，交易完成即完成訂購流程。
          ATM轉帳付款者，請於訂購確認後24小時內完成付款，系統收到貨款後會安排出貨。
        </h5>
        <h5 class="about-group-item-content">4. 在您完成訂購程序後，會透過系統送出訂單確認函至您的電子信箱。</h5>
      </article>

      <article class="about-group-item">
        <h4 class="about-group-item-title">付款方式</h4>
        <h5 class="about-group-item-content">我們接受VISA、MASTERCARD及JCB卡，刷卡全程加密，請安心使用。</h5>
      </article>

      <article class="about-group-item">
        <h4 class="about-group-item-title">售後服務</h4>
        <h5 class="about-group-item-content">1. 依照消費者保護法規定，消費者於本公司網站消費均享有商品到貨7日猶豫期。請注意，猶豫期非試用期，您退回的商品必須是全新的狀態(電子產品不能開機試用)，並有完整包裝。</h5>
        <h5 class="about-group-item-content">2. 商品一經拆封即可能影響退（換）貨權利，請您於猶豫期內，小心保持商品全新狀態並保留原包裝，及所有內附的贈品或說明書。</h5>
        <h5 class="about-group-item-content">3. 消費者因檢查或使用導致商品有毀損或變更非原全新之狀態，本公司得按商品毀損滅失程度收取回復原狀之費用。</h5>
        <h5 class="about-group-item-content">4. 消費者凡申請退換貨/退款，已使用之優惠券概不退還。</h5>
        <h5 class="about-group-item-content">5. 凡退(換)貨之訂單，需退回同訂單之整批商品。另換貨商品僅限新品瑕疵並限定同款規格、同色換貨，每張訂單僅提供乙次退貨或換貨服務。</h5>
      </article>
    </article>

    <article class="about-group">
      <h3 class="about-group-title" ref="discount">優惠方案</h3>
      <div class="line"></div>
      <article class="about-group-item">
        <h4 class="about-group-item-title">mobile通訊 - 購買注意事項</h4>
        <h5 class="about-group-item-content">1. 本店標多少就賣多少，絕不另外加價，辦門號不需搭配任何加值服務!</h5>
        <h5 class="about-group-item-content">
          2. 因為手機流通速度甚快，現場無現貨需到門市預訂且不接受電話預訂，只要您想預訂手機卻不克前來你可先ATM轉帳訂金，匯完告知末5碼，我們會把您要購買的手機保留並送至門市通知取貨喔!
        </h5>
        <h5 class="about-group-item-content">
          3. 來店請先閱讀店舖資訊與商品說明!
        </h5>
        <h5 class="about-group-item-content">4. 促銷價絕不"強迫"搭加值服務與加購任何配件!</h5>
        <h5 class="about-group-item-content">5. 本公司商品報價均為現金未稅價格，持信用卡可分 3 / 6 / 12／18／24 期，分期銀行有收取手續費。</h5>
        <h5 class="about-group-item-content">6. 拆封視同購買，無七天鑑賞期之服務，當場確認無誤後即完成交易!</h5>
        <h5 class="about-group-item-content">7. 如遇產品之故障，七日內需附完整盒裝且手機無刮傷，代送原廠協助新品換貨，約7個工作天!</h5>
      </article>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    scrollHandler(val) {
      window.scrollTo({
        top: this.$refs[val || this.$route.params.scroll] ? this.$refs[val || this.$route.params.scroll].offsetTop - this.$store.state.navHeight : '',
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    this.$route.params.scroll ? this.scrollHandler() : window.scrollTo({ top: 0, left: 0 })
    this.$bus.$on('scrollHandler', part => {
      this.scrollHandler(part)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
@import '../assets/_variable.scss';
.about {
  margin-top: 50px;
  &-group {
    &-title {
      text-align: center;
    }
    &-item {
      margin: 50px 0;
      &-title {
        color: $important;
        margin-bottom: 20px;
      }
      &-content {
        font-size: 18px;
        text-decoration: none;
        color: black;
      }
      &-more {
        background-color: $important;
        transition: 0.5s all;
        color: white;
        text-decoration: none;
        padding: 5px;
        display: block;
        width: 100px;
        text-align: center;
        border-radius: 10px;
        &:hover {
          background-color: darken($important, 10%);
        }
      }
    }
  }
}
.line {
  outline: 1px solid $important;
  width: 50px;
  margin: 5px auto;
}
</style>
