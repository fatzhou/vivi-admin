<template>
<div class="container build">
    <div class="wrap fenlei-wrap">
       <div class="content">
           <div class="weui-cells">
               <router-link to="BuildProductCategoryAdd" class="weui-cell weui-cell_access" href="javascript:;">
                   <div class="weui-cell__bd">
                       <p><i class="iconfont-dasan-18"></i><span>添加新分类</span></p>
                   </div>
                   <div class="weui-cell__ft">
                   </div>
               </router-link>
           </div>
           <div class="weui-cells__title" v-if="categoryList.length>0"><i class="iconfont-dasan-17"></i>选择分类</div>
           <div class="weui-cells weui-cells_checkbox">
               <label v-for="item,index in categoryList"  class="weui-cell weui-check__label">
                   <div class="weui-cell__bd" >
                       <p>{{item.name}}</p>
                   </div>
                   <div  class="weui-cell__ft">
                       <input type="radio" :checked="item.classid==selectClassId" class="weui-check" name="radio1" >
                       <span @click="selectCategory(item.classid, item.name)" class="weui-icon-checked"></span>
                   </div>
<!--                    <div v-else class="aaa weui-cell__ft" @click="deleteCategory(index)">
                     <span>删除</span>
                   </div> -->
               </label>
           </div>
            <div class="weui-btn-area">
                <a  @click.prevent="goNext" class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
            </div>
       </div>
    </div>
</div></template>

<script>
import util from '../assets/js/util.js'
    export default {
      name: 'MobileBind',
      data() {
          return {
            url: util.api.host + util.api.categoryList,
            categoryUrl: util.api.host + util.api.addCategory,
            categoryList: [],
            touchPosition: {
              x: 0,
              y: 0
            },
            prodid: '',
            deleteCategoryFlag: [],
            selectClassId: '',
            selectClassName: ''
          }
      },
       mounted: function() {
        // document.title = '选择商品分类';//by:yoyo
      },
      activated: function() {
        document.title = '选择商品分类';//by:yoyo
        this.selectClassId = this.$route.params.categoryId || '';
        this.selectClassName = this.$route.params.categoryName || '';
        console.log(this.$route.params)
        this.prodid = this.$route.params.prodid || '';
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid
          };

          this.$http.post(this.url, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              this.categoryList = data.classlist;
              // this.deleteCategoryFlag = new Array(this.categoryList.length);
              // this.categoryList.forEach((item, index)=>{
              //   this.deleteCategoryFlag[index] = false;
              // })
              // this.$router.push('BuildProduct');
            } else {
              // alert(data.msg);
            }
          });
      },
      methods: {
        goNext() {
          if(!this.selectClassId) {
            alert('请选择分类');
            return false;
          }
          this.$router.push({
            name: 'BuildProduct',
            params: {
              categoryId: this.selectClassId,
              categoryName: this.selectClassName,
              prodid: this.prodid
            }
          })
        },
        touchStartCallback(e) {
          this.touchPosition = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
        },
        touchEndCallback(e, ind) {
          // var deltaX = e.changedTouches[0].clientX - this.touchPosition.x,
          //     deltaY = e.changedTouches[0].clientY - this.touchPosition.y;

          // if(Math.abs(deltaX) > 5) {
          //   this.$set(this.deleteCategoryFlag,ind,true);
          // } else {
          //   this.$set(this.deleteCategoryFlag,ind,false);
          // }
          // return false;
        },
        deleteCategory(ind) {
          var postData = {
            openid: window.info.openid,
            token: window.info.token,
            shopid: window.info.shopid,
            classid: this.categoryList[ind].classid,
            name: ''
          };

          this.$http.post(this.categoryUrl, postData)
          .then((res)=>{
            var data = res.body;
            if(data.code == 0) {
              // alert('删除分类成功');
              this.categoryList.splice(ind, 1);
            } else {
              alert(data.msg);
            }
          });
        },
        goBack() {
          this.$router.push({
            name: 'BuildProduct',
            params: {
              categoryId: this.selectClassId,
              categoryName: this.selectClassName
            }
          });
        },
        selectCategory(classid, name) {
          this.selectClassId = classid;
          this.selectClassName = name;
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
