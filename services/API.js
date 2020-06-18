class API {
    static baseUrl = 'http://localhost:3000/'
    

    static get(){
       return(
           fetch(API.baseUrl + "players") 
           .then(response => response.json()) 
       )
   }

   static getcomment(){
       return(
           fetch(API.baseUrl + "comments",{
            method: 'GET',
            
        })
           .then(response => response.json())
       )
   }

   static delete(id){
       return(
           fetch(API.baseUrl + "comments" +`/${id}`, {
               method: 'DELETE',
               headers: {
                'content-type': 'application/json',
                "Accept": "application/json"
           }})
           .then(response => response.json())
        
    )}
}
