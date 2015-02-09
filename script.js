var ruoka1,ruoka2,ruoka3,ruoka4,ruoka5,ruoka6;
  var ruoka = [];
var index;



var rmaanantai, rtiistai, rkeskiviikko, rtorstai, rperjantai =[];
function sleep(milliseconds)
{
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  };
}//sleep end



var luuppaaja = function(ruokalista_array,weekday) {
  var index = "";
  var days = ['Sunday','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Saturday'];
 Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
  var now = new Date();
 dayname = now.getDayName();


  if (weekday=="Maanantai"){
    $("#maanantainruokalista").html(weekday + '<br>');
    if (dayname===weekday)
    {     
          $("#thisday").html("<u>" + weekday + '</u><br>');
          $("#maanantainruokalista").html('');


    }
      for (index = 0; index < ruokalista_array.length; ++index) {
    $("#maanantainruokalista").html($("#maanantainruokalista").html() + ruokalista_array[index] + '<br />');
    if (dayname===weekday)
    {     
          $("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');
          $("#maanantainruokalista").html('');

    }
    
    
}
}
if (weekday=="Tiistai"){
    $("#tiistainruokalista").html(weekday + '<br>');
    if (dayname===weekday)
    {     
          $("#thisday").html("<u>" + weekday + '</u><br>');
          $("#tiistainruokalista").html('');

    }
      for (index = 0; index < ruokalista_array.length; ++index) {
    $("#tiistainruokalista").html($("#tiistainruokalista").html() + ruokalista_array[index] + '<br />');
    if (dayname===weekday)
    { 
      $("#tiistainruokalista").html('');
          $("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');

    }
    
    
}
}
if (weekday=="Keskiviikko"){
    $("#keskiviikonruokalista").html(weekday + '<br>');
    if (dayname===weekday)
    {     $("#keskiviikonruokalista").html('');
         $("#thisday").html("<u>" + weekday + '</u><br>');

    }



        for (index = 0; index < ruokalista_array.length; ++index) {
      $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[index] + '<br />');
      if (dayname==="Maanantai")
      {
        $("#keskiviikonruokalista").html('');
        
        $("#keski").html(weekday + '<br>');
            

            
           
      }

      if (dayname===weekday)
      {
        $("#keskiviikonruokalista").html('');
            $("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');
           
      }

      
      
      
  }
if (ruokalista_array.length==5 ) {
              $("#keski").html($("#keski").html() + ruokalista_array[0] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[1] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[2] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[3] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[4] + '<br />');
              
            };
            if (ruokalista_array.length == 6) {
              $("#keski").html($("#keski").html() + ruokalista_array[0] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[1] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[2] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[3] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[4] + '<br />');
              $("#keski").html($("#keski").html() + ruokalista_array[5] + '<br />');

            };
            if (dayname==="Keskiviikko") {
              $("#keski").html('');
            };
              if (dayname==="Perjantai")
        {
          $("#keski").html('');
          
          $("#keskiviikonruokalista").html(weekday + '<br>');
          
           if (ruokalista_array.length==5 ) {
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[0] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[1] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[2] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[3] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[4] + '<br />');
                
              };
              if (ruokalista_array.length == 6) {
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[0] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[1] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[2] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[3] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[4] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[5] + '<br />');

              };   

              
             
        }
        if(dayname==="Torstai")
        {
        $("#keski").html('');
          
          $("#keskiviikonruokalista").html(weekday + '<br>');
          
           if (ruokalista_array.length==5 ) {
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[0] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[1] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[2] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[3] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[4] + '<br />');
                
              };
              if (ruokalista_array.length == 6) {
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[0] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[1] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[2] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[3] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[4] + '<br />');
                $("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[5] + '<br />');

              };   
        }
        if(dayname==="Tiistai")
        {
          $("#keskiviikonruokalista").html('');
          
          $("#keski").html(weekday + '<br>');
          
           if (ruokalista_array.length==5 ) {
                $("#keski").html($("#keski").html() + ruokalista_array[0] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[1] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[2] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[3] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[4] + '<br />');
                
              };
              if (ruokalista_array.length == 6) {
                $("#keski").html($("#keski").html() + ruokalista_array[0] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[1] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[2] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[3] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[4] + '<br />');
                $("#keski").html($("#keski").html() + ruokalista_array[5] + '<br />');

              };   
        }

}
if (weekday=="Torstai"){
    
    


    $("#torstainruokalista").html(weekday + '<br>');
    if (dayname===weekday)
    {     
          $("#thisday").html("<u>"+weekday + '</u><br><br>');
          $("#torstainruokalista").html('');

    }
      for (index = 0; index < ruokalista_array.length; ++index) {
    
    
    
    if (dayname===weekday)
    {
          $("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');
          $("#torstainruokalista").html('');
        
    }
    else
    {
      $("#torstainruokalista").html($("#torstainruokalista").html() + ruokalista_array[index] + '<br />');
    }
}
}
if (weekday=="Perjantai"){
    
         $("#perjantainruokalista").html(weekday + '<br>');
    
    if (dayname===weekday)
    {     
          $("#thisday").html("<u>" + weekday + '</u><br>');
          $("#perjantainruokalista").html('');

    }
    

      for (index = 0; index < ruokalista_array.length; ++index) {
    
    
    
      $("#perjantainruokalista").html($("#perjantainruokalista").html() + ruokalista_array[index] + '<br />');
    
        if (dayname===weekday)
    {
          $("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');
          $("#perjantainruokalista").html('');

    }

    
}
if (dayname=="Saturday")
{
  $("#maanantainruokalista").html('');
  $("#tiistainruokalista").html('');
  $("#keski").html('');
  $("#keskiviikonruokalista").html('');
  $("#torstainruokalista").html('');
  $("#perjantainruokalista").html('');
}
if (dayname=="Sunday")
{
  $("#maanantainruokalista").html('');
  $("#tiistainruokalista").html('');
  $("#keski").html('');
  $("#keskiviikonruokalista").html('');
  $("#torstainruokalista").html('');
  $("#perjantainruokalista").html('');
}
}


};//luuppaaja end


var callback = function(ruoka,weekday) {
  if (weekday=="Maanantai"){
      rmaanantai = ruoka;
      luuppaaja(rmaanantai,weekday);
      
    }
    sleep(200);

    if (weekday=="Tiistai"){
      rtiistai = ruoka;
      luuppaaja(rtiistai,weekday);
sleep(200);
    }
    if (weekday=="Keskiviikko"){
      rkeskiviikko = ruoka;
      luuppaaja(rkeskiviikko,weekday);
    }
    sleep(200);
    if (weekday=="Torstai"){
      rtorstai = ruoka;
      luuppaaja(rtorstai,weekday);
      sleep(200);
    }if (weekday=="Perjantai"){
      rperjantai = ruoka;
      luuppaaja(rperjantai,weekday);
    }
};//callback end
var ajax = function(day,month,weekday)
{
$.get( "ajax.php?date=" + day + "&month=" + month, function( data ) {
  if (data.courses.length===6) {
  if(data.courses[0].properties==="")
  {
    ruoka1 = data.courses[0].title_fi;
  }
  else{
    ruoka1 = data.courses[0].title_fi + " " +  data.courses[0].properties;
  }
  if(data.courses[1].properties==="")
  {
    ruoka2 = data.courses[1].title_fi;
  }
  else{
    ruoka2 = data.courses[1].title_fi + " " +  data.courses[1].properties;
  }
  if(data.courses[2].properties==="")
  {
    ruoka3 = data.courses[2].title_fi;
  }
  else{
    ruoka3 = data.courses[2].title_fi + " " +  data.courses[2].properties;
  }
  if(data.courses[3].properties==="")
  {
    ruoka4 = data.courses[3].title_fi;
  }
  else{
    ruoka4 = data.courses[3].title_fi + " " +  data.courses[3].properties;
  }if(data.courses[4].properties==="")
  {
    ruoka5 = data.courses[4].title_fi;
  }
  else{
    ruoka5 = data.courses[4].title_fi + " " +  data.courses[4].properties;
  }
  if(data.courses[5].properties==="")
  {
    ruoka6 = data.courses[5].title_fi;
  }
  else{
    ruoka6 = data.courses[5].title_fi + " " +  data.courses[5].properties;
  }

  
  ruoka = [ruoka1,ruoka2,ruoka3,ruoka4,ruoka5,ruoka6];
  
callback(ruoka,weekday);

 
  }
  
  if (data.courses.length===5) {
    if(data.courses[0].properties==="")
  {
    ruoka1 = data.courses[0].title_fi;
  }
  else{
    ruoka1 = data.courses[0].title_fi + " " +  data.courses[0].properties;
  }
  if(data.courses[1].properties==="")
  {
    ruoka2 = data.courses[1].title_fi;
  }
  else{
    ruoka2 = data.courses[1].title_fi + " " +  data.courses[1].properties;
  }
  if(data.courses[2].properties==="")
  {
    ruoka3 = data.courses[2].title_fi;
  }
  else{
    ruoka3 = data.courses[2].title_fi + " " +  data.courses[2].properties;
  }
  if(data.courses[3].properties==="")
  {
    ruoka4 = data.courses[3].title_fi;
  }
  else{
    ruoka4 = data.courses[3].title_fi + " " +  data.courses[3].properties;
  }if(data.courses[4].properties==="")
  {
    ruoka5 = data.courses[4].title_fi;
  }
  else{
    ruoka5 = data.courses[4].title_fi + " " +  data.courses[4].properties;
  }
  
   
  ruoka = [ruoka1,ruoka2,ruoka3,ruoka4,ruoka5];
 

  callback(ruoka,weekday);
}
});
}; //ajax end
$(function() {
 var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };

 var now = new Date();
 dayname = now.getDayName();
 day(dayname);
});//ready end
var day = function(day) {
  if (day==="Monday")
  {
var day = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();

ajax(d,m,'Maanantai');

sleep(200);

var day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Tiistai');

var day = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Keskiviikko');

var day = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Torstai');

var day = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Perjantai');
  }
  if (day==="Tuesday")
  {
   var day = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();

ajax(d,m,'Maanantai');

sleep(200);

var day = new Date(new Date().getTime() - 1 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Tiistai');

var day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Keskiviikko');

var day = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Torstai');

var day = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Perjantai'); 
  }
  if (day==="Wednesday")
  {
    var day = new Date(new Date().getTime() - 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();

ajax(d,m,'Maanantai');

sleep(200);

var day = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Tiistai');

var day = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Keskiviikko');

var day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Torstai');

var day = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Perjantai');
  }
  if (day==="Thursday")
  {
   var day = new Date(new Date().getTime() - 72 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();

ajax(d,m,'Maanantai');

sleep(200);

var day = new Date(new Date().getTime() - 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Tiistai');

var day = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Keskiviikko');

var day = new Date(new Date().getTime() +1 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Torstai');

var day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Perjantai'); 
  }
  if (day==="Friday")
  {
    var day = new Date(new Date().getTime() - 96 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();

ajax(d,m,'Maanantai');

sleep(200);

var day = new Date(new Date().getTime() - 72 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Tiistai');

var day = new Date(new Date().getTime() - 48 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Keskiviikko');

var day = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Torstai');

var day = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
var d = day.getDate();
var m = day.getMonth() + 1;
var y = day.getFullYear();
ajax(d,m,'Perjantai');
  }

};//day end
