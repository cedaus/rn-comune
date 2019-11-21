import * as moment from 'moment';
import * as momentTZ from 'moment-timezone';

export class DateTime {
  date: string;
  time: string;
  year: string;
  month: string;
  day: string;
  timing: string;
  hr: string;
  min: string;
  sec: string;
  hm: string;
  offset: string;

  constructor(obj) {
    this.date = obj['date'];
    this.time = obj['time'];
    this.year = obj['year'];
    this.month = obj['month'];
    this.day = obj['day'];
    this.timing = obj['timing'];
    this.sec = obj['sec'] || '00';
    this.offset = obj['offset'] || '+05:30';
  }
}


/* ------------------------------------------------------------------ */
export function getBrowserTimezone() {
  // momentTZ(zone_name).zoneAbbr();
  return momentTZ.tz.guess(); // zone_name
}

function pad_with_zero(input_str) {
  if (input_str.length === 1) {
    return '0' + input_str;
  }
  return input_str;
}

/* ----------------------- Months & Days --------------------------------- */
export function getMonths() {
  return moment.monthsShort();
}

export function getDays() {
  const days = [];
  for (let i = 1; i < 32; i++) {
    days.push(pad_with_zero(i.toString(10)));
  }
  return days;
}

/* ---------------- TO ISO FORMAT ------------------------------------ */
export function spaceToISO() {

}

export function zoneLessDT(datetime) {
  // :param: datetime: any datetime format
  // :return: ISO without Timezone Format
  // :returnFormat: yyyy-mm-ddThh:mm:ss
  const value = moment(datetime).format();
  return value.slice(0, 19);
}

export function objToISO(dtObj: DateTime) {
  // :returnFormat: yyyy-mm-ddThh:mm:ss
  const date = String(dtObj.year) + '-' + pad_with_zero(String(getMonthNum(dtObj.month))) + '-' + pad_with_zero(dtObj.day);
  const time = dtObj.hm + ':' + dtObj.sec;
  const datetime = date + 'T' + time;
  return datetime;
}

/* -------------------- FROM ISO FORMAT ----------------------------- */

export function spaceDT(datetime) {
  // :param: datetime: ISO format
  // :return: date space time
  // :returnFormat: yyyy-mm-dd hh:mm:ss
  const value = datetime.split('T');
  const format = value[0] + ' ' + value[1].substring(0, 5);
  return format;
}

export function objDT(datetime) {
  // :param: datetime: ISO format
  // :returnFormat: date obj
  const arr0 = datetime.split('T')[0].split('-');
  const arr1 = datetime.split('T')[1].split(':');
  const format = new Date(Date.UTC(arr0[0], arr0[1] - 1, arr0[2], arr1[0], arr1[1]));
  return format;
}


/* ----------------------- UTC & Timezone Conversion ---------------------------------------- */
export function TimezonetoUTC(datetime, zone, format?) {
  // :param: datetime: ISO Timezone Format
  // :return: ISO UTC Format
  const zone_datetime = momentTZ.tz(datetime, zone).format();
  const utc_datetime = momentTZ(zone_datetime).tz('Universal');
  return utc_datetime.format(format);
}

export function UTCtoTimezone(datetime, zone, format?) {
  // :param: datetime: ISO UTC Format
  // :return: ISO Timezone Format
  const utc_datetime = momentTZ.tz(datetime, 'Universal').format();
  const zone_datetime = momentTZ(utc_datetime).tz(zone);
  return zone_datetime.format(format);
}

export function datetimeStringToUserTimeZoneString(datetimeString) {
  // Useful in getting the datetime in the timezone of the user automatically from his browser.
  const timezone = momentTZ.tz.guess();
  return momentTZ.tz(datetimeString, timezone);
}

/* ------------------------------------------------------------------ */
export function getDatetimeObj(datetime, month_format?, year_format?) {
  const month = moment(datetime).format(month_format || 'MMM');
  const year = moment(datetime).format(year_format || 'YYYY');
  return {month: month, year: year};
}

export function getMonthNum(month_str) {
  return moment().month(month_str).format('M');
}

export function getTimeAfterNHours(hours) {
  return moment().add(hours, 'hours');
}


export function get_datetime_from_yearmonth(year, month_str) {
  const value = String(year) + String(getMonthNum(month_str));
  return moment(value, 'YYYYM').format();
}

