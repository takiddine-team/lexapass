<?php
function getCountryCodeFromIP($ip) {
  $url = "http://ip-api.com/json/{$ip}";
  $response = file_get_contents($url);
  $data = json_decode($response, true);


  if ($data && $data['status'] === 'success') {
    return $data['countryCode'];
  }else{
    return "ae";
  }

  return null;
}

$userIP = $_SERVER['REMOTE_ADDR'];
$countryCode = getCountryCodeFromIP($userIP);

header('Content-Type: application/json');
echo json_encode(['countryCode' => $countryCode]);
?>
