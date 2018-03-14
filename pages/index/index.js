//index.js
//获取应用实例
const app = getApp();
const utils = require('../../utils/util');

const CAPITAL_CITIES=[
{
  name: "北京",
  wholeName: "北京市",
  id: 1
},
{
  name:"上海",
  wholeName: "上海市",
  id: 9
},
{
  name:"深圳",
  wholeName: "深圳市",
  id: 9
},
{
  name:"广州",
  wholeName: "广州市",
  id: 9
},
{
  name:"杭州",
  wholeName: "杭州市",
  id: 9
},
{
  name:"南京",
  wholeName: "南京市",
  id: 9
},
{
  name:"天津 ",
  wholeName: "天津市",
  id: 9
},
{
  name:"重庆",
  wholeName: "重庆市",
  id: 9
},
{
  name:"厦门",
  wholeName: "厦门市",
  id: 9
},
{
  name:"成都",
  wholeName: "成都市",
  id: 9
},
{
  name:"西安",
  wholeName: "西安市",
  id: 9
},
{
  name:"郑州",
  wholeName: "郑州市",
  id: 9
},
{
  name:"长沙",
  wholeName: "长沙市",
  id: 9
},
{
  name:"昆明",
  wholeName: "昆明市",
  id: 9
},
{
  name:"贵阳",
  wholeName: "贵州市",
  id: 9
},
{
  name:"海口",
  wholeName: "海口市",
  id: 9
},
{
  name:"长春",
  wholeName: "长春市",
  id: 9
},
{
  name:"沈阳",
  wholeName: "沈阳市",
  id: 9
},
{
  name:"兰州",
  wholeName: "兰州市",
  id: 9
},
{
  name:"西宁",
  wholeName: "西宁市",
  id: 9
},
{
  name:"南昌",
  wholeName: "南昌市",
  id: 9
},
{
  name:"福州",
  wholeName: "福州市",
  id: 9
},
{
  name:"南宁",
  wholeName: "南宁市",
  id: 9
},
{
  name:"济南",
  wholeName: "济南市",
  id: 9
},
{
  name:"太原",
  wholeName: "太原市",
  id: 9
},
{
  name:"合肥",
  wholeName: "合肥市",
  id: 9
},
{
  name:"拉萨",
  wholeName: "拉萨市",
  id: 9
},
{
  name:"银川",
  wholeName: "银川市",
  id: 9
}
];

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    code: '',
    city: '北京市',
    cities: CAPITAL_CITIES,
    config: {
      insuranceBase: 23118,
      housingFundBase: 23118,
      insurancePercent: 12,
      housingFundPercent: 12
    }
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
  formSubmit: function (e) {
    const formData = e.detail.value;
    console.log(formData);
    let url = '../srp/srp'

    wx.navigateTo({
      url: url
    });
  },
  formReset: function (e) {
    
  }
})
