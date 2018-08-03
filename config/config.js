const CAPITAL_CITIES    =   [
    {
        name: "北京",
        wholeName: "北京市",
        id: 1,
        maxIBase: 25401, //最大养老保险基数
        maxHBase: 25401, //最大公积金基数
        minIBase: 3387,  //最小养老保险基数
        minHBase: 2273,  //最小住房公积金基数
    },
    {
        name:"上海",
        wholeName: "上海市",
        id: 9,
        maxIBase: 21396,
        maxHBase: 21400,
        minIBase: 4279,
        minHBase: 2300,
    },
    {
        name:"深圳",
        wholeName: "深圳市",
        id: 291,
        maxIBase: 25044,
        maxHBase: 25044,
        minIBase: 2200,
        minHBase: 2130,
    },
    {
        name:"广州",
        wholeName: "广州市",
        id: 289,
        maxIBase: 24654,
        maxHBase: 24654,
        minIBase: 2100,
        minHBase: 2100,
    },
    {
        name:"杭州",
        wholeName: "杭州市",
        id: 175,
        maxIBase: 15274,
        maxHBase: 24311,
        minIBase: 3055,
        minHBase: 2010,
    },
    {
        name:"南京",
        wholeName: "南京市",
        id: 162,
        maxIBase: 19935,
        maxHBase: 22500,
        minIBase: 3030,
        minHBase: 1890,
    },
    {
        name:"天津 ",
        wholeName: "天津市",
        id: 2,
        maxIBase: 16821,
        maxHBase: 24240,
        minIBase: 3364,
        minHBase: 2050,
    },
    {
        name:"重庆",
        wholeName: "重庆市",
        id: 22,
        maxIBase: 18318,
        maxHBase: 18318,
        minIBase: 3664,
        minHBase: 1500,
    },
    {
        name:"厦门",
        wholeName: "厦门市",
        id: 204,
        maxIBase: 22440,
        maxHBase: 22440,
        minIBase: 2150,
        minHBase: 2050,
    },
    {
        name:"成都",
        wholeName: "成都市",
        id: 385,
        maxIBase: 17908,
        maxHBase: 22302,
        minIBase: 2388,
        minHBase: 1500,
    },
    {
        name:"西安",
        wholeName: "西安市",
        id: 438,
        maxIBase: 19443,
        maxHBase: 19443,
        minIBase: 3372,
        minHBase: 1680,
    },
    {
        name:"郑州",
        wholeName: "郑州市",
        id: 240,
        maxIBase: 17621.5,
        maxHBase: 17625,
        minIBase: 3524,
        minHBase: 3524,
    },
    {
        name:"长沙",
        wholeName: "长沙市",
        id: 275,
        maxIBase: 13473,
        maxHBase: 29175,
        minIBase: 2695,
        minHBase: 1390,
    },
    {
        name:"昆明",
        wholeName: "昆明市",
        id: 415,
        maxIBase: 15891,
        maxHBase: 31950,
        minIBase: 3178,
        minHBase: 1580,
    },
    {
        name:"贵阳",
        wholeName: "贵阳市",
        id: 406,
        maxIBase: 16137.25,
        maxHBase: 33750,
        minIBase: 3227.45,
        minHBase: 1400,
    },
    {
        name:"海口",
        wholeName: "海口市",
        id: 324,
        maxIBase: 17265,
        maxHBase: 15508,
        minIBase: 3453,
        minHBase: 1430,
    },
    {
        name:"长春",
        wholeName: "长春市",
        id: 121,
        maxIBase: 18410,
        maxHBase: 21485,
        minIBase: 3606.8,
        minHBase: 2000,
    },
    {
        name:"沈阳",
        wholeName: "沈阳市",
        id: 107,
        maxIBase: 18545,
        maxHBase: 18545,
        minIBase: 3373,
        minHBase: 1620,
    },
    {
        name:"兰州",
        wholeName: "兰州市",
        id: 448,
        maxIBase: 16431,
        maxHBase: 18071.5,
        minIBase: 3287,
        minHBase: 1620,
    },
    {
        name:"西宁",
        wholeName: "西宁市",
        id: 462,
        maxIBase: 19134,
        maxHBase: 19134,
        minIBase: 3827,
        minHBase: 3827,
    },
    {
        name:"南昌",
        wholeName: "南昌市",
        id: 212,
        maxIBase: 15774,
        maxHBase: 16450,
        minIBase: 2807,
        minHBase: 1083,
    },
    {
        name:"福州",
        wholeName: "福州市",
        id: 203,
        maxIBase: 18783,
        maxHBase: 18783,
        minIBase: 1800,
        minHBase: 1650,
    },
    {
        name:"南宁",
        wholeName: "南宁市",
        id: 310,
        maxIBase: 14171,
        maxHBase: 18870,
        minIBase: 2834,
        minHBase: 1680,
    },
    {
        name:"济南",
        wholeName: "济南市",
        id: 223,
        maxIBase: 17550,
        maxHBase: 17550,
        minIBase: 3510,
        minHBase: 1910,
    },
    {
        name:"太原",
        wholeName: "太原市",
        id: 84,
        maxIBase: 15387,
        maxHBase: 16206,
        minIBase: 3077,
        minHBase: 1625,
    },
    {
        name:"合肥",
        wholeName: "合肥市",
        id: 186,
        maxIBase: 16982,
        maxHBase: 20172,
        minIBase: 3396,
        minHBase: 1520,
    },
    {
        name:"大连",
        wholeName: "大连市",
        id: 431,
        maxIBase: 18441,
        maxHBase: 30735,
        minIBase: 3688,
        minHBase: 1530,
    },
    {
        name:"银川",
        wholeName: "银川市",
        id: 470,
        maxIBase: 16957,
        maxHBase: 17025,
        minIBase: 3392,
        minHBase: 1660,
    }
];


