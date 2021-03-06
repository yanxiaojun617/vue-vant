/**
 * util:业务无关的工具方法
 * helper:业务或框架有关的工具方法
 */

const sessionStorage = {
  set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    const jsonString = window.sessionStorage.getItem(key)
    return jsonString ? JSON.parse(jsonString) : null
  },
  remove(key) {
    window.sessionStorage.removeItem(key)
  },
  clear() {
    window.sessionStorage.clear()
  }
}

const localStorage = {
  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    const jsonString = window.localStorage.getItem(key)
    return jsonString ? JSON.parse(jsonString) : null
  },
  remove(key) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}

/**
 * 日期对象转为日期字符串
 * @param date 需要格式化的日期对象
 * @param sFormat 输出格式,默认为yyyy-MM-dd                         年：y，月：M，日：d，时：h，分：m，秒：s
 * @example  formatDate(new Date())                                "2017-02-28"
 * @example  formatDate(new Date(),'yyyy-MM-dd')                   "2017-02-28"
 * @example  formatDate(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 09:24:00"
 * @example  formatDate(new Date(),'hh:mm')                       "09:24"
 * @example  formatDate(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T09:24:00+08:00"
 * @returns {string}
 */
const formatDate = (date, sFormat = 'yyyy-MM-dd') => {
  let time = {
    Year: 0,
    TYear: '0',
    Month: 0,
    TMonth: '0',
    Day: 0,
    TDay: '0',
    Hour: 0,
    THour: '0',
    hour: 0,
    Thour: '0',
    Minute: 0,
    TMinute: '0',
    Second: 0,
    TSecond: '0',
    Millisecond: 0
  }
  time.Year = date.getItemFullYear()
  time.TYear = String(time.Year).substr(2)
  time.Month = date.getItemMonth() + 1
  time.TMonth = time.Month < 10 ? '0' + time.Month : String(time.Month)
  time.Day = date.getItemDate()
  time.TDay = time.Day < 10 ? '0' + time.Day : String(time.Day)
  time.Hour = date.getItemHours()
  time.THour = time.Hour < 10 ? '0' + time.Hour : String(time.Hour)
  time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12
  time.Thour = time.hour < 10 ? '0' + time.hour : String(time.hour)
  time.Minute = date.getItemMinutes()
  time.TMinute = time.Minute < 10 ? '0' + time.Minute : String(time.Minute)
  time.Second = date.getItemSeconds()
  time.TSecond = time.Second < 10 ? '0' + time.Second : String(time.Second)
  time.Millisecond = date.getItemMilliseconds()

  return sFormat.replace(/yyyy/ig, String(time.Year))
    .replace(/yyy/ig, String(time.Year))
    .replace(/yy/ig, time.TYear)
    .replace(/y/ig, time.TYear)
    .replace(/MM/g, time.TMonth)
    .replace(/M/g, String(time.Month))
    .replace(/dd/ig, time.TDay)
    .replace(/d/ig, String(time.Day))
    .replace(/HH/g, time.THour)
    .replace(/H/g, String(time.Hour))
    .replace(/hh/g, time.Thour)
    .replace(/h/g, String(time.hour))
    .replace(/mm/g, time.TMinute)
    .replace(/m/g, String(time.Minute))
    .replace(/ss/ig, time.TSecond)
    .replace(/s/ig, String(time.Second))
    .replace(/fff/ig, String(time.Millisecond))
}

// 去除字符串两边空格
const trim = (str) => {
  if (!str) {
    return ''
  }
  return str.replace(/(^\s+)|(\s+$)/g, '')
}

export default {
  sessionStorage,
  localStorage,
  trim,
  formatDate,
}
