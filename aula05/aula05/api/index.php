<?php
require_once 'vendor/autoload.php';

use \phputil\router\Router;

$app = new Router();

$pdo = new PDO( 'mysql:dbname=pis2;host=localhost;charset=utf8', 'root', '',
 [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ] );

function criarGestorEstado( PDO $pdo ) {
    return new GestorEstado(
        new RepositorioPaisEmBDR( $pdo ),
        new RepositorioEstadoEmBDR( $pdo )
    );
}


$app->get( '/', function( $req, $res ) use ( $pdo ){
    $res->send( 'Hello World!' );
} );

$app->get( '/estados', function( $req, $res )  use ( $pdo ) {
    $res->json(
        [
            new Estado( 1, 'Rio de Janeiro', null ),
            new Estado( 2, 'São Paulo', null ),
        ]
        );
} );

$app->post( '/estados', function( $req, $res ) use ( $pdo ) {
    $dados = (array) $req->body();
    try {
        $gestor = criarGestorEstado( $pdo );
        $gestor->cadastrar( $dados );
    } catch ( DominioException $e ) {

        $dados = empty( $e->getMessage() ) ? $e->getProblemas() :
            [ $e->getMessage() ];

        $res->status( 400 )->json( $dados );
    } catch ( Exception $e ) {
        $res->status( 500 )->json( [ $e->getMessage() ] );
    }
} );

$app->listen();

?>