const sha256 = require("sha256");
const genasis = require("./genesis");//제네시스로부터 후보블록불러오기위함
const RSA = require("./RSA");//RSA불러오기위함
const Surport = require("./Surport");
const porter = new Surport();
const rsa = new RSA();
const GenesisFile = new genesis();


var InputMemberNum;//투표 했을시 기호 n번 입력받는 곳
var check;//서버에서 확인(1)이나 취소(0)받아옴
var cancel = 1 ;//서버에서 다시하기 할 시 0으로 리턴 그전은 1
var call_genesis=[];
var voter = 0;//서버에서 받을 거이니 서버에서 이 파일을 실행 할때마다 1명씩 추가
var move;//전블록호출해서 앞에있는 노드값 받기 위함
var judge = [GenesisFile.long];//어느 후보인지 판단을 위함
var beforehashfirst;//전 해쉬값 인증을 받기 위해서
//제네시스에 숫자 0번부터 투표 수를 계산 할 수 있도록 만듬




for(let i=1 ; i<GenesisFile.long ; i++){
    call_genesis[i] = GenesisFile.memberchain[i];
    
}//후보자배열 호출

++voter ;//총투표자수 증가
if(GenesisFile.memberchain[InputMemberNum].totalThisVote==0){
    beforehashfirst=0;
}else{
    beforehashfirst=GenesisFile.memberchain[InputMemberNum].line[votenum-1].makeprivatekey;
}//그 전 해쉬값 호출하기 위함





/*
    1 블록체인 읻는방법 배열번호엮기
    2 뉴블록
    3 새로운 해쉬를 만들건지 아니면 보터로넣어버리기
    4 투표자수 계산
    5 탈중앙화
    L합의 알고리즘 suport.js에서

    **여기서 중요한 것은 각 0의 배열은 취소나 인증이 안됬을 시 돌아가야함**
    반복문을써서 각 후보의 투표 수 계산
    토탈은 블록을 만들 때마다 추가

     만약 투표확인을 눌르면 현재 토탈 투표자 수 그리고 각 후보의 투표 수 보여주기
*/



var new_block = function(){
    var votenum = GenesisFile.memberchain[InputMemberNum].totalThisVote+1;//투표수 계산을 위함
    number=GenesisFile.memberchain[InputMemberNum].number[InputMemberNum];//후보자 기호
   

    publickey = GenesisFile.memberchain[InputMemberNum].Get_publickey;//공개키 소유
    check;//검증 확인 확인이면 true 아니면 false
    porter.checking();
    if(porter.totalprove == 3){//surport.js에서 계산할거임 함수입니다
        check =true;
    }else{
        check =  false;
    }
    
    
    makeprivatekey =rsa.privatekey(votenum);//개인키

    hash = sha256(publickey,beforehashfirst,makeprivatekey,votenum);//해쉬


}//서버에서 후보 투표자수는 기억해야함//참고로 함수가 아닙니다.(객체였습니다)
if(new_block.check == true){
GenesisFile.memberchain[InputMemberNum].line[votenum] = new_block;//제네시스 블록에 투표정보 입력 및 그 전 해쉬값을 불러오기 위함

}else{
    GenesisFile.memberchain[InputMemberNum].totalThisVote-1;
    new_block = porter.garbage;
}
var TotalVoterNum = function(){

    return voter;


}//총 투표자 수(호출할 때 마다 operation에서 호출)

var cancel = function(){
    return 0;
}//다시하기 할 때 또는 취소할 때 이 함수를 불러오면 됨
