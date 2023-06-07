<?php

session_start();
require_once "../modelos/Modelo_Cuenta.php";

$modelo = new ModeloCuenta();

switch ($_GET["op"]) {
  case "verificarEmail":

    $email = $_POST["correo"];
    $datos = $modelo->verificarEmail($email);
    $id = "";

    while($res = $datos->fetchObject()){
      $id = $res->id;
    }
    if($id != ""){
      echo "error";
    }else{
      echo "true";
    }

    break;
  
  default:
    # code...
    break;
}