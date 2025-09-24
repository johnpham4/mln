import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bot, Send, User } from "lucide-react"

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
    <div className="h-full flex flex-col bg-card rounded-xl shadow-lg border border-border overflow-hidden m-6">
      {/* Header */}
      <div className="bg-primary/5 border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-primary">AI Triết học</h3>
            <p className="text-sm text-muted-foreground">Sẵn sàng thảo luận về triết học Marxist</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {chatMessages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Chào bạn! Tôi có thể giúp bạn tìm hiểu về triết học Marxist.</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Hãy đặt câu hỏi về bất kỳ chủ đề nào trong triết học!
              </p>
            </div>
          )}

          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-primary"
              }`}>
                {message.type === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
              </div>

              <div className={`max-w-[75%] ${
                message.type === "user" ? "text-right" : "text-left"
              }`}>
                <div className={`inline-block p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed text-sm">
                    {message.content}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-2">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}

          {isStreaming && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-muted text-primary flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t bg-background p-4">
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <Input
              value={chatInput}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={onKeyPress}
              placeholder="Nhập câu hỏi về triết học..."
              disabled={isStreaming}
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <Button
            onClick={onSendMessage}
            disabled={isStreaming || !chatInput.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Nhấn Enter để gửi tin nhắn
        </p>
      </div>
    </div>
  )
}
