function searchf1(){
	var x=document.getElementById("search1").value;
var data = JSON.stringify({
  "search": x
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
 // if (this.readyState === 4) 
 {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://localhost:8000/userslist/");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.send(data);
}




function reg(){	
	if(!localStorage.getItem("users"))
		a=[];
	else
		a=JSON.parse(localStorage.getItem("users"));
	alert("you have been successfully registered.");
	var x=document.getElementById("ir1").value;
	var y=document.getElementById("ir2").value;
	var z=document.getElementById("ir3").value;
	var json={"name":x,"email":y,"pass":z};
	a.push(json);
	localStorage.setItem("users",JSON.stringify(a));
}


function log()
{
	var x=document.getElementById("il1").value;
	var y=document.getElementById("il2").value;
	var b=JSON.parse(localStorage.getItem("users"));
	if(!b){
		alert("enter the registered values");
		return false;
	}
	for(var i=0;i<b.length;i++)
	{
		if((x==b[i].email)&&(y==b[i].pass))
		{
			alert("successlogin ");
			return true;
		}
	}
	alert("please register and then try again");
	return false;
}





          var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
      if(this.readyState==4 && this.status==200){
        //console.log(this.responseText);
         var store=JSON.parse(this.responseText);
          document.getElementById("content1").textContent=store[0].content;
           document.getElementById("img1").src=store[0].imageUrl;
           document.getElementById("content2").textContent=store[1].content;
           document.getElementById("img2").src=store[1].imageUrl;
           document.getElementById("content3").textContent=store[2].content;
           document.getElementById("img3").src=store[2].imageUrl;
            document.getElementById("content4").textContent=store[3].content;
           document.getElementById("img4").src=store[3].imageUrl;
           document.getElementById("span1").innerHTML=store[0].id;
            document.getElementById("span2").innerHTML=store[1].id;
             document.getElementById("span3").innerHTML=store[2].id;
              document.getElementById("span4").innerHTML=store[3].id;
      }
    };
    //console.log(store[0].title);
   /* xhttp.open("GET","http://koushikmln.com:7500/blogs" ,true);//method url async  //fething the content from this url and using in our page
    //send headers
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    *///xhttp.send();
