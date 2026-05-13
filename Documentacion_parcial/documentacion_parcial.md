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

Las imagenes de evidencias se guardaran en `Documentacion_parcial/imagenes`, separadas por subcarpetas segun el tema documentado, por ejemplo `docker`, `dbeaver` o `http`.



1: Para empezar vamos a crear un archivo docker que creara los moteres de las bases de datos que yo elegi en este caso `PostgreSQL` y `MySQL` 

Evidencia inicial de Docker:
![Docker Compose](./imagenes/docker/docker-compose.png)

Con este promt empece la creacion del archi docker:
![Resumen Docker](./imagenes/docker/docker-setup-resumen.png)


2: Una vez ya tengo el archivo docker comenzare a contruir el Backend con la estructura inicial. voy a hacer el Backend es este caso con `NestJS`.

Asi inicio el backend depues de la intlacion:
![Estructura inicial NestJS](./imagenes/nest/nest-backend-estructura.png)

El promt que ultilice para centar las bases de nest:
![Creacion base NestJS](./imagenes/nest/nest-backend-creacion.png)
