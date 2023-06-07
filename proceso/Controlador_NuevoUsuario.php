<?php

require_once "../modelos/Modelo_NuevoUsuario.php";

$modelo = new ModeloNuevoUsuario();

switch ($_GET["op"]) {
  case 'NuevoUsuario':
    $login = $_POST["user"];
    $clave = $_POST["contra"];
    $nombre = $_POST["nombre"];
    $correo = $_POST["email"];
    $privilegio = "2";
    $usCheck = "";

    $r = $modelo->revisarUs($login);
    while($reg = $r->fetchObject()){
      $usCheck = $reg->Login;
    }

    if($usCheck == ""){
      $clave = encriptar($clave);
      $token = generarToken();
      $res = $modelo->nuevo($login, $clave, $nombre, $correo, $privilegio, $token);

      if($res == true){
        echo "exito";
      }else{
        echo $e;
      }
    }else{
      echo "0";
    }
    
  break;
  default:
    # code...
    break;
}

function encriptar($clave)
{
    $options = ['memory_cost' => 2048, 'time_cost' => 4, 'threads' => 3];
    $X = password_hash($clave, PASSWORD_ARGON2I, $options);
    return $X;
}
function generarToken(){
  $gen = md5(uniqid(mt_rand(), false));
  return $gen;
}