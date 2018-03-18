const CAPITAL_CITIES    =   [
    {
        name: "北京",
        wholeName: "北京市",
        id: 1,
        maxIBase: 23118, //最大养老保险基数
        maxHBase: 23118, //最大公积金基数
        minIBase: 4624,  //最小养老保险基数
        minHBase: 2273,  //最小住房公积金基数
    },
    {
        name:"上海",
        wholeName: "上海市",
        id: 9,
        maxIBase: 22440,
        maxHBase: 22440,
        minIBase: 2150,
        minHBase: 2050,
    },
    {
        name:"深圳",
        wholeName: "深圳市",
        id: 291,
        maxIBase: 22440,
        maxHBase: 22440,
        minIBase: 2150,
        minHBase: 2050,
    },
    {
        name:"广州",
        wholeName: "广州市",
        id: 289,
        maxIBase: 22275,
        maxHBase: 22275,
        minIBase: 2000,
        minHBase: 2000,
    },
    {
        name:"杭州",
        wholeName: "杭州市",
        id: 175,
        maxIBase: 14100,
        maxHBase: 21980,
        minIBase: 2820,
        minHBase: 1860,
    },
    {
        name:"南京",
        wholeName: "南京市",
        id: 162,
        maxIBase: 18171,
        maxHBase: 22500,
        minIBase: 2772,
        minHBase: 1890,
    },
    {
        name:"天津 ",
        wholeName: "天津市",
        id: 2,
        maxIBase: 15795,
        maxHBase: 22605,
        minIBase: 3159,
        minHBase: 2050,
    },
    {
        name:"重庆",
        wholeName: "重庆市",
        id: 22,
        maxIBase: 16847,
        maxHBase: 16847,
        minIBase: 3370,
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
        maxIBase: 15333,
        maxHBase: 20972,
        minIBase: 3067,
        minHBase: 1500,
    },
    {
        name:"西安",
        wholeName: "西安市",
        id: 438,
        maxIBase: 17403,
        maxHBase: 17403,
        minIBase: 3481,
        minHBase: 1480,
    },
    {
        name:"郑州",
        wholeName: "郑州市",
        id: 240,
        maxIBase: 15287,
        maxHBase: 15287,
        minIBase: 3057,
        minHBase: 3057,
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
        maxHBase: 15507,
        minIBase: 3178,
        minHBase: 1570,
    },
    {
        name:"贵阳",
        wholeName: "贵阳市",
        id: 406,
        maxIBase: 15035,
        maxHBase: 42783,
        minIBase: 2004,
        minHBase: 1400,
    },
    {
        name:"海口",
        wholeName: "海口市",
        id: 324,
        maxIBase: 15642,
        maxHBase: 15508,
        minIBase: 3128,
        minHBase: 1430,
    },
    {
        name:"长春",
        wholeName: "长春市",
        id: 121,
        maxIBase: 18410,
        maxHBase: 21485,
        minIBase: 3682,
        minHBase: 2000,
    },
    {
        name:"沈阳",
        wholeName: "沈阳市",
        id: 107,
        maxIBase: 16861,
        maxHBase: 16860,
        minIBase: 3373,
        minHBase: 1530,
    },
    {
        name:"兰州",
        wholeName: "兰州市",
        id: 448,
        maxIBase: 14887,
        maxHBase: 22440,
        minIBase: 16752,
        minHBase: 1620,
    },
    {
        name:"西宁",
        wholeName: "西宁市",
        id: 462,
        maxIBase: 16863,
        maxHBase: 16863,
        minIBase: 3373,
        minHBase: 3373,
    },
    {
        name:"南昌",
        wholeName: "南昌市",
        id: 212,
        maxIBase: 14331,
        maxHBase: 14433,
        minIBase: 2867,
        minHBase: 1083,
    },
    {
        name:"福州",
        wholeName: "福州市",
        id: 203,
        maxIBase: 16907,
        maxHBase: 16908,
        minIBase: 1800,
        minHBase: 1650,
    },
    {
        name:"南宁",
        wholeName: "南宁市",
        id: 310,
        maxIBase: 14171,
        maxHBase: 17140,
        minIBase: 2834,
        minHBase: 1400,
    },
    {
        name:"济南",
        wholeName: "济南市",
        id: 223,
        maxIBase: 15999,
        maxHBase: 15999,
        minIBase: 3200,
        minHBase: 1810,
    },
    {
        name:"太原",
        wholeName: "太原市",
        id: 84,
        maxIBase: 13744,
        maxHBase: 16206,
        minIBase: 3024,
        minHBase: 1625,
    },
    {
        name:"合肥",
        wholeName: "合肥市",
        id: 186,
        maxIBase: 15321,
        maxHBase: 18713,
        minIBase: 3065,
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
        minIBase: 3125,
        minHBase: 1480,
    }
];


const DEFAULT_IBASE_PERCENT=8;
const DEFAULT_HBASE_PERCENT=8;
const DEFAULT_MBASE_PERCENT=2; //医疗保险
const DEFAULT_JBASE_PERCENT=0.2; //失业保险
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
  

