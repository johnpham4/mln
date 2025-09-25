import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
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
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/karl-marx-portrait.png"
          alt="Karl Marx Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Card className="max-w-4xl w-full shadow-2xl border-white/3 bg-transparent fade-in-up relative z-10">
        <CardContent className="p-12 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed fade-in-up drop-shadow-2xl">
              Câu hỏi nghiên cứu
            </h1>

            <div className="bg-transparent border border-white/5 rounded-lg p-8 mb-8 question-card">
              <Quote className="w-12 h-12 text-amber-400/70 mx-auto mb-6 drop-shadow-lg" />
              <blockquote className="text-xl md:text-2xl font-medium text-white/70 leading-relaxed text-pretty drop-shadow-lg">
                &ldquo;Trình bày lý thuyết về học thuyết hình thái kinh tế - xã hội, vận dụng để phân tích mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, vai trò của đấu tranh giai cấp, từ đó lý giải vì sao xã hội luôn vận động và biến đổi.&rdquo;
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-6 my-8 feature-cards">
              <Card className="interactive-element border-white/3 hover:border-amber-400/15 bg-black/5 backdrop-blur-xl">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-amber-400/70 mx-auto mb-3 drop-shadow-lg" />
                  <h3 className="font-semibold text-lg mb-2 text-white/70 drop-shadow-lg">Học thuyết hình thái</h3>
                  <p className="text-sm text-gray-300/60 drop-shadow-md">Cơ sở lý thuyết về sự phát triển xã hội</p>
                </CardContent>
              </Card>

              <Card className="interactive-element border-white/3 hover:border-amber-400/15 bg-black/5 backdrop-blur-xl">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-amber-400/70 mx-auto mb-3 drop-shadow-lg" />
                  <h3 className="font-semibold text-lg mb-2 text-white/70 drop-shadow-lg">Mâu thuẫn cơ bản</h3>
                  <p className="text-sm text-gray-300/60 drop-shadow-md">Động lực phát triển xã hội</p>
                </CardContent>
              </Card>

              <Card className="interactive-element border-white/3 hover:border-amber-400/15 bg-black/5 backdrop-blur-xl">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-amber-400/70 mx-auto mb-3 drop-shadow-lg" />
                  <h3 className="font-semibold text-lg mb-2 text-white/70 drop-shadow-lg">Đấu tranh giai cấp</h3>
                  <p className="text-sm text-gray-300/60 drop-shadow-md">Vai trò trong vận động xã hội</p>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 fade-in-up">
              <Button
                onClick={onEnter}
                size="lg"
                className="bg-red-700/30 hover:bg-red-600/40 text-white px-8 py-4 text-lg font-medium shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-500/20 drop-shadow-2xl"
              >
                <Search className="w-6 h-6 mr-3" />
                Bắt đầu khám phá câu trả lời
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}