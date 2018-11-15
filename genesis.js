const sha256 = require("sha256");
const RSA = require("./RSA");



var rsa = new RSA();
var membernum = prompt("후보수 입력:"); //후보 파악
var member = [];//배열로 그 사람 이름을 담아
var memberchain = [];//각 후보 객체 생성
var data = [];//후보이름


for(let i = 1 ; i < membernum ; i++ ){
    let name = prompt("후보이름 차례대로 입력"+ (i+1) + "번째: ");
    member[i] = name;
    memberchain[i]
}
//후보 이름 넣기


for(i = 1 ; i < member.length ; i++){

    memberchain[i] = function(){
        number = i;//기호 n번 선언
        data[i] = member[i];//이름
        var get_publickey = rsa.publickey(data[i]);//RSA.js에서 함수값을 줘서 암호화
        var totalThisVote = 0;//투표 할 때 마다 하나씩 늘음
        hash = sha256(get_publickey,0,0,0);//암호화 및 get_publickey는 첫해쉬 공통생성
        var line = [];//투표 수 배열 p2p를 할 수 있도록 연결 
        line[0] = 0;//제네시스 블록이 시작이니 0번째
    
    }//함수가 아니라 객체입니다 (아무튼 객체임 ;;)

}
var long = member.length;//멤버의 길이
//후보 이름의 정보를 제네시스 블록구성
//*(중요)* 각 0의 배열은 비어있음 그 이유는 만약 취소하거나 인증이 안됬을 시 다시돌아가기 위함 *(중요)* -> 이건 Surport.js에 있음