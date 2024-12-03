<?php

function criarPDO(): PDO {
    return new PDO( 'mysql:dbname=pis2;host=localhost;charset=utf8', 'root', '',
 [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ] );

}