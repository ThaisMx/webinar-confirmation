"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Copy } from "lucide-react"

export default function Home() {
  const [eventInfo, setEventInfo] = useState({
    date: "",
    time: "",
    timezone: "",
    uniqueLink: "",
  })

  useEffect(() => {
    const getParam = (name: string) => {
      if (typeof window === "undefined") return ""
      const urlParams = new URLSearchParams(window.location.search)
      return decodeURIComponent(urlParams.get(name) || "")
    }

    setEventInfo({
      date: getParam("wj_next_event_date"),
      time: getParam("wj_next_event_time"),
      timezone: getParam("wj_next_event_timezone"),
      uniqueLink: getParam("wj_lead_unique_link_live_room"),
    })
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Willian Aksenen<sup>®</sup>
        </h1>
      </header>

      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Você está registrado para o webinar!
      </h2>

      <p style={{ marginBottom: '20px' }}>
        Esta página redirecionará automaticamente para a sala de exibição quando o webinar estiver programado para começar.
      </p>

      <p style={{ marginBottom: '20px' }}>
        Você pode acessar esta página a qualquer momento usando o URL abaixo. Você também receberá um e-mail de confirmação com um link para esta página.
      </p>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Link da sua sessão do webinar:</p>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            value={eventInfo.uniqueLink}
            readOnly
            style={{ 
              flex: 1,
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={() => navigator.clipboard.writeText(eventInfo.uniqueLink)}
            style={{
              padding: '8px',
              background: 'none',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Compartilhar:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="#" style={{ color: '#1877f2' }}>Facebook</a>
          <a href="#" style={{ color: '#1da1f2' }}>Twitter</a>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>Adicionar ao calendário:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="#" style={{ color: '#4285f4' }}>Google Calendar</a>
          <a href="#" style={{ color: '#00a1f1' }}>Outlook Calendar</a>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Image
            src="https://lp.willaksenen.com.br/images/willian-aksenen.jpg"
            alt="Willian Aksenen"
            width={150}
            height={150}
            style={{ borderRadius: '4px' }}
          />
        </div>
        <p>Apresentado por:</p>
        <p style={{ fontWeight: 'bold' }}>Willian Aksenen</p>
        <p>Trader Profissional & Mentor</p>
        <p style={{ marginTop: '10px' }}>6+ Anos de Experiência</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Especialista em Forex reconhecido internacionalmente com mais de 15 mil alunos de sucesso em todo o mundo.
        </p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Aqui está o que você vai aprender durante esta aula gratuita ao vivo:
        </h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ color: '#22c55e', marginRight: '10px' }}>✓</span>
            <span>Como identificar negociações altamente lucrativas que podem gerar muito dinheiro em menos de 10 minutos por dia</span>
          </li>
          <li style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ color: '#22c55e', marginRight: '10px' }}>✓</span>
            <span>Como obter lucros insanos e ainda assim estar livre de riscos</span>
          </li>
          <li style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ color: '#22c55e', marginRight: '10px' }}>✓</span>
            <span>Como ganhar e se tornar lucrativo consistentemente mesmo se você for um novo trader sem conhecimento e ainda assim manter um estilo de vida</span>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <p>O webinar começa em:</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0</p>
            <p>dias</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0</p>
            <p>hrs</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>10</p>
            <p>mins</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>33</p>
            <p>segs</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button
          style={{
            background: '#4169E1',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Como prometido, pegue seu BÔNUS GRÁTIS aqui!
        </button>
      </div>

      <footer style={{ textAlign: 'center', color: '#666', fontSize: '14px' }}>
        <p>Copyright © 2024 WillianAksenen. Todos os Direitos Reservados.</p>
      </footer>
    </div>
  )
}