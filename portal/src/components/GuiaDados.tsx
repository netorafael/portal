import React from "react";
import { Compass, CheckCircle, AlertTriangle, Sparkles, FileText, HelpCircle, BookOpen, ExternalLink, Info } from "lucide-react";

export interface GuiaSection {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const getGuiaSections = (): GuiaSection[] => [
  {
    id: 1,
    title: "1. O que é o Portal de Serviços do TST",
    icon: <Compass className="w-5 h-5 text-[#103d7c]" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          O <strong>Portal de Serviços do TST</strong> é uma nova porta de entrada para quem precisa acessar serviços públicos oferecidos ou orientados por meio digital do Tribunal Superior do Trabalho.
        </p>
        <p>
          A proposta é reunir, organizar e explicar os serviços de forma clara, simples e fácil de usar. O foco é ajudar as pessoas a encontrarem o que precisam sem depender de conhecimento da estrutura interna do Tribunal.
        </p>
        <p>
          O portal deve atender a diferentes públicos, como cidadãos, advogados, empresas, órgãos públicos, imprensa e pesquisadores. Essas pessoas podem chegar ao TST para consultar processos, emitir certidão, pesquisar jurisprudência, pedir informação, acessar outro serviço digital.
        </p>
        <p>
          No portal, a pessoa encontra orientação e caminho para acessar os serviços públicos do Tribunal. O portal não vai substituir sistemas e ambientes já existentes como PJe e as ferramentas de consulta processual. Quando necessário, vai levar a pessoa ao local correto.
        </p>
        <p>
          O objetivo é transformar a forma como os serviços são apresentados: sair de páginas longas, dispersas e institucionais para páginas de serviço mais diretas e úteis.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "2. ✅ O que é um serviço no Portal de Serviços do TST",
    icon: <CheckCircle className="w-5 h-5 text-emerald-700" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <div className="bg-emerald-50 border border-emerald-250 rounded-xl p-4.5 space-y-2">
          <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1">📌 Em resumo:</h4>
          <p className="text-emerald-900 text-xs sm:text-sm leading-relaxed">
            O serviço do portal de serviços do TST deve ajudar a pessoa a realizar uma tarefa. E atender aos critérios (modelo usado no gov.br):
          </p>
          <ul className="list-disc pl-5 text-emerald-900 text-xs sm:text-sm space-y-1">
            <li><strong>Interação:</strong> há ação ou troca entre usuário e o TST</li>
            <li><strong>Personalização:</strong> resulta em algo específico para cada usuário</li>
            <li><strong>Suficiência:</strong> é completo - tem começo, meio e fim</li>
            <li><strong>Processo padrão:</strong> tem etapas e fluxo predefinidos</li>
            <li><strong>Usuário externo ao órgão:</strong> público é externo ao Tribunal</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs">
            <span className="font-bold text-emerald-800 block mb-1">✅ Se houver dúvida use esta regra simples:</span>
            <p>Se a pessoa chega ao portal querendo fazer, receber, consultar ou pedir algo ao TST, provavelmente estaremos diante de um serviço público de atendimento. Tudo certo!</p>
          </div>
          <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 text-xs">
            <span className="font-bold text-rose-800 block mb-1">❌ Quando reavaliar:</span>
            <p>Se a página apenas informa, divulga, apresenta uma área, mostra um sistema ou descreve uma etapa interna, provavelmente não é serviço público. Reavalie a proposta.</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-blue-950 text-sm">Detalhando o que o serviço precisa ter:</h4>
          <p>
            Para este guia, serviço é uma ação fornecida pelo TST para que uma pessoa ou instituição externa consiga resolver uma necessidade específica.
          </p>
          <p>
            Um serviço começa quando o usuário faz alguma ação, como consultar, pedir, emitir, protocolar, acompanhar, ou solicitar. O serviço termina quando o usuário recebe uma resposta, informação, documento, acesso, decisão ou outro resultado esperado.
          </p>
          <p className="font-medium text-gray-900">Um serviço deve responder a uma necessidade concreta do usuário. Exemplos:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm text-blue-950 pl-4 list-disc font-medium">
            <li>Emitir Certidão Negativa de Débitos Trabalhistas (CNDT)</li>
            <li>Consultar processo</li>
            <li>Acompanhar andamento processual</li>
            <li>Consultar jurisprudência</li>
            <li>Protocolar petição</li>
            <li>Enviar manifestação à Ouvidoria</li>
          </ul>
          <p className="text-xs text-gray-600">
            Um serviço pode ser totalmente digital, parcialmente digital ou apenas orientado pelo portal. O importante é que a página do serviço explique o passo a passo completo para quem acessa o serviço.
          </p>
        </div>

        <h4 className="font-bold text-blue-950 text-sm pt-2">Perguntas para saber se é um serviço público de atendimento:</h4>
        <p className="text-xs text-gray-600">A atividade deve ser tratada como serviço no contexto do portal quando responder “sim” a estas cinco perguntas:</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-slate-100 border-b border-gray-250 font-bold text-blue-950">
                <th className="p-2.5">Quesito / Gov.br</th>
                <th className="p-2.5">Como verificar</th>
                <th className="p-2.5">Exemplos Práticos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2.5 font-bold">1. Interação</td>
                <td className="p-2.5">A atividade depende de uma ação do usuário para começar ou ser obtida?</td>
                <td className="p-2.5 pr-1">
                  <span className="text-emerald-700 font-bold">✔ Sim:</span> consultar processo; emitir certidão; solicitar dados estatísticos; receber boletim; enviar manifestação.<br />
                  <span className="text-rose-700 font-bold">✖ Não:</span> apenas ler notícia ou acessar página institucional.
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">2. Personalização</td>
                <td className="p-2.5">A entrega depende da situação de um usuário específico?</td>
                <td className="p-2.5 pr-1">
                  <span className="text-emerald-700 font-bold">✔ Sim:</span> certidão gerada a partir do CPF; consulta pelo número processual; resposta de Ouvidoria específica.<br />
                  <span className="text-rose-700 font-bold">✖ Não:</span> página genérica sobre jurisprudência; notícia global.
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">3. Suficiência</td>
                <td className="p-2.5">A atividade entrega claramente algo ao usuário?</td>
                <td className="p-2.5 pr-1">
                  <span className="text-emerald-700 font-bold">✔ Sim:</span> certidão de fato emitida; andamento exibido; boletim recebido por e-mail; dados enviados.<br />
                  <span className="text-rose-700 font-bold">✖ Não:</span> fazer login; preencher formulário quando for apenas etapa de outro serviço.
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">4. Processo padrão</td>
                <td className="p-2.5">Existe um passo a passo mínimo?</td>
                <td className="p-2.5 pr-1">
                  <span className="text-emerald-700 font-bold">✔ Sim:</span> solicitar acesso à informação; protocolar petições.<br />
                  <span className="text-rose-700 font-bold">✖ Não:</span> conversa informal por telefone; atendimento eventual informal.
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold">5. Usuário externo</td>
                <td className="p-2.5">O serviço atende diretamente um usuário externo ao TST?</td>
                <td className="p-2.5 pr-1">
                  <span className="text-emerald-700 font-bold">✔ Sim:</span> cidadãos, advogados, empresas, órgãos públicos externos, imprensa.<br />
                  <span className="text-rose-700 font-bold">✖ Não:</span> tramitação interna técnica; distribuição de demandas de TI entre áreas internas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 p-4 border border-gray-200 rounded-xl space-y-2 mt-4 text-xs">
          <p className="font-bold text-gray-900">📌 Um serviço deve ter nome de ação (Verbo no Infinitivo):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="bg-rose-50 p-2.5 text-rose-950 rounded border border-rose-100">
              <span className="font-bold block">❌ Em vez de:</span>
              <ul className="list-disc pl-4 font-mono">
                <li>CNDT</li>
                <li>PJe</li>
                <li>Jurisprudência</li>
                <li>Ouvidoria</li>
                <li>Balcão Virtual</li>
                <li>Certidões</li>
              </ul>
            </div>
            <div className="bg-emerald-50 p-2.5 text-emerald-950 rounded border border-emerald-100">
              <span className="font-bold block">✅ Prefira:</span>
              <ul className="list-disc pl-4 font-semibold">
                <li>Emitir Certidão Negativa de Débitos Trabalhistas</li>
                <li>Protocolar petição no PJe</li>
                <li>Consultar jurisprudência do TST</li>
                <li>Enviar manifestação à Ouvidoria</li>
                <li>Solicitar atendimento remoto (pelo Balcão Virtual)</li>
                <li>Emitir Certidão Negativa de Débitos Trabalhistas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "3. ❌ O que não é um serviço no Portal",
    icon: <AlertTriangle className="w-5 h-5 text-rose-600" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          Nem tudo que aparece no site do TST deve ser tratado como serviço. Alguns conteúdos são importantes, mas não são serviços. Eles podem aparecer no portal como páginas de apoio, endereços úteis, canais de atendimento ou informações complementares.
        </p>

        <div className="space-y-3.5">
          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">🏢 Área do Tribunal - não é serviço</strong>
            <p className="text-xs text-gray-600">Uma secretaria, coordenadoria, gabinete ou unidade administrativa não é serviço.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: Secretaria responsável por certidões. / ✅ Sim: Emitir Certidão Negativa de Débitos Trabalhistas (CNDT).
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">⚡ Programa ou iniciativa - não é serviço</strong>
            <p className="text-xs text-gray-600">Um programa ou iniciativa pode reunir várias ações ou campanhas, mas não é o serviço em si.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: Programa de Conciliação. / ✅ Sim: Solicitar audiência de conciliação.
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">🖥️ Sistema - não é serviço</strong>
            <p className="text-xs text-gray-600">Um sistema é um canal ou ferramenta. O serviço é o que a pessoa faz usando esse sistema.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: PJe. / ✅ Sim: Protocolar petição no PJe.
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">📄 Página informativa - não é serviço</strong>
            <p className="text-xs text-gray-600">Notícias, campanhas, normas, manuais em PDF e páginas institucionais.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: Manual em PDF / Página de História. / ✅ Sim: Consultar processo / Emitir certidão.
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">🏷️ Tema - não é serviço</strong>
            <p className="text-xs text-gray-600">Um tema ajuda a organizar, mas não deve ser confundido com o serviço em si.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: “Certidões” ou “Jurisprudência”. / ✅ Sim: Emitir Certidão Negativa (CNDT).
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">🔐 Etapa isolada - não é serviço</strong>
            <p className="text-xs text-gray-650">Uma etapa faz parte do caminho. Fazer login, preencher formulário parcial, agendar atendimento quando o objetivo final for outro não devem ser cadastrados isoladamente.</p>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">📅 Evento único ou despadronizado - não é serviço</strong>
            <p className="text-xs text-gray-600">Uma conversa telefônica eventual isolada não é serviço. Atividades ocasionais precisam de roteiro pré-definido estável.</p>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">📞 Canal de atendimento - não é sempre serviço</strong>
            <p className="text-xs text-gray-650">Diferencie o canal físico ou virtual da finalidade prática do jurisdicionado.</p>
            <div className="text-xs p-1.5 bg-slate-50 font-mono text-gray-700 rounded border">
              ❌ Não: “Ouvidoria”. / ✅ Sim: Enviar manifestação à Ouvidoria.
            </div>
          </div>

          <div className="border bg-white rounded-xl p-4 space-y-1 hover:shadow-sm border-gray-250">
            <strong className="block text-blue-950 text-xs sm:text-sm">🔃 Processo interno - não é serviço</strong>
            <p className="text-xs text-gray-650">Tramitação eletrônica interna, análises setoriais em gabinete ou validações não-visíveis ao cidadão do TST.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "4. Como descrever um serviço com Linguagem Simples",
    icon: <Sparkles className="w-5 h-5 text-amber-600" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          Linguagem Simples é sobre escrever com foco em quem vai usar a informação. É um conjunto de técnicas para tornar a comunicação pública mais clara, direta e fácil de usar. Não significa escrever de forma informal ou tecnicamente errada, mas sim garantir impacto positivo de acesso universal.
        </p>

        <div className="bg-amber-50 rounded-xl p-4.5 border border-amber-250 text-amber-900 space-y-1 text-xs">
          <strong className="block text-amber-950">💡 Você sabia?</strong>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>3 a cada 10 brasileiros enfrentam analfabetismo funcional.</li>
            <li>As pessoas leem em média apenas uma parte pequena do conteúdo de uma página na internet.</li>
            <li>Quase metade dos brasileiros não concluiu a educação básica obrigatória (ensino médio).</li>
          </ul>
        </div>

        <h4 className="font-bold text-blue-950 text-sm mt-3 border-b pb-1">A) Escolha das palavras:</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-[#f8fafc]">
              <tr className="font-bold text-gray-900">
                <th className="p-2">❌ Em vez de</th>
                <th className="p-2 text-emerald-800">✅ Prefira</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2 font-mono text-gray-600">requerer</td><td className="p-2 text-emerald-800 font-semibold">pedir</td></tr>
              <tr><td className="p-2 font-mono text-gray-600">acessar o conteúdo disponibilizado</td><td className="p-2 text-emerald-800 font-semibold">acessar o conteúdo</td></tr>
              <tr><td className="p-2 font-mono text-gray-600">efetuar o recolhimento</td><td className="p-2 text-emerald-800 font-semibold">pagar</td></tr>
              <tr><td className="p-2 font-mono text-gray-600">realizar o preenchimento</td><td className="p-2 text-emerald-800 font-semibold">preencher</td></tr>
              <tr><td className="p-2 font-mono text-gray-600">documentação comprobatória</td><td className="p-2 text-emerald-800 font-semibold">documentos que comprovem a informação</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">O processo está concluso.</td><td className="p-2 text-emerald-800 font-semibold">O processo está aguardando análise ou decisão.</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">O recurso foi interposto.</td><td className="p-2 text-emerald-800 font-semibold">O recurso foi apresentado.</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">A parte deve juntar documento.</td><td className="p-2 text-emerald-800 font-semibold">A parte deve enviar o documento ao processo.</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">O pedido foi deferido / indeferido.</td><td className="p-2 text-emerald-800 font-semibold">O pedido foi aceito / O pedido não foi aceito.</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">o cidadão / os advogados</td><td className="p-2 text-emerald-800 font-semibold">a pessoa / profissionais da advocacia (advogadas e advogados)</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">portador de deficiência / idosos / menores</td><td className="p-2 text-emerald-800 font-semibold">pessoa com deficiência / pessoas idosas / crianças e adolescentes</td></tr>
              <tr><td className="p-2 font-mono text-gray-650">denegrir / lista negra</td><td className="p-2 text-emerald-800 font-semibold">prejudicar / lista de restrição</td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-3">
          <div className="bg-slate-50 p-3 rounded-lg border">
            <span className="font-bold text-blue-900 block mb-1">📋 Explique siglas e línguas estrangeiras:</span>
            <ul className="list-disc pl-4 space-y-1">
              <li>Use: <strong>Certidão Negativa de Débitos Trabalhistas (CNDT)</strong> na 1ª vez.</li>
              <li>Não use download, use <strong>baixar</strong>.</li>
              <li>Não use upload, use <strong>enviar arquivo</strong>.</li>
              <li>Não use link, use <strong>endereço, acesso ou página</strong>.</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border">
            <span className="font-bold text-blue-900 block mb-1">✍🏼 Escolha das frases:</span>
            <p className="text-gray-600 mb-1">Escreva frases curtas. Use ordem direta (sujeito &gt; verbo &gt; complemento) e voz ativa.</p>
            <p className="italic font-medium text-[11px] text-gray-700 bg-white p-1 rounded border">
              "Para emitir o documento, informe os dados solicitados pelo sistema e confira antes de gerar."
            </p>
          </div>
        </div>

        <h4 className="font-bold text-blue-950 text-sm mt-3 border-b pb-1">B) Organização geral da informação:</h4>
        <ul className="list-disc pl-5 text-xs sm:text-sm space-y-1.5">
          <li><strong>Use tópicos e títulos claros:</strong> divida em partes fáceis de escanear.</li>
          <li><strong>Apresente na ordem correta:</strong> comece pelo principal para o usuário decidir, depois mostre como agir.</li>
          <li><strong>Deixe detalhes técnicos secundários no final:</strong> leis vigentes ou manuais extras devem estar em endereços de apoio específicos, evitando termos ocultos como "clique aqui" ou "saiba mais".</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "5. Como criar a página de um serviço",
    icon: <FileText className="w-5 h-5 text-blue-800" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          A página no Portal de Serviços do TST deve ser simples, contendo uma estrutura estrutural uniforme e previsível:
        </p>

        <div className="bg-white border text-xs rounded-xl overflow-hidden divide-y">
          <div className="bg-slate-50 p-3 font-bold text-blue-950">Campos obrigatórios de modelagem de serviços:</div>
          <div className="p-3">
            <strong>1. Nome do serviço:</strong> Começar com verbo no infinitivo (ex: <em>Emitir Certidão...</em>).
          </div>
          <div className="p-3">
            <strong>2. Também conhecido como:</strong> Otimização com siglas e linguagem do cidadão (ex: <em>"CNDT; nada consta trabalhista"</em>).
          </div>
          <div className="p-3">
            <strong>3. Botão Iniciar:</strong> Link que direcione direto à etapa prática (ex: login ou formulário).
          </div>
          <div className="p-3">
            <strong>4. O que é?:</strong> Pequeno resumo explicando para que serve de forma resumida e o que ele entrega.
          </div>
          <div className="p-3">
            <strong>5. Quem pode utilizar?:</strong> Descrição simples do público externo apto a usá-lo.
          </div>
          <div className="p-3">
            <strong>6. Etapas de utilização:</strong> Caminho numerado de tarefas, canais e prazos correspondentes.
          </div>
          <div className="p-3">
            <strong>7. Outras informações:</strong> Quadro destacando custos, indisponibilidade do canal e suporte oficial.
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200. p-4.5 rounded-xl text-xs space-y-2 mt-4">
          <span className="font-bold block text-slate-800">📋 Checklist antes de publicar ou atualizar uma página de serviço:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11.5px]">
            <div>✔ O nome começa com verbo e indica a ação da pessoa?</div>
            <div>✔ O botão Iniciar leva diretamente ao primeiro passo?</div>
            <div>✔ O público que pode usar o serviço está claro?</div>
            <div>✔ As etapas estão em ordem e começam com verbo?</div>
            <div>✔ Documentos, custo e prazo aparecem no topo?</div>
            <div>✔ Há canais claros para dúvidas ou problemas?</div>
            <div>✔ A página informa o que fazer se o sistema cair?</div>
            <div>✔ Siglas e conceitos técnicos foram elucidados?</div>
            <div>✔ Os endereços de links e contatos foram validados?</div>
            <div>✔ Revisado em Linguagem Simples com aprovação do setor?</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "6. LuzIA - assistente de IA para descrever serviços com linguagem simples",
    icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          A <strong>LuzIA</strong> é uma ferramenta de apoio interno, desenvolvida especialmente para auxiliar e agilizar os colaboradores do TST a transcreverem seus textos corporativos seguindo a linguagem simples.
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-indigo-950 font-medium text-xs sm:text-sm">
          A assistente está plenamente disponível dentro do <strong>ChatJT</strong> no endereço eletrônico:
          <a href="https://ia.jt.jus.br/welcome/index.html" target="_blank" rel="noopener noreferrer" className="block text-[#103d7c] font-bold mt-1 underline">
            ia.jt.jus.br/welcome/index.html
          </a>
          Ou diretamente pelo endereço do assistente:
          <a href="https://ia.jt.jus.br/chat/assistant/69fa850d9ba1ef2f1d5d813b" target="_blank" rel="noopener" className="block text-[#103d7c] font-black mt-0.5 underline">
            Acessar LuzIA no ChatJT
          </a>
        </div>

