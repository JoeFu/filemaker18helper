var pairs =
{
"\u5173":{"\u4E8E":1,"\u5BB9":1}
,"\u4E8E":{"\u5BB9":1,"\u8FDB":1,"\u8BA1":1,"\u6587":1,"\u5E03":1,"\u5141":1}
,"\u5BB9":{"\u5668":1,"\u5B57":1,"\u7684":1,"\u6613":1,"\u3002":1}
,"\u5668":{"\u5B57":1,"\uFF0C":1,"\u6570":1,"\u5C06":1,"\u4E2D":1,"\u5BF9":1,"\u7684":1,"\u7AEF":1}
,"\u5B57":{"\u6BB5":1}
,"\u6BB5":{"\u4F7F":1,"\u6765":1,"\u4E2D":1,"\u3002":1,"\uFF08":1,"\u6210":1,"\u7684":1,"\u5185":1,"\u65F6":1,"\u526F":1,"\u8BBE":1,"\u67E5":1,"\u5BF9":1,"\u4EE5":1,"\u8FDC":1,",":1,"filemaker":1}
,"\u4F7F":{"\u7528":1,"\u5BB9":1,"\u5F97":1,"\u6570":1,"\u60A8":1}
,"\u7528":{"\u5BB9":1,"getcontainerattribute":1,"\u7684":1,"\u6237":1,"\u5B58":1,"\u591A":1,"\u5B89":1,"\u5168":1,"\u66F4":1}
,"\u6765":{"\u5B58":1,"\u63CF":1,"\u67E5":1}
,"\u5B58":{"\u50A8":1,"\u4E3A":1,"\u548C":1,"\u5728":1,"\u653E":1}
,"\u50A8":{"\uFF1A":1,"\u53C2":1,"\u6570":1,"\u4E3A":1,"\u7684":1,"\u65B9":1,"\u7A7A":1,"\uFF0C":1,"\u5728":1,"\u5BB9":1,"\u5668":1,"\uFF09":1,"\u76F8":1,"\u3002":1}
,"\uFF1A":{"\u2022":1,"\u5728":1,"\u53EA":1,"\u60A8":1}
,"\u2022":{"\u7167":1,"\u6587":1,"\u5728":1,"\u5B9A":1,"\u8F7B":1,"\u6267":1,"\u9009":1,"\u60A8":1,"\u8981":1,"\u9ED8":1,"\u4EC5":1}
,"\u7167":{"\u7247":1}
,"\u7247":{",":1,"\u65B9":1,"\u7684":1,"\u5C06":1}
,",":{"\u7535":1,"\u97F3":1,"\u8BBE":1,"\u6DFB":1,"\u53D7":1}
,"\u7535":{"\u5F71":1,"\u8111":1,"\u8BDD":1}
,"\u5F71":{",":1}
,"\u97F3":{"\u6548":1,"\u9891":1}
,"\u6548":{"\u2022":1}
,"\u6587":{"\u6863":1,"\u4EF6":1,"\uFF09":1,"\u672C":1}
,"\u6863":{"\uFF0C":1}
,"\uFF0C":{"\u5305":1,"\u5BB9":1,"\u60A8":1,"\u4EE5":1,"\u5B58":1,"\u5982":1,"\u56E0":1,"\u5373":1,"\u800C":1,"\u5171":1,"\u8BE5":1,"\u4EA7":1,"\u8FD9":1,"\u540E":1,"\u4F1A":1,"filemaker":1,"\u4ECE":1,"\u5F3A":1,"\u4F46":1,"\u56FE":1,"\u8BF7":1,"\u6216":1,"\u670D":1}
,"\u5305":{"\u62EC":1,"\u542B":1}
,"\u62EC":{"microsoft":1,"\u4EA7":1,"\u63D2":1}
,"microsoft":{"word":1}
,"word":{"\u548C":1}
,"\u548C":{"excel":1,"\u62F7":1,"\u5BBD":1,"\u6587":1,"\u6062":1,"\u5C5E":1}
,"excel":{"\u6587":1}
,"\u4EF6":{"\u3001":1,"\u7B49":1,"\u65F6":1,"\uFF09":1,"\u53E6":1,"\u53C2":1,"\u3002":1,"\u63D2":1,"\u5373":1,"\u5939":1,"\u7684":1,"\u5728":1,"\u7CFB":1,"\u811A":1,"\u6240":1,"\u4F4D":1}
,"\u3001":{"pdf":1,"\u89C6":1,"\u7167":1,"\u97F3":1,"\u6761":1,"\u7C98":1,"filemaker":1}
,"pdf":{"\u6587":1}
,"\u7B49":{"\u60A8":1}
,"\u60A8":{"\u53EF":1,"\u9009":1,"\u5C06":1,"\u65E0":1,"\u7684":1,"\u80FD":1,"\u4E0D":1}
,"\u53EF":{"\u4EE5":1,"\u4F7F":1,"\u4FDD":1,"\u52A0":1,"\u4F9B":1}
,"\u4EE5":{"\u5728":1,"\uFF1A":1,"\u4F7F":1,"\u4F18":1,"\u53CA":1,"\u5B9E":1,"\u4ECE":1,"\u9009":1,"\u5B9A":1,"\u57FA":1,"\u521B":1,"\u6307":1,"\u5B58":1}
,"\u5728":{"\u8BA1":1,"\u5B57":1,"\u5916":1,"\u4E00":1,"\u6BCF":1,"\u4E3B":1,"\u4ED6":1,"\u6570":1,"\u6267":1,"\u5B89":1,"\u5E03":1,"\u7684":1}
,"\u8BA1":{"\u7B97":1,"\u5B57":1}
,"\u7B97":{"\u516C":1,"\u673A":1}
,"\u516C":{"\u5F0F":1}
,"\u5F0F":{"\u6216":1,"\u3002":1,"\u4EE5":1,"\uFF1A":1,"\uFF08":1,"\u4E0B":1,"\u548C":1,",":1}
,"\u6216":{"\u5408":1,"pdf":1,"\u66F4":1,"\u8005":1,"\u5BF9":1,"\u6807":1,"\u7F29":1,"\u5BFC":1,"\u4F7F":1,"\u89C6":1,"f":1,"\u201C":1}
,"\u5408":{"\u8BA1":1}
,"\u4E2D":{"\u53C2":1,"\u7684":1,"\u5B58":1,"\u5FC3":1,"\u5305":1,"\u3002":1,"\uFF0C":1,"\u5916":1,"\u65F6":1,"\u4E0D":1}
,"\u53C2":{"\u8003":1,"\u9605":1}
,"\u8003":{"\u5BB9":1,"\uFF08":1,"\u7684":1,"\u5B58":1,"\u3002":1}
,"\u3002":{"\u9ED8":1,"\u4F46":1,"\u8BF7":1,"\u5F53":1,"\u53EF":1,"\u6B64":1,"\u5BF9":1,"\u60A8":1,"\u4F8B":1,"\u2022":1,"\u5728":1,"\u6216":1,"\u91CD":1,"\u7136":1,"\u4EFB":1,"\u8981":1,"filemaker":1,"\u90AE":1}
,"\u9ED8":{"\u8BA4":1}
,"\u8BA4":{"\u60C5":1}
,"\u60C5":{"\u51B5":1}
,"\u51B5":{"\u4E0B":1}
,"\u4E0B":{"\uFF0C":1,"\u6587":1,"\u5217":1,"\u8BBE":1}
,"\u7684":{"\u6570":1,"\u3002":1,"\u6587":1,"\u5B57":1,"\u683C":1,"\u5BB9":1,"\u5B58":1,"\u5143":1,"\u9AD8":1,"\u5C01":1,"\uFF1A":1,"\u5377":1,"\u7528":1,"\u53C2":1,"\u5916":1,"\u65B9":1,"\u4FDD":1,"\u7EC4":1,"\u4EFB":1,"\u5185":1,"\u4FE1":1,"\u7A7A":1,"\u811A":1,"\u97F3":1,"\u8DEF":1}
,"\u6570":{"\u636E":1,"\u8DDF":1,"\u8FD8":1}
,"\u636E":{"\u662F":1,"\uFF09":1,"\u7684":1,"\u4EE5":1,"\u4F1A":1,"\uFF0C":1,"\u8FDB":1,"\uFF1A":1,"\u4F7F":1,"\u5E93":1,"\u3002":1,"\u53EF":1,"\u4FDD":1,"\u5982":1,"\u5B58":1}
,"\u662F":{"\u5D4C":1,"\uFF0C":1,"\u5426":1}
,"\u5D4C":{"\u5165":1}
,"\u5165":{"\u7684":1,"\u5176":1,"\u5230":1,"\u5BB9":1,"\u56FE":1,"\u6587":1}
,"\u4F46":{"\u662F":1,"\u53EF":1}
,"\uFF08":{"\u5F53":1,"\u8BF7":1,"\u5982":1,"\u901A":1,"\u4F8B":1}
,"\u5F53":{"\u60A8":1,"\u67D0":1,"\u5176":1,"\u6587":1}
,"\u9009":{"\u62E9":1,"\u9879":1}
,"\u62E9":{"\u8981":1,"\u5B58":1,"\u4F7F":1}
,"\u8981":{"\u63D2":1,"\u5728":1,"\u4E8B":1,"\u6307":1,"\u5C06":1,"\u66F4":1}
,"\u63D2":{"\u5165":1}
,"\u5176":{"\u4E2D":1,"\u4ED6":1,"\u8FDB":1,"\u539F":1}
,"\u65F6":{"\uFF09":1,"\uFF0C":1,"\u95F4":1,"\u64AD":1}
,"\uFF09":{"\uFF08":1,"\u2022":1,"\u53EF":1,"\u3002":1,"\uFF0C":1,"\u7F6E":1}
,"\u8BF7":{"\u53C2":1,"\u5728":1,"\u5C06":1}
,"\u9605":{"\u4F7F":1,"\u4E0B":1,"\u6307":1,"\u4FDD":1,"\u5C06":1,"\u7EF4":1,"\u5728":1,"\u7BA1":1,"\u670D":1}
,"\u5B9A":{"\u4E49":1,"\u5BB9":1,"\u671F":1}
,"\u4E49":{"\u8981":1,"\u6587":1,"\u5BB9":1,"\u7F51":1}
,"\u5916":{"\u90E8":1}
,"\u90E8":{"\u5B58":1,"\u6587":1,"\u4EE5":1}
,"\u6210":{"\u4E3A":1}
,"\u4E3A":{"\u4EA4":1,"\u81EA":1,"\u6587":1,"\u6BCF":1,"\u5728":1}
,"\u4EA4":{"\u4E92":1}
,"\u4E92":{"\u5BB9":1}
,"\u4F18":{"\u5316":1}
,"\u5316":{"\u5185":1,"\u6027":1}
,"\u5185":{"\u5BB9":1,"\uFF0C":1,"\u7684":1}
,"\u5982":{"\u97F3":1,"\u56FE":1,"\uFF0C":1,"\u4F55":1,"\u5FBD":1}
,"\u9891":{"\u3001":1,"\u6216":1,"\u5185":1,"\u6587":1}
,"\u89C6":{"\u9891":1}
,"\u6307":{"\u5B9A":1}
,"\u683C":{"\u5F0F":1}
,"\u5C06":{"filemaker":1,"\u6587":1,"\u5B83":1,"\u663E":1,"\u5916":1,"\u5BB9":1,"\u9759":1,"\u5728":1,"\u6570":1}
,"filemaker":{"\u00A0":1,"pro":1,"data":1,"go":1}
,"\u00A0":{"pro":1,"\u00A0":1,"\u5BF9":1,"server":1,"cloud":1,"webdirect":1}
,"pro":{"advanced":1}
,"advanced":{"\u6587":1,"\u7684":1,"\u53EF":1,"\u6570":1,"\u5C06":1}
,"\u53E6":{"\u5B58":1}
,"\u81EA":{"\u5305":1,"\u5B9A":1}
,"\u542B":{"\u62F7":1}
,"\u62F7":{"\u8D1D":1}
,"\u8D1D":{"\u65F6":1,"\u4E2D":1,"\u6587":1,"\u5230":1,"\u5DF2":1}
,"\u53CA":{"\u5916":1,"\u5B83":1,"\u7B7E":1}
,"\u4F1A":{"\u5D4C":1,"\u4F20":1,"\u5C06":1,"\u62F7":1,"\u4E00":1,"\u5BF9":1,"\u6BD4":1}
,"\u5230":{"\u62F7":1,"\u5171":1,"\u5E76":1,"filemaker":1}
,"\u4FDD":{"\u5B58":1,"\u6301":1,"\u62A4":1}
,"getcontainerattribute":{"\u51FD":1}
,"\u51FD":{"\u6570":1}
,"\u8DDF":{"\u8E2A":1}
,"\u8E2A":{"\u5BB9":1}
,"\u65B9":{"\u5F0F":1,"\u5411":1}
,"\u5B83":{"\u6240":1,"\u4EEC":1}
,"\u6240":{"\u4F7F":1,"\u5728":1}
,"\u7A7A":{"\u95F4":1}
,"\u95F4":{"\u3002":1,"\u6233":1}
,"\u6B64":{"\u51FD":1}
,"\u8FD8":{"\u8FD4":1}
,"\u8FD4":{"\u56DE":1}
,"\u56DE":{"\u6709":1}
,"\u6709":{"\u5173":1}
,"\u5143":{"\u6570":1}
,"\u56FE":{"\u50CF":1,"\u7247":1,"\u5F62":1}
,"\u50CF":{"\u7684":1,"\u662F":1}
,"\u9AD8":{"\u5EA6":1}
,"\u5EA6":{"\u548C":1,"\u3001":1}
,"\u5BBD":{"\u5EA6":1}
,"\u5411":{"\u3001":1}
,"\u5C01":{"\u9762":1}
,"\u9762":{"\u3001":1}
,"\u6761":{"\u5F62":1,"\u8BB0":1}
,"\u5F62":{"\u7801":1,"\uFF08":1,"\uFF0C":1,"\u4F7F":1}
,"\u7801":{"\u7C7B":1,",":1,"\u7684":1}
,"\u7C7B":{"\u578B":1}
,"\u578B":{"\u4EE5":1}
,"\u7B7E":{"\u540D":1}
,"\u540D":{"\u65F6":1}
,"\u6233":{"\u3002":1}
,"\u5BF9":{"\u5BB9":1,"\u5728":1,"\u5176":1,"\u4E8E":1,"\u8BB0":1,"\u8C61":1}
,"\u8FDB":{"\u884C":1}
,"\u884C":{"\u5916":1,"\u589E":1,"\u521D":1,"\u52A0":1,"\u8BFB":1,"\u5907":1}
,"\u5B9E":{"\u73B0":1}
,"\u73B0":{"\u4E0B":1}
,"\u5217":{"\u76EE":1}
,"\u76EE":{"\u7684":1}
,"\u8F7B":{"\u677E":1}
,"\u677E":{"\u5171":1}
,"\u5171":{"\u4EAB":1}
,"\u4EAB":{"\u6570":1,"\u591A":1,"\u7684":1,"\u201C":1}
,"\u5F97":{"\u5171":1,"\u66F4":1}
,"\u591A":{"\u7528":1,"\u5730":1,"\u4E2A":1}
,"\u6237":{"\u6570":1,"\u90FD":1,"\u73AF":1,"\u5C06":1,"\u67E5":1,"\u540C":1}
,"\u5E93":{"\u53D8":1,"\u4E2D":1,"\u8BB0":1,"\u89C4":1,"\u3002":1,"\u6587":1}
,"\u53D8":{"\u5F97":1}
,"\u66F4":{"\u52A0":1,"\u6539":1,"\u591A":1,"\u5C11":1}
,"\u52A0":{"\u5BB9":1,"\u5FEB":1,"\u6216":1,"\u5BC6":1,"\u5B57":1}
,"\u6613":{"\uFF0C":1}
,"\u56E0":{"\u4E3A":1}
,"\u6BCF":{"\u4F4D":1,"\u4E2A":1,"\u6761":1}
,"\u4F4D":{"\u7528":1,"\u7F6E":1,"\u4E8E":1}
,"\u90FD":{"\u4F7F":1,"\u914D":1,"\u4F1A":1}
,"\u4E00":{"\u4E2A":1,"\u76F4":1,"\u9009":1,"\u8D77":1}
,"\u4E2A":{"\u4E2D":1,"\u672C":1,"\u4F4D":1,"\u7528":1}
,"\u5FC3":{"\u4F4D":1}
,"\u7F6E":{"\u7684":1,"\u5171":1,"\u4E2D":1,"\u4E3A":1,"\u5B57":1,"\u4E8E":1,"\uFF0C":1,"\u7535":1}
,"\u65E0":{"\u9700":1}
,"\u9700":{"\u5728":1}
,"\u672C":{"\u5730":1,"\u4E2D":1,"\u5B57":1,"\u6B65":1,"\uFF0C":1,"\u624D":1}
,"\u5730":{"\u7535":1,"\u63A7":1}
,"\u8111":{"\u4E0A":1}
,"\u4E0A":{"\u90FD":1,"\u7684":1,"\u5B58":1,"\uFF0C":1,"\u76F4":1}
,"\u914D":{"\u7F6E":1}
,"\u5377":{"\uFF0C":1,"\u3002":1}
,"\u5373":{"\u53EF":1,"\u4F1A":1}
,"\u73AF":{"\u5883":1}
,"\u5883":{"\u4E2D":1}
,"\u4ECE":{"\u786C":1,"\u800C":1}
,"\u786C":{"\u76D8":1}
,"\u76D8":{"\u9A71":1}
,"\u9A71":{"\u52A8":1}
,"\u52A8":{"\u5668":1}
,"\u800C":{"\u4E0D":1,"\u4E14":1,"\u4F7F":1}
,"\u4E0D":{"\u5FC5":1,"\u80FD":1,"\u652F":1}
,"\u5FC5":{"\u9996":1}
,"\u9996":{"\u5148":1}
,"\u5148":{"\u5C06":1}
,"\u4EEC":{"\u62F7":1,"\u7684":1}
,"\u4F8B":{"\u5982":1}
,"\u201C":{"\u4EA7":1,"\u81EA":1}
,"\u4EA7":{"\u54C1":1}
,"\u54C1":{"\u201D":1,"\u7167":1,"\u56FE":1}
,"\u201D":{"\u6570":1,"\u4E2D":1}
,"\u67D0":{"\u4E2A":1}
,"\u8BE5":{"\u6587":1}
,"\u4F20":{"\u8F93":1}
,"\u8F93":{"\u5230":1}
,"\u5E76":{"\u5B58":1}
,"\u4E3B":{"\u673A":1}
,"\u673A":{"\u4E0A":1}
,"\u5939":{"\u4E2D":1,"\u548C":1}
,"\u4ED6":{"\u4F4D":1,"\u4EEC":1}
,"\u67E5":{"\u770B":1,"\u627E":1}
,"\u770B":{"\u6570":1}
,"\u8BB0":{"\u5F55":1}
,"\u5F55":{"\u65F6":1,"\u6216":1,"\u6392":1,"\u4E00":1}
,"\u663E":{"\u793A":1}
,"\u793A":{"\u5728":1,"\uFF08":1}
,"\u526F":{"\u672C":1}
,"\u6267":{"\u884C":1}
,"\u589E":{"\u91CF":1}
,"\u91CF":{"\u5907":1}
,"\u5907":{"\u4EFD":1}
,"\u4EFD":{"\uFF1A":1,"\u3002":1,"\uFF0C":1,"\u4E4B":1,"\u53EA":1}
,"\u53EA":{"\u4F1A":1}
,"\u8FD9":{"\u6837":1}
,"\u6837":{"\u53EF":1}
,"\u6301":{"\u8F83":1,"\u5176":1,"\u5BB9":1,"\u6587":1}
,"\u8F83":{"\u5C0F":1}
,"\u5C0F":{"\u7684":1}
,"\u89C4":{"\u6A21":1}
,"\u6A21":{"\uFF0C":1,"\u5F0F":1}
,"\u4E14":{"\u4FBF":1}
,"\u4FBF":{"\u4E8E":1}
,"\u5FEB":{"\u5907":1}
,"\u521D":{"\u59CB":1}
,"\u59CB":{"\u5907":1}
,"\u4E4B":{"\u540E":1}
,"\u540E":{"\uFF0C":1,"\u7EED":1}
,"\u7EED":{"\u5907":1}
,"\u5DF2":{"\u6DFB":1,"\u88C1":1}
,"\u6DFB":{"\u52A0":1}
,"\u6539":{"\u7684":1,"\u4F4D":1}
,"\u76F4":{"\u53D7":1,"\u63A5":1}
,"\u53D7":{"\u5230":1,"\u63A7":1}
,"\u62A4":{"\u3002":1,"\u548C":1}
,"\u5B89":{"\u5168":1}
,"\u5168":{"\u5B58":1,"\u5C40":1}
,"\u5BC6":{"\uFF0C":1}
,"\u8BFB":{"\u53D6":1}
,"\u53D6":{"\u3002":1}
,"\u8005":{"\uFF0C":1}
,"\u539F":{"\u683C":1}
,"\u901A":{"\u8FC7":1}
,"\u8FC7":{"\u6253":1}
,"\u6253":{"\u5F00":1}
,"\u5F00":{"\u7684":1}
,"\u80FD":{"\u591F":1,"\u57FA":1,"\u3002":1}
,"\u591F":{"\u66F4":1}
,"\u63A7":{"\u5236":1,"\u5BB9":1}
,"\u5236":{"\u6587":1}
,"\u7CFB":{"\u7EDF":1}
,"\u7EDF":{"\u4E2D":1}
,"\u7EC4":{"\u7EC7":1}
,"\u7EC7":{"\u65B9":1}
,"\u8BBE":{"\u7F6E":1}
,"\u91CD":{"\u8981":1}
,"\u4E8B":{"\u9879":1}
,"\u9879":{"\u00A0":1,"\u90FD":1}
,"\u4EFB":{"\u4F55":1,"\u4E00":1}
,"\u4F55":{"\u6587":1,"\u663E":1}
,"\u5F3A":{"\u70C8":1}
,"\u70C8":{"\u5EFA":1}
,"\u5EFA":{"\u8BAE":1,"\u3001":1,"\u5305":1}
,"\u8BAE":{"\u5B9A":1}
,"\u671F":{"\u8FDB":1}
,"\u7EF4":{"\u62A4":1}
,"\u6062":{"\u590D":1}
,"\u590D":{"filemaker":1}
,"\u57FA":{"\u4E8E":1}
,"\u627E":{"\u8BB0":1}
,"\u6392":{"\u5E8F":1}
,"\u5E8F":{"\uFF0C":1,"\u3002":1}
,"\u63CF":{"\u8FF0":1}
,"\u8FF0":{"\u6216":1}
,"\u6807":{"\u8BC6":1,"\uFF09":1}
,"\u8BC6":{"\u5BB9":1}
,"\u7136":{"\u540E":1}
,"\u4FE1":{"\u606F":1}
,"\u606F":{"\u6765":1}
,"\u5426":{"\u5DF2":1}
,"\u88C1":{"\u526A":1}
,"\u526A":{"\u6216":1}
,"\u7F29":{"\u653E":1}
,"\u653E":{"\uFF09":1,"\u53EF":1,"\u7684":1}
,"\u5E03":{"\u5C40":1,"\u201D":1}
,"\u5C40":{"\u6A21":1,"\u4E0A":1,"\u5BB9":1}
,"\u8C61":{"\u7684":1}
,"\u5C5E":{"\u6027":1}
,"\u6027":{"\u3002":1,"\u80FD":1}
,"\u9759":{"\u6001":1}
,"\u6001":{"\u56FE":1}
,"\u5FBD":{"\u6807":1}
,"\u63A5":{"\u521B":1}
,"\u521B":{"\u5EFA":1}
,"\u7C98":{"\u8D34":1}
,"\u8D34":{"\u6216":1}
,"\u5BFC":{"\u5165":1}
,"\u6BD4":{"\u4E0E":1}
,"\u4E0E":{"\u6BCF":1}
,"\u8D77":{"\u5B58":1}
,"\u76F8":{"\u540C":1}
,"\u540C":{"\u56FE":1,"\u65F6":1}
,"\u5C11":{"\u7684":1}
,"\u811A":{"\u672C":1}
,"\u6B65":{"\u9AA4":1}
,"\u9AA4":{"\u7684":1}
,"\u7BA1":{"\u7406":1}
,"\u7406":{"\u5BB9":1}
,"\u4F9B":{"\u591A":1}
,"\u64AD":{"\u653E":1}
,"\u4EC5":{"\u5F53":1}
,"\u5141":{"\u8BB8":1}
,"\u8BB8":{"filemaker":1}
,"server":{"\u6216":1}
,"f":{"ilemaker":1}
,"ilemaker":{"\u00A0":1}
,"cloud":{"for":1}
,"for":{"aws":1}
,"aws":{"\u8BBF":1}
,"\u8BBF":{"\u95EE":1}
,"\u95EE":{"\u7684":1}
,"\u670D":{"\u52A1":1}
,"\u52A1":{"\u5668":1}
,"\u7AEF":{"\u811A":1}
,"\u624D":{"\u652F":1}
,"\u652F":{"\u6301":1}
,"\u8DEF":{"\u5F84":1}
,"\u5F84":{"\uFF09":1}
,"webdirect":{"\u3001":1}
,"data":{"api":1}
,"api":{"\u6216":1}
,"\u7F51":{"\u7EDC":1}
,"\u7EDC":{"\u53D1":1}
,"\u53D1":{"\u5E03":1}
,"\u90AE":{"\u653F":1}
,"\u653F":{"\u7F16":1}
,"\u7F16":{"\u7801":1}
,"\u8BDD":{"\u53F7":1}
,"\u53F7":{"\u7801":1}
,"\u8FDC":{"\u7A0B":1}
,"\u7A0B":{"\u5BB9":1}
,"go":{"\u5BF9":1}
}
;Search.control.loadWordPairs(pairs);
