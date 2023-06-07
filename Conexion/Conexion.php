<?php

class Conexion
{

    public static function conectar()
    {

        $usuario = "root";
        $contra = "root";


        $conn = new PDO("mysql:host=localhost;dbname=pymex", $usuario, $contra);
            //PHP DATA OBJECT
        return $conn;
    }
}