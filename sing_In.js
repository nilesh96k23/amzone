function button1(){
   let c= document.getElementById("validation").value;
    let e= document.getElementById("validation2").value;
    let f= document.getElementById("validation3").value;
   var pattern=/[aA-zZ]/
   var pattern2=/[@/.com/0-9]/
//    var pattern1=/[]/
    
 let a=document.getElementById("pass").value;
 let b=document.getElementById("pass1").value;
 if(a==""&&b==""&&c==""&&e=="")
    {
        alert("Palase Fill the deteals!");
    }
    else if(c!==""&&e!==""&&pattern.test(c))//&& !pattern1.test(c)//a!==""&&b!==""&&pattern2.test(f)
        {
            if(b!==""&&pattern2.test(f))
        {
         if(a==b)
        {
            
            
        //    let q= document.getElementById("amazon_11").innerHTML;
        //    alert("valid"); 
        window.location.href = 'login.html';
        }
        else{
            alert("Password does not match !")
        }
    }
    else{
        alert("Palase Enter Correct Email MIssing sum Containt !")
    }
    }
    else{
        alert("Enter a your First Name And Last Name ")
    }
}


//
