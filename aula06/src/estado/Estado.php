<?php

const NOME_MIN = 2;
const NOME_MAX = 60;
const NOME_MSG = 'O nome deve ter entre ' . NOME_MIN . ' e ' . NOME_MAX . ' caracteres.';

class Estado {

    public function __construct(
        public int $id = 0,
        public string $nome = '',
        public string $uf = '',
        public ?Pais $pais = null
    ) {
    }

    /**
     * Valida
     *
     * @return array< int, string >
     */
    public function validar(): array {
        $problemas = [];

        if ( ! is_numeric( $this->id ) || $this->id < 0 ) {
            $problemas []= 'O id deve ser um número não negativo.';
        }

        $tamanho = mb_strlen( $this->nome );
        if ( $tamanho < NOME_MIN || $tamanho > NOME_MAX ) {
            $problemas []= NOME_MSG;
        }

        return $problemas;
    }
}