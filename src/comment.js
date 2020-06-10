
document.addEventListener("DOMContentLoaded", hide)


function hide(){
    displayNewComment()
    document.getElementById("content").style.display="none"
    document.getElementById("king").style.display="none"
    document.getElementById("air").style.display="none"

}

function deleteComment(id){
    fetch("http://localhost:3000/comments/" + id, {
  method: 'DELETE',
})
.then(res => res.text())
.then(res => {console.log(res) 

displayUpdatedComment()
})
}

function displayNewComment(){
    document.getElementById("content").style.display="block"
    fetch("http://localhost:3000/comments", {
        method: 'GET',
        
    })
.then(resp => resp.json())
.then(comment => {
    console.log(comment)
    let li = ``; 
        comment.forEach(comment => { 
            li += `<tr> 
                <td>Name: ${comment.name} </td><br>
                <td>Comment: ${comment.content}</td><br>  
                <button type="button" onclick="deleteComment(${comment.id})">Delete</button><br>         
            </tr><br>`; 
            
        }); 
        
    document.getElementById("content").innerHTML += li; 
    
})
}

function displayUpdatedComment(){
    fetch("http://localhost:3000/comments", {
        method: 'GET',
        
})
.then(resp => resp.json())
.then(comment => {
    console.log(comment)
    let li = ``; 
        comment.forEach(comment => { 
            li += `<tr> 
                <td>Name: ${comment.name} </td><br>
                <td>Comment: ${comment.content}</td><br>  
                <button type="button" onclick="deleteComment(${comment.id})">Delete</button><br>         
            </tr><br>`; 
            
        }); 
        
    document.getElementById("content").innerHTML = li; 
    
})

}
