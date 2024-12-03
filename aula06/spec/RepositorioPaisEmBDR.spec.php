<?php

describe( 'RepositorioPaisEmBDR', function() {

    $this->pdo = criarPDO();

    beforeAll( function() {
        $this->pdo->exec( file_get_contents( 'db/dados.sql' ) );
    } );

    it( 'deve retornar os países como um array', function() {
        $repo = new RepositorioPaisEmBDR( $this->pdo );
        $resultado = $repo->todos();
        expect( $resultado )->toBeAn( 'array' );
        expect( $resultado )->not->toHaveLength( 0 );
    } );



} );