const DEFAULT_IBASE_PERCENT=8;
const DEFAULT_HBASE_PERCENT=8;
const DEFAULT_MBASE_PERCENT=2; //医疗保险
const DEFAULT_JBASE_PERCENT=0.5; //失业保险
const DEFAULT_MAX_IBASE=23118;
const DEFAULT_MIN_IBASE=4624;
const DEFAULT_MAX_HBASE=23118;
const DEFAULT_MIN_HBASE=2273;

const citiesConfig = function(cityList, options={}) {
    return cityList.map(config => {
        if (typeof config.iPercent === 'undefined') {
            config.pIBase = options.pIBase;
        }
        if (typeof config.hfBase === 'undefined') {
            config.pHBase = options.pHBase;
        }
        if (typeof config.mBase === 'undefined') {
            config.pMBase = options.pMBase;
        }
        if (typeof config.jBase === 'undefined') {
            config.pJBase = options.pJBase;
        }
        if (typeof config.maxIBase === 'undefined') {
            config.maxIBase = options.maxIBase;
        }
        if (typeof config.minIBase === 'undefined') {
            config.minIBase = options.minIBase;
        }
        if (typeof config.maxHBase === 'undefined') {
            config.maxHBase = options.maxHBase;
        }
        if (typeof config.minHBase === 'undefined') {
            config.minHBase = options.minHBase;
        }
        return config;
    })
}

const defaultCitiesConfig = function() {
    return citiesConfig(CAPITAL_CITIES, {
        pIBase: DEFAULT_IBASE_PERCENT, //保险系数
        pHBase: DEFAULT_HBASE_PERCENT, //住房公积金比例
        pMBase: DEFAULT_MBASE_PERCENT, //医疗保险比例
        pJBase: DEFAULT_JBASE_PERCENT, //失业保险比例
        maxIBase: DEFAULT_MAX_IBASE,
        minIBase: DEFAULT_MIN_IBASE,
        maxHBase: DEFAULT_MAX_HBASE,
        minHBase: DEFAULT_MIN_HBASE,
    });
}

const getConfigById = function(id) {
    const cities = defaultCitiesConfig();
    return cities.find(city => city.id == id);
}

module.exports = {
    CITIES_CONFIG: defaultCitiesConfig(),
    getConfigById: getConfigById,
}
