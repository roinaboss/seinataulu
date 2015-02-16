<?php

if ($_GET["data"]==="json") {
	header('Access-Control-Allow-Origin: *');  
header('Content-type: application/json; charset=utf-8');


$date = $_GET['date'];
$month = $_GET['month'];
$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/output/daily_json/124/' . date('Y')  . '/' .  $month . '/' . $date . '/fi');
echo "$output";
}
if ($_GET["data"]==="jsonp") {
	 
header('Content-type: application/javascript; charset=utf-8');


$date = $_GET['date'];
$month = $_GET['month'];
$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/output/daily_json/124/' . date('Y')  . '/' .  $month . '/' . $date . '/fi');
echo $_GET["callback"]  . "(" . "$output)";
}
if ($_GET["data"]==="xml") {
	header('Access-Control-Allow-Origin: *');  
header('Content-type: application/xml; charset=utf-8');



$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/rss/weekly_rss/124/fi');
echo "$output";
}


?>
