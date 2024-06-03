SkyRadar

Este projeto se baseia em um desafio que vi no repositório: [Front-End Challenges by Felipe Fialho](https://github.com/felipefialho/frontend-challenges), desafio disponibilizado pela `1STi`, que consiste em integrar uma API para buscar informações do clima em tempo real.

## Pré-requesitos

Certifique-se de ter os seguintes softwares instalados em sua máquina:

-   [Node.js](https://nodejs.org/)

-   [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

&nbsp;1. Clone este repositório para a sua máquina local usando:

    git clone https://github.com/BetaaX/SkyRadar

&nbsp;2. Navegue até o diretório do projeto:

    cd SkyRadar

&nbsp;3. Instale as dependências do projeto com o `npm` ou `yarn`:

    npm i

ou

    yarn

### Variáveis de Ambiente

Este projeto requer uma API Key do OpenWeatherMap para funcionar corretamente. Siga os passos abaixo para configurar o seu ambiente:

&nbsp;1. Crie uma conta no [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) e obtenha uma API Key.

&nbsp;2. Na raiz do projeto, crie um arquivo chamado `.env`.

&nbsp;3. No arquivo `.env`, adicione a seguinte linha, substituindo `sua_api_key` pela API Key que você obteve do OpenWeatherMap:

    VITE_API_KEY=sua_api_key

&nbsp;4. Salve e feche o arquivo `.env`. Agora o projeto deve funcionar corretamente com a sua API Key.

### Rodar o Projeto

Para visualizar o projeto, rode o seguinte comando:

    npm run dev

ou se estiver usando Yarn:

    yarn dev

# Stack utilizada

**Front-end:** `React`, `TypeScript`, `TailwindCSS`

# Aprendizados

Inicialmente havia 0 conhecimentos sobre integração de API, ou até como adquirir uma API Key para consumo. No entanto, ao decorrer do des. do projeto pude ver que integração de API não é um bicho de 7 cabeças, na verdade é algo bem simples e coeso de se fazer.

Eu levei cerca de 4 dias para desenvolver por completo o projeto, e pude aprender o básico de integrações de APIs tanto como práticas de segurança relacionadas a API Key com o [DotEnv](https://www.dotenv.org/docs/) e variáveis de ambiente.
