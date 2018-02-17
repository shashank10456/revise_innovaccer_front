


function reg(){	
	  var fn= document.getElementById("firstName").value;
  var ln= document.getElementById("lastName").value;
  var eid= document.getElementById("emailId").value;
  var pwd= document.getElementById("password").value;

	if(!localStorage.getItem("users"))
		a=[];
	else
		a=JSON.parse(localStorage.getItem("users"));
	alert("you have been successfully registered.");
	var json={"name":fn+ln,"email":eid,"pass":pwd};
	a.push(json);
	localStorage.setItem("users",JSON.stringify(a));
}


function log()
{
	var x=document.getElementById("emailId1").value;
	var y=document.getElementById("password1").value;
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