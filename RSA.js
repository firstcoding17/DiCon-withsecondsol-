// 이게 핵심
/*

hash a,b,c,d
a: 공개키
b: 그전 hash c번째자리
c: 새로 전자 서명으로 인한 hash
d: nonce나 번째를 암호화한 hash
RSA알고리즘 이용
login Controller를 자바이용

어떻게 전자 서명을 쓸지 
만들어야하고
1. hash에 쓰일 것
2. 
*/
const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 1024});

var  privatekey = function(number){
    let makeprikey = number;
    return privatekey_encrypted(makeprikey);
}//개인키 받기
var  privatekey_encrypted = function(privatedata)
{
    return key.encrypt(privatedata, 'base64');

}//개인키암호화
var  publickey = function(data){
     let pubkey = data;
     return public_encryted(pubkey);

}//후보이름받기
var  public_encryted = function(name){

    return key.encrypt(name, 'base64');

}//공개키암호화
//rsa구성 완료....배열많이쓸듯