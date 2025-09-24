"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Quote, Lightbulb, History, ArrowRight, Cog, Users, Building, TrendingUp, BookOpen } from "lucide-react"

interface IntroSectionProps {
  onNext: () => void
}

export default function IntroSection({ onNext }: IntroSectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-balance">
          Học thuyết hình thái kinh tế - xã hội
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
          Khám phá phạm trù cơ bản của chủ nghĩa duy vật lịch sử về sự phát triển xã hội qua các nấc thang lịch sử
        </p>
        <Badge variant="secondary" className="mt-4 text-base px-4 py-2">
          Chủ nghĩa duy vật lịch sử
        </Badge>
      </div>

      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-3">
            <Target className="w-7 h-7" />
            Khái niệm và thành phần cấu tạo
          </CardTitle>
          <CardDescription className="text-lg">
            Phạm trù cơ bản dùng để chỉ xã hội ở từng nấc thang lịch sử nhất định
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
            <Quote className="w-8 h-8 text-primary mb-4" />
            <blockquote className="text-lg italic text-pretty">
              "Một phạm trù cơ bản của chủ nghĩa duy vật lịch sử dùng để chỉ xã hội ở từng nấc thang lịch sử nhất định
              với một kiểu quan hệ sản xuất đặc trưng cho xã hội đó, phù hợp với một trình độ nhất định của lực lượng
              sản xuất và một kiến trúc thượng tầng tương ứng được xây dựng trên quan hệ sản xuất ấy."
            </blockquote>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="interactive-element border-primary/20 hover:border-primary/40">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <Cog className="w-5 h-5" />
                  Lực lượng sản xuất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm">
                  Toàn bộ năng lực thực tiễn của xã hội trong sản xuất: sức lao động con người + tư liệu sản xuất (công
                  cụ, máy móc, nguyên liệu, kỹ thuật, tổ chức)
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-element border-secondary/20 hover:border-secondary/40">
              <CardHeader>
                <CardTitle className="text-lg text-secondary flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Quan hệ sản xuất
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm">
                  Các quan hệ giữa người với người trong sản xuất: quyền sở hữu tư liệu sản xuất, tổ chức sản xuất, phân
                  phối sản phẩm lao động
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-element border-primary/20 hover:border-primary/40">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Kiến trúc thượng tầng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm">
                  Chế độ chính trị, nhà nước, pháp luật, tư tưởng, đạo đức, văn hóa, nghệ thuật... phản ánh và phụ thuộc
                  vào cơ sở hạ tầng
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary flex items-center gap-3">
            <TrendingUp className="w-7 h-7" />
            Quá trình phát triển các hình thái
          </CardTitle>
          <CardDescription className="text-lg">
            Sự vận động không ngừng của xã hội qua các giai đoạn lịch sử
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary">
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Cộng sản nguyên thủy",
                "Chiếm hữu nô lệ",
                "Phong kiến",
                "Tư bản chủ nghĩa",
                "Chủ nghĩa xã hội",
                "Chủ nghĩa cộng sản",
              ].map((stage, index) => (
                <div key={stage} className="flex items-center">
                  <Badge variant="outline" className="text-xs">
                    {stage}
                  </Badge>
                  {index < 5 && <ArrowRight className="w-3 h-3 mx-2 text-muted-foreground" />}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Mỗi hình thái có LLSX, QHSX, kiến trúc thượng tầng đặc trưng. Trong thực tiễn, có thể bỏ qua hoặc rút ngắn
              một số giai đoạn nếu có điều kiện đặc biệt. (Ví dụ nhảy vọt về công nghệ, ảnh hưởng bên ngoài, cách mạng đặc thù…)
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-3">
            <BookOpen className="w-7 h-7" />
            Phương pháp phân tích
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="interactive-element border-primary/20 hover:border-primary/40">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Duy vật biện chứng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm">
                  Phân tích xã hội như một hệ thống, xem xét LLSX và QHSX trong mối quan hệ biện chứng - vừa phụ thuộc
                  nhau, vừa tác động qua lại.
                </p>
              </CardContent>
            </Card>

            <Card className="interactive-element border-secondary/20 hover:border-secondary/40">
              <CardHeader>
                <CardTitle className="text-lg text-secondary flex items-center gap-2">
                  <History className="w-5 h-5" />
                  Trừu tượng hóa lịch sử
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-sm">
                  Tách ra các yếu tố như quan hệ sản xuất, lực lượng sản xuất, xem chúng như thế nào trong xã hội cụ
                  thể, không chỉ nhìn hiện tượng bên ngoài.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center pt-4">
            <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-lg px-6 py-3" size="lg">
              Tìm hiểu sâu hơn <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
