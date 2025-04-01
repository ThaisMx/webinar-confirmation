"use client"

import { useEffect, useState } from "react"
import { Copy } from "lucide-react"

interface WebinarParams {
  phoneNumber: string
  uniqueLink: string
  roomPassword: string
  eventDate: string
  eventTime: string
  eventTimezone: string
  eventTs: string
  eventTz: string
}

export function WebinarParams() {
  const [params, setParams] = useState<WebinarParams>({
    phoneNumber: "",
    uniqueLink: "",
    roomPassword: "",
    eventDate: "",
    eventTime: "",
    eventTimezone: "",
    eventTs: "",
    eventTz: "",
  })

  useEffect(() => {
    // Função para pegar parâmetros da URL
    const getParam = (name: string) => {
      if (typeof window === "undefined") return ""
      const urlParams = new URLSearchParams(window.location.search)
      return decodeURIComponent(urlParams.get(name) || "")
    }

    // Pega os dados da URL
    setParams({
      phoneNumber: getParam("wj_lead_phone_number"),
      uniqueLink: getParam("wj_lead_unique_link_live_room"),
      roomPassword: getParam("wj_room_password"),
      eventDate: getParam("wj_next_event_date"),
      eventTime: getParam("wj_next_event_time"),
      eventTimezone: getParam("wj_next_event_timezone"),
      eventTs: getParam("wj_event_ts"),
      eventTz: getParam("wj_event_tz"),
    })
  }, [])

  // Função para formatar a data
  const formatDate = (dateStr: string) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className="text-center mb-6">
      <p className="font-bold mb-2">Link da sua aula:</p>
      <div className="flex items-center justify-center gap-2 bg-gray-100 p-2 rounded">
        <input
          type="text"
          value={params.uniqueLink}
          readOnly
          className="bg-transparent flex-1 text-sm outline-none"
        />
        <button
          onClick={() => navigator.clipboard.writeText(params.uniqueLink)}
          className="p-1 hover:bg-gray-200 rounded"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      {params.roomPassword && (
        <p className="mt-2 text-sm text-gray-600">
          Senha da sala: <span className="font-medium">{params.roomPassword}</span>
        </p>
      )}
      <p className="mt-2 text-sm text-gray-600">
        <span className="font-medium">{formatDate(params.eventDate)} {params.eventTime}</span>
      </p>
    </div>
  )
} 