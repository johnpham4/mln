import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

interface TheorySectionProps {
  onNext: () => void
}

export default function TheorySection({ onNext }: TheorySectionProps) {
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
              <TrendingUp className="w-6 h-6" />
              5 hình thái kinh tế - xã hội
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
              onClick={onNext}
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
}