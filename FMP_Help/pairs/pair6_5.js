var pairs =
{
"\u5728":{"\u201C":1,"\u5E03":1,"\u6BCF":1,"\u957F":1,"\u641C":1,"\u521B":1}
,"\u201C":{"\u5B57":1,"\u7BA1":1,"\u5E03":1,"\u65B0":1,"\u62D6":1,"\u5220":1,"\u5BF9":1,"\u641C":1,"\u8868":1}
,"\u5B57":{"\u6BB5":1}
,"\u6BB5":{"\u201D":1,"\u5728":1,"\u3002":1,"\u53EF":1,"\uFF0C":1,"\uFF09":1,"\u5BF9":1,"\u952E":1,"\u7C7B":1,"\u4F4D":1,"\u6807":1,"\u8BBE":1,"\u7684":1,"\u540D":1,"\u9009":1,"\u53F3":1,"\u4E2D":1,"\u53C2":1,"\u5217":1,"\u8FDB":1,"\u4ECE":1,"\u62D6":1,"\u65F6":1,",":1,"\u8981":1,"\uFF1A":1}
,"\u201D":{"\u9009":1,"\u5BF9":1,"\u5F39":1,"\u3002":1,"\uFF0C":1,"\u7A97":1,"\u6309":1}
,"\u9009":{"\u9879":1,"\u62E9":1,"\u6846":1}
,"\u9879":{"\u5361":1,"\u201D":1,"\u3001":1,"\u548C":1,"\u3002":1,"\u53F3":1}
,"\u5361":{"\u4E2D":1,"\u5B9A":1,"\u9876":1}
,"\u4E2D":{"\u5B9A":1,"\u5F53":1,"\u9009":1,"\u7684":1,"\u4F7F":1,"\u627E":1,"\u952E":1,"\uFF0C":1}
,"\u5B9A":{"\u4E49":1}
,"\u4E49":{"\u548C":1,"\u5F53":1,"\u5B8C":1,"\u6570":1,"\u4E0D":1,"\u7684":1,"\u5B57":1,"\u6216":1}
,"\u548C":{"\u66F4":1,"\u63A7":1,"\u5C06":1,"\u5B58":1}
,"\u66F4":{"\u6539":1}
,"\u6539":{"\u5B57":1,"\u8BE5":1}
,"\u5E03":{"\u5C40":1}
,"\u5C40":{"\u6A21":1,"\u7684":1,"\u201D":1,"\u3002":1,"\u4E0A":1,"\u4E2D":1,"\u9996":1}
,"\u6A21":{"\u5F0F":1}
,"\u5F0F":{"\u4E0B":1,"\u9009":1}
,"\u4E0B":{"\uFF0C":1}
,"\uFF0C":{"\u60A8":1,"\u53EF":1,"\u4ECE":1,"\u7136":1,"\u5355":1,"\u4E3A":1,"\u8BF7":1,"\u5E76":1,"\u800C":1}
,"\u60A8":{"\u53EF":1}
,"\u53EF":{"\u4EE5":1,"\u80FD":1,"\u4F7F":1}
,"\u4EE5":{"\u4F7F":1,"\u53CA":1}
,"\u4F7F":{"\u7528":1}
,"\u7528":{"\u201C":1,"\u7684":1}
,"\u5F53":{"\u524D":1}
,"\u524D":{"\u8868":1,"\u5E03":1}
,"\u8868":{"\u4E2D":1,"\uFF09":1,"\u7684":1,"\u89C6":1,"\u3002":1,"\u5217":1,"\uFF0C":1,"\u201D":1}
,"\u7684":{"\u5B57":1,"\u5E03":1,"\u8868":1,"\u8BF7":1,"\u7C7B":1,"\u9A8C":1,"\u9009":1,"\u4EFB":1,"\u5217":1}
,"\u3002":{"\u591A":1,"\u8981":1,"1":1,"2":1,"\u76EE":1,"\u5982":1,"\u8BF7":1,"\u66F4":1,"\u5220":1,"\u7CFB":1,"\u5BF9":1,"\u5728":1,"\uFF08":1,"\uFF09":1,"\u2022":1,"\u521B":1}
,"\u591A":{"\u4E2A":1}
,"\u4E2A":{"\u9ED8":1,"\u6216":1,"\u5B57":1,"\u5E03":1,"\u8868":1}
,"\u9ED8":{"\u8BA4":1}
,"\u8BA4":{"\u5B57":1}
,"\u80FD":{"\u5DF2":1}
,"\u5DF2":{"\u5B9A":1}
,"\u5B8C":{"\u6BD5":1}
,"\u6BD5":{"\uFF08":1}
,"\uFF08":{"\u8BF7":1,"\u5982":1}
,"\u8BF7":{"\u53C2":1,"\u6267":1,"\u5355":1}
,"\u53C2":{"\u9605":1,"\u8003":1}
,"\u9605":{"\u5B9A":1,"\u6DFB":1,"\u5173":1,"\u8BBE":1}
,"\u6570":{"\u636E":1}
,"\u636E":{"\u5E93":1}
,"\u5E93":{"\u8868":1,"\u201D":1}
,"\uFF09":{"\u3002":1,"\u663E":1,"\u6253":1}
,"\u8981":{"\u5B9A":1,"\u4F7F":1,"\uFF0C":1,"\u5C06":1}
,"\u4E0D":{"\u540C":1,"\u662F":1}
,"\u540C":{"\u8868":1}
,"\u7BA1":{"\u7406":1}
,"\u7406":{"\u6570":1}
,"\u5BF9":{"\u8BDD":1,"\u4E8E":1,"\u5B57":1,"\u8C61":1}
,"\u8BDD":{"\u6846":1}
,"\u6846":{"\uFF08":1,"\u96C6":1,"\u4E2D":1,"\uFF0C":1,"\u4ECE":1}
,"1":{".":1}
,".":{"\u5728":1,"\u5355":1}
,"\u4ECE":{"\u201C":1,"\u5217":1,"\u9009":1,"\u8868":1}
,"\u5F39":{"\u51FA":1}
,"\u51FA":{"\u83DC":1}
,"\u83DC":{"\u5355":1}
,"\u5355":{"\u4E2D":1,"\u51FB":1,"\u3001":1}
,"\u62E9":{"\u8981":1,"\u5B57":1,"\u65B0":1,"\u201C":1,"\u6392":1,"\u4E00":1}
,"2":{".":1}
,"\u51FB":{"\u72B6":1,"\u201C":1,"\u53CC":1,"\u5B57":1,"\u4E00":1}
,"\u72B6":{"\u6001":1}
,"\u6001":{"\u5DE5":1}
,"\u5DE5":{"\u5177":1}
,"\u5177":{"\u680F":1}
,"\u680F":{"\u4E2D":1}
,"\u89C6":{"\u56FE":1}
,"\u56FE":{"\u6309":1}
,"\u6309":{"\u94AE":1}
,"\u94AE":{"\uFF0C":1,"\u3002":1}
,"\u7136":{"\u540E":1}
,"\u540E":{"\u5355":1,"\u66F4":1,"\u4ECE":1,"\u9009":1}
,"\u76EE":{"\u7684":1}
,"\u6267":{"\u884C":1}
,"\u884C":{"\u6B64":1,"\u6392":1}
,"\u6B64":{"\u64CD":1}
,"\u64CD":{"\u4F5C":1}
,"\u4F5C":{"\u6DFB":1}
,"\u6DFB":{"\u52A0":1}
,"\u52A0":{"\u5B57":1,"\u548C":1}
,"\u4E8E":{"\u201C":1,"\u9009":1,"\u547D":1,"\u5E03":1}
,"\u65B0":{"\u5EFA":1,"\u7684":1}
,"\u5EFA":{"\u5B57":1}
,"\u53CC":{"\u7BAD":1}
,"\u7BAD":{"\u5934":1}
,"\u5934":{"\u63A7":1}
,"\u63A7":{"\u4EF6":1}
,"\u4EF6":{"\uFF0C":1,"\u6837":1,"\u3002":1}
,"\u4E3A":{"\u5B57":1,"\u663E":1}
,"\u952E":{"\u5165":1,"\u5355":1}
,"\u5165":{"\u540D":1,"\u548C":1,"\u65B0":1,"\u5B57":1}
,"\u540D":{"\u79F0":1,"\uFF0C":1,"\u3002":1,"\u5B57":1}
,"\u79F0":{"\u5E76":1,"\u9009":1,"\u4EE5":1,"\u3002":1}
,"\u5E76":{"\u9009":1,"\u952E":1}
,"\u7C7B":{"\u578B":1}
,"\u578B":{"\u3002":1,"\u9009":1,"\uFF0C":1}
,"\u5982":{"\u679C":1}
,"\u679C":{"\u9700":1,"\u6CA1":1}
,"\u9700":{"\u8981":1}
,"\u62D6":{"\u52A8":1}
,"\u52A8":{"\u9996":1,"\u8F93":1,"\u5230":1}
,"\u9996":{"\u9009":1}
,"\u4F4D":{"\u7F6E":1}
,"\u7F6E":{"\u9009":1,"\u4E3A":1,"\u5B57":1,"\u4E8E":1,"\u5E03":1}
,"\u3001":{"\u6807":1,"\u590D":1,"\u81EA":1}
,"\u6807":{"\u7B7E":1}
,"\u7B7E":{"\u9009":1,"\u548C":1}
,"\u6837":{"\u5F0F":1}
,"\u5C06":{"\u5B57":1,"\u5DF2":1,"\u5176":1}
,"\u8BBE":{"\u7F6E":1}
,"\u663E":{"\u793A":1}
,"\u793A":{"\u5F39":1,"\u4E0D":1}
,"\u590D":{"\u9009":1}
,"\u96C6":{"\u6216":1}
,"\u6216":{"\u5176":1,"\u591A":1,"\u5408":1,"\u66F4":1}
,"\u5176":{"\u4ED6":1,"\u7F6E":1}
,"\u4ED6":{"\u63A7":1}
,"\u5217":{"\u8868":1}
,"\u5173":{"\u4E8E":1}
,"\u9A8C":{"\u8BC1":1}
,"\u8BC1":{"\u3001":1}
,"\u81EA":{"\u52A8":1}
,"\u8F93":{"\u5165":1}
,"\u5B58":{"\u50A8":1}
,"\u50A8":{"\u9009":1}
,"\u53F3":{"\u952E":1}
,"\u5220":{"\u9664":1}
,"\u9664":{"\u5B57":1}
,"\u4E00":{"\u4E2A":1}
,"\u7CFB":{"\u7EDF":1}
,"\u7EDF":{"\u4F1A":1}
,"\u4F1A":{"\u5728":1}
,"\u6BCF":{"\u4E2A":1}
,"\u4E0A":{"\u66F4":1,"\uFF0C":1}
,"\u8BE5":{"\u540D":1}
,"\u53CA":{"\u8BA1":1}
,"\u8BA1":{"\u7B97":1,"\u5B57":1}
,"\u7B97":{"\u6216":1}
,"\u5408":{"\u8BA1":1}
,"\u4EFB":{"\u4F55":1}
,"\u4F55":{"\u5B57":1}
,"\u8003":{"\u3002":1}
,"\u547D":{"\u540D":1}
,"\u8FDB":{"\u884C":1}
,"\u6392":{"\u5E8F":1}
,"\u5E8F":{"\u5355":1,"\u987A":1,"\u3002":1}
,"\u8C61":{"\u201D":1}
,"\u7A97":{"\u683C":1}
,"\u683C":{"\u6309":1}
,"\u987A":{"\u5E8F":1}
,"\u957F":{"\u5217":1}
,"\u627E":{"\u5230":1}
,"\u5230":{"\u5B57":1,"\u641C":1,"\u8868":1,"\u5E03":1}
,"\u641C":{"\u7D22":1}
,"\u7D22":{"\u6846":1,"\u5B57":1}
,"\u6CA1":{"\u6709":1}
,"\u6709":{"\u770B":1}
,"\u770B":{"\u5230":1}
,"\u9876":{"\u90E8":1}
,"\u90E8":{"\u9644":1}
,"\u9644":{"\u8FD1":1}
,"\u8FD1":{"\u7684":1}
,"\u6253":{"\u5F00":1}
,"\u5F00":{"\u201C":1}
,"\u2022":{"\u8981":1}
,"\u800C":{"\u4E0D":1}
,"\u662F":{"\u5728":1}
,"\u521B":{"\u5EFA":1}
,"\u65F6":{"\u5C06":1}
,",":{"\u521B":1,"\u5B9A":1,"\u66F4":1,"\u65B0":1,"\u6DFB":1,"\u79FB":1,"\u5220":1}
,"\u79FB":{"\u9664":1}
}
;Search.control.loadWordPairs(pairs);
