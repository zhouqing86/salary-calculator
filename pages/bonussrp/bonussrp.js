//index.js
//获取应用实例
const app = getApp();
const bonusUtils = require('../../utils/bonusUtils');


Page({
  data: {
  },
  onLoad: function (options) {
    const data = JSON.parse(options.data);
    this.setData(bonusUtils.calBonus(data.bonus));
  }
})
