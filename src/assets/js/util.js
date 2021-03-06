var api = {
    host: 'https://www.wxpuu.com',
    mobile: '/api/shop/register',
    fileApi: '/api/upload',
    categoryList: '/api/shop/classquery',
    buildShop: '/api/shop/update',
    buildProduct: '/api/shop/dealprod',
    addCategory: '/api/shop/dealclass',
    itemsList: '/api/shop/prodlist',
    shopInfo: '/api/shop/query',
    shopUpdate: '/api/shop/update',
    queryShop: '/api/shop/query',
    queryOrder: '/api/shop/orderquery',
    userInfo: '/api/mp/getuserinfo',
    dealOrder: '/api/shop/orderdeal',
    userInfo: '/api/mp/getuserinfo',
    getToken: '/api/mp/getAuthInfoByCode',
    getXcxToken: '/api/mp/getXCXAccessToken',
    getQrcode: '/api/mp/getXCXQRCode'
};

var validator = {
    email: function(str) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(str);
    },
    telephone: function(str) {
        var re = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        return re.test(str);
    }
};

function checkForm(data) {
    var flag = data.every(function(item) {
        if (!item.data) {
            alert(item.name + '不能为空');
            return false;
        }
        if (validator[item.type]) {
            var tmpFlag = validator[item.type](item.data);
            if (!tmpFlag) {
                alert(item.name + '填写不符合规则');
            }
            return tmpFlag;
        }
        return true;
    });
    return flag;
}

function getUrlKey(name) {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1),
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1].replace(/\//g,''));
      }
   }
   return theRequest;
}

module.exports = {
    api: api,
    checkForm: checkForm,
    getUrlKey: getUrlKey
}
