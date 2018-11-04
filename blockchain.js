const sha256 = require("sha256");
const genasis = require("./genasis");//제네시스로부터 후보블록불러오기위함
const RSA = require("./RSA");//RSA불러오기위함
const rsa = new RSA();
const GenasisFile = new genasis();


var InputMemberNum;//투표 했을시 기호 n번 입력받는 곳
var call_genesis=[];
var voter = 0;//서버에서 받을 거이니 서버에서 이 파일을 실행 할때마다 1명씩 추가
var move;//전블록호출해서 앞에있는 노드값 받기 위함
var judge = [GenasisFile.long];//어느 후보인지 판단을 위함
var beforehashfirst;//전 해쉬값 인증을 받기 위해서
//제네시스에 숫자 0번부터 투표 수를 계산 할 수 있도록 만듬



for(let i=1 ; i<GenasisFile.long ; i++){
    call_genesis[i] = GenasisFile.memberchain[i];
    
}//후보자배열 호출

++voter ;//총투표자수 증가
if(GenasisFile.memberchain[InputMemberNum].totalThisVote==0){
    beforehashfirst=0;
}else{
    beforehashfirst=GenasisFile.memberchain[InputMemberNum].line[votenum-1].makeprivatekey;
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
    var votenum = GenasisFile.memberchain[InputMemberNum].totalThisVote+1;//투표수 계산을 위함
    number=GenasisFile.memberchain[InputMemberNum].number[InputMemberNum];//후보자 기호
    

    publickey = GenasisFile.memberchain[InputMemberNum].Get_publickey;//공개키 소유
    
    
    makeprivatekey =rsa.privatekey(votenum);//개인키

    hash = sha256(publickey,beforehashfirst,makeprivatekey,votenum);//해쉬


}//서버에서 후보 투표자수는 기억해야함
GenasisFile.memberchain[InputMemberNum].line[votenum] = new_block;//제네시스 블록에 투표정보 입력 및 그 전 해쉬값을 불러오기 위함
var TotalVoterNum = function(){

    return voter;


}//총 투표자 수(호출할 때 마다 operation에서 호출)
