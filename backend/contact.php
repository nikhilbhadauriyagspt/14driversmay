<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "drivervista_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if ($data) {
        $first_name = $conn->real_escape_string($data['first_name']);
        $last_name = $conn->real_escape_string($data['last_name']);
        $email = $conn->real_escape_string($data['email']);
        $category = $conn->real_escape_string($data['category']);
        $message = $conn->real_escape_string($data['message']);
        $site_origin = $conn->real_escape_string($data['site_origin'] ?? 'Unknown');

        $sql = "INSERT INTO contact_submissions (first_name, last_name, email, category, message, site_origin) 
                VALUES ('$first_name', '$last_name', '$email', '$category', '$message', '$site_origin')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["status" => "success", "message" => "Data saved successfully"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No data received"]);
    }
}

$conn->close();
?>