        <p className="font-bold text-sm text-gray-900 mt-4">As três principais utilidades da LuzIA:</p>
        <div className="space-y-3.5 text-xs text-left">
          <div className="p-3.5 border bg-white rounded-lg hover:shadow-xs">
            <strong className="block text-indigo-950 font-extrabold text-xs sm:text-sm mb-1">✨ Simplificação de Redações</strong>
            <p className="text-gray-650">Clique em “Simplifique este texto”, insira os termos jurídicos e regulamentos confusos que deseja traduzir.</p>
          </div>
          <div className="p-3.5 border bg-white rounded-lg hover:shadow-xs">
            <strong className="block text-indigo-950 font-extrabold text-xs sm:text-sm mb-1">✨ Criação de Páginas de Descrição de Serviços</strong>
            <p className="text-gray-650">Clique em “Descreva este serviço”, envie as coordenadas essenciais ou um esboço livre de como o robô deve criar a página.</p>
          </div>
          <div className="p-3.5 border bg-white rounded-lg hover:shadow-xs">
            <strong className="block text-indigo-950 font-extrabold text-xs sm:text-sm mb-1">✨ Identificar se a Atividade é de Fato um Serviço Público</strong>
            <p className="text-gray-650">Clique em “Identifique se esta atividade é um serviço”, envie um descritivo das ações internas de uma determinada secretaria do TST.</p>
          </div>
        </div>

