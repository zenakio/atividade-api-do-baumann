# API de Conversão

Este repositório contém uma API de conversão desenvolvida em NestJS.

## Endpoints disponíveis

| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/` | Raiz da API | `/` |
| GET | `/comprimento/metros-para-km/:valor` | Converte metros para quilômetros | `/comprimento/metros-para-km/1000` |
| GET | `/area/m2-para-km2/:valor` | Converte metros quadrados para quilômetros quadrados | `/area/m2-para-km2/1000000` |
| GET | `/area/m2-para-acres/:valor` | Converte metros quadrados para acres | `/area/m2-para-acres/4046.86` |
| GET | `/area/m2-para-ft2/:valor` | Converte metros quadrados para pés quadrados | `/area/m2-para-ft2/100` |
| GET | `/massa/kg-para-g/:valor` | Converte quilogramas para gramas | `/massa/kg-para-g/1` |
| GET | `/massa/kg-para-lb/:valor` | Converte quilogramas para libras | `/massa/kg-para-lb/1` |
| GET | `/massa/kg-para-oz/:valor` | Converte quilogramas para onças | `/massa/kg-para-oz/1` |
| GET | `/temperatura/c-para-f/:valor` | Converte Celsius para Fahrenheit | `/temperatura/c-para-f/25` |
| GET | `/temperatura/c-para-k/:valor` | Converte Celsius para Kelvin | `/temperatura/c-para-k/25` |
| GET | `/temperatura/f-para-c/:valor` | Converte Fahrenheit para Celsius | `/temperatura/f-para-c/77` |
| GET | `/velocidade/kmh-para-ms/:valor` | Converte km/h para m/s | `/velocidade/kmh-para-ms/36` |
| GET | `/velocidade/kmh-para-mph/:valor` | Converte km/h para mph | `/velocidade/kmh-para-mph/100` |
| GET | `/velocidade/nos-para-kmh/:valor` | Converte nós para km/h | `/velocidade/nos-para-kmh/10` |

## Observações

- O servidor está configurado no backend do projeto.
- Os controllers utilizam o serviço `ConversorService` para realizar as conversões.