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
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden mx-4 my-4">
      {/* Chat Messages Area */}
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {chatMessages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">AI Triết học</h3>
              <p className="text-muted-foreground max-w-md">
                Sẵn sàng thảo luận về triết học Marxist.
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
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                message.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-white border border-gray-200 text-primary"
              }`}>
                {message.type === "user" ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Bot className="w-5 h-5" />
                )}
              </div>

              <div className={`max-w-[75%] ${
                message.type === "user" ? "text-right" : "text-left"
              }`}>
                <div className={`inline-block p-4 rounded-2xl shadow-sm ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-md"
                    : "bg-white border border-gray-100 text-gray-800 rounded-tl-md"
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
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-md shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t bg-gray-50/50 p-6">
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <Input
              value={chatInput}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={onKeyPress}
              placeholder="Nhập câu hỏi về triết học..."
              disabled={isStreaming}
              className="h-12 text-base resize-none border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white shadow-sm"
            />
          </div>
          <Button
            onClick={onSendMessage}
            disabled={isStreaming || !chatInput.trim()}
            className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Nhấn Enter để gửi tin nhắn
        </p>
      </div>
    </div>
  )
}
