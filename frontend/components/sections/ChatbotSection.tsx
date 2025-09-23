import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  MessageCircle,
  Bot,
  Send,
} from "lucide-react"

interface ChatMessage {
  id: number
  content: string
  type: "user" | "ai"
  timestamp: string
}

interface ChatbotSectionProps {
  chatMessages: ChatMessage[]
  chatInput: string
  isStreaming: boolean
  chatEndRef: React.RefObject<HTMLDivElement>
  onInputChange: (value: string) => void
  onSendMessage: () => void
  onKeyPress: (e: React.KeyboardEvent) => void
}

export default function ChatbotSection({
  chatMessages,
  chatInput,
  isStreaming,
  chatEndRef,
  onInputChange,
  onSendMessage,
  onKeyPress
}: ChatbotSectionProps) {
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
                  onChange={(e) => onInputChange(e.target.value)}
                  onKeyPress={onKeyPress}
                  placeholder="Nhập câu hỏi về triết học..."
                  disabled={isStreaming}
                  className="flex-1"
                />
                <Button
                  onClick={onSendMessage}
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
}