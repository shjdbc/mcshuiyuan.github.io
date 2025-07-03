<?php
$host = 'localhost';
$dbname = 'user_db';
$username = 'root';
$password = '';

// 创建数据库连接
$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
}