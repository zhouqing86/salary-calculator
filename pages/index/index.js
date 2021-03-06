//index.js
//获取应用实例
const app = getApp();
const utils = require('../../utils/util');
const config = require('../../config/config');
const bmap = require('../../lib/bmap-wx.min.js');

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
    pIBase: pIBase,
    salaryErrorClass: "",
    hiddenCityClass: "hidden-city-list",
    focusField: "city",
    childNumber: 0,
    childEducationDeduct: 0,
    brotherSisterNumber: 0,
    parentDutyDeduct: 0,
    houseLoan: true,
    isRent: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
      var that = this;
      var BMap = new bmap.BMapWX({
          ak: 'nz4MPTsurW8rvNwUR4pS9co2Dnvac7H2'
      });
      var fail = function(data) {
          console.log('获取城市信息失败!!!!')
      };
      var success = function(data) {
          var weatherData = data.currentWeather[0];

          if (weatherData && weatherData.currentCity) {
            let currentCity = weatherData.currentCity;
            let city = CAPITAL_CITIES.find(c => c.wholeName.indexOf(currentCity) != -1);
            if (city) {
              that.changeCityById(city.id);
            }
          }
      }
      //只为获取城市名
      BMap.weather({
          fail: fail,
          success: success
      });
  },
  changeCity: function(event) {
    const id = event.currentTarget.dataset.cityId;
    this.changeCityById(id);
    this.setData({
      hiddenCityClass: "hidden-city-list"
    });
  },
  changeCityById: function(id) {
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
      this.setData({salary: salary});
      this.changeStateBySalary(salary, this.data.config);
    }
  },
  displayCityList: function(event) {
    this.setData({
      hiddenCityClass: ""
    });
  },
  hiddenCityList: function(event) {
    this.setData({
      hiddenCityClass: "hidden-city-list"
    });
  },
  changeChildNumber: function(event) {
    if (event.detail.value != undefined) {
      let childNumber = parseInt(event.detail.value);
      this.setData({
        childEducationDeduct: childNumber * 1000,
        childNumber: childNumber
      });
    }
  },
  changeBrotherSisterNumber: function(event) {
    if (event.detail.value != undefined && event.detail.value != 0) {
      let brotherSisterNumber = parseInt(event.detail.value);
      this.setData({
        parentDutyDeduct: utils.toFixed(2000/brotherSisterNumber),
        brotherSisterNumber: brotherSisterNumber
      });
    } else if (event.detail.value == 0) {
      this.setData({
        parentDutyDeduct: 0,
        brotherSisterNumber: 0
      });
    }
  },
  houseLoanChange: function(event) {
    this.setData({
      houseLoan: !(this.data.houseLoan)
    });
  },
  rentStatusChange: function(event) {
    this.setData({
      isRent: !(this.data.isRent)
    });
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
    formData.config = this.data.config;
    formData.houseLoan = this.data.houseLoan;
    formData.isRent = this.data.isRent;

    if (!formData.salary || parseInt(formData.salary) <= 0) {
      this.setData({
        salaryErrorClass: "salary-error"
      });
      return
    }

    let url = '../srp/srp?data=' + JSON.stringify(formData)

    wx.navigateTo({
      url: url
    });
  },
  formReset: function (e) {
    this.setData({
      config: defaultConfig,
      salaryErrorClass: "",
      hiddenCityClass: "hidden-city-list",
      focusField: "city",
      childNumber: 0,
      childEducationDeduct: 0,
      brotherSisterNumber: 0,
      parentDutyDeduct: 0,
      houseLoan: true,
      isRent: false
    })
  }
})
