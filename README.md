# 🔧 Documentação da API de Conversões

Uma API de conversões feita com **NestJS** pra resolver aquele clássico problema:  
*"quanto dá isso em outra unidade?"* 🤔

Simples, direta e útil — do jeitinho que a gente gosta.

---

## 📡 Endpoints disponíveis

### 📏 Comprimento
| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/comprimento/metros-para-km/:valor` | Converte metros para quilômetros | `/comprimento/metros-para-km/1000` |

---

### 📐 Área
| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/area/m2-para-km2/:valor` | m² → km² | `/area/m2-para-km2/1000000` |
| GET | `/area/m2-para-acres/:valor` | m² → acres | `/area/m2-para-acres/4046.86` |
| GET | `/area/m2-para-ft2/:valor` | m² → pés² | `/area/m2-para-ft2/100` |

---

### ⚖️ Massa
| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/massa/kg-para-g/:valor` | kg → gramas | `/massa/kg-para-g/1` |
| GET | `/massa/kg-para-lb/:valor` | kg → libras | `/massa/kg-para-lb/1` |
| GET | `/massa/kg-para-oz/:valor` | kg → onças | `/massa/kg-para-oz/1` |

---

### 🌡️ Temperatura
| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/temperatura/c-para-f/:valor` | Celsius → Fahrenheit | `/temperatura/c-para-f/25` |
| GET | `/temperatura/c-para-k/:valor` | Celsius → Kelvin | `/temperatura/c-para-k/25` |
| GET | `/temperatura/f-para-c/:valor` | Fahrenheit → Celsius | `/temperatura/f-para-c/77` |

---

### 🚗 Velocidade
| Método | Rota | Descrição | Exemplo |
|--------|------|----------|---------|
| GET | `/velocidade/kmh-para-ms/:valor` | km/h → m/s | `/velocidade/kmh-para-ms/36` |
| GET | `/velocidade/kmh-para-mph/:valor` | km/h → mph | `/velocidade/kmh-para-mph/100` |
| GET | `/velocidade/nos-para-kmh/:valor` | nós → km/h | `/velocidade/nos-para-kmh/10` |

---

## 🧠 Como funciona?

Por trás dos panos, tudo passa pelo **`ConversorService`**, que centraliza as fórmulas de conversão.  
Os controllers só recebem a requisição e devolvem o resultado — clean e organizado ✨

---

## 🛠️ Observações

- API rodando no backend do projeto
- Estrutura feita em NestJS (modular e escalável)
- Ideal pra estudos, testes ou integrar em outros projetos

---

## 💡 Dica

Você pode testar direto no navegador ou usar ferramentas como:
- Postman
- Insomnia
- Thunder Client (VS Code)

---

Se quiser evoluir essa API:
- adicionar novas unidades 🔥
- criar interface frontend 🎨
- ou até autenticação 🔐

já vira um projetão 👀