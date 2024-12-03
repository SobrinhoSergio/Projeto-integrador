<?php

interface RepositorioEstado {

    public function adicionar( Estado $e );

    public function existeComNomeOuUF( Estado $e ): bool;
}