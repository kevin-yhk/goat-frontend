document.getElementById("whatever").addEventListener("click", showInfo)
document.addEventListener("DOMContentLoaded", hide)


function showInfo(){
    Player.getplayer()
    document.getElementById("whatever").style.display="none"
    document.getElementById("content").style.display="block"
    document.getElementById("king").style.display="block"
    document.getElementById("air").style.display="block"
    document.getElementById("new_comment").style.display="block"
}


function hide(){
    Comment.displayNewComment()
    document.getElementById("content").style.display="none"
    document.getElementById("king").style.display="none"
    document.getElementById("air").style.display="none"
    document.getElementById("new_comment").style.display="none"
}