<template>
<div class="container build">
    <div class="wrap product">
        <div class="content">
            <!--添加图片-->
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">添加图片</p>
                                <div class="weui-uploader__info">0/5</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file" style="background-image:url(../assets/img/pic_160.png)"></li>
                                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(../assets/img/pic_160.png)">
                                        <div class="weui-uploader__file-content">
                                            <i class="weui-icon-warn"></i>
                                        </div>
                                    </li>
                                </ul>
                                <div class="weui-uploader__input-box">
                                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--添加描述-->
            <div class="weui-cells__title">添加描述</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="请输入商品描述" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>0</span>/200</div>
                    </div>
                </div>
            </div>
            <!--商品价格-->
            <div class="weui-cells__title">商品价格</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入价格（单位元）">
                    </div>
                </div>
            </div>
            <!--商品分类-->
            <div class="weui-cells__title">商品分类</div>
            <div class="weui-cells">
                <router-link class="weui-cell weui-cell_access" href="javascript:;" to="BuildProductCategory">
                    <div class="weui-cell__bd">
                        <p>请添加商品分类</p>
                    </div>
                    <div class="weui-cell__ft">
                    </div>
                </router-link>
            </div>
            <div class="weui-btn-area">
                <router-link class="weui-btn weui-btn_primary" to="ProductIndex" href="javascript:" id="showTooltips">完成并添加下一步</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
      name: 'BuildProduct',
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
