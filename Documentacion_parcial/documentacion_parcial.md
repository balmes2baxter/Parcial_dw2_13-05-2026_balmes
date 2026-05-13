# Parcial Desarrollo Web 2

Este proyecto consiste en construir un backend con soporte para `PostgreSQL` y `MySQL` usando Docker.

La arquitectura del backend se desarrollara con `NestJS`.

Se trabajara con dos tablas:

- `cars`: `id`, `marca`, `clase`, `modelo`, `cilindraje`, `capacidad`
- `tuitions`: `id`, `date_matricula`, `ciudad`, `pago`, `car_id`

La relacion es `1 a N`: un carro puede tener muchas matriculas y cada matricula pertenece a un solo carro.

El proyecto incluira:

- modelos con validacion
- controladores y rutas
- creacion fisica de tablas
- 20 registros por tabla con Faker
- pruebas HTTP para el CRUD
- verificacion en DBeaver
