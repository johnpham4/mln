import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Quote,
  ChevronRight,
} from "lucide-react"

export default function ConclusionSection() {
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
                  <span>Mâu thuẫn là động lực phát triển</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Quy luật phủ định của phủ định</span>
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
                  <span>Đấu tranh giai cấp là động lực trực tiếp</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Ý thức con người thúc đẩy hành động</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Cách mạng là bước ngoặt lịch sử</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                  <span>Vai trò của giai cấp tiên tiến</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Ý nghĩa thực tiễn</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="interactive-element bg-muted border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Hiểu biết lịch sử
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">
                    Giải thích được các biến động, khủng hoảng và cách mạng trong lịch sử
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element bg-muted border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Dự báo tương lai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">Định hướng phát triển xã hội theo quy luật khách quan</p>
                </CardContent>
              </Card>

              <Card className="interactive-element bg-muted border-muted-foreground/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Hành động thực tiễn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">Hướng dẫn hoạt động cách mạng và xây dựng xã hội</p>
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
}