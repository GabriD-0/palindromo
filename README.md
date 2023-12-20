# Palindrome Date API

O objetivo deste projeto é criar uma API Serverless que retorna a próxima data considerada palíndromo.

# Descrição:
A Palíndromo API é um serviço serverless construído com o framework Serverless Framework, utilizando Node.js 18.x e a biblioteca Luxon para manipulação de datas.
O objetivo principal é fornecer a próxima data em que a representação "ddMMyyyy" seja um palíndromo, a partir de uma data de início especificada ou usando uma data padrão.

# Tecnologias
Para a criação dessa API, foram utilizadas as seguintes tecnologias:

Node.js,

Framework Serverless,

AWS com os serviços de Lambda.

# Endpoint:
A API expõe um endpoint HTTP para obter a próxima data palindrômica.

# Parâmetros:
start_date (opcional): Especifica a data de início no formato "ddMMyyyy". Se não fornecido, será usado o valor padrão '12022021'.

