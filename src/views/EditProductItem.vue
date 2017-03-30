<template>
<div class="container build edit-container">
    <div class="wrap fenlei-wrap">
       <div class="content">
           <div class="weui-cells__title">{{itemName}}</div>
           <div class="weui-cells">
               <div class="weui-cell">
                   <div class="weui-cell__bd">
                       <input class="weui-input" v-model="itemValue" type="text" :placeholder="'请输入'+itemName">
                   </div>
               </div>
           </div>
           <div class="weui-btn-area">
               <a class="weui-btn weui-btn_primary" href="javascript:" @click="saveCategory">确定</a>
           </div>
       </div>
    </div>
</div>
</template>

<script>
    export default {
      name: 'EditProductItem',
      data() {
          return {
            itemName: '',
            itemValue: '',
          }
      },
      activated: function() {
        var name = this.$route.params.item,
            value = this.$route.params.value;

        var list = {
            name: {
                title: '店铺名称',
                value: value
            },
            desc: {
                title: '店铺描述',
                value: value
            },
            addr: {
                title: '店铺地址',
                value: value
            },
            mobile: {
                title: '联系电话',
                value: value
            },
        };
        this.itemName = list[name].title || '';
        this.itemValue = list[name].value.replace(/\$/g,'');
        console.log(this.itemName, this.itemValue,123)
      },
      methods: {
        saveCategory() {
            this.$router.push({
                name: 'EditProduct',
                params: {
                    key: this.$route.params.item,
                    value: this.itemValue
                }
            });
        }
      }
    }
</script>

<style lang="less" scoped>
    @import '../assets/less/tob-build.less';
</style>
