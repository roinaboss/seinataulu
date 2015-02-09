<?php  
header('Content-type: application/json');
?>
<?php
$date = $_GET['date'];
$month = $_GET['month'];

$output = shell_exec('curl  http://www.sodexo.fi/ruokalistat/output/daily_json/124/' . date('Y')  . '/' .  $month . '/' . $date . '/fi');
echo "$output";
