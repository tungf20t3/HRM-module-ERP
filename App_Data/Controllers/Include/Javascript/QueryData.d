﻿<![CDATA[
function query$Select(g, e) {
  var a = e.split('$groupBy');
  var r = a[0].split(','), r1 = [], r2 = [];
  for (var i = 0; i < r.length; i++) {
    var c = r[i].split('$');
    Array.add(r1, c[0]);
    Array.add(r2, c[1]);
  }
  r = a[1].split('$where');
  if (r.length == 1) return query$DataView(g, r2.join(','), r1.join(','), r[0]);
    else return query$DataView(g, r2.join(','), r1.join(','), r[0], r[1]);
}
function query$DataView(g, fields, agg, p, e) {
  var a = [], r = agg.split(','), n = p.split(',').length;
  for (var i = 0; i < g._rowCount; i++) {
    if ((!e) || (e && g.calcExpression(i, e))) {
      var item = query$DataRow(g, i, p + ', ' + fields);
      if (i == 0) {query$insertItem(a, agg, p, item); continue;}
      var index = query$Array(a, i, g, p);
      if (index < 0) {query$insertItem(a, agg, p, item); continue;}
      for (var j = 0; j < r.length; j++) {
        if (a[index][n + j] == null) {a[index][n + j] = item[n + j]; continue;}
        var type = $func.trim(r[j]);
        switch (type) {
          case 'max':
            if (a[index][n + j] < item[n + j]) a[index][n + j] = item[n + j];
            break;
          case 'min':
            if (a[index][n + j] > item[n + j]) a[index][n + j] = item[n + j];
            break;
          case 'sum':
            a[index][n + j] += item[n + j];
            break;
          case 'count':
            a[index][n + j] += 1;
            break;          
          default:
            break;
        }
      }    
    }
  }
  return a;
}
function query$insertItem(a, agg, p, item) {
  var r = agg.split(','), n = p.split(',').length;
  for (var i = 0; i < r.length; i++) {
    if ($func.trim(r[i]) == 'count') item[n + i] = 1;
  }
  Array.add(a, item);
}
function query$DataRow(g, index, p) {
  var a = [], fields = p.split(',');
  for (var i = 0; i < fields.length; i++) {
    var field = $func.trim(fields[i]);
    var c = g._getColumnOrder(field);
    var item = (c > 0 ? g._getItemValue(index + 1, c) : g.calcExpression(index, field));
    if (c > 0) {if (g._fields[c - 1].Type == 'String') item = $func.trim(item.toUpperCase());}
    Array.add(a, item);
  }
  return a;
}
function query$Array(a, index, g, p) {
  var fields = p.split(',');
  for (var i = 0; i < a.length; i++) {
    var found = true;
    for (var j = 0; j < fields.length; j++) {
      var field = $func.trim(fields[j]);
      var c = g._getColumnOrder(field);
      var item = (c > 0 ? g._getItemValue(index + 1, c) : g.calcExpression(index, field));
      if (c > 0) {if (g._fields[c - 1].Type == 'String') item = $func.trim(item.toUpperCase());}
      if (a[i][j].toString() != item.toString()) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}
]]>