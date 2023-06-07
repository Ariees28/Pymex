<?php

require_once "../conexion/Conexion.php";

class ModeloCuenta {

  private $db;

  public function __construct()
  {
    $this->db = Conexion::conectar();
  }

  public function verificarEmail($correo){
    $sql = $this->db->query("SELECT id FROM usuario WHERE Correo = '$correo' LIMIT 1;");

    return $sql;
  }

}
