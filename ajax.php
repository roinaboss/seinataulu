<?php
header('X-Powered-By: php');
header('X-data: ' $_GET["data"]);


if ($_GET["data"]==="json") {
	if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
      $if_modified_since = preg_replace('/;.*$/', '',   $_SERVER['HTTP_IF_MODIFIED_SINCE']);
    } else {
      $if_modified_since = '';
    }
 $mtime = filemtime($_SERVER['SCRIPT_FILENAME']);
    $gmdate_mod = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';

    if ($if_modified_since == $gmdate_mod) {
      header("HTTP/1.1 304 Not Modified");
      exit;
    }
header("Last-Modified: $gmdate_mod");

 header('Expires: ' . gmdate('D, d M Y H:i:s', time() + (60*60*24*45)) . ' GMT');

header('Content-type: application/json; charset=utf-8');


$date = $_GET['date'];
$month = $_GET['month'];
$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/output/daily_json/124/' . date('Y')  . '/' .  $month . '/' . $date . '/fi');
echo "$output";
}
if ($_GET["data"]==="jsonp") {
	if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
      $if_modified_since = preg_replace('/;.*$/', '',   $_SERVER['HTTP_IF_MODIFIED_SINCE']);
    } else {
      $if_modified_since = '';
    }
 $mtime = filemtime($_SERVER['SCRIPT_FILENAME']);
    $gmdate_mod = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';

    if ($if_modified_since == $gmdate_mod) {
      header("HTTP/1.1 304 Not Modified");
      exit;
    }
header("Last-Modified: $gmdate_mod");

 header('Expires: ' . gmdate('D, d M Y H:i:s', time() + (60*60*24*45)) . ' GMT');
	 
header('Content-type: application/javascript; charset=utf-8');


$date = $_GET['date'];
$month = $_GET['month'];
$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/output/daily_json/124/' . date('Y')  . '/' .  $month . '/' . $date . '/fi');
echo $_GET["callback"]  . "(" . "$output)";
}
if ($_GET["data"]==="xml") {
		if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
      $if_modified_since = preg_replace('/;.*$/', '',   $_SERVER['HTTP_IF_MODIFIED_SINCE']);
    } else {
      $if_modified_since = '';
    }
 $mtime = filemtime($_SERVER['SCRIPT_FILENAME']);
    $gmdate_mod = gmdate('D, d M Y H:i:s', $mtime) . ' GMT';

    if ($if_modified_since == $gmdate_mod) {
      header("HTTP/1.1 304 Not Modified");
      exit;
    }
header("Last-Modified: $gmdate_mod");

 header('Expires: ' . gmdate('D, d M Y H:i:s', time() + (60*60*24*45)) . ' GMT');

	header('Access-Control-Allow-Origin: *');  
header('Content-type: application/xml; charset=utf-8');



$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/rss/weekly_rss/124/fi');
echo "$output";
}


?>
