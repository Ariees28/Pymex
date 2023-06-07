"use strict";
if ("function" == typeof require) var moment = require("moment");
(moment.fn.isHoliday = function () {
  var n = this.localeData();
  return (
    !!(
      n._holidays && 0 <= n._holidays.indexOf(this.format(n._holidayFormat))
    ) ||
    (!!n.holiday && !!n.holiday(this))
  );
}),
  (moment.fn.isBusinessDay = function () {
    var n = this.localeData()._workingWeekdays || [1, 2, 3, 4, 5];
    return !this.isHoliday() && 0 <= n.indexOf(this.day());
  }),
  (moment.fn.businessDaysIntoMonth = function () {
    if (!this.isValid()) return NaN;
    var t,
      e = this.isBusinessDay() ? this : this.prevBusinessDay();
    return (
      e.monthBusinessDays().map(function (n, s) {
        n.format("M/DD/YY") === e.format("M/DD/YY") && (t = s + 1);
      }),
      t
    );
  }),
  (moment.fn.businessDiff = function (n, s) {
    var t = this.clone(),
      e = n.clone(),
      i = e <= t,
      o = t < e ? t : e,
      a = t < e ? e : t,
      r = 0;
    if (o.format("DD/MM/YYYY") === a.format("DD/MM/YYYY")) return r;
    for (; o < a; ) o.isBusinessDay() && r++, o.add(1, "d");
    return !s || i ? r : -r;
  }),
  (moment.fn.businessAdd = function (n, s) {
    var t = this.clone();
    if (!t.isValid()) return t;
    var e = (n = n < 0 ? -1 * Math.round(-1 * n) : Math.round(n)) < 0 ? -1 : 1;
    s = void 0 !== s ? s : "days";
    for (var i = Math.abs(n); 0 < i; ) t.add(e, s), t.isBusinessDay() && i--;
    return t;
  }),
  (moment.fn.businessSubtract = function (n, s) {
    return this.businessAdd(-n, s);
  }),
  (moment.fn.nextBusinessDay = function () {
    for (
      var n = 1, s = this.localeData()._nextBusinessDayLimit || 7;
      n < s && !this.add(1, "d").isBusinessDay();

    )
      n++;
    return this;
  }),
  (moment.fn.prevBusinessDay = function () {
    for (
      var n = 1, s = this.localeData()._prevBusinessDayLimit || 7;
      n < s && !this.subtract(1, "d").isBusinessDay();

    )
      n++;
    return this;
  }),
  (moment.fn.monthBusinessDays = function (n) {
    if (!this.isValid()) return [];
    for (
      var s = this.clone(),
        t = s.clone().startOf("month"),
        e = n || s.clone().endOf("month"),
        i = [],
        o = !1;
      !o;

    )
      t.isBusinessDay() && i.push(t.clone()),
        e.diff(t.add(1, "d")) < 0 && (o = !0);
    return i;
  }),
  (moment.fn.monthNaturalDays = function (n) {
    if (!this.isValid()) return [];
    for (
      var s = this.clone(),
        t = n ? s.clone() : s.clone().startOf("month"),
        e = s.clone().endOf("month"),
        i = [],
        o = !1;
      !o;

    )
      i.push(t.clone()), e.diff(t.add(1, "d")) < 0 && (o = !0);
    return i;
  }),
  (moment.fn.monthBusinessWeeks = function (n) {
    n = n || !1;
    var s = this.clone(),
      t = n ? s.clone() : s.clone().startOf("month");
    return getBusinessWeeks(this, n, null, t);
  }),
  (moment.fn.businessWeeksBetween = function (n) {
    var s = this.clone().clone();
    return getBusinessWeeks(this, !1, n, s);
  });
var getBusinessWeeks = function (n, s, t, e) {
  if (!n.isValid()) return [];
  for (
    var i = n.clone(),
      o = e,
      a = t ? moment(t).clone() : i.clone().endOf("month"),
      r = [],
      u = [],
      f = !1;
    !f;

  )
    1 <= o.day() && o.day() < 6 && u.push(o.clone()),
      5 === o.day() && (r.push(u), (u = [])),
      a.diff(o.add(1, "d")) < 0 && (u.length < 5 && r.push(u), (f = !0));
  return r;
};
(moment.fn.monthNaturalWeeks = function (n) {
  if (!this.isValid()) return [];
  for (
    var s = this.clone(),
      t = n ? s.clone() : s.clone().startOf("month"),
      e = s.clone().endOf("month"),
      i = [],
      o = [],
      a = !1;
    !a;

  )
    o.push(t.clone()),
      6 === t.day() && (i.push(o), (o = [])),
      e.diff(t.add(1, "d")) < 0 && (o.length < 7 && i.push(o), (a = !0));
  return i;
}),
  "undefined" != typeof module && module.exports && (module.exports = moment);
