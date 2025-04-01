"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Copy, Clock } from "lucide-react"
import { WebinarParams } from "../components/WebinarParams"

export default function ConfirmacaoWebinar() {
  const [eventInfo, setEventInfo] = useState({
    date: "",
    time: "",
    timezone: "",
    uniqueLink: "",
  })

  useEffect(() => {
    // Função para pegar parâmetros da URL
    const getParam = (name: string) => {
      if (typeof window === "undefined") return ""
      const urlParams = new URLSearchParams(window.location.search)
      return decodeURIComponent(urlParams.get(name) || "")
    }

    // Pega os dados da URL
    const eventDate = getParam("wj_next_event_date")
    const eventTime = getParam("wj_next_event_time")
    const eventTimezone = getParam("wj_next_event_timezone")
    const uniqueLink = getParam("wj_lead_unique_link_live_room")

    setEventInfo({
      date: eventDate,
      time: eventTime,
      timezone: eventTimezone,
      uniqueLink: uniqueLink,
    })
  }, [])

  // Função para formatar a data
  const formatDate = (dateStr: string) => {
    if (!dateStr) return { month: "", day: 0 }
    const date = new Date(dateStr)
    return {
      month: date.toLocaleString('pt-BR', { month: 'long' }).toUpperCase(),
      day: date.getDate()
    }
  }

  const { month, day } = formatDate(eventInfo.date)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Cabeçalho */}
      <header className="py-6 text-center">
        <h1 className="text-2xl font-bold">
          Willian Aksenen<sup>®</sup>
        </h1>
      </header>

      {/* Hero Section com fundo azul */}
      <section className="bg-[#4169E1] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-8">
            Você está registrado para o webinar!
          </h2>
          <p className="text-lg mb-4">
            Esta página redirecionará automaticamente para a sala de exibição quando o webinar estiver programado para começar.
          </p>
          <p className="text-lg">
            Você pode acessar esta página a qualquer momento usando o URL abaixo. Você também receberá um e-mail de confirmação
            com um link para esta página.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Link do Webinar */}
        <div className="mb-12">
          <h3 className="text-center font-medium mb-4">Link da sua sessão do webinar:</h3>
          <div className="flex items-center justify-center gap-2 bg-gray-50 p-3 rounded-lg max-w-2xl mx-auto">
            <input
              type="text"
              value={eventInfo.uniqueLink}
              readOnly
              className="bg-transparent flex-1 text-sm outline-none"
            />
            <button
              onClick={() => navigator.clipboard.writeText(eventInfo.uniqueLink)}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Compartilhar e Calendário */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <p className="font-medium mb-2">Compartilhar:</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
              <a href="#" className="text-blue-400 hover:underline">Twitter</a>
            </div>
          </div>
          <div>
            <p className="font-medium mb-2">Adicionar ao calendário:</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-600 hover:underline">Google Calendar</a>
              <a href="#" className="text-blue-600 hover:underline">Outlook Calendar</a>
            </div>
          </div>
        </div>

        {/* Apresentador e Conteúdo */}
        <div className="grid md:grid-cols-[300px,1fr] gap-12 mb-12">
          {/* Apresentador */}
          <div className="text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/images/willian-aksenen.jpg"
                alt="Willian Aksenen"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <p className="text-gray-600 mb-1">Apresentado por:</p>
            <h3 className="text-xl font-bold mb-2">Willian Aksenen</h3>
            <p className="text-gray-600 mb-4">Trader Profissional & Mentor</p>
            <div className="flex justify-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                6+ Anos de Experiência
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Especialista em Forex reconhecido internacionalmente com mais de 15 mil alunos de sucesso em todo o mundo.
            </p>
          </div>

          {/* Conteúdo do Webinar */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
              Aqui está o que você vai aprender durante esta aula gratuita ao vivo:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Como identificar negociações altamente lucrativas que podem gerar muito dinheiro em menos de 10 minutos por dia</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Como obter lucros insanos e ainda assim estar livre de riscos</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span>Como ganhar e se tornar lucrativo consistentemente mesmo se você for um novo trader sem conhecimento e ainda assim manter um estilo de vida</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data e Hora */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#4169E1] text-white px-8 py-2 rounded-t-lg">
            <p className="text-2xl font-light">{month}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto">
            <p className="text-6xl font-bold mb-4">{day}</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-5 w-5" />
              <p className="font-medium">{eventInfo.time} {eventInfo.timezone}</p>
            </div>
            <p className="font-medium mb-4">O webinar começa em:</p>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm">dias</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm">hrs</p>
              </div>
              <div>
                <p className="text-2xl font-bold">10</p>
                <p className="text-sm">mins</p>
              </div>
              <div>
                <p className="text-2xl font-bold">33</p>
                <p className="text-sm">segs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Bônus */}
        <div className="text-center">
          <button className="bg-[#4169E1] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Como prometido, pegue seu BÔNUS GRÁTIS aqui!
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-auto py-6 text-center text-sm text-gray-600">
        <p>Copyright © 2024 WillianAksenen. Todos os Direitos Reservados.</p>
      </footer>
    </div>
  )
} 