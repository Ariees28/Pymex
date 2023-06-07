<?php

require_once "../conexion/Conexion.php";

class ModeloNuevoUsuario{

  private $db;

  public function __construct()
  {
    $this->db = Conexion::conectar();
  }

  public function usuarios(){
    $sql = $this->db->query("SELECT * FROM usuario;");

    return $sql;
  }

  public function revisarUs($login){
    $sql = $this->db->query("SELECT Login FROM usuario WHERE Login = '$login';");
    return $sql;
  }

  public function nuevo($login, $clave, $nombre, $correo, $privilegio, $token){
    $sql = $this->db->prepare("INSERT INTO usuario (Login, clave, nombre, Correo, Privilegio, TokenUsuario) VALUES (?,?,?,?,?,?);");

    try {
      $sql->execute([$login, $clave, $nombre, $correo, $privilegio, $token]);
      return true;
    } catch (Exception $e) {
      return $e;
    }
  }

}