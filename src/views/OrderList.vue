<template>
  <div class="container dingdan-wrap">
    <div class="wrap">
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">2017年2月3日 13:34:23</label>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">老北京鸡肉卷</label>
                    <span class="weui-form-preview__value">45元<small>x2</small></span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">老北京鸡肉卷</label>
                    <span class="weui-form-preview__value">45元<small>x2</small></span>
                </div>
                <div class="weui-form-preview__item total-price">
                    <label class="weui-form-preview__label"></label>
                    <span class="weui-form-preview__value">商品总额<span>180元</span></span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <a class="weui-btn weui-btn_primary " href="javascript:" id="">处理</a>
            </div>
        </div>
        <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">2017年2月3日 13:34:23</label>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">老北京鸡肉卷</label>
                    <span class="weui-form-preview__value">45元<small>x2</small></span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">老北京鸡肉卷</label>
                    <span class="weui-form-preview__value">45元<small>x2</small></span>
                </div>
                <div class="weui-form-preview__item total-price">
                    <label class="weui-form-preview__label"></label>
                    <span class="weui-form-preview__value">商品总额<span>180元</span></span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <a class="weui-btn weui-btn_primary weui-btn_disabled" href="javascript:" id="">已处理</a>
            </div>
        </div>
    </div>
    <!--footer-->
    <footer>
        <div class="copyright">
            <p><img src="../assets/img/icon_footer_link.png"></p>
        </div>
    </footer>
  </div>
</template>

<script>
  import util from '../assets/js/util.js'

    export default {
      name: 'OrderList',
      data() {
          return {
            url: util.api.host + util.api.queryOrder,
            pageno: 1,
            pagesize: 10
          }
      },
      mounted: function() {
        document.title = '订单处理';
      },
      activated() {
        this.queryOrderInfo();
      },
      methods: {
        queryOrderInfo() {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            pageno: this.pageno,
            pagesize: this.pagesize
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            console.log(data,123)
            if(data.code == 0) {

            } else {
              alert(data.msg);
            }
          });
        },
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-index.less';
</style>
