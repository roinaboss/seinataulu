var ruoka1,ruoka2,ruoka3,ruoka4,ruoka5,ruoka6, index;
var rmaanantai, rtiistai, rkeskiviikko, rtorstai, rperjantai, ruoka =[];



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

    }}}if (weekday=="Tiistai"){
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

    }}}if (weekday=="Keskiviikko"){
    $("#keskiviikonruokalista").html(weekday + '<br>');
    if (dayname===weekday){     $("#keskiviikonruokalista").html('');
         $("#thisday").html("<u>" + weekday + '</u><br>');}
    for (index = 0; index < ruokalista_array.length; ++index) {$("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + ruokalista_array[index] + '<br />');
      if (dayname==="Maanantai"){
        $("#keskiviikonruokalista").html('');
        $("#keski").html(weekday + '<br>');}

      if (dayname===weekday){$("#keskiviikonruokalista").html('');$("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');} }
  $.each(ruokalista_array, function( index, value ) {$("#keski").html($("#keski").html() + value + '<br />');});
    $("#keski").html($("#keski").html() + ruokalista_array[1] + '<br />');
if (dayname==="Keskiviikko") {
              $("#keski").html('');};
              if (dayname==="Perjantai"){$("#keski").html('');
          $("#keskiviikonruokalista").html(weekday + '<br>');
          $.each(ruokalista_array, function( index, value ) {$("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + value + '<br />');}); }
        if(dayname==="Torstai")
        {
        $("#keski").html('');
          $("#keskiviikonruokalista").html(weekday + '<br>');
          $.each(ruokalista_array, function( index, value ) {$("#keskiviikonruokalista").html($("#keskiviikonruokalista").html() + value + '<br />');}); }
        if(dayname==="Tiistai"){
          $("#keskiviikonruokalista").html('');
          $("#keski").html(weekday + '<br>');
          $.each(ruokalista_array, function( index, value ) {$("#keski").html($("#keski").html() + value + '<br />');});  
}
}if (weekday=="Torstai"){
    $("#torstainruokalista").html(weekday + '<br>');
if (dayname===weekday){$("#thisday").html("<u>"+weekday + '</u><br>');         $("#torstainruokalista").html('');
}for (index = 0; index < ruokalista_array.length; ++index) {
  if (dayname===weekday){$("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');$("#torstainruokalista").html('');}
else{$("#torstainruokalista").html($("#torstainruokalista").html() + ruokalista_array[index] + '<br />');
}
}
}if (weekday=="Perjantai"){$("#perjantainruokalista").html(weekday + '<br>');
    if (dayname===weekday){     $("#thisday").html("<u>" + weekday + '</u><br>');
  $("#perjantainruokalista").html('');

    }for (index = 0; index < ruokalista_array.length; ++index) {
    $("#perjantainruokalista").html($("#perjantainruokalista").html() + ruokalista_array[index] + '<br />');
    if (dayname===weekday)
    {$("#thisday").html($("#thisday").html() + ruokalista_array[index] + '<br />');
          $("#perjantainruokalista").html(''); }

}if (dayname=="Saturday")
{
  $("#maanantainruokalista").html('');
  $("#tiistainruokalista").html('');
  $("#keski").html('');
  $("#keskiviikonruokalista").html('');
  $("#torstainruokalista").html('');
  $("#perjantainruokalista").html('');
}if (dayname=="Sunday")
{
  $("#maanantainruokalista").html('');
  $("#tiistainruokalista").html('');
  $("#keski").html('');
  $("#keskiviikonruokalista").html('');
  $("#torstainruokalista").html('');
  $("#perjantainruokalista").html('');
}}
};//luuppaaja end

var callback = function(ruoka,weekday) {
  if (weekday=="Maanantai"){
      rmaanantai = ruoka;
      luuppaaja(rmaanantai,weekday);
      
    }if (weekday=="Tiistai"){
      rtiistai = ruoka;
      luuppaaja(rtiistai,weekday);}
    if (weekday=="Keskiviikko"){
      rkeskiviikko = ruoka;
      luuppaaja(rkeskiviikko,weekday);
    }if (weekday=="Torstai"){
      rtorstai = ruoka;
      luuppaaja(rtorstai,weekday);
      }if (weekday=="Perjantai"){
      rperjantai = ruoka;
      luuppaaja(rperjantai,weekday);}};//callback end
var ajax = function(day,month,weekday)
{
$.get( "ajax.php?date=" + day + "&month=" + month + "&data=json", function( data ) {
 $.each(data.courses, function( index, value ) {
  
  if(value.properties==="")
  {
    ruoka[index] = value.title_fi;
  }
  else{
    ruoka[index] = value.title_fi + " " + value.properties ;
  }
  
  callback(ruoka,weekday);
});  
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
var  one = new Date(new Date().getTime() + 1 * 60 * 60 * 1e3);
var  plus_twentyfour = new Date(new Date().getTime() + 24 * 60 * 60 * 1e3);
var  plus_48 = new Date(new Date().getTime() + 48 * 60 * 60 * 1e3);
var  plus_72 = new Date(new Date().getTime() + 72 * 60 * 60 * 1e3);
var  plus_93 = new Date(new Date().getTime() + 93 * 60 * 60 * 1e3);
var  m_twentyfour = new Date(new Date().getTime() - 24 * 60 * 60 * 1e3);
var  m_48 = new Date(new Date().getTime() - 48 * 60 * 60 * 1e3);
var  m_72 = new Date(new Date().getTime() - 72 * 60 * 60 * 1e3);
var  m_93 = new Date(new Date().getTime() - 93 * 60 * 60 * 1e3);
var day = function(day) {
  if (day==="Monday")
  {
var d = one.getDate();
var m = one.getMonth() + 1;
ajax(d,m,'Maanantai');
var d = plus_twentyfour.getDate();
var m = plus_twentyfour.getMonth() + 1;
ajax(d,m,'Tiistai');
var d = plus_48.getDate();
var m = plus_48.getMonth() + 1;
ajax(d,m,'Keskiviikko');
var d = plus_72.getDate();
var m = plus_72.getMonth() + 1;
ajax(d,m,'Torstai');
var d = plus_93.getDate();
var m = plus_93.getMonth() + 1;
ajax(d,m,'Perjantai');
  }
  if (day==="Tuesday")
  {
var d = m_twentyfour.getDate();
var m = m_twentyfour.getMonth() + 1;
ajax(d,m,'Maanantai');
var d = one.getDate();
var m = one.getMonth() + 1;
ajax(d,m,'Tiistai');
var d = plus_twentyfour.getDate();
var m = plus_twentyfour.getMonth() + 1;
ajax(d,m,'Keskiviikko');
var d = plus_48.getDate();
var m = plus_48.getMonth() + 1;
ajax(d,m,'Torstai');
var d = plus_72.getDate();
var m = plus_72.getMonth() + 1;
ajax(d,m,'Perjantai'); 
  }
  if (day==="Wednesday")
  {
var d = m_48.getDate();
var m = m_48.getMonth() + 1;
ajax(d,m,'Maanantai');
var d = m_twentyfour.getDate();
var m = m_twentyfour.getMonth() + 1;
ajax(d,m,'Tiistai');
var d = one.getDate();
var m = one.getMonth() + 1;
ajax(d,m,'Keskiviikko');
var d = plus_twentyfour.getDate();
var m = plus_twentyfour.getMonth() + 1;
ajax(d,m,'Torstai');
var d = plus_48.getDate();
var m = plus_48.getMonth() + 1
ajax(d,m,'Perjantai');
  }
  if (day==="Thursday")
  {
var d = m_72.getDate();
var m = m_72.getMonth() + 1;
ajax(d,m,'Maanantai');
var d = m_48.getDate();
var m = m_48.getMonth() + 1;
ajax(d,m,'Tiistai');
var d = m_twentyfour.getDate();
var m = m_twentyfour.getMonth() + 1;
ajax(d,m,'Keskiviikko');
var d = one.getDate();
var m = one.getMonth() + 1;
ajax(d,m,'Torstai');
var d = plus_twentyfour.getDate();
var m = plus_twentyfour.getMonth() + 1;
ajax(d,m,'Perjantai'); 
  }
  if (day==="Friday")
{var d = m_93.getDate();
var m = m_93.getMonth() + 1;
ajax(d,m,'Maanantai')
var d = m_72.getDate();
var m = m_72.getMonth() + 1;
ajax(d,m,'Tiistai');
var d = m_48.getDate();
var m = m_48.getMonth() + 1;
ajax(d,m,'Keskiviikko');
var d = m_twentyfour.getDate();
var m = m_twentyfour.getMonth() + 1;
ajax(d,m,'Torstai');
var d = one.getDate();
var m = one.getMonth() + 1
ajax(d,m,'Perjantai');}};//day end
