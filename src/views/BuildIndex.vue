<template>
<div class="container build">
    <div class="wrap">
         <p class="notic">
             <i class="weui-icon-info-circle"></i><span>小铺已生成，请添加商品信息</span>
         </p>
        <div class="content">
            <router-link href="#" class="no-add" to="BuildProduct"><i class="ico-addprodcut"></i><span>添加商品</span> </router-link>
        </div>
    </div>
    <footer>
        <div class="weui-tabbar">

            <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                <img src="../assets/img//icon_tabbar.png" alt="" class="weui-tabbar__icon">

                <p class="weui-tabbar__label">首页</p>
            </a>
            <a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                        <img src="../assets/img//icon_tabbar.png" alt="" class="weui-tabbar__icon">
                    </span>

                <p class="weui-tabbar__label">小铺中心</p>
            </a>
        </div>
    </footer>
</div>
</template>

<script>
    export default {
      name: 'BuildIndex',
      data() {
          return {

          }
      },
      created: function() {

      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
