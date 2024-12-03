DELETE FROM estado;
DELETE FROM pais;

INSERT INTO pais ( id, nome ) VALUES ( 1, 'Brasil' );

INSERT INTO estado ( nome, uf, pais ) VALUES ( 'São Paulo', 'SP', 1 );