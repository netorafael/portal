/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Youtube, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Rss
} from "lucide-react";

interface FooterProps {
  onNavigateHome: () => void;
  onOpenCartaServicos: () => void;
}

export default function Footer({ onNavigateHome, onOpenCartaServicos }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handlePartnerClick = (partner: string) => {
    alert(`Redirecionamento simulado para o portal do programa: "${partner}"`);
  };

  const sitemapLinks = [
    { label: "Sessões ao Vivo", url: "https://www.tst.jus.br/sessoes-ao-vivo" },
    { label: "Sobre o TST", url: "https://www.tst.jus.br/o-tst" },
    { label: "SIC – Serviço de Informação ao Cidadão", url: "https://www.tst.jus.br/sic" },
    { label: "Ouvidoria", url: "https://www.tst.jus.br/en/faca-sua-manifestacao" },
    { label: "Carta de Serviços à Cidadania", url: "#", isCarta: true },
    { label: "Quero Conciliar", url: "https://www.tst.jus.br/quero-conciliar" },
    { label: "Presidência", url: "https://www.tst.jus.br/presidencia" },
    { label: "Vice-Presidência - Repercussão Geral", url: "https://www.tst.jus.br/vice-presidencia" },
    { label: "Corregedoria-Geral da Justiça do Trabalho", url: "https://www.tst.jus.br/corregedoria" },
    { label: "Enamat", url: "https://www.enamat.jus.br" },
    { label: "Intranet", url: "https://www.tst.jus.br/intranet" },
    { label: "BacenJud Digital", url: "https://www.tst.jus.br/bacenjud" }
  ];

  return (
    <footer id="rodape-tst" className="w-full text-white" role="contentinfo">
      
      {/* 1. GREEN PARTNER BRAND BAR (Trabalho Seguro, PJe, etc.) */}
      <div className="bg-[#007a5e] py-3 px-4 shadow" id="barra-parceiros-tst">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-between items-center gap-y-5 gap-x-4">
          
          {/* Logo 1: Trabalho Seguro */}
          <button 
            onClick={() => handlePartnerClick("Trabalho Seguro")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Programa Trabalho Seguro"
          >
            <svg className="w-9 h-9 shrink-0 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
              <path d="M16 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM20 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"/>
              <path d="M16 23v-6m0 0h-2m2 0h2M12 24v-6M20 24v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 17c2 1 10 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold text-[11px] tracking-wide uppercase">TRABALHO</div>
              <div className="font-black text-[11px] tracking-widest uppercase text-emerald-100">SEGURO</div>
            </div>
          </button>

          {/* Logo 2: Combate ao Trabalho Infantil */}
          <button 
            onClick={() => handlePartnerClick("Combate ao Trabalho Infantil e de Estímulo à Aprendizagem")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left max-w-[210px] cursor-pointer focus:outline-none"
            aria-label="Acessar Programa de Combate ao Trabalho Infantil"
          >
            <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4v12l-8-8zM16 28V16l8 8zM28 16H16l8-8zM4 16h12l-8 8z" fill="currentColor" fillRule="evenodd" />
            </svg>
            <div className="leading-[1.1] text-[8.5px] font-extrabold font-sans">
              Programa de Combate ao<br />Trabalho Infantil e de<br />Estímulo à Aprendizagem
            </div>
          </button>

          {/* Logo 3: Enfrentamento ao Trabalho Escravo */}
          <button 
            onClick={() => handlePartnerClick("Enfrentamento ao Trabalho Escravo")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Enfrentamento ao Trabalho Escravo"
          >
            <svg className="w-8 h-8 shrink-0 text-white animate-pulse" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20a4 4 0 014-4h8a4 4 0 014 4M10 24h12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 6c1-1 4-2 6-1s2 3 1 5c-1 2-4 3-7 3s-4-2-4-4 2-2 4-3z" fill="currentColor" />
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold text-[9px] tracking-wider uppercase">ENFRENTAMENTO AO</div>
              <div className="font-black text-[10.5px] tracking-tight uppercase text-emerald-100">TRABALHO ESCRAVO</div>
            </div>
          </button>

          {/* Logo 4: Programa de Equidade */}
          <button 
            onClick={() => handlePartnerClick("Programa de Equidade")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Programa de Equidade"
          >
            <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="21" cy="13" r="3" stroke="currentColor" strokeWidth="2" />
              <circle cx="16" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
              <path d="M6 13h20M16 8v11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold text-[10px] tracking-widest uppercase">PROGRAMA</div>
              <div className="font-black text-[11px] tracking-wider uppercase text-emerald-100">DE EQUIDADE</div>
            </div>
          </button>

          {/* Logo 5: PJe */}
          <button 
            onClick={() => handlePartnerClick("PJe")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Processo Judicial Eletrônico - PJe"
          >
            <div className="font-black italic text-2xl tracking-tighter text-white">PJe</div>
            <div className="leading-[1.15] text-left text-[8px] font-extrabold border-l border-white/40 pl-2">
              Processo<br />Judicial<br />Eletrônico
            </div>
          </button>

          {/* Logo 6: Execução Trabalhista */}
          <button 
            onClick={() => handlePartnerClick("Execução Trabalhista")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Execução Trabalhista"
          >
            <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
            </svg>
            <div className="leading-tight">
              <div className="font-black text-[12px] tracking-tight uppercase">execução</div>
              <div className="font-extrabold text-[10px] tracking-wider uppercase text-emerald-100">TRABALHISTA</div>
            </div>
          </button>

          {/* Logo 7: Conciliação Trabalhista */}
          <button 
            onClick={() => handlePartnerClick("Conciliação Trabalhista")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
            aria-label="Acessar Conciliação Trabalhista"
          >
            <svg className="w-8 h-8 shrink-0 text-white" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="currentColor" opacity="0.15" />
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 18v-4h2l2-3 1.5.5v2.5h3.5s1 0 1 1-1.5 4-1.5 4H12z" fill="currentColor" />
            </svg>
            <div className="leading-tight">
              <div className="font-extrabold text-[11px] tracking-wide uppercase">Conciliação</div>
              <div className="font-black text-[11px] tracking-tight uppercase text-emerald-100">TRABALHISTA</div>
            </div>
          </button>

        </div>
      </div>

      {/* 2. CHIEF BLUE FOOTER ROW - EXACT METRIC AND BACKGROUND COLOR */}
      <div className="bg-[#134475] py-10 px-6 border-b border-blue-900" id="conteudo-principal-rodape">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Logo & corporate marking / Separated by a prominent vertical line) */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-start gap-4 lg:pr-8 lg:border-r border-white/20 py-2 h-full z-10" id="coluna-logo-rodape">
            <button 
              onClick={onNavigateHome} 
              className="flex items-center gap-3.5 focus:outline-none hover:opacity-95 transition-opacity cursor-pointer group"
              aria-label="Voltar à tela inicial do Portal de Serviços"
              id="marca-rodape"
            >
              <svg className="w-20 h-14 shrink-0" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Yellow circle accent */}
                <circle cx="28" cy="18" r="3.5" fill="#f5af0b" />
                {/* Yellow bar representing Niemeyer/Scale block */}
                <rect x="36" y="27" width="12" height="4.5" rx="1" fill="#f5af0b animate-pulse" />
                {/* Green curve bottom path */}
                <path d="M18 31c2-3 6.5-1.5 8.5 2.5s.5 8-3.5 9-6-1.5-7-5.5.5-5 2-6z" fill="#00966c" />
                {/* Soft highlight path inside the swoop */}
                <path d="M21 34c1-1.5 3.5-.5 4.5 1.5s0 4-2.5 4.5-3.5-.5-4-2.5 1-2.5 2-3.5z" fill="#22c55e" opacity="0.6" />
                {/* Clean white core post standard */}
                <path d="M28 25c0-1.5.8-2.5 2.2-2.5s2.2 1 2.2 2.5v18c0 1.5-.8 2.5-2.2 2.5s-2.2-1-2.2-2.5V25z" fill="#ffffff" />
                {/* Suffix brand logo text */}
                <text x="56" y="38" fill="#ffffff" fontSize="26" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.2">
                  TST
                </text>
              </svg>
            </button>
          </div>

          {/* Middle Column (Address, Operating Hours, Phone Contact) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-xs text-white text-left pl-0 lg:pl-4" id="coluna-contato-rodape">
            
            {/* 1. Sede e Localização */}
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-[13px] tracking-wide" id="titulo-endereco-rodape">
                  Tribunal Superior do Trabalho
                </h4>
                <address className="not-italic text-gray-200 font-medium leading-relaxed font-sans">
                  SAFS Qd. 8 Conjunto A Blocos A, B ou C<br />
                  CEP: 70.070-943
                </address>
              </div>
            </div>

            {/* 2. Horários */}
            <div className="flex gap-3 items-start">
              <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <h4 className="font-extrabold text-[13px] tracking-wide">
                  Horário de funcionamento:
                </h4>
                <p className="text-gray-200 font-medium font-sans">
                  De segunda a sexta-feira, das 9h às 19h
                </p>
              </div>
            </div>

            {/* 3. Telefone */}
            <div className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-0.5">
                <h4 className="font-extrabold text-[13px] tracking-wide">
                  Telefone: <span className="font-normal font-sans ml-1 text-gray-100 font-semibold">(61) 3043-4300</span>
                </h4>
              </div>
            </div>

          </div>

          {/* Right Column (Mapa do Site and Social Media icons directly top-aligned) */}
          <div className="lg:col-span-5 text-left" id="coluna-mapadosite-rodape">
            
            {/* Header + Social Icons row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-2 border-b border-white/10">
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white font-heading" id="mapa-site-titulo-rodape">
                Mapa do Site
              </h3>
              
              {/* Media Network Circle Stamps exactly like TST */}
              <div className="flex flex-wrap gap-1.5 items-center" id="icones-redes-tst">
                
                {/* Yellow SIC Icon */}
                <a 
                  href="https://www.tst.jus.br/sic" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f5af0b] text-[#134475] flex items-center justify-center font-serif font-black text-sm hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="SIC - Serviço de Informação ao Cidadão"
                >
                  i
                </a>

                {/* Green RSS */}
                <a 
                  href="https://www.tst.jus.br/noticias/-/asset_publisher/89D8/rss" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="RSS Feed do TST"
                >
                  <Rss className="w-4 h-4" />
                </a>

                {/* Green YouTube */}
                <a 
                  href="https://www.youtube.com/user/TST" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="YouTube Oficial"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* Green Flickr (two circles inside) */}
                <a 
                  href="https://www.flickr.com/photos/tst_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center gap-[2.5px] hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="Flickr Oficial do Tribunal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff0084]"></span>
                </a>

                {/* Green Mail envelope */}
                <a 
                  href="mailto:ouvidoria@tst.jus.br" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="Fale Conosco Ouvidoria"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* Green Facebook */}
                <a 
                  href="https://www.facebook.com/TSTJus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="Facebook Oficial"
                >
                  <Facebook className="w-4 h-4 fill-current text-white" />
                </a>

                {/* Green Instagram */}
                <a 
                  href="https://www.instagram.com/tstjus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="Instagram Oficial"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>

                {/* Green LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/tstjus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#007a5e] text-white flex items-center justify-center hover:opacity-90 shadow-sm transition-transform hover:-translate-y-0.5" 
                  aria-label="LinkedIn Institucional"
                >
                  <Linkedin className="w-4 h-4 fill-current text-white" />
                </a>

              </div>
            </div>

            {/* Sitemap Link list with inline visual chevrons */}
            <nav aria-label="Negação rápida mapa do site">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-gray-100 font-bold">
                {sitemapLinks.map((link) => (
                  <li key={link.label} className="flex items-center min-h-[22px]">
                    <span className="text-white/60 font-black mr-2 text-[13px] select-none" aria-hidden="true">&rsaquo;</span>
                    {link.isCarta ? (
                      <button
                        type="button"
                        onClick={() => {
                          onOpenCartaServicos();
                          window.scrollTo(0, 0);
                        }}
                        className="bg-transparent text-left hover:text-white hover:underline focus:outline-none cursor-pointer font-bold transition-all text-white/90"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white hover:underline transition-all text-white/90 font-medium"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

          </div>

        </div>
      </div>

    </footer>
  );
}
