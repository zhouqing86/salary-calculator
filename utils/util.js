const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const clone = function(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const toPureIncome = function(value, mode=0) {
        if(isNaN(value)) return 0;
        if(value<=0) return 0;

        let taxes = [
            [//工资
                [3500, 5000, 8000, 12500, 38500, 58500, 83500, value],
                [0,       0,    0,     0,     0,     0,     0,     0],
                [3500, 3500, 3500,  3500,  3500,  3500,  3500,  3500],
                [0,    0.03, 0.10,  0.20,  0.25,  0.30,  0.35,  0.45],
                [0,       0,  105,   555,  1005,  2755,  5505, 13505]
            ],
            [//劳务
                [800, 4000, 20000, 50000, value],
                [  0, 0,      0.2,   0.2,   0.2],
                [  0, 800,      0,     0,     0],
                [  0, 0.2,    0.2,   0.3,   0.4],
                [  0, 0,        0,  2000,  7000]
            ]
        ];

        let levels = taxes[mode];
        let index = levels[0].findIndex((v) => {return v>=value;});

        let result = Number.parseFloat(value - (value * (1 - levels[1][index]) - levels[2][index]) * levels[3][index] + levels[4][index]).toFixed(2);
        return result;
}

const toFixed = function(number) {
  return Math.floor(number* 100) / 100 ;
}

const newTaxMonthlyIncome = function(value, mode=0) {
        if(isNaN(value)) return 0;
        if(value<=0) return 0;

        let taxes = [
            [//工资
                [5000, 8000, 17000, 30000, 40000, 60000, 85000, value],
                [0,       0,    0,     0,     0,     0,     0,     0],
                [5000, 5000, 5000,  5000,  5000,  5000,  5000,  5000],
                [0,    0.03, 0.10,  0.20,  0.25,  0.30,  0.35,  0.45],
                [0,       0,  210,   1410,  2660,  4410,  7160, 15160]
            ],
            [//劳务
                [1667, 4167, 20000, 50000, value],
                [  0, 0,      0.2,   0.2,   0.2],
                [  0, 800,      0,     0,     0],
                [  0, 0.2,    0.2,   0.3,   0.4],
                [  0, 0,        0,  2000,  7000]
            ]
        ];
//[0, 0, 3000*0.07, 3000*0.17+9000*0.1, 3000*0.22+9000*0.15+13000*0.05, 3000*0.27+9000*0.20+13000*0.10+10000*0.05,3000*0.32+9000*0.25+13000*0.15+10000*0.10+20000*0.05,3000*0.42+9000*0.35+13000*0.25+10000*0.20+20000*0.15+25000*0.1]
        let levels = taxes[mode];
        let index = levels[0].findIndex((v) => {return v>=value;});

        let result = Number.parseFloat(value - (value * (1 - levels[1][index]) - levels[2][index]) * levels[3][index] + levels[4][index]).toFixed(2);
        return result;
}


const newSalary = function(data) {
  const config = data.config;
  const salary = data.salary;
  const insurance = parseFloat(data.iBase) * parseFloat(data.pIBase) / 100;
  const houseFounding = parseFloat(data.hBase) * parseFloat(data.pHBase) / 100;
  const medicineInsurance = parseFloat(config.pMBase) * parseFloat(data.iBase) / 100;
  const jobInsurance = parseFloat(config.pJBase) * parseFloat(config.minIBase) / 100;

  const monthTheoryIncome = newTaxMonthlyIncome(salary - insurance - houseFounding - medicineInsurance - jobInsurance);
  const tax = salary - insurance - houseFounding - medicineInsurance - jobInsurance - monthTheoryIncome;

  return {
    monthTheoryIncome: {
      value: toFixed(monthTheoryIncome),
      percent: toFixed(monthTheoryIncome / salary * 100)
    },
    tax: {
      value: toFixed(tax),
      percent: toFixed(tax/salary * 100)
    }
  }
}

const calSalary = function(data) {
  const config = data.config;
  const salary = data.salary;
  const insurance = parseFloat(data.iBase) * parseFloat(data.pIBase) / 100;
  const houseFounding = parseFloat(data.hBase) * parseFloat(data.pHBase) / 100;
  const medicineInsurance = parseFloat(config.pMBase) * parseFloat(data.iBase) / 100;
  const jobInsurance = parseFloat(config.pJBase) * parseFloat(config.minIBase) / 100;
  const afterInsuranceSalary = data.salary - insurance - houseFounding - medicineInsurance - jobInsurance;
  const afterTaxSalary = toPureIncome(afterInsuranceSalary, 0);
  const tax = afterInsuranceSalary - afterTaxSalary;

  // console.log("data:", data);

  const newSalaryData = newSalary(data);

  return {
    newSalary: newSalaryData,
    insurance: {
      base: data.iBase,
      jpercent: data.pIBase,
      value: toFixed(insurance),
      percent: toFixed(insurance / salary * 100)
    },
    houseFounding: {
      base: data.hBase,
      jpercent: data.pHBase,
      value: toFixed(houseFounding),
      percent: toFixed(houseFounding / salary * 100)
    },
    medicineInsurance: {
      base: data.iBase,
      jpercent: data.pHBase,
      value: toFixed(medicineInsurance),
      percent: toFixed(medicineInsurance / salary * 100)
    },
    jobInsurance: {
      base: config.minIBase,
      jpercent: config.pJBase,
      value: toFixed(jobInsurance),
      percent: toFixed(jobInsurance / salary * 100)
    },
    tax: {
      value: toFixed(tax),
      percent: toFixed(tax / salary * 100)
    },
    afterTaxSalary: {
      value: toFixed(afterTaxSalary),
      percent: toFixed(afterTaxSalary / salary * 100)
    },
    oldCompareNew: {
      salary: toFixed(newSalaryData.monthTheoryIncome.value - afterTaxSalary),
      savedTax: toFixed(tax - newSalaryData.tax.value)
    }
  }
}

module.exports = {
  formatTime: formatTime,
  clone: clone,
  calSalary: calSalary,
}
