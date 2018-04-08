var baseQuota = 3500;
var taxQuota = [1500, 4500, 9000, 35000, 55000, 80000];
var taxRat = [0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45];
var taxQuick = [0, 105, 555, 1005, 2755, 5505, 13505];
// 获取不拆分年奖交税总额
function getOnlyBonusTax(yearBonus, monthSalary) {
    var tax = 0;
    if (monthSalary > baseQuota) {
        perMonth = yearBonus / 12;
        tax = round(yearBonus * getTaxRat(perMonth) - getTaxQuick(perMonth), 2);
    } else {
        if (yearBonus < baseQuota - monthSalary) {
            tax = 0;
        } else {
            perMonth = (yearBonus - (baseQuota - monthSalary)) / 10;
            tax = (yearBonus - (baseQuota - monthSalary)) * getTaxRat(perMonth) - getTaxQuick(perMonth);
        }
    }
    return tax;
}
// 获取税率等级
function getTaxNum(money){
    for (var i = 0, l = taxQuota.length; i < l; i++) {
        if (money <= taxQuota[i]) {
            return i;
        }
    }
    return i;
}
// 获取税率
function getTaxRat(money){
    return taxRat[getTaxNum(money)];
}
// 获取速算扣除数
function getTaxQuick(money) {
    return taxQuick[getTaxNum(money)];
}
// 获取平常月交税金额
function getMonthTax(money) {
    if (money > baseQuota) {
        return getTax(money - baseQuota);
    } else {
        return 0;
    }
}
// 获取年奖平均月交税金额
function getPerMonthTax(money) {
    return getTax(money);
}
// 计算个人所得税金额
function getTax(money) {
    return round(money * getTaxRat(money) - getTaxQuick(money), 2);
}
// 计算增加的交税金额
function getMonthTaxAdd(monthSalary, addNum) {
    var monthAddSalary = monthSalary + addNum;
    monthTaxAdd = round(getMonthTax(monthAddSalary) - getMonthTax(monthSalary), 2);
    return monthTaxAdd;
}
// 计算金额小数
function round(num, toFix) {
    return parseFloat(num.toFixed(toFix), 10);
}
// 获取拆分为一个月交税总额
function getOneMonthBonus(yearBonus, monthSalary) {
    var nowBonusTax = getOnlyBonusTax(yearBonus, monthSalary);
    for (var i = 1; i < yearBonus; i++) {
        var bonusRemain = yearBonus - i;
        var monthTaxAdd = getMonthTaxAdd(monthSalary, i);
        var bonusTax = round(getOnlyBonusTax(bonusRemain, monthSalary) + monthTaxAdd, 2);
        if (bonusTax < nowBonusTax) {
            nowBonusTax = bonusTax;
            oneMonth = i;
        }
    }
    return {
		tax: nowBonusTax,
		bonus: i
	}
}

const toFixed = function(number) {
  return Math.floor(number* 100) / 100 ;
}

// 获取拆分为两个月交税总额
function getTwoMonthBonus(yearBonus, monthSalary) {
    var nowBonusTax = getOnlyBonusTax(yearBonus, monthSalary);
    for (var i = 1; i < yearBonus; i++) {
        var bonusRemain = yearBonus - i;
        var monthTaxAdd = getMonthTaxAdd(monthSalary, (i / 2)) * 2;
        var bonusTax = round(getOnlyBonusTax(bonusRemain, monthSalary) + monthTaxAdd, 2);
        if (bonusTax < nowBonusTax) {
            nowBonusTax = bonusTax;
            twoMonth = i / 2;
        }
    }
    return {
		tax: nowBonusTax,
		bonus: i
	};
}
function calBonus(yearBonus){
    var tax = 0;
    var perMonth = yearBonus / 12;
    var quickTax = getTaxQuick(perMonth);
    var taxRate = getTaxRat(perMonth);
    var tax = round(yearBonus * taxRate - quickTax, 2);

    return {
      tax: tax,
      quickTax: quickTax,
      taxRate: taxRate,
      percent: toFixed(tax / yearBonus * 100)
    }
}
module.exports = {
  calBonus: calBonus
}
