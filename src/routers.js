const routes = [
  {
    path: '/MobileBind',
    name: 'MobileBind',
    component: require('./views/MobileBind')
  },
  {
    path: '/CreateShopStep1',
    name: 'CreateShopStep1',
    component: require('./views/CreateShopStep1')
  },
  {
    path: '/CreateShopStep2',
    name: 'CreateShopStep2',
    component: require('./views/CreateShopStep2')
  },
  {
    path: '/BuildIndex',
    name: 'BuildIndex',
    component: require('./views/BuildIndex')
  },
  {
    path: '/BuildProduct',
    name: 'BuildProduct',
    component: require('./views/BuildProduct')
  },
  {
    path: '/BuildProductCategory',
    name: 'BuildProductCategory',
    component: require('./views/BuildProductCategory')
  },
  {
    path: '/BuildProductCategoryAdd',
    name: 'BuildProductCategoryAdd',
    component: require('./views/BuildProductCategoryAdd')
  },
  {
    path: '/EditProduct',
    name: 'EditProduct',
    component: require('./views/EditProduct')
  },
  {
    path: '/EditProductItem/:item/:value',
    name: 'EditProductItem',
    component: require('./views/EditProductItem')
  },
  {
    path: '/ShopIndex',
    name: 'ShopIndex',
    component: require('./views/ShopIndex')
  },
  {
    path: '*',
    redirect: {
      name: 'MobileBind'
    }
  }
];

module.exports = routes;

