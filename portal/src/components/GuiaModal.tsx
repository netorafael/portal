/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, BookOpen, AlertCircle, Sparkles, Scale, ToggleLeft } from "lucide-react";

interface GuiaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuiaModal({ isOpen, onClose }: GuiaModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 animate-fadeIn font-sans text-gray-800"
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="titulo-guia-normas"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border-2 border-amber-500"
        id="conteiner-guia-modal"
      >
        
        {/* Header of Modal */}
        <div className="p-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-amber-100" aria-hidden="true" />
            <div>
              <h2 id="titulo-guia-normas" className="text-md sm:text-lg font-bold font-heading">
                Texto de Orientações & Guia de Edição de Serviços do TST
              </h2>
              <p className="text-xs text-amber-100/90 font-medium">
                Padrões de Edição Liferay para Gestores e Donos de Serviços
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-amber-800/40 hover:bg-amber-800/80 rounded-full text-white transition min-w-[38px] min-h-[38px] flex items-center justify-center"
            aria-label="Fechar Guia de Edição"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Info panel */}
        <div className="bg-amber-50 p-4 border-b border-amber-200 flex items-start gap-2.5 text-xs text-amber-800">
          <AlertCircle className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            Este manual consolida a decisão de <span className="font-bold">Abril de 2026</span> elaborada após testes com usuários e alinhamento do Design System Gov.br. Atua como o <strong>antigo Guia de Serviços</strong>, direcionando as áreas sobre como cadastrar novos serviços.
          </p>
        </div>

        {/* Content of Guia Modal */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-gray-700 max-h-[60vh] leading-relaxed">
          
          <section className="space-y-2">
            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide border-b border-gray-100 pb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>1. Conceito do Portal de Serviços do TST</span>
            </h3>
            <p>
              O portal unifica os canais de atendimento e o portfólio de serviços do TST sob o ecossistema do <span className="font-semibold text-gray-900">GOV.BR</span>. A linguagem deve ser institucional sem ser eivada de jargões burocráticos.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide border-b border-gray-100 pb-1 flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>2. A Estrutura Visual Obrigatória (Gov.br)</span>
            </h3>
            <p>
              Qualquer página de serviço cadastrada deve cumprir rigorosamente o modelo visual do Liferay acordado com a SECOM:
            </p>
            
            <div className="bg-slate-50 rounded-lg p-3.5 border border-gray-200/80 space-y-2 text-xs">
              <p className="font-bold text-black">📌 Bloco Supervisor de Acesso Rápido:</p>
              <p className="text-gray-600">
                Os itens <span className="text-amber-800 font-semibold font-mono">Nome do Serviço</span>, <span className="text-amber-800 font-semibold font-mono">Conhecido Como</span> e o <span className="text-amber-800 font-semibold font-mono">Botão Iniciar</span> devem estar posicionados no mesmo nível visual, delimitados de forma clara com barras horizontais acima e abaixo.
              </p>

              <p className="font-bold text-black mt-2">📌 Acordeon de Detalhes Administrativos:</p>
              <ul className="list-disc pl-4 space-y-1 text-gray-600">
                <li><strong>O que é?</strong>: Resumo claro do direito ou do dever do cidadão.</li>
                <li><strong>Quem pode utilizar?</strong>: Delimitação de público alvo (Pessoa Física, OAB, etc.).</li>
                <li><strong>Outras informações</strong>: Legislação base, custos reais, telefones ou e-mails específicos de suporte.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wide border-b border-gray-100 pb-1 flex items-center gap-2">
              <ToggleLeft className="w-4 h-4 text-amber-600" aria-hidden="true" />
              <span>3. Regras de Ouro para Elaboração de Etapas</span>
            </h3>
            <p>
              As etapas são as fases necessárias para que o usuário obtenha o serviço final de forma satisfatória. Siga o roteamento técnico:
            </p>

            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-1.5 text-xs text-gray-600">
                <span className="text-amber-600 font-bold">⏱️ Verbo Primeiro:</span> 
                <span>O nome de toda etapa deve obrigatoriamente iniciar com um verbo ativo no infinitivo ou imperativo (ex.: <em>"Solicitar"</em>, <em>"Efetuar pagamento"</em>, <em>"Consultar log"</em>).</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-gray-600">
                <span className="text-amber-600 font-bold">⏱️ Canal Explicativo:</span> 
                <span>Especificar com precisão o canal imediato de contato (ex.: sistema PJe, formulário eletrônico gratuito no portal).</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-gray-600">
                <span className="text-amber-600 font-bold">⏱️ Documentação:</span> 
                <span>Informar previamente os dados ou documentos obrigatórios com precisão (ex: Certificado digital OAB, CPF, CNPJ).</span>
              </li>
              <li className="flex items-start gap-1.5 text-xs text-gray-600">
                <span className="text-amber-600 font-bold">⏱️ Estimativa de Tempo:</span> 
                <span>Informar previamente estimativas de tempo de atendimento (ex: Imediato, até 5 dias úteis, máximo de 10 dias).</span>
              </li>
            </ul>
          </section>

        </div>

        {/* Footer of Modal */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-800 font-semibold font-sans">
          Caso sua área precise de auxílio na estruturação de dados de novos serviços, acione a Assessoria de Acessibilidade (ACESI).
        </div>

      </div>
    </div>
  );
}
