var api = {
  host: 'https://www.wxpuu.com',
  mobile: '/api/shop/register',
  fileApi: '/api/upload',
  categoryList: '/api/shop/classquery'
}

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
    if(!item.data) {
      alert(item.name + '不能为空');
      return false;
    }
    if(validator[item.type]) {
      var tmpFlag = validator[item.type](item.data);
      if(!tmpFlag) {
        alert(item.name + '填写不符合规则');
      }
      return tmpFlag;
    }
    return true;
  });
  return flag;
}

module.exports = {
  api: api,
  checkForm: checkForm
}
