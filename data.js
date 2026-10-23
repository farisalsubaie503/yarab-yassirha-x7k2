// ===== بيانات صندوق يارب يسرها =====
// 1) base = مبلغ دخول كل واحد من بداية المحفظة. ثابت، لا يتغير أبداً.
// 2) current = القيمة الحالية لكل واحد. هذا اللي يتحدث (أسبوعياً أو بعد الصفقات).
// 3) withdrawals = السحوبات من رأس المال. كل سحب يتسجل هنا: { investor: "raed", date: "2026-11-01", amount: 200 }
//    الربح = القيمة الحالية + مجموع السحوبات - مبلغ الدخول الأساسي.
window.FUND = {
  as_of: "2026-10-22",
  usd_sar: 3.75,
  base:    { faris: 21972.79, raed: 1474.00, mohammad: 419.00 },
  current: { faris: 22355.12, raed: 1378.26, mohammad: 475.14 },
  withdrawals: [],
  trades: [
{
"no": 1,
"date": "2026-08-31",
"contract": "WETO",
"entry": 1498.5,
"pl": 161.22,
"pl_pct": 0.1076,
"duration": "",
"faris": 149.04,
"raed": 8.48,
"mohammad": 2.81
},
{
"no": 2,
"date": "2026-08-31",
"contract": "WETO",
"entry": 2095.29,
"pl": 220.3,
"pl_pct": 0.1051,
"duration": "",
"faris": 203.66,
"raed": 11.59,
"mohammad": 3.85
},
{
"no": 3,
"date": "2026-08-31",
"contract": "HOOD SEP 04 '26 99 Put",
"entry": 3254.51,
"pl": -638.02,
"pl_pct": -0.196,
"duration": "",
"faris": -589.82,
"raed": -33.55,
"mohammad": -11.14
},
{
"no": 4,
"date": "2026-08-31",
"contract": "HD SEP 11 '26 340 Call",
"entry": 8910.0,
"pl": -810.0,
"pl_pct": -0.0909,
"duration": "",
"faris": -748.81,
"raed": -42.6,
"mohammad": -14.14
},
{
"no": 5,
"date": "2026-08-31",
"contract": "SPY AUG 31 '26 766 Call",
"entry": 1715.51,
"pl": 444.98,
"pl_pct": 0.2594,
"duration": "",
"faris": 411.36,
"raed": 23.4,
"mohammad": 7.77
},
{
"no": 6,
"date": "2026-08-31",
"contract": "CRM SEP 04 '26 270 Call",
"entry": 3254.51,
"pl": -258.02,
"pl_pct": -0.0793,
"duration": "",
"faris": -238.53,
"raed": -13.57,
"mohammad": -4.5
},
{
"no": 7,
"date": "2026-08-31",
"contract": "ORCL SEP 04 '26 155 Call",
"entry": 3216.51,
"pl": 722.0,
"pl_pct": 0.2245,
"duration": "",
"faris": 667.45,
"raed": 37.97,
"mohammad": 12.6
},
{
"no": 8,
"date": "2026-08-31",
"contract": "DAIC",
"entry": 4720.93,
"pl": -534.88,
"pl_pct": -0.1133,
"duration": "",
"faris": -494.47,
"raed": -28.13,
"mohammad": -9.34
},
{
"no": 9,
"date": "2026-09-28",
"contract": "WBUY",
"entry": 600.88,
"pl": 147.08,
"pl_pct": 0.2448,
"duration": "1.42 sec",
"faris": 97.66,
"raed": 37.1,
"mohammad": 12.31
},
{
"no": 10,
"date": "2026-10-12",
"contract": "DAIC",
"entry": 477.16,
"pl": 123.24,
"pl_pct": 0.2583,
"duration": "14.00 min",
"faris": 81.83,
"raed": 31.09,
"mohammad": 10.32
},
{
"no": 11,
"date": "2026-10-14",
"contract": "META OCT 19 '26 720 Put",
"entry": 581.87,
"pl": 191.26,
"pl_pct": 0.3287,
"duration": "14.21 min",
"faris": 127.0,
"raed": 48.25,
"mohammad": 16.01
},
{
"no": 12,
"date": "2026-10-14",
"contract": "GOOGL OCT 19 '26 345 Put",
"entry": 1000.74,
"pl": 287.52,
"pl_pct": 0.2873,
"duration": "73.12 min",
"faris": 190.92,
"raed": 72.53,
"mohammad": 24.07
},
{
"no": 13,
"date": "2026-10-16",
"contract": "GOOGL OCT 23 '26 335 Put",
"entry": 709.15,
"pl": 241.7,
"pl_pct": 0.3408,
"duration": "99.41 min",
"faris": 160.49,
"raed": 60.97,
"mohammad": 20.24
},
{
"no": 14,
"date": "2026-10-19",
"contract": "AAPL OCT 26 '26 352.5 Call",
"entry": 1664.17,
"pl": -127.34,
"pl_pct": -0.0765,
"duration": "52.38 min",
"faris": -118.72,
"raed": -6.47,
"mohammad": -2.15
},
{
"no": 15,
"date": "2026-10-19",
"contract": "BAC OCT 30 '26 52 Put",
"entry": 1837.75,
"pl": -190.5,
"pl_pct": -0.1037,
"duration": "16.20 min",
"faris": -177.6,
"raed": -9.68,
"mohammad": -3.21
},
{
"no": 16,
"date": "2026-10-19",
"contract": "COIN OCT 23 '26 162.5 Put",
"entry": 1895.17,
"pl": 554.66,
"pl_pct": 0.2927,
"duration": "104.59 min",
"faris": 517.1,
"raed": 28.2,
"mohammad": 9.36
},
{
"no": 17,
"date": "2026-10-19",
"contract": "JPM OCT 30 '26 327.5 Put",
"entry": 1781.6,
"pl": 348.8,
"pl_pct": 0.1958,
"duration": "82.56 min",
"faris": 325.18,
"raed": 17.73,
"mohammad": 5.89
},
{
"no": 18,
"date": "2026-10-19",
"contract": "FRGT",
"entry": 1799.68,
"pl": -194.6,
"pl_pct": -0.1081,
"duration": "33.45 min",
"faris": -181.42,
"raed": -9.89,
"mohammad": -3.28
}
]
};