export function get_datetime_from_yearmonthday(year, month_str, day_str) {
  const value = String(year) + '-' + String(getMonthNum(month_str)) + '-' + day_str;
  return moment(value, 'YYYY-MM-DD').format();
}

/* ------------------------------------------------------------------ */
export function beforeDT(datetime1, datetime2) {
  return moment(datetime1).isBefore(datetime2);
}

export function afterDT(datetime1, datetime2) {
  return moment(datetime1).isAfter(datetime2);
}

/* ------------------------------------------------------------------ */

export function currentDT() {
  const local_datetime = moment().format();
  const utc_datetime = momentTZ(local_datetime).tz('Universal');
  return utc_datetime;
}

// datetime(String and Local) to datetime(ISO and UTC)
export function isoDT(datetime) {
  const format = new Date(datetime).toISOString();
  return format;
}


/* ------------------------------------------------------------------ */

// current datetime Object in UTC
export function currentObjDT() {
  const format = new Date().toISOString();
  return objDT(format);
}

// current datetime ISO in UTC
export function currentIsoDT() {
  return currentObjDT().toISOString();
}

/* ------------------------------------------------------------------ */

// Miliseconds to time object
function msToTime(diff) {
  let msec = diff;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  return {hh: hh, mm: mm, ss: ss, msec: msec};
}

//
export function checkConstraintDT(datetime, datetime_constraint, userTimezone) {
  /**
   * This function currently accepts each datetime in UTC ISO only
   * Check 1: Datetime is on or after current datetime
   * Check 2: Datetime after min datetime
   * Check 3: Datetime before max datetime
   * Check 4: Datetime aftert certain gap from current datetime
   */
  const data = {'message': null, 'test_passed': true};
  if (!datetime) {
    return data;
  }
  const current_datetime = currentIsoDT();
  // Setting Constraints
  let min_datetime = null;
  let max_datetime = null;
  let gap = null;
  if (datetime_constraint) {
    min_datetime = datetime_constraint['min_datetime'];
    max_datetime = datetime_constraint['max_datetime'];
    gap = datetime_constraint['gap'];
  }
  //
  // Making Checks
  if (beforeDT(datetime, current_datetime)) {
    data['test_passed'] = false;
    data['message'] = 'Please fill DateTime on or after ' + spaceDT(UTCtoTimezone(current_datetime, userTimezone));
    return data;
  }
  if (min_datetime && beforeDT(datetime, min_datetime)) {
    data['test_passed'] = false;
    data['message'] = 'Please fill DateTime after ' + spaceDT(UTCtoTimezone(min_datetime, userTimezone));
  }
  if (max_datetime && beforeDT(max_datetime, datetime)) {
    data['test_passed'] = false;
    data['message'] = 'Please fill DateTime before ' + spaceDT(UTCtoTimezone(max_datetime, userTimezone));
  }
  if (gap) {
    const obj_datetime: any = objDT(datetime);
    const obj_current_datetime: any = currentObjDT();
    const time_difference = obj_datetime - obj_current_datetime;
    if (time_difference < 0 || msToTime(time_difference).hh < gap) {
      data['test_passed'] = false;
      data['message'] = `Please fill DateTime at least ${gap}hrs from now`;
    }
  }
  return data;
}


//
export function consistencyCheckDT(timings, gap) {
  for (const index in timings) {
    const i = Number(index);
    if (i + 1 === timings.length) {
      break;
    }
    const beta: any = objDT(timings[i + 1]);
    const alpha: any = objDT(timings[i]);
    const diff = beta - alpha;
    if (diff < 0 || msToTime(diff).hh < gap) {
      return {
        test_passed: false,
        message: 'Please fill Reschedule Calls such that there is atleas 72hrs gap b/w each consistent call'
      };
    }
  }
  return {test_passed: true, message: ''};
}

export function getTodaysDateStr() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();

  let ddS = dd < 10 ? `0${dd}` : `${dd}`;
  let mmS = mm < 10 ? `0${mm}` : `${mm}`;

  return mmS + '/' + ddS + '/' + yyyy;
}


export function getUnixTimestamp() {
  return new Date().getTime();
}

export function getTodaysDateStrSansSeperator() {
  return getTodaysDateStr().split('/').join('');
}
