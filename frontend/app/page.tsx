"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import LoadingPage from "@/components/LoadingPage"
import { getApiUrl } from "@/lib/api-config"
import IntroSection from "@/components/sections/IntroSection"
import TheorySection from "@/components/sections/TheorySection"
import ContradictionSection from "@/components/sections/ContradictionSection"
import ClassStruggleSection from "@/components/sections/ClassStruggleSection"
import ChatbotSection from "@/components/sections/ChatbotSection"
import ConclusionSection from "@/components/sections/ConclusionSection"
import AIUsageSection from "@/components/sections/AIUsageSection"
import {
  BookOpen,
  Users,
  Zap,
  Target,
  Quote,
  Search,
  Menu,
  MessageCircle,
} from "lucide-react"

interface ChatMessage {
  id: number
  content: string
  type: "user" | "ai"
  timestamp: string
}

export default function MarxistPhilosophyPage() {
  const [showMainContent, setShowMainContent] = useState(false)
  const [activeSection, setActiveSection] = useState("intro")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)
  const chatEndRef = React.useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when new messages arrive
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages])

  const handleSendMessage = async () => {
    if (!chatInput.trim() || isStreaming) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      content: chatInput,
      type: "user",
      timestamp: new Date().toLocaleTimeString()
    }

    setChatMessages(prev => [...prev, userMessage])
    setChatInput("")
    setIsStreaming(true)

    try {
      const response = await fetch(getApiUrl("CHAT_STREAM"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: chatInput }),
      })

      if (!response.body) {
        throw new Error("No response body")
      }

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        content: "",
        type: "ai",
        timestamp: new Date().toLocaleTimeString()
      }

      setChatMessages(prev => [...prev, aiMessage])

      const reader = response.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim()
            if (data === '[DONE]' || data === '') {
              continue
            }
            try {
              const parsed = JSON.parse(data)

              // Xử lý content streaming từ backend
              if (parsed.content) {
                setChatMessages(prev =>
                  prev.map(msg =>
                    msg.id === aiMessage.id
                      ? { ...msg, content: msg.content + parsed.content }
                      : msg
                  )
                )
              }

              // Xử lý khi streaming kết thúc
              if (parsed.type === "done") {
                setIsStreaming(false)
                return
              }

              // Xử lý error
              if (parsed.error) {
                setChatMessages(prev =>
                  prev.map(msg =>
                    msg.id === aiMessage.id
                      ? { ...msg, content: `Lỗi: ${parsed.error}` }
                      : msg
                  )
                )
                setIsStreaming(false)
                return
              }

            } catch (e) {
              // Ignore parsing errors for incomplete chunks
              console.log("Parse error:", e, "Data:", data)
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error)
      setChatMessages(prev => [...prev, {
        id: Date.now() + 2,
        content: "Xin lỗi, có lỗi xảy ra khi kết nối với server. Vui lòng thử lại sau.",
        type: "ai" as const,
        timestamp: new Date().toLocaleTimeString()
      }])
    } finally {
      setIsStreaming(false)
    }
  }

  const sections = [
    {
      id: "intro",
      title: "Lý thuyết về học thuyết hình thái kinh tế - xã hội",
      icon: Target,
      description: "Hình thái kinh tế - xã hội",
    },
    {
      id: "theory",
      title: "Phân tích mâu thuẫn giữa lực lượng sản xuất/ quan hệ sản xuất.",
      icon: BookOpen,
      description: "Mâu thuẫn giữa LLSX/QHSX.",
    },
    {
      id: "contradiction",
      title: "Vai trò của đấu tranh giai cấp.",
      icon: Zap,
      description: "Động lực trực tiếp của lịch sử xã hội",
    },
    {
      id: "class-struggle",
      title: "Đấu tranh giai cấp",
      icon: Users,
      description: "Động lực trực tiếp thay đổi xã hội",
    },
    {
      id: "conclusion",
      title: "Câu hỏi kiến tạo",
      icon: Quote,
      description: "Tại sao xã hội luôn vận động?",
    },
    {
      id: "chatbot",
      title: "Chatbot AI",
      icon: MessageCircle,
      description: "Trò chuyện với AI về triết học",
    },
    {
      id: "ai-usage",
      title: "Ứng dụng AI có trách nhiệm",
      icon: Search,
      description: "Minh bạch, sáng tạo và liêm chính học thuật",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection onNext={() => setActiveSection("theory")} />

      case "theory":
        return <TheorySection onNext={() => setActiveSection("contradiction")} />

      case "contradiction":
        return <ContradictionSection onNext={() => setActiveSection("class-struggle")} />

      case "class-struggle":
        return <ClassStruggleSection onNext={() => setActiveSection("conclusion")} />

      case "chatbot":
        return (
          <ChatbotSection
            chatMessages={chatMessages}
            chatInput={chatInput}
            isStreaming={isStreaming}
            chatEndRef={chatEndRef}
            onInputChange={setChatInput}
            onSendMessage={handleSendMessage}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
        )

      case "conclusion":
        return <ConclusionSection />

      case "ai-usage":
        return <AIUsageSection />

      default:
        return null
    }
  }

  // Trang loading với câu hỏi
  if (!showMainContent) {
    return <LoadingPage onEnter={() => setShowMainContent(true)} />
  }

  return (

    <div className="min-h-screen bg-background flex">
      <aside
        className={`philosophy-sidebar ${sidebarOpen ? "w-80" : "w-16"} transition-all duration-300 flex-shrink-0`}
      >
        {sidebarOpen ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className={`font-bold text-primary text-xl transition-all`}>
                Triết học Marxist
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(false)}
                className="text-muted-foreground hover:text-primary"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </div>
            <ScrollArea className="h-[calc(100vh-120px)]">
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.id
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-primary-foreground" : ""}`} />
                        <div className="min-w-0">
                          <div className={`font-medium text-sm ${isActive ? "text-primary-foreground" : ""}`}>
                            {section.title}
                          </div>
                          <div
                            className={`text-xs mt-1 ${
                              isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}
                          >
                            {section.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </nav>
            </ScrollArea>
          </div>
        ) : (
          <div className="flex flex-col items-center pt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="text-muted-foreground hover:text-primary"
            >
              <Menu className="w-8 h-8" />
            </Button>
          </div>
        )}
      </aside>

      <main className="flex-1 overflow-auto">
        {activeSection !== "chatbot" && (
          <div className="philosophy-header text-primary-foreground py-8 px-8">
            <div className="flex items-center gap-4 mb-4">
              <Search className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Khám phá triết học Marxist</h1>
            </div>
            <p className="text-primary-foreground/90">Tìm hiểu sâu về lý thuyết vận động và phát triển của xã hội</p>
          </div>
        )}

        <div className={activeSection === "chatbot" ? "h-screen" : "p-8"}>
          {renderContent()}
        </div>

        {activeSection !== "chatbot" && (
          <footer className="border-t bg-card mt-12">
            <div className="p-8 text-center">
              <p className="text-muted-foreground">Website học tập triết học Marxist - Tạo bởi v0.app</p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                &quot;Triết gia chỉ giải thích thế giới theo nhiều cách khác nhau, vấn đề là thay đổi nó&quot; - Karl Marx
              </p>
            </div>
          </footer>
        )}
      </main>
    </div>
  )
}
