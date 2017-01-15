<template>
<div class="container tobshopcenter">
    <div class="wrap">
        <!--今日数据-->
        <div class="today-data">
            <div class="weui-navbar">
                <div class="weui-navbar__item weui-bar__item_on">
                    <a href="#">今日数据</a>
                </div>
                <div class="weui-navbar__item">
                    <a href="#">历史数据</a>

                </div>
            </div>

            <div class="weui-grids">
                <a href="javascript:;" class="weui-grid">
                    <div class="data-cont">
                        100
                    </div>
                    <div class="data-hint">
                        <div class="weui-grid__icon">
                            <img src="../assets/img/icon-dingdan.png" alt="">
                        </div>
                        <p class="weui-grid__label">订单</p></div>
                    <div class="clear"></div>

                </a>
                <a href="javascript:;" class="weui-grid">
                    <div class="data-cont">
                        10034
                    </div>
                    <div class="data-hint">
                        <div class="weui-grid__icon">
                            <img src="../assets/img/icon-shouru.png" alt="">
                        </div>
                        <p class="weui-grid__label">收入</p></div>
                    <div class="clear"></div>

                </a>
                <a href="javascript:;" class="weui-grid">
                    <div class="data-cont">
                        1002
                    </div>
                    <div class="data-hint">
                        <div class="weui-grid__icon">
                            <img src="../assets/img/icon-guanzhu.png" alt="">
                        </div>
                        <p class="weui-grid__label">关注</p></div>
                    <div class="clear"></div>

                </a>

                <div class="clear"></div>
                <div class="grids-tips ">
                    <div class="grids-tips-cont">
                        <p>你有3条订单信息，请查看</p>
                    </div>
                </div>
            </div>
        </div>
        <!--店铺信息-->
        <div class="xiaopu-container">
            <div class="weui-cells">

                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="../assets/img/icon_tabbar.png" alt=""></div>
                    <div class="weui-cell__bd">
                        <h3>迷你小铺</h3>
                        <p>辅助文案</p>
                    </div>
                    <div class="weui-cell__ft"><img src="../assets/img/icon_tabbar.png" alt=""></div>
                </a>
            </div>
            <div class="weui-grids">
                <a href="javascript:;" class="weui-grid">
                    <div class="weui-grid__icon">
                        <img src="../assets/img/icon_tabbar.png" alt="">
                    </div>
                    <p class="weui-grid__label">小铺装修</p>
                </a>
                <a href="javascript:;" class="weui-grid">
                    <div class="weui-grid__icon">
                        <img src="../assets/img/icon_tabbar.png" alt="">
                    </div>
                    <p class="weui-grid__label">小铺预览</p>
                </a>
                <a href="javascript:;" class="weui-grid">
                    <div class="weui-grid__icon">
                        <img src="../assets/img/icon_tabbar.png" alt="">
                    </div>
                    <p class="weui-grid__label">意见反馈</p>
                </a>
            </div>
        </div>
    </div>
    <footer>
        <p><img src="../assets/img/icon_footer_link.png"/></p>
    </footer>
</div>

</template>

<script>
    export default {
      name: 'ShopIndex',
      data() {
          return {

          }
      },
      created: function() {

      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-index.less';
</style>
