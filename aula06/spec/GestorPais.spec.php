<?php

use \Kahlan\Plugin\Double;

describe( 'GestorPais', function() {

    $this->pdo = criarPDO();
    $this->repo = null;

    beforeAll( function() {
        $this->pdo->exec( file_get_contents( 'db/dados.sql' ) );
        $this->repo = new RepositorioPaisEmBDR( $this->pdo );
    } );

    it( 'lança exceção ao tentar cadastrar um país com nome vazio', function() {
        expect( function() {
            $gestor = new GestorPais( $this->repo );
            $gestor->adicionar( [ 'nome' => '' ] );
        } )->toThrow();
    } );

    it( 'lança exceção ao tentar cadastrar um país com nome acima do limite máximo', function() {
        expect( function() {
            $gestor = new GestorPais( $this->repo );
            $gestor->adicionar( [ 'nome' => str_repeat( 'A', 61 ) ] );
        } )->toThrow();
    } );

    it( 'permite cadastrar um país com nome dentro dos limites', function() {
        expect( function() {
            $gestor = new GestorPais( $this->repo );
            $gestor->adicionar( [ 'nome' => str_repeat( 'A', 60 ) ] );
        } )->not->toThrow();
    } );


    // it( 'não captura exceção lançada pelo repositório', function() {

    //     $repo = Double::instance( [
    //         'implements' => 'RepositorioPais',
    //         'methods' => [
    //             'adicionar' => function() {
    //                 throw new RepositorioException( 'Ops' );
    //             }
    //         ]
    //     ]);

    //     expect( function() use ( $repo ) {
    //         $gestor = new GestorPais( $repo );
    //         $gestor->adicionar( [ 'nome' => str_repeat( 'A', 60 ) ] );
    //     } )->toThrow( 'Ops' );
    // } );

} );