var pairs =
{
"\u65E5":{"\u8BED":1,"\u671F":1,"\u5168":1,"\u672C":1}
,"\u8BED":{"\u51FD":1,"\u8FD4":1,"\u5047":1,"\u6587":1,"\u540D":1}
,"\u51FD":{"\u6570":1}
,"\u6570":{"\u65E5":1,"\u4EE5":1,"\u5B57":1,"\u636E":1,"\u6267":1}
,"\u4EE5":{"\u65E5":1}
,"\u8FD4":{"\u56DE":1}
,"\u56DE":{"\u65E5":1,"\u8868":1}
,"\u671F":{"\u90E8":1,"\u3001":1,"\u7684":1,"\u6240":1}
,"\u90E8":{"\u5206":1}
,"\u5206":{"\uFF1B":1}
,"\uFF1B":{"\u5E76":1}
,"\u5E76":{"\u5C06":1}
,"\u5C06":{"\u65E5":1,"\u6587":1,"zenkaku":1,"hankaku":1,"\u963F":1}
,"\u3001":{"\u6570":1,"\u7247":1}
,"\u5B57":{"\u548C":1,"\u6BCD":1,"\u8F6C":1,"\u6570":1,"\u3002":1,"\u7B26":1}
,"\u548C":{"\u6587":1,"\u65E5":1,"zenkaku":1,"\u5B57":1,"\u7B26":1}
,"\u6587":{"\u672C":1}
,"\u672C":{"\u503C":1,"\u3002":1,"\u8F6C":1,"\u4E2D":1,"\u6C49":1}
,"\u503C":{"\u8F6C":1}
,"\u8F6C":{"\u6362":1}
,"\u6362":{"\u4E3A":1,"\u6210":1}
,"\u4E3A":{"\u5176":1,"\u5E73":1,"hankaku":1}
,"\u5176":{"\u4ED6":1}
,"\u4ED6":{"\u6570":1}
,"\u636E":{"\u7C7B":1}
,"\u7C7B":{"\u578B":1}
,"\u578B":{"\u548C":1}
,"\u5047":{"\u540D":1}
,"\u540D":{"\u7CFB":1,"\u7684":1,"\u3001":1,"\u6216":1,"\uFF08":1,"\u3002":1,"\u8F6C":1,"\u79F0":1}
,"\u7CFB":{"\u7EDF":1}
,"\u7EDF":{"\u3002":1}
,"\u3002":{"\u6B64":1,"furigana":1,"hiragana":1,"kanahankaku":1,"kanazenkaku":1,"kanjinumeral":1,"katakana":1,"monthnamej":1,"numtojtext":1,"romanhankaku":1,"romanzenkaku":1,"yearname":1}
,"\u6B64":{"\u51FD":1}
,"\u6267":{"\u884C":1}
,"\u884C":{"\u64CD":1}
,"\u64CD":{"\u4F5C":1}
,"\u4F5C":{"daynamej":1,"\u65E5":1}
,"daynamej":{"\u8FD4":1}
,"\u8868":{"\u793A":1}
,"\u793A":{"\u65E5":1}
,"\u7684":{"\u5DE5":1,"\u65E5":1,"\u7247":1,"\u683C":1}
,"\u5DE5":{"\u4F5C":1}
,"\u5168":{"\u540D":1}
,"furigana":{"\u5C06":1}
,"\u5E73":{"\u5047":1}
,"\u7247":{"\u5047":1}
,"\u6216":{"\u7F57":1}
,"\u7F57":{"\u9A6C":1}
,"\u9A6C":{"\u5B57":1}
,"\u6BCD":{"\u6587":1,"\u6570":1}
,"hiragana":{"\u5C06":1}
,"\u4E2D":{"\u7684":1}
,"\uFF08":{"hankaku":1,"\u6309":1}
,"hankaku":{"\u548C":1,"\u7247":1,"\u5B57":1}
,"zenkaku":{"\uFF09":1,"\u7247":1,"\u5B57":1}
,"\uFF09":{"\u8F6C":1,"\u3002":1}
,"\u6210":{"\u5E73":1,"hankaku":1,"zenkaku":1,"\u65E5":1}
,"kanahankaku":{"\u5C06":1}
,"kanazenkaku":{"\u5C06":1}
,"kanjinumeral":{"\u5C06":1}
,"\u963F":{"\u62C9":1}
,"\u62C9":{"\u4F2F":1}
,"\u4F2F":{"\u6570":1}
,"\u6C49":{"\u5B57":1}
,"katakana":{"\u4ECE":1}
,"\u4ECE":{"\u5E73":1}
,"monthnamej":{"\u8FD4":1}
,"\u6240":{"\u5728":1}
,"\u5728":{"\u6708":1,"\u5E74":1}
,"\u6708":{"\u4EFD":1}
,"\u4EFD":{"\u7684":1}
,"\u79F0":{"\u3002":1,"\uFF08":1}
,"numtojtext":{"\u5C06":1}
,"romanhankaku":{"\u5C06":1}
,"\u7B26":{"\u8F6C":1,"\u3002":1,"\u53F7":1}
,"romanzenkaku":{"\u5C06":1}
,"\u53F7":{"\u8F6C":1,"\u3002":1}
,"yearname":{"\u8FD4":1}
,"\u5E74":{"\u4EFD":1}
,"\u6309":{"\u6307":1}
,"\u6307":{"\u5B9A":1}
,"\u5B9A":{"\u7684":1}
,"\u683C":{"\u5F0F":1}
,"\u5F0F":{"\uFF09":1}
}
;Search.control.loadWordPairs(pairs);