        <div className="border border-indigo-250 bg-indigo-50/15 p-4 rounded-xl text-xs sm:text-sm text-left">
          <strong>♿ Como tornar um texto acessível:</strong>
          <p className="text-gray-600 mt-1 leading-relaxed">
            Consulte os guias visuais e manuais práticos disponíveis no Portal de Acessibilidade da <strong>Assessoria de Acessibilidade e Inclusão do TST (ACESI)</strong>: <a href="https://www.tst.jus.br/en/web/acesi" target="_blank" rel="noopener noreferrer" className="text-[#103d7c] font-bold underline inline-block">www.tst.jus.br/en/web/acesi</a>.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "7. Avaliação de Experiência do Usuário (UX)",
    icon: <HelpCircle className="w-5 h-5 text-teal-800" />,
    content: (
      <div className="space-y-4 text-gray-800 leading-relaxed font-sans text-left">
        <p>
          Avaliar a experiência consiste em monitorar de forma empírica se o jurisdicionado ou profissional externo consegue encontrar, absorver e usufruir da atividade com autonomia sem enfrentar quebras de jornada ou barreiras excessivas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-xl p-4 bg-slate-50 text-xs">
            <strong className="block text-blue-950 text-sm mb-1">❓ O que avaliar e porque?</strong>
            <p className="text-gray-650 leading-relaxed">
              Responde perguntas fundamentais como: O cidadão encontrou o que buscava? A linguagem usada era nítida? Conseguiu iniciar e concluir? O feedback reduz em campo retrabalhos e gargalos operacionais no Tribunal.
            </p>
          </div>
          <div className="border rounded-xl p-4 bg-slate-50 text-xs">
            <strong className="block text-blue-950 text-sm mb-1">🔒 Tratamento de Dados (LGPD)</strong>
            <p className="text-gray-650 leading-relaxed">
              Toda ferramenta de escaneabilidade ou pesquisa obedece estritamente a Lei Geral de Proteção de Dados (LGPD) coletando dados de forma agregada, agregadora e anônima.
            </p>
          </div>
        </div>

        <div className="bg-[#eef4fc] p-5 rounded-xl border border-blue-200. text-left">
          <p className="font-bold text-blue-950 text-xs sm:text-sm mb-1">💬 Canal de feedback direto do Jurisdicionado:</p>
          <p className="text-xs text-blue-900 leading-relaxed">
            O Portal disponibiliza um botão lateral flutuante de <strong>Feedback</strong> que permite ao leitor sugerir e denunciar falhas escriturais das certidões e páginas. Ele **não gera** tickets de Ouvidoria! Para manifestações institucionais formais ou denúncias estruturais ao TST, deve ser acionada a Ouvidoria Judiciária Oficial do TST.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "8. Referências e Materiais de Apoio",
    icon: <BookOpen className="w-5 h-5 text-amber-700" />,
    content: (
      <div className="space-y-4 text-gray-850 leading-relaxed font-sans text-left">
        <div className="space-y-2 text-xs">
          <h5 className="font-bold text-blue-950 text-sm border-b pb-1">⚖️ Leis e Normativos principais:</h5>
          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li><strong>Constituição de 1988:</strong> Artigo 37, § 3º.</li>
            <li><strong>Decreto Federal nº 9.094 de 17 de julho de 2017:</strong> Desburocratização administrativa e estruturação de Cartas de Serviços.</li>
            <li><strong>Lei Federal nº 13.460 de 26 de junho de 2017:</strong> Código de Defesa do Usuário de Serviços Públicos.</li>
            <li><strong>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018:</strong> Proteção legal a dados cadastrais.</li>
            <li><strong>Lei Federal nº 14.129 de 29 de março de 2021:</strong> Regras de eficiência do Governo Digital.</li>
            <li><strong>Lei Federal nº 15.263 de 14 de novembro de 2025:</strong> Política Nacional de Linguagem Simples.</li>
            <li><strong>Recomendação CNJ nº 144 de 25 de agosto de 2023:</strong> Pacto do Judiciário Nacional pela facilidade de comunicação.</li>
          </ul>
        </div>

        <div className="space-y-2 text-xs pt-2">
          <h5 className="font-bold text-blue-950 text-sm border-b pb-1">📚 Manuais e Estudos Complementares:</h5>
          <ul className="list-disc pl-5 space-y-2 leading-relaxed">
            <li><strong>Manual de Linguagem Simples da Câmara dos Deputados (Edições Câmara, 2024).</strong></li>
            <li><strong>Apostila "Linguagem Simples no Setor Público" (ENAP, 2020).</strong></li>
            <li><strong>Manuais do Laboragov (Guia de Edição de Serviços do Gov.br).</strong></li>
            <li><strong>Estudos sobre analfabetismo funcional (IBGE PNAD / CNN Brasil).</strong></li>
            <li><strong>Pesquisa comportamental "How little do users read?" (Jakob Nielsen, 2008).</strong></li>
            <li><strong>Glossário de termos em Linguagem Simples do TRF2 (2024) e do TJSP.</strong></li>
          </ul>
        </div>
      </div>
    )
  }
];
