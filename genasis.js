const sha256 = require("sha256");




var membernum = prompt("후보수 입력:"); //후보 파악
var member = [];//배열로 그 사람 정보를 담아
var memberchain = [];
var data = [];


for(let i = 1 ; i < membernum ; i++ ){
    let name = prompt("후보이름 차례대로 입력"+ (i+1) + "번째: ");
    member[i] = name;
    memberchain[i]
}
//후보 이름 넣기


for(i = 1 ; i < member.length ; i++){

    memberchain[i] = function(){
        number = i;//기호 n번 선언
        data[i] = member[i];
        

        hash = sha256((10+i),0,0);//암호화 및 10+i는 첫해쉬 공통찾기
    
    }

}
//후보 이름의 정보를 제네시스 블록구성
//*(중요)* 각 0의 배열은 비어있음 그 이유는 만약 취소하거나 인증이 안됬을 시 다시돌아가기 위함 *(중요)*






