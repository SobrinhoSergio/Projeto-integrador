<?php

const PAIS_NOME_MIN = 2;
const PAIS_NOME_MAX = 60;
const PAIS_NOME_INCORRETO = 'O nome deve ter entre ' . PAIS_NOME_MIN .
    ' e ' . PAIS_NOME_MAX + '.';


class Pais {

    public function __construct(
        public int $id = 0,
        public string $nome = ''
    ) {
    }

    public function validar() {
        $problemas = [];

        $tamNome = mb_strlen( $this->nome );
        if ( $tamNome < PAIS_NOME_MIN || $tamNome > PAIS_NOME_MAX ) {
            $problemas []= PAIS_NOME_INCORRETO;
        }

        return $problemas;
    }
}

?>