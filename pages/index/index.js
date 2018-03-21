//index.js
//获取应用实例
const app = getApp();
const utils = require('../../utils/util');
const config = require('../../config/config');

const CAPITAL_CITIES=config.CITIES_CONFIG;
const defaultConfig = CAPITAL_CITIES.length > 0 ? utils.clone(CAPITAL_CITIES[0]) : {};
const hBase = defaultConfig.minHBase;
const iBase = defaultConfig.minIBase;
const pHBase = defaultConfig.pHBase;
const pIBase = defaultConfig.pIBase;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    code: '',
    city: '北京市',
    cities: CAPITAL_CITIES,
    config: defaultConfig,
    hBase: hBase,
    iBase: iBase,
    pHBase: pHBase,
    pIBase: pIBase
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.login({
      success: function(res) {
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：' + code);
          that.setData({
            code: code
          });
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  changeCity: function(event) {
    const id = event.currentTarget.dataset.cityId;
    var cityConfig = defaultConfig;
    if (id) {
      cityConfig = config.getConfigById(id);
      cityConfig = cityConfig ? cityConfig : defaultConfig;
    }
    this.setData({config: cityConfig});
    if(this.data.salary) {
      this.changeStateBySalary(this.data.salary, cityConfig);
    } else {
      this.changeStateBySalary(0, cityConfig);
    }
  },
  changeSalary: function(event) {
    const salary = event.detail.value;
    if(salary) {
      this.setData({salary: salary})
      this.changeStateBySalary(salary, this.data.config);
    }

  },
  changeStateBySalary: function(salary, config) {
    if (salary < config.minHBase) {
      this.setData({hBase: config.minHBase})
    } else if (salary > config.maxHBase) {
      this.setData({hBase: config.maxHBase})
    } else {
      this.setData({hBase: salary})
    }
    if (salary < config.minIBase) {
      this.setData({iBase: config.minIBase})
    } else if(salary > config.maxIBase) {
      this.setData({iBase: config.maxIBase})
    } else {
      this.setData({iBase: salary})
    }
  },
  formSubmit: function (e) {
    const formData = e.detail.value;
    console.log(formData);
    let url = '../srp/srp'

    wx.navigateTo({
      url: url
    });
  },
  formReset: function (e) {
    this.setData({
      config: defaultConfig
    })
  }
})
