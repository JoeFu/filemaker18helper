var pairs =
{
"quote":{"\u8FD4":1,"(":1}
,"\u8FD4":{"\u56DE":1}
,"\u56DE":{"\u7531":1,"\u0022":1,"\u201C":1}
,"\u7531":{"\u5F15":1}
,"\u5F15":{"\u53F7":1}
,"\u53F7":{"\u62EC":1}
,"\u62EC":{"\u8D77":1}
,"\u8D77":{"\u6765":1}
,"\u6765":{"\u7684":1}
,"\u7684":{"\u6587":1,"\u7279":1}
,"\u6587":{"\u672C":1}
,"\u672C":{"\u7684":1,"\u683C":1,")":1,"-\u4EFB":1,"\u8868":1,"filemaker":1,"\u3002":1,"\u4E2D":1}
,"\u683C":{"\u5F0F":1}
,"\u5F0F":{"\u3002":1,"\u6216":1}
,"\u3002":{"quote":1,"\u6587":1,"evaluate":1}
,"(":{"\u6587":1,"\u0022":1,"quote":1}
,")":{"\u6587":1,"\u8FD4":1,")":1}
,"-\u4EFB":{"\u610F":1}
,"\u610F":{"\u6587":1}
,"\u8868":{"\u8FBE":1}
,"\u8FBE":{"\u5F0F":1}
,"\u6216":{"\u5B57":1}
,"\u5B57":{"\u6BB5":1,"\u7B26":1}
,"\u6BB5":{"\u6587":1}
,"filemaker":{"\u00A0":1}
,"\u00A0":{"pro":1}
,"pro":{"7.0":1}
,"7.0":{"\u6B64":1}
,"\u6B64":{"\u51FD":1}
,"\u51FD":{"\u6570":1}
,"\u6570":{"\u53EF":1,"\u89E3":1}
,"\u53EF":{"\u4EE5":1}
,"\u4EE5":{"\u9632":1}
,"\u9632":{"\u6B62":1}
,"\u6B62":{"evaluate":1}
,"evaluate":{"\u51FD":1,"(":1}
,"\u89E3":{"\u6790":1}
,"\u6790":{"\u6587":1}
,"\u4E2D":{"\u7684":1}
,"\u7279":{"\u6B8A":1}
,"\u6B8A":{"\u5B57":1}
,"\u7B26":{"\u5C06":1}
,"\u5C06":{"\u88AB":1}
,"\u88AB":{"\u76F8":1}
,"\u76F8":{"\u5E94":1}
,"\u5E94":{"\u53BB":1}
,"\u53BB":{"\u9664":1}
,"\u9664":{"\u3002":1}
,"\u0022":{"hello":1,")":1,"\u3002":1,"abc\u005C\u00B6":1,"say":1,"1":1,"-1":1}
,"hello":{"\u0022":1}
,"abc\u005C\u00B6":{"\u0022":1}
,"say":{"\u005C\u0022":1}
,"\u005C\u0022":{"hello\u005C\u0022":1}
,"hello\u005C\u0022":{"fred":1}
,"fred":{"\u0022":1}
,"1":{"+":1}
,"+":{"2":1,"2&\u0022":1}
,"2":{"\u0022":1,"\u201D":1}
,"\u201C":{"1":1,"3":1}
,"\u201D":{"\u3002":1}
,"2&\u0022":{"&quote":1}
,"&quote":{"(":1}
,"-1":{"+":1}
,"3":{"-1":1}
}
;Search.control.loadWordPairs(pairs);
