"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Copy, Clock } from "lucide-react"
import { WebinarParams } from "../components/WebinarParams"

export default function ConfirmacaoWebinarComTemporizador() {
  const [eventInfo, setEventInfo] = useState({
    date: "",
    time: "",
    timezone: "",
  })

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

    setEventInfo({
      date: eventDate,
      time: eventTime,
      timezone: eventTimezone,
    })

    // Calcula o tempo restante
    const calculateTimeLeft = () => {
      const [hours, minutes] = eventTime.split(":")
      const [year, month, day] = eventDate.split("-")
      const eventDateTime = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes)
      )
      const now = new Date()
      const difference = eventDateTime.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setCountdown({ days, hours, minutes, seconds })
      }
    }

    // Atualiza o contador a cada segundo
    if (eventDate && eventTime) {
      calculateTimeLeft()
      const timer = setInterval(calculateTimeLeft, 1000)
      return () => clearInterval(timer)
    }
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
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="py-4 text-center border-b">
        <h1 className="text-2xl font-bold">
          Willian Aksenen<sup>®</sup>
        </h1>
      </header>

      {/* Seção do Banner Azul */}
      <section className="bg-blue-500 text-white py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Você está registrado para a aula!</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Esta página redirecionará automaticamente para a sala de exibição quando a aula estiver programada para
          começar.
        </p>
        <p className="max-w-3xl mx-auto">
          Você pode acessar esta página a qualquer momento usando o URL abaixo. Você também receberá um e-mail de
          confirmação com um link para esta página.
        </p>
      </section>

      {/* Seção do Link da Aula */}
      <div className="max-w-4xl mx-auto w-full px-4 py-8">
        <WebinarParams />

        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Apresentador */}
          <div className="text-center bg-gradient-to-b from-blue-50 to-white p-4 rounded-lg border border-blue-100 shadow-sm">
            <div className="relative mx-auto w-32 h-32 mb-3">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-md"></div>
              <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/willian-aksenen.jpg"
                  alt="Willian Aksenen"
                  width={128}
                  height={128}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-sm text-blue-600 font-medium mb-1">Apresentado por:</p>
            <p className="font-bold text-lg mb-1">Willian Aksenen</p>
            <p className="text-sm text-gray-600 mb-2">Trader Profissional & Mentor</p>
            <div className="flex justify-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                6+ Anos de Experiência
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Especialista em Forex reconhecido internacionalmente com mais de 15 mil alunos de sucesso em todo o mundo.
            </p>
          </div>

          {/* O que Você Vai Aprender */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-center mb-6">
              Aqui está o que você vai aprender durante esta aula gratuita ao vivo:
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como identificar negociações altamente lucrativas que podem gerar muito dinheiro em menos de 10
                  minutos por dia
                </span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>Como obter lucros insanos e ainda assim estar livre de riscos</span>
              </li>
              <li className="flex">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Como ganhar e se tornar lucrativo consistentemente mesmo se você for um novo trader sem conhecimento e
                  ainda assim manter um estilo de vida
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data e Hora */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {/* Caixa de Data */}
          <div className="bg-white shadow-md rounded-md overflow-hidden w-32">
            <div className="bg-blue-500 text-white text-center py-2">
              <p className="font-medium">{month}</p>
            </div>
            <div className="text-center py-4">
              <p className="text-5xl font-bold">{day}</p>
            </div>
          </div>

          {/* Hora */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <p className="font-medium">{eventInfo.time} {eventInfo.timezone}</p>
            </div>
            <p className="font-medium mb-2">A aula começa em:</p>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.days}</p>
                <p className="text-xs">dias</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.hours}</p>
                <p className="text-xs">hrs</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.minutes}</p>
                <p className="text-xs">mins</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">{countdown.seconds}</p>
                <p className="text-xs">segs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de Bônus */}
        <div className="text-center mb-8">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Como prometido, pegue seu BÔNUS GRÁTIS aqui!
          </Button>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="mt-auto py-4 text-center text-sm text-gray-600">
        <p>Copyright © 2024 WillianAksenen. Todos os Direitos Reservados.</p>
      </footer>
    </div>
  )
} 