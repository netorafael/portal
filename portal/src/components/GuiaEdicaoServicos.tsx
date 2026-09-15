/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Componente que exibe a página completa do Guia de Edição de Serviços do TST em formato Accordion.
 */

import React, { useState } from "react";
import { ChevronDown, ArrowLeft, BookOpen, ExternalLink } from "lucide-react";
import { getGuiaSections } from "./GuiaDados";

interface GuiaEdicaoServicosProps {
  onBack: () => void;
  onScaleChange?: (scale: number) => void;
  scale?: number;
}

export default function GuiaEdicaoServicos({ onBack }: GuiaEdicaoServicosProps) {
  // Estado para controlar quais abas de accordion estão abertas (multi-open suportado para facilidade do usuário)
  const [activeSections, setActiveSections] = useState<Record<number, boolean>>({
    1: true, // Começa com o primeiro item aberto
  });

  const toggleSection = (id: number) => {
    setActiveSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const sections = getGuiaSections();

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 py-8 text-gray-900 font-sans" id="con-pagina-guia-completo">
      
      {/* 1. BREADCRUMB */}
      <nav aria-label="Caminho de navegação (Breadcrumb)" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-gray-650 font-sans">
          <li>
            <button 
              onClick={onBack}
              className="hover:text-[#1351b4] text-gray-650 hover:underline inline-flex items-center gap-1 focus:outline-none focus:underline cursor-pointer font-bold"
            >
              Início
            </button>
          </li>
          <li className="text-gray-400" aria-hidden="true">&rsaquo;</li>
          <li>
            <span className="text-black font-semibold cursor-default">Guia de Edição de Serviços do TST</span>
          </li>
        </ol>
      </nav>

      {/* 2. HEADER BLOCK ACCORDION PAGE */}
      <div className="bg-gradient-to-r from-slate-50 to-[#f1f5f9] rounded-2xl p-6 border-b-4 border-amber-500 shadow-sm mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6" id="cabecalho-guia-servicos">
        <div className="space-y-3.5 text-left max-w-4xl">
          <h1 className="text-xl md:text-2xl font-black text-black font-heading leading-tight" id="titulo-pagina-guia-edicao">
            Guia de Edição de Serviços do TST
          </h1>
          <p className="text-xs sm:text-[13.5px] text-gray-800 font-medium leading-relaxed font-sans">
            Olá! <strong className="text-black">Este é o Guia de edição de serviços do Tribunal Superior do Trabalho (TST)</strong> e foi inspirado no Guia do Gov.br. 
            Aqui você vai conhecer o conceito de serviço público aplicado neste portal de serviços, conhecer os critérios para identificar um serviço e aprender como descrever serviços com linguagem simples e acessível de forma que toda pessoa consiga encontrar, entender e usar as informações.
          </p>
          <p className="text-xs sm:text-[13.5px] text-gray-700 font-medium leading-relaxed font-sans mt-1">
            Este Guia está em constante evolução. Você terá papel ativo neste processo, nos mostrando onde o Guia e o Portal de Serviços podem melhorar.
          </p>
        </div>
        <button
          onClick={onBack}
          className="bg-[#1351b4] hover:bg-blue-600 hover:underline text-white font-bold text-xs py-2.5 px-4.5 rounded-lg transition-colors flex items-center gap-1.5 min-h-[44px] shrink-0 font-sans cursor-pointer focus-visible:ring-3 focus-visible:ring-amber-500"
          aria-label="Voltar para o Portal de Serviços Principal"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Portal</span>
        </button>
      </div>

      {/* 3. PROMPT SELECTION DIRECTIVE */}
      <div className="mb-6 bg-amber-50 rounded-xl p-4 border border-amber-250 flex items-start gap-2.5 animate-pulse-once" id="diretriz-inicial-guia">
        <BookOpen className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-amber-900 font-medium text-left">
          <p className="font-extrabold text-amber-950">Por onde você deseja começar?</p>
          <p className="text-xs text-amber-850 mt-0.5">Clique nos títulos dos tópicos numerados abaixo para abrir e fechar o manual interativo de cada assunto de capacitação de redação do TST.</p>
        </div>
      </div>

      {/* 4. ACCORDIONS CONTAINER */}
      <div className="space-y-4" id="secao-accordions-guia" role="region" aria-label="Tópicos de orientação do Guia de Edição">
        {sections.map((sec) => {
          const isOpen = !!activeSections[sec.id];
          return (
            <div 
              key={sec.id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border-gray-200"
              id={`bloco-guia-topico-${sec.id}`}
            >
              <h3 className="m-0 p-0 text-base">
                <button
                  type="button"
                  onClick={() => toggleSection(sec.id)}
                  aria-expanded={isOpen}
                  aria-controls={`painel-conteudo-guia-${sec.id}`}
                  id={`botao-controle-guia-${sec.id}`}
                  className={`w-full py-4.5 px-6 flex items-center justify-between gap-4 text-left font-bold hover:no-underline transition-all focus:outline-none focus-visible:ring-3 focus-visible:ring-amber-500 cursor-pointer ${isOpen ? 'bg-slate-50 text-black border-b border-gray-200' : 'bg-white text-gray-900 hover:bg-slate-50'}`}
                >
                  <span className="flex items-center gap-3 font-heading text-sm sm:text-base pr-2 select-text">
                    {sec.icon}
                    <span>{sec.title}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#1351b4] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </h3>

              {/* Collapsed Panel content */}
              <div
                id={`painel-conteudo-guia-${sec.id}`}
                role="region"
                aria-labelledby={`botao-controle-guia-${sec.id}`}
                className={`${isOpen ? 'block' : 'hidden'}`}
              >
                <div className="p-6 sm:p-8 bg-white text-xs sm:text-sm leading-relaxed whitespace-normal break-words select-text">
                  {sec.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. BOTTOM ACTIONS FOOTER */}
      <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm mb-4" id="rodape-ajuda-acesi">
        <div className="space-y-1.5 text-left">
          <h4 className="font-bold text-gray-950 text-base">Precisa de suporte personalizado na sua Unidade?</h4>
          <p className="text-xs text-gray-600 font-medium">
            Caso seu setor/secretaria no TST precise de consultoria técnica específica na reestruturação e design de redação simples para novos serviços, agende uma sessão de refinamento com a Assessoria de Acessibilidade.
          </p>
        </div>
        <a 
          href="https://www.tst.jus.br/web/acesi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#1351b4] hover:bg-blue-600 hover:underline text-white font-bold text-xs py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0 min-h-[44px] shadow-sm max-w-full focus-visible:ring-3 focus-visible:ring-amber-500 cursor-pointer text-center"
        >
          <span>Acionar Assessoria da ACESI</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
