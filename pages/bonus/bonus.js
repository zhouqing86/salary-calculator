//index.js
//获取应用实例
const app = getApp();
const bonusUtils = require('../../utils/bonusUtils');
const config = require('../../config/config');


Page({
  data: {
    bonusErrorClass: "",
    focusField: "bonus",
  },
  onLoad: function () {

  },
  changeBonus: function(e) {
    const bonus = parseInt(e.detail.value);
    this.setData({
      result: bonusUtils.calBonus(bonus)
    })
  },
  formSubmit: function (e) {
    const formData = e.detail.value;
    formData.config = this.data.config;

    if (!formData.bonus || parseInt(formData.bonus) <= 0) {
      this.setData({
        bonusErrorClass: "bonus-error"
      });
      return
    }

    let url = '../bonussrp/bonussrp?data=' + JSON.stringify(formData)

    wx.navigateTo({
      url: url
    });
  },
  formReset: function (e) {
  }
})
