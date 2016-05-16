

$(document).ready(function(){
      var x = Cookies.get('c1')
      $("#clicks1").text(x)
      /////////////////
      var y = Cookies.get('c2')
      $("#clicks2").text(y)
      ///////////////////////
      var z = Cookies.get('c3')
      $("#clicks3").text(z)
///////////////////////////////////////////
if(Cookies.get('c1')){
	$("#button1").on('click', function(){
		x++;
		Cookies.set('c1', x);
		$("#clicks1").text(x);
		console.log(x);
		}); 
}else
		Cookies.set('c1', 0);

$("#button2").on('click', function(){
	Cookies.set("c1" ,0);
		}); 
/////////////////////////////////////////

if(Cookies.get('c2')){
	$("#button11").on('click', function(){
		y++;
		Cookies.set('c2', y);
		$("#clicks2").text(y);
		console.log(y);
		}); 
}else
		Cookies.set('c2', 0);

$("#button4").on('click', function(){
	Cookies.set("c2" ,0);
		}); 
//////////////////////
if(Cookies.get('c3')){
	$("#button22").on('click', function(){
		z++;
		Cookies.set('c3', z);
		$("#clicks3").text(z);
		console.log(z);
		}); 
}else
		Cookies.set('c3', 0);

$("#button6").on('click', function(){
	Cookies.set("c3" ,0);
		}); 


	});


