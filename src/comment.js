// function deleteComment(id){
//     fetch("http://localhost:3000/comments/" + id, {
//   method: 'DELETE',
// })
// .then(response => response.text())
// .then(response => {console.log(response) 

// // displayUpdatedComment()
// })
// }

class Comment{
    static displayNewComment(){
    API.getcomment()
    .then(json => {
    let li = ``; 
        json.forEach(comment => { 
            li += `<tr> 
                <td>Name: ${comment.name} </td><br>
                <td>Comment: ${comment.content}</td><br>  
                <button type="button" onclick="Comment.deleteComment(${comment.id})">Delete</button><br>         
            </tr><br>`; 
            
        }); 
        
    document.getElementById("content").innerHTML += li; 
    
})
}

    static displayUpdatedComment(){
        API.getcomment()
        .then(json => {
            let li = ``; 
                json.forEach(comment => { 
                    li += `<tr> 
                        <td>Name: ${comment.name} </td><br>
                        <td>Comment: ${comment.content}</td><br>  
                        <button type="button" onclick="Comment.deleteComment(${comment.id})">Delete</button><br>         
                    </tr><br>`; 
                    
                }); 
                
            document.getElementById("content").innerHTML += li; 
            
        })

    }

    static deleteComment(id){
        API.delete(id)
        .then(response => {console.log(response)}) 
        
    }


}

// function displayUpdatedComment(){
//     fetch("http://localhost:3000/comments", {
//         method: 'GET',
        
// })
// .then(resp => resp.json())
// .then(comment => {
//     console.log(comment)
//     let li = ``; 
//         comment.forEach(comment => { 
//             li += `<tr> 
//                 <td>Name: ${comment.name} </td><br>
//                 <td>Comment: ${comment.content}</td><br>  
//                 <button type="button" onclick="deleteComment(${comment.id})">Delete</button><br>         
//             </tr><br>`; 
            
//         }); 
        
//     document.getElementById("content").innerHTML = li; 
    
// })

// }
