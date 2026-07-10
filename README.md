# Carrefour Mobile Tests - Desafio de Automação

Suíte de testes automatizados para o app `native-demo-app` do WebdriverIO, desenvolvida como parte do desafio de automação de testes mobile do Banco Carrefour.

## Tecnologias utilizadas

- **Linguagem:** JavaScript
- **Framework de testes:** WebdriverIO + Mocha
- **Automação mobile:** Appium (UiAutomator2)
- **Nuvem de dispositivos:** BrowserStack (App Automate)
- **Relatórios:** Allure Report
- **Padrão de organização:** Page Object Model

## Por que BrowserStack (e não emulador local)?

O desenvolvimento foi realizado em uma máquina com recursos limitados (4GB RAM), insuficiente para rodar o Android Studio e um emulador local de forma estável. Como solução técnica, optou-se por usar o BrowserStack App Automate, que permite executar os testes em dispositivos Android reais na nuvem, sem necessidade de emulação local — uma alternativa prevista no próprio desafio.

## Estrutura do projeto


```
carrefour-mobile-tests/
├── apps/                        # APK do native-demo-app
├── test/
│   ├── pageobjects/
│   │   └── login.page.js        # Page Object da tela de Login
│   └── specs/
│       ├── login.spec.js        # Testes da tela de Login
│       ├── navigation.spec.js   # Testes de navegação entre telas
│       └── forms.spec.js        # Testes da tela de Forms
├── wdio.conf.js                 # Configuração do WebdriverIO + BrowserStack
├── .env                         # Credenciais do BrowserStack (não versionado)
└── README.md
```


## Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado
- Conta no BrowserStack (App Automate) com usuário e chave de acesso

### Passos

1. Clone o repositório e instale as dependências:
npm install

2. Crie um arquivo `.env` na raiz do projeto com suas credenciais do BrowserStack:

BROWSERSTACK_USERNAME=seu_usuario
BROWSERSTACK_ACCESS_KEY=sua_chave

3. Rode os testes:
npm run wdio

## Cenários de teste (10 no total)

### Login (4 cenários)
- Deve exibir os campos de email, senha e o botão de login
- Deve permitir digitar no campo de email
- Deve permitir digitar no campo de senha (validando que o conteúdo é mascarado por segurança)
- Deve realizar login preenchendo email e senha

### Navegação entre telas (3 cenários)
- Deve navegar para a tela de Forms
- Deve navegar para a tela de Swipe
- Deve navegar de volta para a tela Home

### Forms (3 cenários)
- Deve navegar até a tela de Forms
- Deve exibir elementos de formulário na tela
- Deve permitir voltar para a tela Home após visitar Forms

## Descoberta de seletores

Os seletores dos elementos foram descobertos utilizando o Appium Inspector, conectado diretamente a uma sessão do BrowserStack, permitindo inspecionar a árvore de elementos reais do app e identificar os `accessibility id` e `xpath` corretos para cada componente.