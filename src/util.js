var moment = require('moment');

var momentInvalidDate = function(it){
  return !moment(it).isValid();
};

var yearIsOne = function(it){
  return moment(it).year() === 1 || moment(it).year() === 0;
};

var invalidDate = function(it){
  return momentInvalidDate(it) || yearIsOne(it);
};

var formatDate = function(x){
  var ref$;
  switch (ref$ = [x], false) {
  case !not$(ref$[0]):
    return "";
  case !invalidDate(ref$[0]):
    return "";
  default:
    return moment(x).format('L');
  }
};


var formatVal = function(val, format){
  if (typeof format === 'function') {
    return format(val);
  }
  switch (format) {
  case 'date':
    return formatDate(val);
  case 'decimalPercent':
    return val * 100 + "%";
  case val === undefined:
    return "empty";
  default:
    return val;
  }
};

module.exports = {
  formatDate: formatDate,
  formatVal: formatVal
};
function not$(x){ return !x; }
