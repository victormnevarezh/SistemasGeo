<?php
    $usuario = "sistemasgeo5452_vnevarezadm";
    $contrasena = "d$,Xy-FTZ)RGC{AUb-";

    try{
        $conn = new PDO('mysql:host=sistemasgeo.com;dbname=sistemasgeo5452_vnevarez', $usuario, $contrasena);
        $conn->settAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo "ERROR: " . $e->getMessage();
    }
?>