import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Quote,
  Lightbulb,
  History,
  ArrowRight,
} from "lucide-react"

interface IntroSectionProps {
  onNext: () => void
}

export default function IntroSection({ onNext }: IntroSectionProps) {
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
              onClick={onNext}
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
}