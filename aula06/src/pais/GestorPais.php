<?php

class GestorPais {

    public function __construct(
        private RepositorioPais $repositorioPais
    ) {
    }

    public function adicionar( array $dados ) {

        $p = new Pais( 0, $dados[ 'nome' ] ?? '' );
        $problemas = $p->validar();
        if ( count( $problemas ) > 0 ) {
            throw ( new DominioException() )->setProblemas( $problemas );
        }

        $this->repositorioPais->adicionar( $p );
    }
}
?>