# NestJs training

## Introdução

Este é um repositório exclusivo para estudar o NestJS, um framework que nos permitem criar aplicações server-side com alta escabilidade e desempenho. Estou praticando através de um curso da Udemy. Abaixo haverá algumas anotações que acho relevante e que são novidades para mim. Para ser mais prático, farei algumas anotações no código.

## Execução

```jsx
pnpm run start:dev
```

## Anotações

Arquivos “.services” englobam as regras de negócios, funções que serão executadas ao serem chamadas pelo controller. 

Os arquivos “controller” apresentam todas as rotas com seus respectivos métodos http. Para cada rota, está associada uma função (geralmente vinda do service), que retorna uma resposta ao requisitante.

CLI do nest permite gerar arquivos automaticamente, como por exemplo os controllers, basta informar um nome que tudo tudo é criado automaticamente.

Cada classe de controller corresponde a uma nova rota, que podemos criar outras rotas por cima dela com diferentes métodos http.

Para atualizar, por convenção, utilizamos PATCH para atualizar um recurso especifico e PUT pra atualizar todo o recurso.

Service é uma classe. @injectable é um decorator que instancia um objeto automaticamente, isso é controlado pelo Nest. Para usar as funções do service no controller, basta usar um construtor.

Arquivos module servem para englobar todos os controllers, services, quais recursos são acessiveis para outros modulos, quais recursos importar de outros modulos, entre outros. Tudo é declarado no Module, este devendo ser importado no app.module para que a aplicação “enxergue” o modulo e todos os seus fragmentos

Os DTOs encapsulam todas as interfaces da aplicação. São responsáveis por adicionar tipagem aos objetos que entram e saem da aplicação (back↔front) 

O nestJs fornece o “Validation pipe”, uma ferramenta para aplicação de regras de validação dos dados enviados pelo cliente. Essas validações podem ser aplicadas nos DTOs, então qualquer requisição diferente daquilo será recusado pelo Nest. Para ignorar quaisquer campos inesperados que vierem na requisição, basta atribuir o campo “whitelist” no useGlobalPipes, qualquer campo extra que vier na requisição, será ignorada. Se preferir, podemos disparar um erro, informando quais campos informados não são permitidos, então basta adicionar o campo “forbidNonWhitelisted” junto com “whitelist”. O campo “transform” transforma o input para não ocorrer problemas de tipagem, como por exemplo string↔number

Se quisermos definir um DTO baseado em outro DTO mas com todos os campos opcionais, podemos utilizar um pacote chamado “mapped-types” do nestjs, que permite puxar todos os componentes de um DTO existente (usando extends, pois é uma classe) porém todos os campos são opcionais.

### TypeORM

Um ORM permite relacionar registros do banco com instâncias de classes. Na prática, permite-nos manipular um banco de dados (neste caso um relacional) de forma simples, direto no código, não precisando o desenvolvedor gastar tempo montando queries.

Entidade (Entity) é a representação dos dados em forma de classe. Para isso, usa-se o decorator @entity()