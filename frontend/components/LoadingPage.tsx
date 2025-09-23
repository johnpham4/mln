import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Zap,
  Target,
  Quote,
  Search,
  ArrowRight,
} from "lucide-react"

interface LoadingPageProps {
  onEnter: () => void
}

export default function LoadingPage({ onEnter }: LoadingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full shadow-2xl border-primary/20 fade-in-up">
        <CardContent className="p-12 text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-lg px-6 py-2 mb-6 fade-in-up">
              <BookOpen className="w-5 h-5 mr-2" />
              Triết học Marxist
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-relaxed fade-in-up">
              Câu hỏi nghiên cứu
            </h1>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8 question-card">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed text-pretty">
                "Trình bày lý thuyết về học thuyết hình thái kinh tế - xã hội, vận dụng để phân tích mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, vai trò của đấu tranh giai cấp, từ đó lý giải vì sao xã hội luôn vận động và biến đổi."
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-8 feature-cards">
              <Card className="interactive-element border-primary/20 hover:border-primary/40">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Học thuyết hình thái</h3>
                  <p className="text-sm text-muted-foreground">Cơ sở lý thuyết về sự phát triển xã hội</p>
                </CardContent>
              </Card>

              <Card className="interactive-element border-secondary/20 hover:border-secondary/40">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Mâu thuẫn cơ bản</h3>
                  <p className="text-sm text-muted-foreground">Động lực phát triển xã hội</p>
                </CardContent>
              </Card>

              <Card className="interactive-element border-accent/20 hover:border-accent/40">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-accent-foreground mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Đấu tranh giai cấp</h3>
                  <p className="text-sm text-muted-foreground">Vai trò trong vận động xã hội</p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 fade-in-up">
              <Button
                onClick={onEnter}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Search className="w-6 h-6 mr-3" />
                Bắt đầu khám phá câu trả lời
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mt-6 fade-in-up">
              Nhấp vào nút trên để bắt đầu hành trình tìm hiểu triết học Marxist
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}