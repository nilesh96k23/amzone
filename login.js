function login1(){
    let username=document.getElementById("input").innerHTML;
    let enterpass=document.getElementById("input1").innerHTML;
//  let oldusername= document.getElementById("validation").innerHTML;
    // let oldpass=document.getElementById("pass").innerHTML;
    // if(username=""&&enterpass=""){
    //     alert("fill the details");
//     let oldusername= import.meta=document.getElementById("validation").innerHTML;
//    let oldpass= import.meta=document.getElementById("pass").innerHTML;
    // }
    
    if(username<=5&& enterpass<=5)
        {
            
                
            window.location.href = 'index.html';
        }
        
    
    else{
        alert("fails!")
    }
    

}
