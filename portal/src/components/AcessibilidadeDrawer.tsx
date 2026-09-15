/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  X, 
  HelpCircle, 
  Layers, 
  Eye, 
  Keyboard, 
  CheckCircle, 
  FileText,
  Bookmark
} from "lucide-react";

interface AcessibilidadeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: "inicial" | "detalhe";
  selectedServiceName?: string;
}

export default function AcessibilidadeDrawer({
  isOpen,
  onClose,
  currentPage,
  selectedServiceName
}: AcessibilidadeDrawerProps) {
  const [activeTab, setActiveTab] = useState<"foco" | "titulos" | "alt" | "wcag">("foco");

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex justify-end bg-black/60 transition-opacity animate-fadeIn font-sans"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="titulo-documento-repasses"
    >
      <div 
        className="w-full max-w-2xl bg-[#09101b] text-white h-screen shadow-2xl overflow-y-auto flex flex-col border-l border-teal-500/30"
        id="conteiner-repasses"
      >
        
        {/* Header of the Repasse Drawer */}
        <div className="p-6 bg-gradient-to-r from-teal-950 to-slate-950 border-b border-teal-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-800/40 rounded-lg flex items-center justify-center text-teal-300 border border-teal-700">
              <Layers className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h1 id="titulo-documento-repasses" className="text-md font-bold text-teal-300 font-heading">
                Documentação de Repasse Técnico
              </h1>
              <p className="text-[10px] text-teal-400 font-medium">
                Assessoria de Acessibilidade - ACESI (Diretrizes WCAG 2.2 / e-MAG)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-slate-900 text-teal-400 hover:text-white rounded-full hover:bg-slate-800 transition focus-visible:outline-teal-400 min-w-[38px] min-h-[38px] flex items-center justify-center"
            aria-label="Fechar painel de documentação de acessibilidade"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Info Notification */}
        <div className="bg-gradient-to-r from-blue-950 to-teal-950/80 p-4 border-b border-blue-900/60 text-xs text-sky-200">
          <p className="leading-relaxed">
            <span className="font-bold text-amber-300">💡 Para a Equipe de SECOM e ACESI:</span> Este painel de auditoria integrada espelha dinamicamente os componentes da página ativa (<span className="text-white font-mono bg-slate-900 px-1.5 py-0.5 rounded uppercase">{currentPage === "inicial" ? "Página Inicial" : "Detalhe do Serviço"}</span>) para demonstrar as diretrizes oficiais de desenvolvimento acessível no TST.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex bg-slate-950 p-2 border-b border-slate-900 gap-1 overflow-x-auto text-[11px] font-bold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("foco")}
            className={`flex items-center gap-2 py-2 px-3.5 rounded-md transition whitespace-nowrap ${activeTab === "foco" ? "bg-teal-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
            aria-label="Guia de Ordem do Foco do Teclado"
          >
            <Keyboard className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Ordem do Foco TAB</span>
          </button>

          <button
            onClick={() => setActiveTab("titulos")}
            className={`flex items-center gap-2 py-2 px-3.5 rounded-md transition whitespace-nowrap ${activeTab === "titulos" ? "bg-teal-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
            aria-label="Estrutura de Títulos e Cabeçalhos"
          >
            <FileText className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Hierarquia (H1-H4)</span>
          </button>

          <button
            onClick={() => setActiveTab("alt")}
            className={`flex items-center gap-2 py-2 px-3.5 rounded-md transition whitespace-nowrap ${activeTab === "alt" ? "bg-teal-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
            aria-label="Textos Alternativos para Leitores de Tela"
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Textos Alternativos</span>
          </button>

          <button
            onClick={() => setActiveTab("wcag")}
            className={`flex items-center gap-2 py-2 px-3.5 rounded-md transition whitespace-nowrap ${activeTab === "wcag" ? "bg-teal-700 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900"}`}
            aria-label="Critérios de Sucesso WCAG Atendidos"
          >
            <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Critérios WCAG 2.2</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 flex-1 text-xs leading-relaxed text-slate-300">
          
          {/* TAB 1: FOCO ORDER */}
          {activeTab === "foco" && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-amber-300 flex items-center gap-1 font-heading">
                <Bookmark className="w-4 h-4 text-teal-400" />
                <span>Sequência de Navegação Assistida por Teclado</span>
              </h2>
              <p>
                Os usuários que utilizam leitor de tela ou apenas o teclado navegam de cima para baixo. Cada item focalizável abaixo possui o tamanho crítico de toque igual ou maior que <span className="text-teal-400 font-bold">24x24px (WCAG 2.5.8)</span> e destaque visual de foco com <span className="text-amber-300 font-bold">3px (WCAG 2.4.13)</span>.
              </p>

              <div className="space-y-2 border-l-2 border-teal-800 pl-4 mt-3">
                <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <span className="font-mono text-teal-400 font-bold mr-1">Foco [1-3]:</span> 
                  <strong className="text-white">Skip Links de Atalho.</strong> O primeiro TAB expõe de imediato "Ir para o conteúdo", "Ir para o menu" e "Ir para o rodapé" atendendo ao critério <span className="text-teal-400">WCAG 2.4.1 (Evitar Blocos)</span>.
                </div>
                
                <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <span className="font-mono text-teal-400 font-bold mr-1">Foco [4-8]:</span> 
                  <strong className="text-white">Barra de Acessibilidade Única.</strong> Botões de Alterar Idioma, Redimensionar Fonte (A-, Reset, A+) e Ativar Alto Contraste.
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <span className="font-mono text-teal-400 font-bold mr-1">Foco [9-12]:</span> 
                  <strong className="text-white">Canais Sociais e Busca Geral.</strong> Caixa de pesquisa institucional livre e as respectivas âncoras para RSS e canais em redes digitais.
                </div>

                <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <span className="font-mono text-teal-400 font-bold mr-1">Foco [13-20]:</span> 
                  <strong className="text-white">Menu Horizontal de Dropdowns.</strong> Abas expandidas por clique/teclado. Atende <span className="text-teal-400">WCAG 3.2.3 (Navegação Consistente)</span>.
                </div>

                {currentPage === "inicial" ? (
                  <>
                    <div className="bg-teal-950/20 p-2.5 rounded border border-teal-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [21]:</span> 
                      <strong className="text-white">Busca do Portal de Serviços.</strong> Barra central de digitação rápida "Ex: Certidão negativa...".
                    </div>
                    <div className="bg-teal-950/20 p-2.5 rounded border border-teal-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [22-28]:</span> 
                      <strong className="text-white">Cards de Certidões do MVP.</strong> Cada botão "Acessar" ou cabeçalho do card é acionado via tecla Enter/Espaço para abrir a página específica correspondente.
                    </div>
                    <div className="bg-teal-950/20 p-2.5 rounded border border-teal-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [29]:</span> 
                      <strong className="text-white">Card do Link da Carta de Serviços.</strong> Botão em destaque para os cidadãos verem outros serviços judiciais do TST.
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-indigo-950/20 p-2.5 rounded border border-indigo-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [21-22]:</span> 
                      <strong className="text-white">Caminho de Navegação (Breadcrumb).</strong> Links de retorno para "Início" ou para "Certidões" na página ativa.
                    </div>
                    <div className="bg-indigo-950/20 p-2.5 rounded border border-indigo-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [23]:</span> 
                      <strong className="text-white">Botão "Iniciar".</strong> O foco cai diretamente no principal botão de conversão do cidadão (com contraste mínimo superior a 4.5:1).
                    </div>
                    <div className="bg-indigo-950/20 p-2.5 rounded border border-indigo-900/40">
                      <span className="font-mono text-amber-300 font-bold mr-1">Foco [24-27]:</span> 
                      <strong className="text-white">Abas Retráteis do Acordeon Gov.br.</strong> Painéis customizados ("O que é?", "Quem pode usar?", "Etapas", "Outros") operados por teclado (Enter ativa/minimiza a gaveta de dados).
                    </div>
                  </>
                )}

                <div className="bg-slate-900/60 p-2.5 rounded border border-slate-800">
                  <span className="font-mono text-teal-400 font-bold mr-1">Foco [Finais]:</span> 
                  <strong className="text-white">Rodapé Padrão do TST.</strong> Programas de Direitos Sociais unificados e listas de links do Sitemap final.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HEADINGS MATRIX */}
          {activeTab === "titulos" && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-amber-300 flex items-center gap-1 font-heading">
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Hierarquia Semântica dos Cabeçalhos (Headings Structure)</span>
              </h2>
              <p>
                Os leitores de tela dependem de marcas <code className="text-teal-400 font-mono font-semibold">{"<h1>"} a {"<h4>"}</code> para criar um índice virtual do site instantaneamente. Veja o mapeamento estrutural correspondente à página visualizada:
              </p>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-900 font-mono space-y-3 divide-y divide-slate-900">
                
                {/* Global Header headers always present */}
                <div className="pb-2">
                  <p className="text-[10px] text-teal-500 font-bold uppercase">Cabeçalho Institucional Comum (Sempre Ativo)</p>
                  <div className="pl-3 mt-1.5 space-y-1 text-xs">
                    <p className="text-white font-medium">✔️ <span className="text-amber-300">{"<h2 sr-only>"}</span> Menu Principal do TST <span className="text-gray-500 text-[10px]"> (Invisível à vista, mas mapeado a cegos)</span></p>
                  </div>
                </div>

                {currentPage === "inicial" ? (
                  <div className="py-2.5 space-y-1.5">
                    <p className="text-[10px] text-teal-500 font-bold uppercase">Tags da Página Inicial do Portal de Serviços</p>
                    <p className="text-white font-medium pl-3">✔️ <span className="text-amber-300">{"<h1>"}</span> Portal de Serviços do TST</p>
                    <p className="text-white font-medium pl-6">✔️ <span className="text-amber-300">{"<h2>"}</span> Serviços Disponíveis no Momento</p>
                    <p className="text-white font-medium pl-9">✔️ <span className="text-amber-300">{"<h3>"}</span> [Nome de cada uma das 7 Certidões listadas]</p>
                    <p className="text-white font-medium pl-6">✔️ <span className="text-amber-300">{"<h2>"}</span> Canais Adicionais de Cidadania</p>
                  </div>
                ) : (
                  <div className="py-2.5 space-y-1.5">
                    <p className="text-[10px] text-teal-500 font-bold uppercase">Tags da Página do Serviço Ativo</p>
                    <p className="text-white font-medium pl-3">✔️ <span className="text-amber-300">{"<h1>"}</span> {selectedServiceName || "Nome da Certidão"} <span className="text-[10px] text-teal-400 font-bold">(Nível Visual Centralizado)</span></p>
                    <p className="text-white font-medium pl-6">✔️ <span className="text-amber-300">{"<h2>"}</span> Áreas de Detalhamento do Acordeon</p>
                    <p className="text-white font-medium pl-9">✔️ <span className="text-amber-300">{"<h3>"}</span> Etapas de Utilização do Serviço</p>
                    <p className="text-white font-medium pl-12">✔️ <span className="text-amber-300">{"<h4>"}</span> [Verbo-primeiro de cada Passo de Obtenção]</p>
                  </div>
                )}

                {/* Footer and dynamic labels */}
                <div className="pt-2">
                  <p className="text-[10px] text-teal-500 font-bold uppercase font-sans">Rodapé Semântico do TST (Sempre Ativo)</p>
                  <div className="pl-3 mt-1.5 space-y-1">
                    <p className="text-white">✔️ <span className="text-amber-300">{"<h2 sr-only>"}</span> Rodapé de Informações Oficiais</p>
                    <p className="text-white">✔️ <span className="text-amber-300">{"<h2>"}</span> Localização e Sede</p>
                    <p className="text-white">✔️ <span className="text-amber-300">{"<h2>"}</span> Funcionamento</p>
                    <p className="text-white">✔️ <span className="text-amber-300">{"<h2>"}</span> Central Telefônica</p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: ALT TEXT MAP */}
          {activeTab === "alt" && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-amber-300 flex items-center gap-1 font-heading">
                <Eye className="w-4 h-4 text-teal-400" />
                <span>Mapeamento de Conteúdo Não Textual (WCAG 1.1.1)</span>
              </h2>
              <p>
                Todos os itens interativos ou imagens decorativas devem ter tratamento textual explícito para que o software do leitor de tela (NVDA, JAWS ou VoiceOver) funcione perfeitamente.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] border-collapse border border-slate-800">
                  <thead>
                    <tr className="bg-slate-900 text-teal-300 border-b border-slate-800">
                      <th className="p-2 border-r border-slate-800">Elemento Visual</th>
                      <th className="p-2 border-r border-slate-800">Tratamento Técnico</th>
                      <th className="p-2">Texto Cadastrado /aria-label</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">Logo Central TST</td>
                      <td className="p-2 border-r border-slate-800 text-green-400 font-bold">Informativo com alt</td>
                      <td className="p-2">"Justiça do Trabalho - Tribunal Superior do Trabalho"</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">Ícones das Redes Sociais</td>
                      <td className="p-2 border-r border-slate-800 text-indigo-400 font-bold">Interactive label</td>
                      <td className="p-2">"Acessar Canal do Youtube oficial do TST", "Instagram" etc.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">Ícone decorativo dos Cards</td>
                      <td className="p-2 border-r border-slate-800 text-amber-400">Decorative / Omit</td>
                      <td className="p-2 font-mono text-slate-500">aria-hidden="true" / alt=""</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">Controle A- / A+</td>
                      <td className="p-2 border-r border-slate-800 text-indigo-400 font-bold">Interactive label</td>
                      <td className="p-2">"Aumentar tamanho do texto da tela", "Resetar fonte"</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-slate-800 font-bold text-white">Links do Sitemap footer</td>
                      <td className="p-2 border-r border-slate-800 text-indigo-400 font-bold">Textos nativos</td>
                      <td className="p-2">Auto-explicativos pelas âncoras comuns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: WCAG CHECKLIST */}
          {activeTab === "wcag" && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-amber-300 flex items-center gap-1 font-heading">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Auditoria e Mapeamento WCAG 2.2</span>
              </h2>
              <p>
                Os seguintes critérios foram rigorosamente implementados e validados no código para simulação real de conformidade:
              </p>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">1.1.1 Conteúdo Não Textual (Nível A)</p>
                  <p className="text-slate-400 text-[11px]">Todos os SVGs possuem aria-hidden, todos os botões possuem identificadores aria-label informando a ação judicial correspondente.</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">1.4.3 Contraste Mínimo (Nível AA)</p>
                  <p className="text-slate-400 text-[11px]">O azul escuro (#103d7c) possui contraste superior a 5.6:1 em relação ao fundo branco. O verde Gov.br e o amarelo possuem contrastes otimizados para total legibilidade.</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">1.4.4 Redimensionar Texto (Nível AA)</p>
                  <p className="text-slate-400 text-[11px]">Os botões A-/A+ escalonam o layout dinamicamente de 100% até 200% sem perda de sobreposição de grids e elementos.</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">1.4.11 Contraste Não-Textual (Nível AA)</p>
                  <p className="text-slate-400 text-[11px]">Todas as bordas dos cards possuem contraste mínimo de 3:1 em relação ao fundo do ecossistema governamental.</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">2.4.3 Ordem do Foco (Teclado) (Nível A)</p>
                  <p className="text-slate-400 text-[11px]">A navegação por TAB segue a leitura visual lógica, sem aprisionamento de foco (não há "keyboard trap").</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">2.4.13 Aparência do Foco (Nível AA)</p>
                  <p className="text-slate-400 text-[11px]">Os focos visuais no teclado utilizam outline amarelo/vivid de 3px com contorno duplo preto para garantir contraste em qualquer plano de fundo.</p>
                </div>

                <div className="bg-slate-900 border-l-4 border-emerald-500 p-2 text-xs">
                  <p className="font-bold text-white">2.5.8 Tamanho do Alvo (Mínimo) (Nível AA)</p>
                  <p className="text-slate-400 text-[11px]">Todos os botões interativos e âncoras na tela apresentam dimensões seguras que excedem o padrão mínimo de 24x24 pixels, evitando cliques acidentais.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer of the repasse documentation drawer */}
        <div className="p-4 bg-slate-950 border-t border-slate-900 text-center text-[10px] text-teal-400 font-bold">
          SISTEMA MVP DESENVOLVIDO EM CONSTITUIÇÃO COM SECOM CO-EDITS E TST TECNOLOGIA
        </div>

      </div>
    </div>
  );
}
