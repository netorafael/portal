/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { 
  ShieldCheck, 
  Printer, 
  Download, 
  Check, 
  AlertCircle, 
  RefreshCw,
  QrCode,
  FileText,
  CheckCircle,
  FileCheck2,
  Shield,
  ArrowLeft,
  Key,
  Building,
  Info,
  ExternalLink
} from "lucide-react";
import {
  CNDTSvg,
  IndisponibilidadeSvg,
  ExercioAdvocaciaSvg,
  AndamentoProcessualSvg,
  DistribuicaoFeitosSvg,
  ObjetoPeSvg,
  DemaisCertidoesSvg,
} from "./OriginalIcons";

// ==========================================
// HIGH-DENSITY SOLID FLAT ICONS (FONT AWESOME SOLID STYLE)
// ==========================================

const PrinterSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M128 0C92.7 0 64 28.7 64 64v96h384V64c0-35.3-28.7-64-64-64H128zM19.1 192C8.6 192 0 200.6 0 211.1V320c0 17.7 14.3 32 32 32h32v96c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-96h32c17.7 0 32-14.3 32-32V211.1c0-10.5-8.6-19.1-19.1-19.1H19.1zM384 256c0-13.3 10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24zM96 352h320v128H96V352z"/>
  </svg>
);

const DownloadSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7L175.4 226.1c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l104 104c12.5 12.5 32.8 12.5 45.3 0l104-104c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-17.7 0-32 14.3-32 32v64c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V384c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 10.5-8.5 19-19 19H83c-10.5 0-19-8.5-19-19V384c0-17.7-14.3-32-32-32z"/>
  </svg>
);

const CheckCircleSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
  </svg>
);

const TimesCircleSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
  </svg>
);

const InfoCircleSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V240h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h40c13.3 0 24 10.7 24 24v120h24c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
  </svg>
);

const ExclamationCircleSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V280c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"/>
  </svg>
);

const DocumentSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
  </svg>
);

const QrCodeSolid = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor" aria-hidden="true">
    <path d="M0 224H224V0H0V224zM64 64H160V160H64V64zM224 512H448V288H224V512zM288 352H384V448H288V352zM288 224H512V0H288V224zM352 64H448V160H352V64zM0 512H224V288H0V512zM64 352H160V448H64V352z"/>
  </svg>
);

// Dynamic Service Icon Loader that utilizes our beautiful custom Solid Vectors in Portal Blue
const ServiceIcon = ({ id, className }: { id: string; className?: string }) => {
  if (id.includes("andamento")) {
    return <AndamentoProcessualSvg className={className} />;
  } else if (id.includes("arquivados")) {
    return <ObjetoPeSvg className={className} />;
  } else if (id.includes("advocacia")) {
    return <ExercioAdvocaciaSvg className={className} />;
  } else if (id.includes("indisponibilidade")) {
    return <IndisponibilidadeSvg className={className} />;
  } else {
    return <DemaisCertidoesSvg className={className} />;
  }
};

interface ServiceSimulatorProps {
  serviceId: string;
  serviceName: string;
  onOpenFeedback?: () => void;
  onNavigateToDetails?: () => void;
}

const formatCpf = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const formatCnpj = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
};

const formatProcesso = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 20);
  if (digits.length <= 7) return digits;
  if (digits.length <= 9) return `${digits.slice(0, 7)}-${digits.slice(7)}`;
  if (digits.length <= 13) return `${digits.slice(0, 7)}-${digits.slice(7, 9)}.${digits.slice(9)}`;
  if (digits.length <= 14) return `${digits.slice(0, 7)}-${digits.slice(7, 9)}.${digits.slice(9, 13)}.${digits.slice(13)}`;
  if (digits.length <= 16) return `${digits.slice(0, 7)}-${digits.slice(7, 9)}.${digits.slice(9, 13)}.${digits.slice(13, 14)}.${digits.slice(14)}`;
  return `${digits.slice(0, 7)}-${digits.slice(7, 9)}.${digits.slice(9, 13)}.${digits.slice(13, 14)}.${digits.slice(14, 16)}.${digits.slice(16)}`;
};

