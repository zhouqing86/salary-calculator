//index.js
//获取应用实例
const app = getApp();
const utils = require('../../utils/util');


Page({
  data: {
  },
  onLoad: function (options) {
    const data = JSON.parse(options.data);
    this.setData(utils.calSalary(data))
  }
})
