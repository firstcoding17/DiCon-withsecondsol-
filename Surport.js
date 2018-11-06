const blockchain = require("./blockchain");
const block = new blockchain();
const memberob = require("./genasis");
const CallMember = new memberob();

//검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증검증
//1 공개키 검증
//2 개인키 검증
//3 1,2번 통과시 검증(true)
//4 1,2둘 중 하나라도 false시 배열 0번으로 간다.(불통과)

var checknum = block.InputMemberNum;//기호번호 입력받은거 호출
var GetPublickey =[]
var availablevote;//서버에서 받아옴 투표가능하면 true 아니면 false;
var accept = [true,false];//true승인 false거절 및 잘못된 값
var provepublickey;
var proveprivatekey;
var totalprove = 0;// 공개키 맞으면 +1 개인키 맞으면 +1 총합 2가되야만 통과

for(let i = 1 ; i<CallMember.long ; i++ ){
    GetPublickey[i] = memberchain.get_publickey; 
}//공개키 검증을 위한 후보 공개키 불러오기


garbage  = CallMember.memberchain[0];//버리는 곳
   
var checking = function(){
    
    provepublickey=(block.new_block.publickey == CallMember.memberchain[block.InputMemberNum].get_publickey);

    if(provepublickey == true){
        ++totalprove;
    }else if(provepublickey == false){
        break;
    }
    proveprivatekey = (block.beforehashfirst == CallMember.memberchain[block.InputMemberNum].line[block.new_block.votenum-1]);
    if(proveprivatekey == true){
        ++totalprove;
    }
    else{
        break;
    }
}
if(availablevote == true){
    totalprove +1;
}else{
    totalprove = totalprove;
}






//합의 알고리즘
//투표권한, 재투표검증(취소, 다시했는지 확인)
/*
    투표하사람은 볼 수있게
    전자서명으로 해쉬만들고
    투표내역서명
    0값이용

추가예정*/