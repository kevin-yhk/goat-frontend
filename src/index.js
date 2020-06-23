document.getElementById("whatever").addEventListener("click", showInfo)
document.addEventListener("DOMContentLoaded",hide)
document.addEventListener("DOMContentLoaded", mountFormListener)

const formName = document.querySelector("#comment_name")
const formContent = document.querySelector("#comment_content")
const formPlayerId = document.querySelector("#playerid")
const postForm = document.getElementById("new_comment")


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

function getCommentData(){
    return {
        name: formName.value,
        content: formContent.value, 
        player_id: parseInt(formPlayerId.value) 
    }
}

function mountFormListener(){
    postForm.addEventListener("submit", function(event){
        event.preventDefault()

        const commentObj = getCommentData()
        if (postForm.dataset.action === "create"){
            
            API.create(commentObj)
        }
    })

}