export default function ServiceSimulator({ serviceId, serviceName, onOpenFeedback, onNavigateToDetails }: ServiceSimulatorProps) {
  // Common states
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);

  const handleConsultarInformacoes = () => {
    if (onNavigateToDetails) {
      onNavigateToDetails();
    } else {
      window.scrollTo(0, 0);
    }
  };
  
  // State variables for forms
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [formError, setFormError] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  // States for new services
  const [objetoPeProcesso, setObjetoPeProcesso] = useState("");
  const [objetoPeSistema, setObjetoPeSistema] = useState<"pje" | "edoc">("pje");
  const [objetoPeTipo, setObjetoPeTipo] = useState("Certidão de Objeto e Pé");

  const [personalizadaNome, setPersonalizadaNome] = useState("");
  const [personalizadaDoc, setPersonalizadaDoc] = useState("");
  const [personalizadaEmail, setPersonalizadaEmail] = useState("");
  const [personalizadaTipo, setPersonalizadaTipo] = useState("Certidão de Distribuição de Feitos no TST (andamento e arquivados)");
  const [personalizadaDescricao, setPersonalizadaDescricao] = useState("");
  const [personalizadaGratuito, setPersonalizadaGratuito] = useState(true);

  const [indispSistema, setIndispSistema] = useState("PJe - Processo Judicial Eletrônico (TST)");
  const [indispDataIni, setIndispDataIni] = useState("2026-09-01");
  const [indispDataFim, setIndispDataFim] = useState("2026-09-10");
  const [indispTurno, setIndispTurno] = useState("Todos os turnos (00h às 24h)");

  const printAreaRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = printAreaRef.current?.innerHTML;
    if (!printContent) return;
    
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${serviceName} - TST</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              @media print {
                body { padding: 2cm; }
                .no-print { display: none; }
              }
              body { font-family: 'Inter', sans-serif; background: white; color: black; }
            </style>
          </head>
          <body class="p-8">
            ${printContent}
            <script>
              window.onload = function() {
                window.print();
                setTimeout(() => { window.close(); }, 505);
              }
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

   const handleEmitirSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (serviceId === "emitir-exercicio-advocacia") {
      if (!cnpj.trim()) {
        setFormError("Verifique os dados deste campo.");
        hasError = true;
      } else {
        const cleanCpf = cnpj.replace(/\D/g, "");
        if (cleanCpf.length !== 11) {
          setFormError("Verifique os dados deste campo.");
          hasError = true;
        } else {
          setFormError("");
        }
      }
    } else if (serviceId === "emitir-certidao-andamento") {
      if (!cnpj.trim()) {
        setFormError("Verifique os dados deste campo.");
        hasError = true;
      } else {
        const cleanProcesso = cnpj.replace(/\D/g, "");
        if (cleanProcesso.length !== 20) {
          setFormError("Verifique os dados deste campo.");
          hasError = true;
        } else {
          setFormError("");
        }
      }
    } else {
      if (!cnpj.trim()) {
        setFormError("Verifique os dados deste campo.");
        hasError = true;
      } else {
        const cleanCnpj = cnpj.replace(/\D/g, "");
        if (cleanCnpj.length !== 14) {
          setFormError("Verifique os dados deste campo.");
          hasError = true;
        } else {
          setFormError("");
        }
      }
    }

    if (!recaptchaChecked) {
      setCaptchaError(true);
      hasError = true;
    } else {
      setCaptchaError(false);
    }

    if (hasError) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const handleValidarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!authCode.trim()) {
      setFormError("Verifique os dados deste campo.");
      hasError = true;
    } else if (authCode.trim().length < 5) {
      setFormError("Verifique os dados deste campo.");
      hasError = true;
    } else {
      setFormError("");
    }

    if (!recaptchaChecked) {
      setCaptchaError(true);
      hasError = true;
    } else {
      setCaptchaError(false);
    }

    if (hasError) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const handleObjetoPeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!objetoPeProcesso.trim()) {
      setFormError("Informe o número do processo.");
      hasError = true;
    } else {
      const clean = objetoPeProcesso.replace(/\D/g, "");
      if (clean.length !== 20) {
        setFormError("Informe um número de processo válido (20 dígitos).");
        hasError = true;
      } else {
        setFormError("");
      }
    }

    if (!recaptchaChecked) {
      setCaptchaError(true);
      hasError = true;
    } else {
      setCaptchaError(false);
    }

    if (hasError) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const handlePersonalizadaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!personalizadaNome.trim()) {
      setFormError("Informe o nome do solicitante.");
      hasError = true;
    } else if (!personalizadaDoc.trim()) {
      setFormError("Informe o CPF ou CNPJ.");
      hasError = true;
    } else if (!personalizadaEmail.trim() || !personalizadaEmail.includes("@")) {
      setFormError("Informe um e-mail válido para contato.");
      hasError = true;
    } else if (!personalizadaDescricao.trim()) {
      setFormError("Descreva o teor do pedido da certidão.");
      hasError = true;
    } else {
      setFormError("");
    }

    if (!recaptchaChecked) {
      setCaptchaError(true);
      hasError = true;
    } else {
      setCaptchaError(false);
    }

    if (hasError) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const handleIndisponibilidadeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!indispDataIni || !indispDataFim) {
      setFormError("Selecione o período de consulta.");
      hasError = true;
    } else {
      setFormError("");
    }

    if (!recaptchaChecked) {
      setCaptchaError(true);
      hasError = true;
    } else {
      setCaptchaError(false);
    }

    if (hasError) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const resetAll = () => {
    setSuccess(false);
    setLoading(false);
    setRecaptchaChecked(false);
    setRecaptchaLoading(false);
    setCnpj("");
    setRazaoSocial("");
    setAuthCode("");
    setFormError("");
    setCaptchaError(false);
    setObjetoPeProcesso("");
    setPersonalizadaNome("");
    setPersonalizadaDoc("");
    setPersonalizadaEmail("");
    setPersonalizadaDescricao("");
  };

  // Generate a random dynamic validation key
  const randKey = React.useMemo(() => {
    return Math.floor(Math.random() * 900000000 + 100000000).toString(16).toUpperCase();
  }, [success]);

  const renderRecaptchaElement = () => {
    return (
      <div className="py-3 w-full">
        <span className="block text-xs sm:text-sm font-bold text-gray-700 font-sans tracking-wide mb-2 text-left">
          Confirme que não é um robô
        </span>
        <div className={`flex items-center justify-between border rounded-xl p-4 w-full shadow-xs select-none transition-all ${
          captchaError 
            ? "border-2 border-[#df1414] bg-red-50/10" 
            : "border-[#d3d3d3] bg-[#f9f9f9]"
        }`}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (recaptchaChecked || recaptchaLoading) return;
                setRecaptchaLoading(true);
                setTimeout(() => {
                  setRecaptchaLoading(false);
                  setRecaptchaChecked(true);
                  setFormError(""); // Clear error once checked
                  setCaptchaError(false); // Clear captcha error once checked
                }, 800);
              }}
              className={`w-6 h-6 rounded-lg border transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1351b4]/40 cursor-pointer ${
                recaptchaChecked 
                  ? "border-emerald-600 bg-emerald-50 text-emerald-600" 
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
            >
              {recaptchaLoading && (
                <svg className="w-4 h-4 text-[#1351b4] animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M21 12a9 9 0 11-6.219-8.56" />
                </svg>
              )}
              {recaptchaChecked && !recaptchaLoading && (
                <svg className="w-4 h-4 text-emerald-600 stroke-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
            <span className="text-xs font-bold text-gray-700">Não sou um robô</span>
          </div>
          <div className="flex flex-col items-center shrink-0 ml-4">
            <div className="text-xl leading-none select-none">🤖</div>
            <span className="text-[8px] text-gray-400 font-extrabold tracking-tight uppercase leading-none mt-1">reCAPTCHA</span>
            <div className="flex gap-1 text-[7px] text-gray-400 mt-0.5 font-bold">
              <span className="hover:underline cursor-pointer">Privacidade</span>
              <span>-</span>
              <span className="hover:underline cursor-pointer">Termos</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getHeaderTitle = () => {
    switch (serviceId) {
      case "emitir-certidao-andamento":
        return "Emitir Certidão de Histórico do Andamento Processual";
      case "validar-certidao-andamento":
        return "Validar Certidão de Histórico do Andamento Processual";
      case "emitir-certidao-arquivados":
        return "Emitir Certidão de Processos em Tramitação no TST";
      case "validar-certidao-arquivados":
        return "Validar Certidão de Processos em Tramitação no TST";
      case "emitir-exercicio-advocacia":
        return "Emitir Certidão de Exercício da Advocacia";
      case "validar-exercicio-advocacia":
        return "Validar Certidão de Exercício da Advocacia";
      case "pedir-certidao-objeto-pe":
        return "Pedir Certidão de Objeto e Pé";
      case "pedir-certidao-personalizada":
        return "Pedir Certidão Processual Personalizada";
      case "consultar-indisponibilidade":
        return "Consultar Indisponibilidade de Sistemas";
      default:
        return serviceId.startsWith("emitir") ? "Emitir Certidão" : "Autenticidade de Certidões";
    }
  };

  const getHeaderSubtitle = (): React.ReactNode => {
    switch (serviceId) {
      case "emitir-certidao-andamento":
        return "Preencha o Número do Processo abaixo para emitir a certidão de andamento processual perante o TST.";
      case "validar-certidao-andamento":
      case "validar-certidao-arquivados":
      case "validar-exercicio-advocacia":
        return "Confirme a validade de documentos emitidos pelo Tribunal Superior do Trabalho através do código verificador. O código pode ser encontrado no início da certidão.";
      case "emitir-certidao-arquivados":
        return "Preencha o CNPJ abaixo para emitir a certidão de processos em andamento perante o TST.";
      case "emitir-exercicio-advocacia":
        return "Preencha o CPF abaixo para emitir a certidão judicial que comprova a atuação e o efetivo exercício da advocacia em processos perante o TST.";
      case "pedir-certidao-objeto-pe":
        return "O pedido de certidão de objeto e pé deve ser enviado dentro do próprio processo judicial.";
      case "pedir-certidao-personalizada":
        return "Solicite certidão sobre processos do TST que não possuam sistema próprio de emissão automática.";
      case "consultar-indisponibilidade":
        return "Consulte os períodos de indisponibilidade dos sistemas do TST e emita a certidão correspondente.";
      default:
        return serviceId.startsWith("emitir")
          ? "Preencha os dados solicitados. O processamento é imediato, gratuito e digital."
          : "Confirme a validade de documentos emitidos pelo Tribunal Superior do Trabalho através do código verificador.";
    }
  };

  return (
    <>
      <div className={`bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-10 mb-8 text-left space-y-8 ${
        !success ? "max-w-xl mx-auto w-full" : "w-full"
      }`} id="container-modulo-simulador">
      
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center space-y-3" id="loader-emissao">
          <svg className="w-8 h-8 text-[#1351b4] animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M21 12a9 9 0 11-6.219-8.56" />
          </svg>
          <p className="text-xs font-bold text-gray-700 animate-pulse font-sans">
            Consultando registros oficiais da Justiça do Trabalho...
          </p>
        </div>
      )}

      {!loading && !success && (
        <div id="formulario-simulador" className="animate-fadeIn w-full">
          {/* Emitters (emitir-certidao-andamento / emitir-certidao-arquivados / emitir-exercicio-advocacia) */}
          {(serviceId === "emitir-certidao-andamento" || serviceId === "emitir-certidao-arquivados" || serviceId === "emitir-exercicio-advocacia") ? (
            <form onSubmit={handleEmitirSubmit} className="space-y-6">
              {/* Title inside card */}
              <div className="text-left pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                  {serviceId === "emitir-exercicio-advocacia" 
                    ? "Informe o CPF" 
                    : serviceId === "emitir-certidao-andamento"
                    ? "Informe o Número do Processo"
                    : "Informe o CNPJ"}
                </h3>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="input-cnpj" className="text-xs sm:text-sm font-bold text-gray-700 font-sans tracking-wide">
                  {serviceId === "emitir-exercicio-advocacia" 
                    ? "CPF" 
                    : serviceId === "emitir-certidao-andamento"
                    ? "Número do Processo"
                    : "CNPJ"}
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="input-cnpj"
                    placeholder={
                      serviceId === "emitir-exercicio-advocacia" 
                        ? "Digite o CPF" 
                        : serviceId === "emitir-certidao-andamento"
                        ? "Digite o número do processo"
                        : "Digite o CNPJ"
                    }
                    value={cnpj}
                    onChange={(e) => {
                      const val = e.target.value;
                      const formatted = 
                        serviceId === "emitir-exercicio-advocacia" 
                          ? formatCpf(val) 
                          : serviceId === "emitir-certidao-andamento"
                          ? formatProcesso(val)
                          : formatCnpj(val);
                      setCnpj(formatted);
                      if (formError) setFormError("");
                    }}
                    className={`w-full text-sm font-semibold px-4 py-3 border rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#df8d00] focus-visible:outline-offset-2 text-gray-800 bg-white shadow-xs transition-all font-sans ${
                      formError 
                        ? "border-2 border-[#df1414]" 
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>
              
              {formError && (
                <div className="text-left animate-fadeIn">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#df1414] shrink-0">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <span>{formError}</span>
                  </div>
                </div>
              )}
              
              <div className="w-full">
                {renderRecaptchaElement()}
              </div>
              
              {captchaError && (
                <div className="text-left animate-fadeIn -mt-1 mb-2">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#df1414] shrink-0">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <span>Marque o campo não sou um robô</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-extrabold text-sm py-3.5 px-8 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#df8d00] focus-visible:outline-offset-2 cursor-pointer min-h-[46px] flex items-center justify-center shadow-md font-sans active:scale-[0.98]"
                >
                  <span>Emitir Certidão</span>
                </button>
              </div>
            </form>
          ) : serviceId === "pedir-certidao-objeto-pe" ? (
            /* Objeto e Pé Form */
            <form onSubmit={handleObjetoPeSubmit} className="space-y-6">
              <div className="text-left space-y-1.5 pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                  Solicitação de Certidão de Objeto e Pé
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  O pedido deve ser protocolado nos autos do processo em que a certidão é requerida.
                </p>
              </div>

              {/* Informative Alert */}
              <div className="bg-[#e3eeff] border border-[#1351b4]/20 rounded-xl p-4 text-xs sm:text-sm text-gray-800 space-y-2">
                <p className="font-bold text-[#1351b4] flex items-center gap-1.5">
                  <Info className="w-4 h-4 shrink-0" />
                  Onde tramita o seu processo no TST?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setObjetoPeSistema("pje")}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      objetoPeSistema === "pje"
                        ? "border-[#1351b4] bg-white shadow-xs ring-2 ring-[#1351b4]/30"
                        : "border-gray-300 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-900">Processos Eletrônicos (PJe)</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Peticionamento via sistema PJe do TST</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setObjetoPeSistema("edoc")}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      objetoPeSistema === "edoc"
                        ? "border-[#1351b4] bg-white shadow-xs ring-2 ring-[#1351b4]/30"
                        : "border-gray-300 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-900">Processos e-SIJ / Físicos</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Peticionamento via e-Doc ou balcão</p>
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="input-objeto-processo" className="text-xs sm:text-sm font-bold text-gray-700 font-sans tracking-wide">
                  Número Único do Processo (CNJ)
                </label>
                <input 
                  type="text" 
                  id="input-objeto-processo"
                  placeholder="0000000-00.0000.5.00.0000"
                  value={objetoPeProcesso}
                  onChange={(e) => {
                    setObjetoPeProcesso(formatProcesso(e.target.value));
                    if (formError) setFormError("");
                  }}
                  className={`w-full text-sm font-semibold px-4 py-3 border rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#df8d00] focus-visible:outline-offset-2 text-gray-800 bg-white shadow-xs transition-all font-sans ${
                    formError ? "border-2 border-[#df1414]" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="select-objeto-tipo" className="text-xs sm:text-sm font-bold text-gray-700 font-sans tracking-wide">
                  Modalidade da Certidão
                </label>
                <select
                  id="select-objeto-tipo"
                  value={objetoPeTipo}
                  onChange={(e) => setObjetoPeTipo(e.target.value)}
                  className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-0 text-gray-800 bg-white shadow-xs"
                >
                  <option value="Certidão de Objeto e Pé">Certidão de Objeto e Pé</option>
                  <option value="Certidão Narrativa">Certidão Narrativa</option>
                  <option value="Certidão de Inteiro Teor">Certidão de Inteiro Teor</option>
                </select>
              </div>

              {formError && (
                <div className="text-left animate-fadeIn">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>{formError}</span>
                  </div>
                </div>
              )}

              <div className="w-full">
                {renderRecaptchaElement()}
              </div>

              {captchaError && (
                <div className="text-left animate-fadeIn -mt-1 mb-2">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>Marque o campo não sou um robô</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  type="submit"
                  className="flex-1 bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-extrabold text-sm py-3.5 px-6 rounded-full transition-all cursor-pointer min-h-[46px] flex items-center justify-center shadow-md font-sans"
                >
                  <span>Registrar Solicitação</span>
                </button>
                {objetoPeSistema === "pje" ? (
                  <a
                    href="https://pje.tst.jus.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border border-[#1351b4] text-[#1351b4] hover:bg-blue-50 font-bold text-xs py-3.5 px-4 rounded-full transition-all flex items-center justify-center gap-1.5 min-h-[46px] text-center"
                  >
                    <span>Acessar PJe do TST</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href="https://www.tst.jus.br/en/e-doc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white border border-[#1351b4] text-[#1351b4] hover:bg-blue-50 font-bold text-xs py-3.5 px-4 rounded-full transition-all flex items-center justify-center gap-1.5 min-h-[46px] text-center"
                  >
                    <span>Acessar Sistema e-Doc</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </form>
          ) : serviceId === "pedir-certidao-personalizada" ? (
            /* Certidão Personalizada Form */
            <form onSubmit={handlePersonalizadaSubmit} className="space-y-6">
              <div className="text-left space-y-1.5 pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                  Formulário de Solicitação de Certidão Processual
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  Para processos do TST que não contam com sistema informatizado próprio para emissão automática. Prazo: até 15 dias úteis.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="input-pers-nome" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                    Nome Completo do Solicitante *
                  </label>
                  <input
                    type="text"
                    id="input-pers-nome"
                    placeholder="Digite seu nome completo"
                    value={personalizadaNome}
                    onChange={(e) => {
                      setPersonalizadaNome(e.target.value);
                      if (formError) setFormError("");
                    }}
                    className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="input-pers-doc" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                      CPF ou CNPJ *
                    </label>
                    <input
                      type="text"
                      id="input-pers-doc"
                      placeholder="CPF ou CNPJ"
                      value={personalizadaDoc}
                      onChange={(e) => {
                        setPersonalizadaDoc(e.target.value);
                        if (formError) setFormError("");
                      }}
                      className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="input-pers-email" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                      E-mail para Envio da Certidão *
                    </label>
                    <input
                      type="email"
                      id="input-pers-email"
                      placeholder="seu.email@exemplo.com"
                      value={personalizadaEmail}
                      onChange={(e) => {
                        setPersonalizadaEmail(e.target.value);
                        if (formError) setFormError("");
                      }}
                      className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="select-pers-tipo" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                    Tipo de Certidão Desejada *
                  </label>
                  <select
                    id="select-pers-tipo"
                    value={personalizadaTipo}
                    onChange={(e) => setPersonalizadaTipo(e.target.value)}
                    className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                  >
                    <option value="Certidão de Distribuição de Feitos no TST (andamento e arquivados)">Certidão de Distribuição de Feitos no TST (andamento e arquivados)</option>
                    <option value="Certidão Judicial de Exercício da Advocacia personalizada">Certidão Judicial de Exercício da Advocacia personalizada</option>
                    <option value="Certidão de Processos Baixados ou Arquivados">Certidão de Processos Baixados ou Arquivados</option>
                    <option value="Outras certidões processuais sem sistema automatizado">Outras certidões processuais sem sistema automatizado</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="textarea-pers-desc" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                    Descrição Detalhada do Pedido *
                  </label>
                  <textarea
                    id="textarea-pers-desc"
                    rows={3}
                    placeholder="Especifique com clareza o objeto da certidão, partes envolvidas ou finalidade..."
                    value={personalizadaDescricao}
                    onChange={(e) => {
                      setPersonalizadaDescricao(e.target.value);
                      if (formError) setFormError("");
                    }}
                    className="w-full text-sm font-medium px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-gray-200 rounded-xl text-left space-y-2">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={personalizadaGratuito}
                      onChange={(e) => setPersonalizadaGratuito(e.target.checked)}
                      className="mt-0.5 rounded text-[#1351b4] focus:ring-0"
                    />
                    <span className="text-xs text-gray-700 font-medium">
                      Declaro que este pedido destina-se à <strong>defesa de direitos ou esclarecimento de situações de interesse pessoal</strong> (Gratuidade assegurada pelo art. 5º, XXXIV, 'b' da CF/88).
                    </span>
                  </label>
                </div>
              </div>

              {formError && (
                <div className="text-left animate-fadeIn">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>{formError}</span>
                  </div>
                </div>
              )}

              <div className="w-full">
                {renderRecaptchaElement()}
              </div>

              {captchaError && (
                <div className="text-left animate-fadeIn -mt-1 mb-2">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>Marque o campo não sou um robô</span>
                  </div>
                </div>
              )}

              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-extrabold text-sm py-3.5 px-8 rounded-full transition-all cursor-pointer min-h-[46px] flex items-center justify-center shadow-md font-sans active:scale-[0.98]"
                >
                  <span>Enviar Solicitação de Certidão</span>
                </button>
              </div>
            </form>
          ) : serviceId === "consultar-indisponibilidade" ? (
            /* Indisponibilidade Form */
            <form onSubmit={handleIndisponibilidadeSubmit} className="space-y-6">
              <div className="text-left space-y-1.5 pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                  Consulta de Indisponibilidade de Sistemas
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">
                  Consulte os registros de falhas ou manutenções e emita a respectiva certidão oficial comprobatória.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="select-indisp-sistema" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                    Selecione o Sistema do TST *
                  </label>
                  <select
                    id="select-indisp-sistema"
                    value={indispSistema}
                    onChange={(e) => setIndispSistema(e.target.value)}
                    className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                  >
                    <option value="PJe - Processo Judicial Eletrônico (TST)">PJe - Processo Judicial Eletrônico (TST)</option>
                    <option value="CNDT - Certidão Nacional de Débitos Trabalhistas">CNDT - Certidão Nacional de Débitos Trabalhistas</option>
                    <option value="DEJT - Diário Eletrônico da Justiça do Trabalho">DEJT - Diário Eletrônico da Justiça do Trabalho</option>
                    <option value="e-Doc - Peticionamento Eletrônico">e-Doc - Peticionamento Eletrônico</option>
                    <option value="SIMBA - Investigação de Movimentações Bancárias">SIMBA - Investigação de Movimentações Bancárias</option>
                    <option value="SEI - Sistema Eletrônico de Informações">SEI - Sistema Eletrônico de Informações</option>
                    <option value="Visualização de Autos">Visualização de Autos</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="input-indisp-ini" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                      Data Inicial do Período *
                    </label>
                    <input
                      type="date"
                      id="input-indisp-ini"
                      value={indispDataIni}
                      onChange={(e) => {
                        setIndispDataIni(e.target.value);
                        if (formError) setFormError("");
                      }}
                      className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label htmlFor="input-indisp-fim" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                      Data Final do Período *
                    </label>
                    <input
                      type="date"
                      id="input-indisp-fim"
                      value={indispDataFim}
                      onChange={(e) => {
                        setIndispDataFim(e.target.value);
                        if (formError) setFormError("");
                      }}
                      className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="select-indisp-turno" className="text-xs sm:text-sm font-bold text-gray-700 font-sans">
                    Horário / Turno de Interesse
                  </label>
                  <select
                    id="select-indisp-turno"
                    value={indispTurno}
                    onChange={(e) => setIndispTurno(e.target.value)}
                    className="w-full text-sm font-semibold px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-800 bg-white shadow-xs"
                  >
                    <option value="Todos os turnos (00h às 24h)">Todos os turnos (00h às 24h)</option>
                    <option value="Manhã (06h às 12h)">Manhã (06h às 12h)</option>
                    <option value="Tarde (12h às 18h)">Tarde (12h às 18h)</option>
                    <option value="Noite (18h às 24h)">Noite (18h às 24h)</option>
                  </select>
                </div>
              </div>

              {formError && (
                <div className="text-left animate-fadeIn">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>{formError}</span>
                  </div>
                </div>
              )}

              <div className="w-full">
                {renderRecaptchaElement()}
              </div>

              {captchaError && (
                <div className="text-left animate-fadeIn -mt-1 mb-2">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <span>Marque o campo não sou um robô</span>
                  </div>
                </div>
              )}

              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-extrabold text-sm py-3.5 px-8 rounded-full transition-all cursor-pointer min-h-[46px] flex items-center justify-center shadow-md font-sans active:scale-[0.98]"
                >
                  <span>Consultar e Emitir Certidão</span>
                </button>
              </div>
            </form>
          ) : (
            /* Validators (validar-certidao-andamento / validar-certidao-arquivados / validar-exercicio-advocacia) */
            <form onSubmit={handleValidarSubmit} className="space-y-6">
              {/* Title and Subtitle inside card */}
              <div className="text-left space-y-1.5 pb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                  Informe o Código de Autenticidade
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-sans font-medium leading-relaxed">
                  O código pode ser encontrado no início da certidão.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="input-auth" className="text-xs sm:text-sm font-bold text-gray-700 font-sans tracking-wide">
                  Código de Autenticidade
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="input-auth"
                    placeholder="Digite o código de autenticidade"
                    value={authCode}
                    onChange={(e) => {
                      setAuthCode(e.target.value);
                      if (formError) setFormError("");
                    }}
                    className={`w-full text-sm font-semibold px-4 py-3 border rounded-xl focus:outline-none focus:ring-0 focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#df8d00] focus-visible:outline-offset-2 text-gray-800 bg-white shadow-xs transition-all font-sans ${
                      formError 
                        ? "border-2 border-[#df1414]" 
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>
              
              {formError && (
                <div className="text-left animate-fadeIn">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#df1414] shrink-0">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <span>{formError}</span>
                  </div>
                </div>
              )}
              
              <div className="w-full">
                {renderRecaptchaElement()}
              </div>
              
              {captchaError && (
                <div className="text-left animate-fadeIn -mt-1 mb-2">
                  <div className="bg-[#df1414] text-white py-1.5 px-3 flex items-center gap-2 text-sm font-sans font-semibold rounded shadow-xs inline-flex">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#df1414] shrink-0">
                      <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                    <span>Marque o campo não sou um robô</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="w-full bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-extrabold text-sm py-3.5 px-8 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[#df8d00] focus-visible:outline-offset-2 cursor-pointer min-h-[46px] flex items-center justify-center shadow-md font-sans active:scale-[0.98]"
                >
                  <span>Validar Certidão</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* SUCCESS: Beautiful official document preview ready to display and print */}
      {!loading && success && (
        <div className="animate-fadeIn space-y-6" id="bloco-resultado-certidao">
          
          {/* Success Alert aligned with the Official Gov.br and Guide patterns */}
          <div className="bg-[#e5f6ed] border border-emerald-100 rounded-2xl p-5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 no-print shadow-xs transition-all hover:shadow-sm" id="feedback-emissao-valido">
            <div className="flex items-start gap-3.5 text-gray-950 text-xs sm:text-sm text-left">
              <div className="w-6 h-6 rounded-full bg-[#168821] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                <svg className="w-3.5 h-3.5 text-white stroke-[4px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-gray-800 text-sm sm:text-base leading-snug font-sans">
                  <strong className="font-bold text-gray-800 font-sans">Sucesso.</strong> {
                    serviceId.startsWith("emitir") 
                      ? "Certidão Expedida com Sucesso!" 
                      : serviceId.startsWith("validar") 
                      ? "Validação Concluída com Sucesso!" 
                      : serviceId.startsWith("pedir")
                      ? "Solicitação Registrada com Sucesso!"
                      : "Certidão de Indisponibilidade Gerada com Sucesso!"
                  }
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0 w-full lg:w-auto mt-2 lg:mt-0 justify-end">
              <button 
                onClick={handlePrint}
                className="bg-[#168821] hover:bg-[#106218] hover:underline text-white text-xs font-extrabold py-2.5 px-4  rounded-xl flex items-center gap-1.5 transition-all cursor-pointer min-h-[40px] active:scale-95 shadow-xs font-sans"
              >
                <PrinterSolid className="w-4 h-4 text-white" /> Imprimir Documento
              </button>
              {onOpenFeedback && (
                <button 
                  onClick={onOpenFeedback}
                  className="bg-[#d93a1e] hover:bg-[#c02a10] hover:underline text-white text-xs font-extrabold py-2.5 px-4 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer min-h-[40px] active:scale-95 shadow-xs font-sans"
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM12 15C10.1 15 8.5 13.8 7.8 12H16.2C15.5 13.8 13.9 15 12 15Z"/>
                  </svg>
                  Opinião / Feedback
                </button>
              )}
              <button 
                onClick={resetAll}
                className="bg-white border border-gray-300 hover:bg-gray-50 hover:text-black hover:underline text-gray-750 text-xs font-extrabold py-2.5 px-4 rounded-xl transition-all cursor-pointer min-h-[40px] shadow-xs font-sans"
              >
                {serviceId.startsWith("emitir") ? "Nova Emissão" : serviceId.startsWith("validar") ? "Nova Validação" : serviceId.startsWith("pedir") ? "Nova Solicitação" : "Nova Consulta"}
              </button>
            </div>
          </div>

          {/* PAPER RENDER CANVAS (Official styling mimicking real government cert) */}
          <div 
            ref={printAreaRef}
            className="border border-gray-350 p-6 sm:p-10 bg-white text-black text-left shadow-lg relative font-sans text-xs max-w-3xl mx-auto space-y-8" 
            id="folha-expedicao-tst"
            style={{ minHeight: "500px" }}
          >
            {/* BRAZIL COAT OF ARMS MOCK AND OFFICIAL HEADING */}
            <div className="text-center space-y-2 flex flex-col items-center border-b border-gray-300 pb-6">
              <div id="republica-federativa-logo" className="text-3xl font-bold shrink-0 leading-none">
                🏛️
              </div>
              <div className="space-y-0.5 text-center">
                <p className="text-gray-900 font-extrabold tracking-wide text-[11px] uppercase">Poder Judiciário da União</p>
                <p className="text-black font-black tracking-wide text-xs sm:text-sm uppercase font-heading">Tribunal Superior do Trabalho - TST</p>
                <p className="text-gray-500 font-bold text-[9px] uppercase font-mono">Secretaria Judiciária Geral do Tribunal</p>
              </div>
            </div>

            {/* DOCUMENT TITLE AND BODY */}
            {serviceId === "emitir-certidao-andamento" && (
              <div className="space-y-6" id="corpo-certidao-andamento">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Certidão de Histórico do Andamento Processual
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    Certifica-se que, sob o manto da legislação processual em vigor, as bases sistêmicas judiciais do Tribunal Superior do Trabalho (TST) indicam o seguinte status de tramitação para o processo consultado:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-1 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Número do Processo:</strong> {cnpj || "0000104-82.2025.5.00.0000"}</p>
                    <p><strong>Partes:</strong> SINDICATO DOS EMPREGADOS DO COMERCIO vs BANCO DO BRASIL S.A.</p>
                    <p><strong>Fase Atual:</strong> Em andamento no TST (Recurso de Revista)</p>
                    <p><strong>Órgão Julgador:</strong> 3ª Turma do TST</p>
                    <p><strong>Relator:</strong> Min. Aloysio Corrêa da Veiga</p>
                  </div>
                  <p>
                    Esta certidão destina-se a atestar a existência de processos sob tramitação regular nas instâncias recursais perante esta Alta Corte Trabalhista.
                  </p>
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 text-black font-extrabold text-center tracking-wide uppercase text-xs font-sans">
                     SITUAÇÃO ATUAL: EM TRAMITAÇÃO ATIVA NO TST
                  </div>
                </div>
              </div>
            )}

            {serviceId === "validar-certidao-andamento" && (
              <div className="space-y-6" id="corpo-validar-andamento">
                <div className="text-center">
                  <h2 className="text-sm font-black text-emerald-900 tracking-wider uppercase border-b border-emerald-200 pb-2 font-heading">
                    Validação de Certidão de Histórico do Andamento Processual
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <div className="bg-[#e5f6ed] border border-emerald-100 rounded-lg p-4 space-y-2 text-left">
                    <p className="text-gray-950 font-bold flex items-center gap-1.5 text-sm font-sans">
                      <span className="w-4 h-4 rounded-full bg-[#168821] flex items-center justify-center text-white text-[9px] shrink-0 font-bold">✓</span>
                      <span>DOCUMENTO VÁLIDO E AUTÊNTICO</span>
                    </p>
                    <p className="text-xs text-gray-850 leading-relaxed font-sans">
                      Confirmamos que a certidão de código de autenticidade <strong>{authCode}</strong> foi devidamente emitida em 22/07/2026 e possui pleno vigor legal no Portal de Serviços Judiciais do TST.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 border p-3.5 rounded text-xs space-y-1">
                    <p><strong>Código Consultado:</strong> {authCode}</p>
                    <p><strong>Tipo de Documento:</strong> Certidão de Histórico do Andamento Processual</p>
                    <p><strong>Processo Consultado:</strong> 0000104-82.2025.5.00.0000</p>
                    <p><strong>Status de Validade:</strong> Ativo, sem rasuras ou alterações registradas.</p>
                  </div>
                </div>
              </div>
            )}

            {serviceId === "emitir-certidao-arquivados" && (
              <div className="space-y-6" id="corpo-certidao-arquivados">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Certidão de Processos em Tramitação no TST
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    Certifica-se, de acordo com os registros oficiais do sistema de acompanhamento processual unificado do Tribunal Superior do Trabalho (TST), que constam os seguintes processos em andamento (tramitação ativa) nesta Corte para a empresa identificada:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-2 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Nome / Razão Social:</strong> {razaoSocial || "DISTRIBUIDORA DE ALIMENTOS BRASIL LTDA."}</p>
                    <p><strong>CNPJ da Empresa:</strong> {cnpj || "98.765.432/0001-00"}</p>
                    <div className="border-t border-gray-200 pt-2 mt-2 space-y-1.5 text-xs">
                      <p className="font-semibold text-gray-900">Relação de Processos em Tramitação:</p>
                      <p>• <strong>TST-RR-0010928-11.2024.5.00.0000</strong> - Relator: Min. Aloysio Corrêa da Veiga</p>
                      <p>• <strong>TST-AIRR-0000451-92.2025.5.00.0000</strong> - Relator: Min. Maria Helena Mallmann</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 italic font-sans">
                    Esta certidão atesta exclusivamente os processos ativos em tramitação perante as turmas e seções deste Tribunal na data da sua emissão.
                  </p>
                </div>
              </div>
            )}

            {serviceId === "validar-certidao-arquivados" && (
              <div className="space-y-6" id="corpo-validar-arquivados">
                <div className="text-center">
                  <h2 className="text-sm font-black text-emerald-900 tracking-wider uppercase border-b border-emerald-200 pb-2 font-heading">
                    Validação de Certidão de Processos em Tramitação no TST
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <div className="bg-[#e5f6ed] border border-emerald-100 rounded-lg p-4 space-y-2 text-left">
                    <p className="text-gray-950 font-bold flex items-center gap-1.5 text-sm font-sans">
                      <span className="w-4 h-4 rounded-full bg-[#168821] flex items-center justify-center text-white text-[9px] shrink-0 font-bold">✓</span>
                      <span>DOCUMENTO VÁLIDO E AUTÊNTICO</span>
                    </p>
                    <p className="text-xs text-gray-850 leading-relaxed font-sans">
                      Confirmamos que a certidão de código de autenticidade <strong>{authCode}</strong> foi devidamente expedida em 22/07/2026 e possui pleno valor de prova em nossa base de registros ativos e em andamento.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 border p-3.5 rounded text-xs space-y-1">
                    <p><strong>Código Consultado:</strong> {authCode}</p>
                    <p><strong>Tipo de Documento:</strong> Certidão de Processos em Tramitação no TST</p>
                    <p><strong>Empresa Beneficiária:</strong> DISTRIBUIDORA DE ALIMENTOS BRASIL LTDA. (CNPJ: 98.765.432/0001-00)</p>
                    <p><strong>Status de Validade:</strong> Autêntico, tramitação ativa confirmada no TST.</p>
                  </div>
                </div>
              </div>
            )}

            {serviceId === "emitir-exercicio-advocacia" && (
              <div className="space-y-6" id="corpo-certidao-exercicio-advocacia">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Certidão Judicial de Exercício da Advocacia
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    Certifica-se, para os devidos fins de direito, sob as atribuições e registros sistêmicos unificados do Tribunal Superior do Trabalho (TST), que constam atuações regulares e efetivo exercício da advocacia para o profissional ou sociedade identificada:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-1 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Nome do Profissional / Advogado:</strong> {razaoSocial || "DR. ALEXANDRE SILVA DE ALMEIDA"}</p>
                    <p><strong>CPF do Advogado:</strong> {cnpj || "123.456.789-00"}</p>
                    <p><strong>Número de Processos Ativos no TST:</strong> 17 processos em andamento</p>
                    <p><strong>Último Processo com Atuação:</strong> TST-RR-0000342-45.2025.5.00.0000</p>
                    <p><strong>Órgão Julgador Coordenador:</strong> Secretaria Geral Judiciária (SEGJUD)</p>
                  </div>
                  <p>
                    Esta certidão atesta a participação ativa e formal em atos processuais nesta egrégia Corte Trabalhista, servindo de prova para os fins do artigo 5º do Estatuto da Advocacia (Lei nº 8.906/1994) e regulamentações do Conselho Federal da OAB.
                  </p>
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 text-black font-extrabold text-center tracking-wide uppercase text-xs font-sans">
                     SITUAÇÃO ATUAL: EXERCÍCIO ATIVO E ATUAÇÃO REGULAR CONFIRMADA
                  </div>
                </div>
              </div>
            )}

            {serviceId === "validar-exercicio-advocacia" && (
              <div className="space-y-6" id="corpo-validar-exercicio-advocacia">
                <div className="text-center">
                  <h2 className="text-sm font-black text-emerald-900 tracking-wider uppercase border-b border-emerald-200 pb-2 font-heading">
                    Validação de Certidão Judicial de Exercício da Advocacia
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <div className="bg-[#e5f6ed] border border-emerald-100 rounded-lg p-4 space-y-2 text-left">
                    <p className="text-gray-950 font-bold flex items-center gap-1.5 text-sm font-sans">
                      <span className="w-4 h-4 rounded-full bg-[#168821] flex items-center justify-center text-white text-[9px] shrink-0 font-bold">✓</span>
                      <span>DOCUMENTO VÁLIDO E AUTÊNTICO</span>
                    </p>
                    <p className="text-xs text-gray-850 leading-relaxed font-sans">
                      Confirmamos que a Certidão Judicial de Exercício da Advocacia sob código de autenticidade <strong>{authCode}</strong> foi devidamente expedida em 08/07/2026 e possui pleno vigor de fé pública no Portal do TST.
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 border p-3.5 rounded text-xs space-y-1">
                    <p><strong>Código Consultado:</strong> {authCode}</p>
                    <p><strong>Tipo de Documento:</strong> Certidão de Exercício da Advocacia (SEGJUD)</p>
                    <p><strong>Profissional Beneficiário:</strong> DR. ALEXANDRE SILVA DE ALMEIDA (CPF: {cnpj || "123.456.789-00"})</p>
                    <p><strong>Status de Validade:</strong> Autêntico, sem quaisquer rasuras ou alterações de conteúdo registradas.</p>
                  </div>
                </div>
              </div>
            )}

            {serviceId === "pedir-certidao-objeto-pe" && (
              <div className="space-y-6" id="corpo-objeto-pe">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Comprovante de Solicitação de Certidão de Objeto e Pé
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    Certifica-se o registro da solicitação de <strong>{objetoPeTipo}</strong> protocolada no Tribunal Superior do Trabalho para o processo indicado abaixo:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-1.5 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Número do Processo (CNJ):</strong> {objetoPeProcesso || "0000123-45.2023.5.00.0000"}</p>
                    <p><strong>Canal / Sistema:</strong> {objetoPeSistema === "pje" ? "PJe - Processo Judicial Eletrônico" : "e-SIJ / e-Doc / Balcão NCP"}</p>
                    <p><strong>Tipo Requerido:</strong> {objetoPeTipo}</p>
                    <p><strong>Órgão Competente:</strong> Secretaria do Órgão Julgador do Processo no TST</p>
                    <p><strong>Prazo Regulamentar:</strong> Até 15 (quinze) dias úteis</p>
                    <p><strong>Custo:</strong> Gratuito</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 text-xs space-y-1">
                    <p className="font-bold">Orientações de Acompanhamento:</p>
                    <p>
                      O andamento desta solicitação pode ser consultado diretamente na aba de movimentações do processo ou pelo Balcão Virtual da SEGJUD. A certidão será juntada aos autos assim que confeccionada.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {serviceId === "pedir-certidao-personalizada" && (
              <div className="space-y-6" id="corpo-personalizada">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Protocolo de Solicitação de Certidão Processual Personalizada
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    Registramos com sucesso o recebimento da solicitação de certidão perante a <strong>Secretaria Geral Judiciária (SEGJUD)</strong> do Tribunal Superior do Trabalho:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-1.5 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Número de Protocolo:</strong> TST-SEGJUD-2026-{randKey}</p>
                    <p><strong>Solicitante:</strong> {personalizadaNome || "Cidadão / Advogado Cadastrado"}</p>
                    <p><strong>CPF / CNPJ:</strong> {personalizadaDoc || "000.000.000-00"}</p>
                    <p><strong>E-mail de Destino:</strong> {personalizadaEmail || "contato@exemplo.jus.br"}</p>
                    <p><strong>Tipo Solicitado:</strong> {personalizadaTipo}</p>
                    <p><strong>Descrição do Pedido:</strong> {personalizadaDescricao || "Solicitação de certidão nos termos regulamentares da SEGJUD."}</p>
                    <p><strong>Enquadramento:</strong> {personalizadaGratuito ? "Gratuito (Defesa de direitos / CF art. 5º)" : "Guia GRU a recolher"}</p>
                    <p><strong>Prazo Máximo de Atendimento:</strong> Até 15 (quinze) dias úteis</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    A certidão expedida será encaminhada em formato PDF assinado digitalmente para o e-mail informado.
                  </p>
                </div>
              </div>
            )}

            {serviceId === "consultar-indisponibilidade" && (
              <div className="space-y-6" id="corpo-indisponibilidade">
                <div className="text-center">
                  <h2 className="text-sm font-black text-black tracking-wider uppercase border-b border-gray-200 pb-2 font-heading">
                    Certidão de Indisponibilidade de Sistemas do Tribunal Superior do Trabalho
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <p>
                    A Secretaria de Tecnologia da Informação e Comunicação (SETIN) do Tribunal Superior do Trabalho, no uso de suas atribuições legais e em conformidade com a Resolução CSJT nº 185/2017:
                  </p>
                  <div className="bg-slate-50 border border-gray-200 rounded-lg p-4 space-y-1.5 bg-gradient-to-r from-slate-50 to-[#fdfdfd]">
                    <p><strong>Sistema Consultado:</strong> {indispSistema}</p>
                    <p><strong>Período Auditado:</strong> De {indispDataIni.split("-").reverse().join("/")} até {indispDataFim.split("-").reverse().join("/")}</p>
                    <p><strong>Turno / Faixa Horária:</strong> {indispTurno}</p>
                    <p><strong>Finalidade:</strong> Comprovação de tempestividade recursal e prorrogação de prazos processuais (art. 224 do CPC).</p>
                  </div>

                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-gray-100 text-gray-700 font-bold border-b border-gray-200">
                        <tr>
                          <th className="p-2.5">Data da Ocorrência</th>
                          <th className="p-2.5">Horário Inicial</th>
                          <th className="p-2.5">Horário Final</th>
                          <th className="p-2.5">Duração Total</th>
                          <th className="p-2.5">Tipo de Registro</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        <tr>
                          <td className="p-2.5 font-medium">{indispDataIni.split("-").reverse().join("/")}</td>
                          <td className="p-2.5 font-mono">14:12:00</td>
                          <td className="p-2.5 font-mono">15:48:30</td>
                          <td className="p-2.5 font-semibold text-amber-700">01h 36min 30s</td>
                          <td className="p-2.5 text-gray-600">Instabilidade Técnica em Enlace</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">{indispDataFim.split("-").reverse().join("/")}</td>
                          <td className="p-2.5 font-mono">23:05:00</td>
                          <td className="p-2.5 font-mono">23:59:59</td>
                          <td className="p-2.5 font-semibold text-amber-700">00h 54min 59s</td>
                          <td className="p-2.5 text-gray-600">Janela de Manutenção Programada</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-[#e5f6ed] border border-emerald-200 rounded-lg p-3 text-emerald-900 text-xs">
                    <p className="font-bold">Efeitos nos Prazos Processuais:</p>
                    <p>
                      Conforme o art. 10 da Lei nº 11.419/2006, se o sistema se tornar indisponível por motivo técnico no dia do vencimento do prazo, este fica automaticamente prorrogado para o primeiro dia útil seguinte à resolução do problema.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* DYNAMIC STAMPS, VALIDATION MARGIN AND BARCODES */}
            <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-gray-500">
              <div className="space-y-1 sm:max-w-md text-center sm:text-left">
                <p><strong>Chave Eletrônica de Autenticação TST:</strong></p>
                <p className="font-mono text-gray-900 bg-slate-100 px-2 py-1 rounded inline-block font-bold">
                  AUTENTICAÇÃO-{randKey}-{randKey.split("").reverse().join("")}
                </p>
                <p className="text-[9px] text-gray-400 font-sans mt-0.5">
                  Conformidade assegurada nos termos constitucionais e e-MAG. Assinado eletronicamente pelo Diretor de Tecnologia do TST sob as normas da LGPD.
                </p>
              </div>
              
              <div className="flex items-center gap-3 border-l sm:pl-4 border-gray-200 shrink-0">
                <div className="bg-slate-100 p-2 text-center rounded">
                  <QrCodeSolid className="w-14 h-14 text-slate-800" />
                  <span className="text-[7px] text-gray-400 font-mono tracking-widest mt-0.5 block">TST-MOBILE</span>
                </div>
              </div>
            </div>

            {/* Micro horizontal code lines mimic genuine court files */}
            <div className="text-center text-[8px] text-gray-300 font-mono tracking-widest" aria-hidden="true">
              ::::::::::::::::::::: TST_SECURITY_TRANSPORT_VERIFIED_LGPD_COMPLIANT :::::::::::::::::::::
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Blue Help Card: "Precisa de ajuda?" */}
      {!loading && (
        <div 
          className={`bg-[#e3eeff] border border-gray-200 p-5 rounded-xl shadow-xs text-left flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-sm ${
            !success ? "max-w-xl mx-auto w-full mt-6" : "w-full mt-6"
          }`}
          id="card-precisa-ajuda"
        >
          <div className="flex gap-3.5 items-start flex-1 w-full">
            <div className="w-5 h-5 rounded-full bg-[#1351b4] flex items-center justify-center text-white shrink-0 font-bold text-[12px] font-serif flex-col mt-0.5 select-none" aria-hidden="true">
              i
            </div>
            <div className="space-y-1 flex-1 text-left">
              <h3 className="text-xs sm:text-sm font-bold text-gray-800 font-heading tracking-tight" id="titulo-precisa-ajuda">
                Precisa de ajuda?
              </h3>
              <p className="text-xs sm:text-sm text-gray-800 font-normal font-sans leading-relaxed">
                Clique no botão ao lado para acessar informações sobre este serviço.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0 justify-center items-center">
            <button
              type="button"
              onClick={handleConsultarInformacoes}
              className="bg-[#1351b4] hover:bg-[#2261cc] hover:underline text-white font-bold text-xs py-2.5 px-6 rounded-full border border-gray-200 shadow-sm transition-all text-center flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer w-full sm:w-auto shrink-0 whitespace-nowrap"
              aria-label="Consultar informações sobre este serviço"
            >
              <span>Consultar Informações</span>
            </button>
          </div>
        </div>
      )}

      {/* Real Footer/Responsibility block matching other pages of the portal exactly */}
      <div className="mt-12 pt-8 border-t border-gray-200 no-print" id="secao-contato-responsabilidade">
        <div className="text-center space-y-6 text-xs sm:text-sm text-gray-600">
          <div className="space-y-1">
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium">Conteúdo de responsabilidade da</p>
            <p className="font-bold text-gray-800 text-sm font-heading">
              Secretaria Geral Judiciária (SEGJUD)
            </p>
            <p className="font-semibold text-gray-700">
              Email: <a href="mailto:segjud@tst.jus.br" className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline">segjud@tst.jus.br</a>
            </p>
            <p className="font-semibold text-gray-700">
              Telefone: (61) 3043-3201 / 3043-7334
            </p>
          </div>

          <hr className="w-16 mx-auto border-gray-200" />

          {/* Fale com a Ouvidoria */}
          <div className="space-y-1.5">
            <p className="font-bold text-gray-800 text-sm">
              Fale com a Ouvidoria
            </p>
            <p className="text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto whitespace-nowrap">
              Para{" "}
              <a
                href="https://www.tst.jus.br/en/faca-sua-manifestacao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1351b4] hover:text-[#0f3c87] font-bold underline cursor-pointer hover:underline"
              >
                registrar uma manifestação, reclamação, solicitação, sugestão ou denúncia
              </a>
              .
            </p>
          </div>

          {/* Ajude a melhorar este serviço */}
          <div className="space-y-1 pt-4 text-center">
            <p className="font-bold text-gray-800 text-sm">Ajude a melhorar este serviço</p>
            <p className="text-xs sm:text-sm text-gray-600 font-sans">
              Deixe seu comentário no campo <em className="italic">opinião</em> nesta página.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
