function voteFunction() {
    var Age, canVote;
    Age=document.getElementById("Age").value;
    canVote=(Age<18)?"You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=canVote +" to vote.";
}