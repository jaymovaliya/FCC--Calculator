$(document).ready(function(){
  var str='';
  $("#ac").click(function(){
    console.log("clicked");
    str='0';
    $("#screen").html(str);
    str='';
  });
  $("#del").click(function(){
    if(str.length==1){
      str='0';
    }
    else{
      str = str.slice(0,str.length-1);
    }
    $("#screen").html(str);
  });
  $(".allbtn").click(function(){
    str+=$(this).attr("value");
    if(str.length>15){
      str = str.slice(0,15);
    }
    $("#screen").html(str);
  });
  $(".eqbtn").click(function(){
    var ans = eval(str).toString();
    console.log(ans.length);
    if(ans.length>15){
      ans = ans.slice(0,15);
    }
    str=ans;
    $("#screen").html(ans);
  });
});