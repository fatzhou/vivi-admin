<template>
  <div class="container dingdan-wrap">
    <div class="wrap">
        <div v-for="item, index in orderList" class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">{{item.time}}</label>
                </div>
            </div>
            <div class="weui-form-preview__bd">
                <div v-for="it in item.detail" class="weui-form-preview__item">
                    <label class="weui-form-preview__label">{{it.name || it.prodid.slice(0,15)}}</label>
                    <span class="weui-form-preview__value">{{it.price}}元<small>x{{it.count}}</small></span>
                </div>
                <div class="weui-form-preview__item total-price">
                    <label class="weui-form-preview__label"></label>
                    <span class="weui-form-preview__value">商品总额<span>{{item.price}}元</span></span>
                </div>
            </div>
            <div v-if="item.status !== 3" @click="dealOrder(item.orderno, index)" class="weui-form-preview__ft">
                <a class="weui-btn weui-btn_primary " href="javascript:" id="">处理</a>
            </div>
            <div v-else class="weui-form-preview__ft">
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
            dealUrl: util.api.host + util.api.dealOrder,
            pageno: 1,
            pagesize: 10,
            orderList: []
          }
      },
      mounted: function() {
        // document.title = '订单处理';
      },
      activated() {
        document.title = '订单列表';
        this.queryOrderInfo();
        // if(this.$router.params) {
        //   var orderList = this.$router.params.orderList || [];
        //   orderList.forEach((item)=>{
        //     item.detailJson = JSON.parse(item.detail);
        //   })
        //   this.orderList = orderList;
        // }
      },
      methods: {
        dealOrder(orderno, index) {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            orderno: orderno
          };

          this.$http.post(this.dealUrl, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              this.orderList[index].status = 3;
            } else {
              alert(data.msg);
            }
          });
        },
        queryOrderInfo() {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            pageno: this.pageno,
            pagesize: this.pagesize,
            // date: '20170415'
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            console.log(data,'orderlist')
            if(data.code == 0) {
              var orderList = data.orderlist || [];
              // orderList.forEach((item)=>{
              //   item.detailJson = JSON.parse(item.detail);
              // })
              this.orderList = orderList;
            } else {
              // alert(data.msg);
            }
          });
        },
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-index.less';
</style>
