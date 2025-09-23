"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import {
  ChevronRight,
  BookOpen,
  Users,
  Zap,
  Target,
  Quote,
  Search,
  Menu,
  ArrowRight,
  Lightbulb,
  History,
  TrendingUp,
  MessageCircle,
  Send,
  Bot,
} from "lucide-react"

interface ChatMessage {
  id: number
  content: string
  type: "user" | "ai"
  timestamp: string
}

export default function MarxistPhilosophyPage() {
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
      const response = await fetch("http://localhost:8000/chat/stream", {
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

              // Xử lý token streaming
              if (parsed.token) {
                setChatMessages(prev =>
                  prev.map(msg =>
                    msg.id === aiMessage.id
                      ? { ...msg, content: msg.content + parsed.token }
                      : msg
                  )
                )
              }

              // Xử lý final response
              if (parsed.final) {
                setChatMessages(prev =>
                  prev.map(msg =>
                    msg.id === aiMessage.id
                      ? { ...msg, content: parsed.final }
                      : msg
                  )
                )
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
        content: "Xin lỗi, có lỗi xảy ra khi kết nối với server. Vui lòng kiểm tra xem backend đã chạy chưa (http://localhost:8000).",
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
      title: "Đặt vấn đề",
      icon: Target,
      description: "Câu hỏi kiến tạo về sự vận động xã hội",
    },
    {
      id: "theory",
      title: "Học thuyết hình thái kinh tế xã hội",
      icon: BookOpen,
      description: "Nền tảng lý thuyết Marx",
    },
    {
      id: "contradiction",
      title: "Mâu thuẫn lực lượng sản xuất",
      icon: Zap,
      description: "Động lực cơ bản của sự vận động",
    },
    {
      id: "class-struggle",
      title: "Đấu tranh giai cấp",
      icon: Users,
      description: "Động lực trực tiếp thay đổi xã hội",
    },
    {
      id: "chatbot",
      title: "Chatbot AI",
      icon: MessageCircle,
      description: "Trò chuyện với AI về triết học",
    },
    {
      id: "conclusion",
      title: "Kết luận",
      icon: Quote,
      description: "Tổng hợp và ý nghĩa thực tiễn",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-balance">
                Vì sao xã hội luôn vận động và phát triển?
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Khám phá học thuyết Marxist về sự vận động không ngừng của xã hội loài người
              </p>
              <Badge variant="secondary" className="mt-4 text-base px-4 py-2">
                Triết học Marxist
              </Badge>
            </div>

            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <Target className="w-7 h-7" />
                  Đặt vấn đề
                </CardTitle>
                <CardDescription className="text-lg">
                  Câu hỏi kiến tạo về sự vận động không ngừng của xã hội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-lg italic text-pretty">
                    &quot;Có người cho rằng xã hội càng phát triển thì càng ổn định, nhưng thực tế cho thấy luôn có biến
                    động, thay đổi và khủng hoảng. Vậy tại sao xã hội loài người không đứng yên ổn định mà luôn vận
                    động, phát triển không ngừng?&quot;
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="interactive-element border-primary/20 hover:border-primary/40">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        Quan điểm thông thường
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-pretty">
                        Nhiều người tin rằng sự phát triển sẽ dẫn đến sự ổn định tuyệt đối, xã hội sẽ đạt đến trạng thái
                        cân bằng hoàn hảo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element border-secondary/20 hover:border-secondary/40">
                    <CardHeader>
                      <CardTitle className="text-lg text-secondary flex items-center gap-2">
                        <History className="w-5 h-5" />
                        Thực tế quan sát
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-pretty">
                        Lịch sử cho thấy xã hội luôn trong trạng thái biến động, với những cuộc khủng hoảng, cách mạng
                        và thay đổi liên tục.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => setActiveSection("theory")}
                    className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
                    size="lg"
                  >
                    Khám phá học thuyết Marx <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "theory":
        return (
          <div className="space-y-8">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-3">
                  <BookOpen className="w-8 h-8" />
                  Học thuyết hình thái kinh tế - xã hội
                </CardTitle>
                <CardDescription className="text-lg">
                  Nền tảng lý thuyết của Karl Marx về sự phát triển xã hội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="interactive-element bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Cơ sở hạ tầng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-pretty font-medium">
                        Lực lượng sản xuất + Quan hệ sản xuất = Nền tảng kinh tế của xã hội
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element bg-secondary/5 border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-secondary">Kiến trúc thượng tầng</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-pretty font-medium">
                        Chính trị, pháp luật, tôn giáo, văn hóa được xây dựng trên nền tảng kinh tế
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element bg-accent/5 border-accent/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-accent-foreground">Ý thức xã hội</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-pretty font-medium">
                        Tư tưởng, quan điểm, ý thức hình thái phản ánh tồn tại xã hội
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />5 hình thái kinh tế - xã hội
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Cộng sản nguyên thủy",
                      "Chế độ nô lệ",
                      "Chế độ phong kiến",
                      "Chế độ tư bản chủ nghĩa",
                      "Chế độ cộng sản chủ nghĩa",
                    ].map((formation, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 interactive-element p-3 rounded-lg hover:bg-background"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                          {index + 1}
                        </div>
                        <span className="text-lg font-medium">{formation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setActiveSection("contradiction")}
                    className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
                    size="lg"
                  >
                    Tìm hiểu mâu thuẫn <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "contradiction":
        return (
          <div className="space-y-8">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-3">
                  <Zap className="w-8 h-8" />
                  Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất
                </CardTitle>
                <CardDescription className="text-lg">Động lực cơ bản của sự vận động xã hội</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="interactive-element border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3 text-primary">
                        <Zap className="w-6 h-6" />
                        Lực lượng sản xuất
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-primary">Công cụ lao động:</h4>
                          <p className="text-muted-foreground">Máy móc, thiết bị, công nghệ</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Đối tượng lao động:</h4>
                          <p className="text-muted-foreground">Nguyên liệu, tài nguyên thiên nhiên</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Con người lao động:</h4>
                          <p className="text-muted-foreground">Kỹ năng, kinh nghiệm, tri thức</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3 text-secondary">
                        <Users className="w-6 h-6" />
                        Quan hệ sản xuất
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-secondary">Quan hệ sở hữu:</h4>
                          <p className="text-muted-foreground">Ai sở hữu tư liệu sản xuất</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary">Quan hệ phân công:</h4>
                          <p className="text-muted-foreground">Cách tổ chức lao động</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary">Quan hệ phân phối:</h4>
                          <p className="text-muted-foreground">Cách chia sẻ sản phẩm lao động</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-destructive flex items-center gap-3">
                    <Zap className="w-7 h-7" />
                    Mâu thuẫn cơ bản
                  </h3>
                  <p className="text-lg text-pretty mb-6">
                    Khi lực lượng sản xuất phát triển nhanh hơn quan hệ sản xuất, sẽ xuất hiện mâu thuẫn. Quan hệ sản
                    xuất cũ trở thành rào cản cho sự phát triển của lực lượng sản xuất.
                  </p>
                  <div className="bg-background p-6 rounded-lg border">
                    <p className="font-semibold text-primary mb-2">Ví dụ thực tế:</p>
                    <p className="text-pretty">
                      Trong chế độ phong kiến, khi công nghệ và thương mại phát triển, các quan hệ phong kiến cũ (nông
                      nô, thủ công nghiệp bang hội) trở thành rào cản, dẫn đến cách mạng tư sản.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setActiveSection("class-struggle")}
                    className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
                    size="lg"
                  >
                    Khám phá đấu tranh giai cấp <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "class-struggle":
        return (
          <div className="space-y-8">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-3">
                  <Users className="w-8 h-8" />
                  Vai trò của đấu tranh giai cấp
                </CardTitle>
                <CardDescription className="text-lg">Động lực trực tiếp của sự thay đổi xã hội</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <blockquote className="text-xl italic text-pretty mb-4">
                    &quot;Lịch sử của mọi xã hội cho đến nay là lịch sử của đấu tranh giai cấp&quot;
                  </blockquote>
                  <cite className="text-muted-foreground font-medium">- Karl Marx & Friedrich Engels</cite>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="interactive-element border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Giai cấp thống trị</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Sở hữu tư liệu sản xuất</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Kiểm soát kiến trúc thượng tầng</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Duy trì trật tự hiện tại</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Bảo vệ lợi ích của mình</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary">Giai cấp bị trị</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Không sở hữu tư liệu sản xuất</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Bị bóc lột sức lao động</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Đấu tranh cho quyền lợi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>Tìm cách thay đổi xã hội</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary">Các hình thức đấu tranh giai cấp</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="interactive-element bg-primary/5 border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg text-primary">Kinh tế</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">
                          Đình công, tẩy chay, đòi tăng lương, cải thiện điều kiện lao động
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="interactive-element bg-secondary/5 border-secondary/20">
                      <CardHeader>
                        <CardTitle className="text-lg text-secondary">Chính trị</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">
                          Đấu tranh dân chủ, đòi quyền bầu cử, thành lập đảng chính trị
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="interactive-element bg-accent/5 border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-lg">Tư tưởng</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">
                          Tuyên truyền, giáo dục, phê phán ý thức hình thái thống trị
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setActiveSection("conclusion")}
                    className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
                    size="lg"
                  >
                    Đến kết luận <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "chatbot":
        return (
          <div className="space-y-8">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-3">
                  <MessageCircle className="w-8 h-8" />
                  Chatbot AI Triết học
                </CardTitle>
                <CardDescription className="text-lg">
                  Trò chuyện với AI về các vấn đề triết học Marxist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col h-[600px] bg-background rounded-lg border">
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 p-4 border-b bg-muted/50 rounded-t-lg">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">AI Triết học</h4>
                      <p className="text-xs text-muted-foreground">Sẵn sàng thảo luận về triết học Marxist</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {chatMessages.length === 0 && (
                        <div className="text-center text-muted-foreground py-8">
                          <Bot className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                          <p>Chào bạn! Tôi có thể giúp bạn tìm hiểu về triết học Marxist.</p>
                          <p className="text-sm mt-2">Hãy đặt câu hỏi về bất kỳ chủ đề nào trong triết học!</p>
                        </div>
                      )}

                      {chatMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {message.type === 'ai' && (
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}

                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted text-foreground'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                          </div>

                          {message.type === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-medium text-secondary-foreground">U</span>
                            </div>
                          )}
                        </div>
                      ))}

                      {isStreaming && (
                        <div className="flex gap-3 justify-start">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted text-foreground p-3 rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                              </div>
                              <span className="text-xs text-muted-foreground">AI đang suy nghĩ...</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div ref={chatEndRef} />
                  </ScrollArea>

                  {/* Chat Input */}
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Nhập câu hỏi về triết học..."
                        disabled={isStreaming}
                        className="flex-1"
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!chatInput.trim() || isStreaming}
                        size="sm"
                        className="px-3"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Nhấn Enter để gửi tin nhắn
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "conclusion":
        return (
          <div className="space-y-8">
            <Card className="section-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-3">
                  <Quote className="w-8 h-8" />
                  Kết luận: Vì sao xã hội luôn vận động?
                </CardTitle>
                <CardDescription className="text-lg">
                  Tổng hợp lý thuyết Marxist về sự vận động của xã hội
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Câu trả lời chính</h3>
                  <p className="text-xl text-pretty leading-relaxed">
                    Xã hội không thể đứng yên vì luôn tồn tại{" "}
                    <strong className="text-primary">mâu thuẫn nội tại</strong> giữa lực lượng sản xuất và quan hệ sản
                    xuất. Mâu thuẫn này được thể hiện qua <strong className="text-secondary">đấu tranh giai cấp</strong>
                    , tạo ra động lực cho sự thay đổi không ngừng.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="interactive-element border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Nguyên nhân khách quan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Lực lượng sản xuất luôn phát triển</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Quan hệ sản xuất có tính bảo thủ</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Mâu thuẫn là quy luật khách quan</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Không thể tránh khỏi xung đột</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="interactive-element border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-secondary">Nguyên nhân chủ quan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Lợi ích giai cấp đối lập</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Ý thức đấu tranh của nhân dân</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Tổ chức và lãnh đạo giai cấp</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                        <span>Tác động của yếu tố tư tưởng</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-primary">Ý nghĩa thực tiễn</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="interactive-element bg-muted border-muted-foreground/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <History className="w-5 h-5 text-primary" />
                          Hiểu biết lịch sử
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">
                          Giải thích được các cuộc cách mạng, biến động xã hội trong lịch sử
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="interactive-element bg-muted border-muted-foreground/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-secondary" />
                          Dự báo tương lai
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">Nhận thức được xu hướng phát triển của xã hội hiện đại</p>
                      </CardContent>
                    </Card>

                    <Card className="interactive-element bg-muted border-muted-foreground/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Target className="w-5 h-5 text-accent-foreground" />
                          Hành động thực tiễn
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-pretty">Định hướng cho việc cải cách và phát triển xã hội</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="bg-secondary/10 border border-secondary/20 p-8 rounded-lg text-center">
                  <Quote className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h4 className="text-2xl font-semibold text-secondary mb-4">Kết luận cuối cùng</h4>
                  <p className="text-xl text-pretty leading-relaxed">
                    Xã hội luôn vận động vì <strong className="text-primary">mâu thuẫn là bản chất</strong>,{" "}
                    <strong className="text-secondary">đấu tranh là động lực</strong>, và{" "}
                    <strong className="text-accent-foreground">phát triển là quy luật</strong> khách quan của lịch sử
                    nhân loại.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button
                    onClick={() => {
                      alert("Cảm ơn bạn đã tìm hiểu về triết học Marxist! 🎓")
                    }}
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4"
                    size="lg"
                  >
                    Hoàn thành nghiên cứu 🎉
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      <aside
        className={`philosophy-sidebar ${sidebarOpen ? "w-80" : "w-16"} transition-all duration-300 flex-shrink-0`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className={`font-bold text-primary ${sidebarOpen ? "text-xl" : "text-sm"} transition-all`}>
              {sidebarOpen ? "Triết học Marxist" : "TL"}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
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
                      {sidebarOpen && (
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
                      )}
                    </div>
                  </button>
                )
              })}
            </nav>
          </ScrollArea>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="philosophy-header text-primary-foreground py-8 px-8">
          <div className="flex items-center gap-4 mb-4">
            <Search className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Khám phá triết học Marxist</h1>
          </div>
          <p className="text-primary-foreground/90">Tìm hiểu sâu về lý thuyết vận động và phát triển của xã hội</p>
        </div>

        <div className="p-8">{renderContent()}</div>

        <footer className="border-t bg-card mt-12">
          <div className="p-8 text-center">
            <p className="text-muted-foreground">Website học tập triết học Marxist - Tạo bởi v0.app</p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              &quot;Triết gia chỉ giải thích thế giới theo nhiều cách khác nhau, vấn đề là thay đổi nó&quot; - Karl Marx
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
