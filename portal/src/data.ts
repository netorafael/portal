/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail } from "./types";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "emitir-certidao-andamento",
    name: "Emitir Certidão de Histórico do Andamento Processual",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Emissão",
    knownAs: "comprovação de situação processual; situação de processo trabalhista; certidão eletrônica de andamento de processo",
    descriptionSnippet: "Use este serviço para gerar uma certidão que detalha a situação de um processo específico no Tribunal Superior do Trabalho (TST).",
    iconName: "FileText",
    whatIs: "Use este serviço para gerar uma certidão que detalha a situação de um processo específico no Tribunal Superior do Trabalho (TST).\n\nA certidão informa se o processo:\nestá em andamento no TST,\nfoi arquivado ou\nvoltou ao Tribunal Regional do Trabalho (TRT) de origem.\n\nPara emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico *Outras Informações*.\n\n💲 Custo: gratuito\n🕔 Prazo: imediato\n📄 Informação necessária: número do processo",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Emitir Certidão",
        description: "Escolha o canal de atendimento abaixo e informe o número do processo que deseja consultar.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["Número do processo"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Possuir o número do processo.",
        monitoring: "A certidão será emitida com um código de autenticidade."
      }
    ],
    otherInfo: "### Esta certidão não mostra\n* Processo em segredo de justiça\n* Processo em andamento nos Tribunais Regionais do Trabalho (TRTs)\n\n### Deseja consultar todos os processos de uma empresa?\nPara certidão com todos os processos de uma empresa no TST, acesse o serviço Emitir Certidão de Processos em Tramitação no TST.\n\n### Como saber se uma certidão é verdadeira?\nAcesse o serviço Validar Certidão de Histórico do Andamento Processual para confirmar a autenticidade da certidão.\n\n### Certidão Personalizada ou Processo em Segredo de Justiça\nUse essa opção se precisar de certidão com informações específicas.\n1. Preencha o formulário de solicitação de certidão específica (manual)\n2. Aguarde resposta\n3. Receba a certidão por e-mail\n\n💲 Custo: **Pode haver cobrança. Se precisar pagar, emita a guia de pagamento GRU. Consulte as regras em *Outras Informações*.**\n🕔 Prazo: até 15 dias úteis",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "validar-certidao-andamento",
    name: "Validar Certidão de Histórico do Andamento Processual",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Validação",
    knownAs: "conferir validade da certidão; código de autenticidade; autenticar a certidão.",
    descriptionSnippet: "Use este serviço para saber se uma Certidão de Histórico do Andamento Processual foi emitida pelo Tribunal Superior do Trabalho (TST).",
    iconName: "CheckCircle",
    whatIs: "Use este serviço para saber se uma Certidão de Histórico do Andamento Processual foi emitida pelo Tribunal Superior do Trabalho (TST).\n\n**Custo:** Gratuito\n**Prazo:** Imediato\n**Informação Necessária:** Código de autenticidade localizado no início da certidão que deseja validar",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Validar certidão",
        description: "Acesse o canal abaixo e informe o código de autenticidade que aparece na certidão.",
        channel: "Portal Web (Internet)",
        documents: ["Código de autenticidade da certidão"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Código impresso no documento a ser validado.",
        monitoring: "Verificação instantânea na tela."
      }
    ],
    otherInfo: "### Como emitir uma nova certidão?\nAcesse o serviço **Emitir Certidão de Histórico do Andamento Processual**.\n\n### Informações de Autenticidade\nSe o código for válido, o sistema abrirá a certidão original. Se o código não for válido, confira se o código foi digitado corretamente e tente novamente.",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "emitir-certidao-arquivados",
    name: "Emitir Certidão de Processos em Tramitação no TST",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Emissão",
    knownAs: "certidão eletrônica; processos em andamento no TST; feitos trabalhistas",
    descriptionSnippet: "Use este serviço para gerar uma certidão que lista os processos de uma empresa ou entidade que estão no Tribunal Superior do Trabalho (TST).",
    iconName: "FileCheck2",
    whatIs: "Use este serviço para gerar uma certidão que lista os processos de uma empresa ou entidade que estão no Tribunal Superior do Trabalho (TST).\n\nPara emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico *Outras Informações*.\n\n💲 Custo: Gratuito\n🕔 Prazo: Imediato\n📄 Informação Necessária: CNPJ",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Emitir certidão",
        description: "Escolha o canal de atendimento abaixo.\nInforme o CNPJ que deseja consultar.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["CNPJ"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "CNPJ da empresa ou entidade a ser consultada.",
        monitoring: "A certidão será emitida com código de autenticidade."
      }
    ],
    otherInfo: "### Esta certidão não mostra\n* Pesquisa por CPF\n* Processo em segredo de justiça\n* Processo em andamento nos Tribunais Regionais do Trabalho (TRTs)\n* Processo arquivado ou devolvido para o TRT.\n\n### Como saber se uma certidão é verdadeira?\nAcesse o serviço Validar certidão de processos em tramitação no TST para confirmar a autenticidade da certidão.\n\n### Certidão Personalizada ou Segredo de Justiça\nUse esta opção se precisar de certidão com informações específicas\n1. Preencha o formulário de solicitação de certidão específica (manual)\n2. Aguarde resposta\n3. Receba a certidão por e-mail\n\n💲 Custo: **Pode haver cobrança. Se precisar pagar, emita a guia de pagamento GRU. Consulte as regras em *Outras Informações*.**\n🕔 Prazo: até 15 dias úteis",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "validar-certidao-arquivados",
    name: "Validar Certidão de Processos em Tramitação no TST",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Validação",
    knownAs: "conferir validade da certidão; código de autenticidade; autenticar certidão",
    descriptionSnippet: "Use este serviço para saber se uma Certidão de Processos em Tramitação no TST foi emitida pelo Tribunal Superior do Trabalho (TST).",
    iconName: "Shield",
    whatIs: "Use este serviço para saber se uma Certidão de Processos em Tramitação no TST foi emitida pelo Tribunal Superior do Trabalho (TST).\n\n**Custo:** gratuito\n**Prazo:** imediato\n**Informação Necessária:** código de autenticidade localizado no início da certidão que deseja validar",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Validar certidão",
        description: "Acesse o canal abaixo e informe o código de autenticidade que aparece na certidão.",
        channel: "Portal Web (Internet)",
        documents: ["Código de autenticidade da certidão"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Código de autenticidade do documento impresso em mãos.",
        monitoring: "Verificação instantânea com retorno do documento original se válido."
      }
    ],
    otherInfo: "### Como emitir uma nova certidão?\nAcesse o serviço **Emitir Certidão de Processos em Tramitação no TST**.\n\n### Importante:\nSe o código for válido, o sistema abrirá a certidão original. Se o código não for válido, confira se o código foi digitado corretamente e tente novamente.",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "emitir-exercicio-advocacia",
    name: "Emitir Certidão de Exercício da Advocacia",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Emissão",
    knownAs: "certidão de atuação advocatícia no TST; comprovação de militância; atividade jurídica no TST",
    descriptionSnippet: "Use este serviço para gerar uma certidão com os processos em que um profissional da advocacia atuou no Tribunal Superior do Trabalho (TST).",
    iconName: "FileCheck2",
    whatIs: "Use este serviço para gerar uma certidão com os processos em que um profissional da advocacia atuou no Tribunal Superior do Trabalho (TST).\n\nMostra os processos em que o advogado ou a advogada está cadastrado(a), com CPF, como representante de uma das partes.\n\nA certidão lista os processos:\nem andamento no TST,\narquivados no TST,\nenviados aos Tribunais Regionais do Trabalho (TRTs),\nenviados ao Superior Tribunal de Justiça (STJ) ou\nenviados ao Supremo Tribunal Federal (STF)\n\nA certidão pode ser utilizada para comprovar experiência profissional ou prática jurídica para concursos públicos.\n\nPara emitir certidão personalizada ou sobre processo em segredo de justiça, consulte o tópico *Outras Informações*.\n\n💲 Custo: gratuito\n🕔 Prazo: imediato\n📄 Informação necessária: CPF",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Emitir Certidão",
        description: "Escolha o canal de atendimento abaixo.\nInforme o CPF que deseja consultar.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["CPF"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Possuir CPF.",
        monitoring: "A certidão será emitida com um código de autenticidade."
      }
    ],
    otherInfo: "### Esta certidão não mostra\n* Processo em segredo de justiça\n\n### Certidão Personalizada ou Processo em Segredo de Justiça\nUse esta opção se precisar de certidão com informações específicas.\n1. Preencha o formulário de solicitação de certidão específica (manual)\n2. Aguarde resposta\n3. Receba a certidão por e-mail.\n\n💲 Custo: **Pode haver cobrança. Se precisar pagar, emita a guia de pagamento GRU. Consulte as regras em *Outras Informações*.**\n🕔 Prazo: até 15 dias úteis\n\n### Como saber se uma certidão é verdadeira?\nAcesse o serviço Validar Certidão de Exercício da Advocacia para confirmar a autenticidade da certidão.",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "validar-exercicio-advocacia",
    name: "Validar Certidão de Exercício da Advocacia",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Validação",
    knownAs: "conferir validade da certidão; código de autenticidade; autenticar certidão",
    descriptionSnippet: "Use este serviço para saber se uma Certidão de Exercício da Advocacia foi emitida pelo Tribunal Superior do Trabalho (TST).",
    iconName: "Shield",
    whatIs: "Use este serviço para saber se uma Certidão de Exercício da Advocacia foi emitida pelo Tribunal Superior do Trabalho (TST).\n\n**Custo:** Gratuito\n**Prazo:** Imediato\n**Informação Necessária:** Código de autenticidade localizado no início da certidão que deseja validar",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Conferir código de autenticidade",
        description: "Acesse este validador e informe o código de autenticidade disponível no rodapé da certidão original.",
        channel: "Portal Web (Internet)",
        documents: ["Código de autenticidade localizado no início da certidão que deseja validar"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Código impresso no documento a ser conferido.",
        monitoring: "Verificação instantânea contra o banco de dados oficial do TST."
      }
    ],
    otherInfo: "### Como emitir uma nova certidão?\nAcesse o serviço **Emitir Certidão de Exercício da Advocacia**.",
    lastUpdated: "22/07/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 18h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "pedir-certidao-objeto-pe",
    name: "Pedir Certidão de Objeto e Pé",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Solicitação",
    knownAs: "Certidão de Objeto e Andamento; Certidão Narrativa; Certidão de Inteiro Teor",
    descriptionSnippet: "Use este serviço para pedir uma certidão que informa o assunto (objeto) e o andamento de um processo no Tribunal Superior do Trabalho (TST).",
    iconName: "FileCheck2",
    whatIs: "Use este serviço para pedir uma certidão que informa o assunto (objeto) e o andamento de um processo no Tribunal Superior do Trabalho (TST).\n\nImportante: o pedido deve ser enviado dentro do próprio processo judicial.\n\n💲 Custo: pode haver cobrança. Consulte as regras em *Outras Informações*.\nEm caso de cobrança, aguarde a área responsável enviar a guia de pagamento GRU.\n🕔 Prazo: até 15 dias úteis\n📄 Informação necessária: número do processo e petição adicionada no processo judicial",
    whoCanUse: "Pessoas habilitadas a peticionar no processo no TST.",
    steps: [
      {
        name: "Identifique onde o processo tramita",
        description: "● Verifique se o processo está no Processo Judicial Eletrônico (PJe) ou no e-SIJ.\n● Se não souber, consulte pelo número do processo na Consulta Processual do TST.",
        channel: "Portal Web (Internet)",
        documents: ["Número do processo"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Número do processo a ser consultado.",
        monitoring: "Consulta pública instantânea."
      },
      {
        name: "Envie o pedido da certidão",
        description: "Escolha o canal de atendimento:\n\n**Internet (Portal de Serviços)**:\n1. Clique no botão Iniciar e escolha a opção de acordo com o sistema em que o processo tramita:\n● Processos no PJe: Acesse o sistema PJe e use a ferramenta de peticionamento para enviar o seu pedido de certidão.\n● Processos no e-SIJ: Acesse o sistema e-Doc e use a ferramenta de peticionamento para enviar o seu pedido de certidão.\n\n**Presencial (Edifício Sede do TST)**:\n1. Compareça ao Núcleo de Cadastramento Processual (NCP):\n● Endereço: Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF\n● Balcão do Protocolo: Bloco A, Térreo, sala AT-110\n● Atendimento: das 9h às 19h - segunda a sexta-feira\n2. A certidão será emitida sem um código de autenticidade.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["Petição adicionada no processo judicial", "Número do processo"],
        duration: "Até 15 dias úteis",
        costs: "Pode haver cobrança. Em caso de cobrança, aguarde a área responsável enviar a guia de pagamento GRU.",
        requirementsBefore: "Estar habilitado(a) a peticionar no respectivo processo judicial.",
        monitoring: "Acompanhamento pelo sistema PJe ou e-Doc."
      }
    ],
    otherInfo: "### Antes de começar\nAntes de começar, confira se alguma das certidões automáticas do TST atende sua necessidade. Elas estão disponíveis no Portal de Serviços do TST.\n\n### Esta certidão não mostra\n* Processo em andamento nos Tribunais Regionais do Trabalho (TRTs)\n* Se o processo tiver sido devolvido ao tribunal de origem (baixado), faça o pedido diretamente ao Tribunal Regional do Trabalho (TRT).\n\n### Quando há cobrança e qual é o preço?\n* **A certidão será gratuita quando:**\n  * quem fez o pedido é a mesma pessoa que constará na certidão;\n  * a certidão servir para defender direitos;\n* **A certidão será paga nos demais casos:**\n  * O custo é de R$ 5,53 por folha. O valor total será informado pela área responsável antes de emitir a certidão.\n  * O pagamento deve ser feito com guia de recolhimento da União - GRU.\n\n### Legislação\n* **Instrução Normativa nº 20/2002** - Define casos em que a certidão será cobrada\n* **Ato Conjunto TST.CSJT.GP.SG nº 21/2010** - Define que o pagamento de taxas será por meio de Guia de Recolhimento da União (GRU)",
    lastUpdated: "02/09/2026",
    helpContact: {
      unit: "Secretaria Geral Judiciária (SEJUD)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-3201, das 9h às 18h",
      email: "segjud@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "pedir-certidao-personalizada",
    name: "Pedir Certidão Processual Personalizada",
    category: "servicos",
    functionalCategory: "certidoes-e-validacoes",
    serviceTypeTag: "Solicitação",
    knownAs: "Demais certidões processuais; Certidão de Distribuição de Feitos no TST; Certidão judicial personalizada; Nada consta;",
    descriptionSnippet: "Use este serviço para pedir certidão sobre processos que estão ou que estiveram no Tribunal Superior do Trabalho (TST) e certidão que não pode ser emitida de forma automática pelo site.",
    iconName: "FileCheck2",
    whatIs: "Use este serviço para pedir certidão sobre processos que estão ou que estiveram no Tribunal Superior do Trabalho (TST) e certidão que não pode ser emitida de forma automática pelo site.\n\nEste serviço atende pedidos de:\n● Certidão de Distribuição de Feitos no TST (processos em andamento e arquivados);\n● Certidão Judicial de Exercício da Advocacia personalizada;\n● Certidão de processos baixados ou arquivados;\n● Outras certidões processuais que não possuam sistema próprio de emissão.\n\n💲 Custo: pode haver cobrança. Consulte as regras em *Outras Informações*.\nEm caso de cobrança, aguarde a área responsável enviar a guia de pagamento GRU.\n🕔 Prazo: até 15 dias úteis\n📄 Informações necessárias: conta no Google para preencher o formulário apresentado no “botão iniciar” e documento em PDF contendo:\n● Descrição do que você precisa (pedido);\n● E-mail para receber comunicação e a certidão;\n● Identificação de quem está fazendo o pedido: a própria pessoa, outra pessoa interessada ou representante da empresa ou entidade;\n● Assinatura digital ou manual.\n  ○ Assinatura manual: envie também um documento com foto para confirmar a assinatura.",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Preparar o pedido",
        description: "● Crie um documento com a descrição do seu pedido;\n● Informe quem está fazendo o pedido: a própria pessoa, outra pessoa interessada ou representante da empresa ou entidade;\n● Assinatura digital ou manual:\n  ○ Assinatura manual: envie também um documento com foto para confirmar a assinatura;\n  ○ Assinatura digital: você pode usar a Assinatura Eletrônica do Gov.br.\n● Salve em formato PDF.",
        channel: "Preparação prévia",
        documents: ["Documento com a descrição do pedido em PDF", "Documento com foto (se assinatura manual)"],
        duration: "Variável",
        costs: "Gratuito",
        requirementsBefore: "Elaborar o pedido em PDF assinado digitalmente ou manualmente.",
        monitoring: "Documento salvo em seu dispositivo para anexar na próxima etapa."
      },
      {
        name: "Solicitar a certidão",
        description: "Escolha o canal de atendimento abaixo:\n\n**Página da internet (portal de serviços)**:\n1. Esteja conectado a uma conta do Google\n2. Acesse a página de solicitação desta certidão ou clique no botão Iniciar\n3. Solicite a certidão:\n● Preencha as informações solicitadas;\n● Selecione o tipo de certidão que deseja;\n● Anexe o pedido em PDF e documentos complementares como procuração, documento de identidade ou comprovante de representação.\n● Finalize o envio do formulário.\n\n**Presencial (Edifício Sede do TST)**:\n1. Compareça ao Núcleo de Cadastramento Processual (NCP):\n● Endereço: Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF\n● Balcão do Protocolo: Bloco A, Térreo, sala AT-110\n● Telefone: (61) 3043-4330, das 9h às 19h - segunda a sexta-feira.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["Conta no Google", "Documento em PDF do pedido", "Documentos complementares (procuração/identidade)"],
        duration: "Até 15 dias úteis",
        costs: "Pode haver cobrança. Consulte Outras Informações.",
        requirementsBefore: "Estar conectado a uma conta Google para preencher o formulário.",
        monitoring: "Confirmação de envio do formulário eletrônico."
      },
      {
        name: "Aguardar e receber a certidão",
        description: "1. A área responsável vai conferir o pedido e emitir a certidão.\n2. Se houver custo, será enviado um e-mail com o valor para pagamento:\n● Se o seu pedido não for gratuito, o Tribunal enviará a guia de pagamento GRU com o valor total para ser pago antes da emissão da certidão;\n3. Aguarde e receba a certidão no e-mail informado no pedido.",
        channel: "E-mail",
        documents: ["Comprovante de pagamento GRU (se houver cobrança)"],
        duration: "Até 15 dias úteis",
        costs: "R$ 5,53 por folha (quando aplicável)",
        requirementsBefore: "Envio do formulário de solicitação concluído.",
        monitoring: "Acompanhamento por meio da caixa de e-mail informada."
      }
    ],
    otherInfo: "### Quando há cobrança e qual é o preço?\n* A certidão tem o custo de **R$ 5,53 por folha**.\n* O valor total será informado pela área responsável. O pagamento deve ser feito com guia de recolhimento da União - GRU.\n* **A certidão é gratuita quando:**\n  * a pessoa que fez o pedido é a mesma que constará na certidão;\n  * a certidão servir para defender direitos.\n\n### Legislação\n* **Instrução Normativa nº 20/2002** - Define casos em que a certidão será cobrada\n* **Ato Conjunto TST.CSJT.GP.SG nº 21/2010** - Define que o pagamento de taxas será por meio de Guia de Recolhimento da União (GRU)",
    lastUpdated: "10/09/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 19h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    }
  },
  {
    id: "consultar-indisponibilidade",
    name: "Consultar Indisponibilidade de Sistemas",
    category: "consultas-e-informacoes",
    functionalCategory: "consultas",
    serviceTypeTag: "Consulta",
    knownAs: "Certidão de indisponibilidade, PJe fora do ar, Sistemas Indisponíveis",
    descriptionSnippet: "Use este serviço para consultar os períodos em que sistemas do Tribunal Superior do Trabalho (TST) ficaram indisponíveis e, quando houver, baixe a certidão correspondente.",
    iconName: "IndisponibilidadeSvg",
    whatIs: "Use este serviço para consultar os períodos em que sistemas do Tribunal Superior do Trabalho (TST) ficaram indisponíveis e, quando houver, baixe a certidão correspondente.\n\nEscolha o sistema e localize a data em que ocorreu o problema:\n● Certidão Nacional de Débitos Trabalhistas - CNDT\n● Diário Eletrônico da Justiça do Trabalho - DEJT\n● Investigação de Movimentações Bancárias - Simba\n● Peticionamento Eletrônico - e-Doc\n● Processo Judicial Eletrônico - PJe\n● Sistema Eletrônico de Informações - SEI\n● Visualização de Autos\n\n💲 Custo: gratuito\n🕔 Prazo: imediato\n📄 Informação necessária: sistema, dia e horário da falha",
    whoCanUse: "Qualquer pessoa.",
    steps: [
      {
        name: "Emitir Certidão",
        description: "Escolha o canal de atendimento abaixo e o sistema que deseja consultar:\n\n**Internet (Portal de Serviços)**:\n1. Acesse a página de consulta deste serviço ou clique no botão Iniciar;\n2. Clique no sistema que deseja consultar;\n3. Escolha a data e horário do problema;\n4. Baixe a “Certidão de Indisponibilidade”.\n\n**Presencial (Edifício Sede do TST)**:\n1. Compareça ao Núcleo de Cadastramento Processual (NCP):\n● Endereço: Setor de Administração Federal Sul (SAFS) Q 8 Lote 1 - Asa Sul, Brasília - DF\n● Balcão do Protocolo: Bloco A, Térreo, sala AT-110\n● Telefone: (61) 3043-4330, das 9h às 19h - segunda a sexta-feira.",
        channel: "Portal Web (Internet) e Presencial",
        documents: ["Sistema, dia e horário da falha"],
        duration: "Imediato",
        costs: "Gratuito",
        requirementsBefore: "Conhecer o sistema e a data/horário em que houve o problema de acesso.",
        monitoring: "Emissão e download imediato da Certidão de Indisponibilidade."
      }
    ],
    otherInfo: "### Legislação\n* **Resolução CNJ nº 185, de 18/12/2013** - Define, para o PJe, o que é indisponibilidade, como essas ocorrências devem ser registradas e em quais situações os prazos são prorrogados.\n* **Instrução Normativa TST nº 30, de 13/09/2007** - Regula o processo eletrônico na Justiça do Trabalho e exige a divulgação das falhas do sistema para proteger os prazos das pessoas envolvidas.",
    lastUpdated: "10/09/2026",
    helpContact: {
      unit: "Núcleo de Cadastramento Processual (NCP)",
      techSupport: "(61) 3043-4040, das 9h às 19h",
      legalSupport: "(61) 3043-4330, das 9h às 19h",
      email: "ncp@tst.jus.br",
      address: "SAF Sul Lote 1, Bloco A, Térreo, sala AT-110, Brasília - DF",
      hours: "Segunda a sexta-feira, das 9h às 19h"
    },
    systemContacts: [
      {
        system: "SIMBA",
        responsible: "Divisão de Suporte Especializado aos Gabinetes de Ministro - DSGAB",
        email: "suporte-simba@tst.jus.br",
        phone: "(61) 3043-4040"
      },
      {
        system: "e-DOC",
        responsible: "Secretaria Geral Judiciária (SEGJUD)",
        email: "segjud@tst.jus.br",
        phone: "0800-644-3444 (fixos) ou (61) 3043-4000 / (61) 3043-3201"
      },
      {
        system: "CNDT",
        responsible: "Secretaria Geral da Presidência - SEGP",
        email: "secretariagp@tst.jus.br",
        phone: "0800-644-3444 (fixos) ou (61) 3043-4000 / (61) 3043-4300",
        notes: "Para atendimento aos sistemas nacionais CNDT, DEJT, Malote Digital e e-DOC"
      },
      {
        system: "SEI",
        responsible: "Coordenadoria de Gestão Documental e Memória - CGEDM",
        email: "cgedm@tst.jus.br",
        phone: "(61) 3043-4722",
        url: "https://www.tst.jus.br/en/sei-sistema-eletronico-de-informacoes"
      },
      {
        system: "DEJT",
        responsible: "Página de Certidão Indisponível do Diário Eletrônico da Justiça do Trabalho",
        url: "https://diario.jt.jus.br/cadernos/dejt.html"
      },
      {
        system: "Visualização de Autos",
        responsible: "Secretaria Geral Judiciária (SEGJUD)",
        email: "segjud@tst.jus.br",
        phone: "(61) 3043-3201 / 3043-7334",
        url: "https://visualizacao-autos.tst.jus.br/visualizacaoAutos/"
      },
      {
        system: "Processo Judicial Eletrônico - PJe TST",
        responsible: "Coordenadoria Técnica do Processo Judicial Eletrônico (CTPJE)",
        email: "ctpje@csjt.jus.br",
        phone: "(61) 3043-7711"
      }
    ]
  }
];
