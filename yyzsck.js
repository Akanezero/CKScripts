/*
用药助手13.14 
脚本作者：@ios151 感谢@Anni提供ck
特别说明：<临床指南→指南专题>没有解锁.如需解锁完整版单独使用yyzsck.js版
免责声明：仅供学习 请勿传播
更新时间: 2023.8.13.19.00.

[rewrite_local]
#纯会员数据共享
^https://newdrugs.dxy.cn url script-request-header https://raw.githubusercontent.com/Akanezero/CKScripts/blob/main/yyzsck.js
#修改个人用户信息
^https://newdrugs.dxy.cn url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/yyzs2.js

[mitm]
hostname = newdrugs.dxy.cn

*/
const newHeaders = {
  'Host': 'newdrugs.dxy.cn',
  'Cookie': 'CASTGC=TGT-26495-TSMfQmxwdhXppDr4XeO2tem4MdeCHRYdsmo-50; app-username=dxy_psk5rdd2; JSESSIONID= FC378A43DAE899473016005B40EB0C74; CLASS_CASTGC=80ce2b92093aa460747eb86379ccf63a771887287b1803f2f63c5c8da1bcc801497d95d2d9510d89b5c25add6d761d4d14e6230e6f963f5fa67085c328e42c2b794429ac1cb0553f388d335c31061299b33cc2520aeddfb7b11efa1b9d3835e412ad4cbe68d49ac2e5ec7af7291b89959b735fca4a1271edc8b112e97e4cf7660440233f4b60794582f738cc4bba8c30ee080f7f00a8b3e0c3d289bed8eab1cc8ab900d5f64452969bfa3837a551d42eb4f35bb015394cff15add8d1e6b61ed801d8dfa0706442fd8c7d77d05b32cc82209c0fdd0e6a237cb89b93dc694600144dd4169b595a2ae23e827d99aedc933d2e4822ffcfed623aa4f6abd64edb7283; JUTE_BBS_DATA=0c4f9bb5ba02579d912c228d374ed68da129077deec3c2191a3f2a8827b91803cd6272f708bc8150bf6c7bea20d418ac622350c26e451f37daa2b88b1499ee5b3a4cc2cbcd5843b1cbf0307bf71c167b',
  'app-sandbox': '0',
  'Accept': '*/*',
  'app-version': '13.14',
  'app-os': '15.1.1',
  'app-username': 'dxy_s7dau2c5',
  'app-mc': '8A8DA63419E74D65B3BF66DDA5B44FA412345678udidfor7',
  'app-mt': 'iPhone_iOS15.1.1',
  'Accept-Language': 'zh-Hans-CN;q=1.0, en-CN;q=0.9, zh-Hant-HK;q=0.8',
  'app-hard-name': 'iPhone',
  'Referer': 'https://newdrugs.dxy.cn',
  'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
  'User-Agent': 'drugspro/13.14 (cn.dxy.drugspro; build:1282; iOS 15.1.1) Alamofire/5.6.4',
  'Connection': 'keep-alive',
  'app-ac': '4124c5f1-1029-4fda-b06f-a87ac5ad8d9f',
  'DXY-AUTH-TOKEN': 'TGT-525490-2SHYYuao9qsbTx9qKcruVqbLoIbXGeP2hZi-50',
  'app-os-version': '15.1.1'
};

const requestHeaders = $request.headers;
Object.assign(requestHeaders, newHeaders);
console.log(JSON.stringify(requestHeaders));

$done({ headers: requestHeaders });
