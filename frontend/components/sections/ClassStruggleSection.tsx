import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  Cog,
  Building,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
} from "lucide-react"

interface ClassStruggleSectionProps {
  onNext: () => void
}

export default function ClassStruggleSection({ onNext }: ClassStruggleSectionProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-balance">
          Tổng Kết
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
          Lý giải vì sao xã hội luôn vận động và biến đổi?
        </p>
      </div>

      {/* Main Causes Section */}
      <Card className="section-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <Target className="w-8 h-8" />
            Nguyên nhân chủ đạo
          </CardTitle>
          <CardDescription className="text-lg">Những động lực cơ bản của sự vận động xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Grid layout for main causes */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Development of Production Forces */}
            <div className="space-y-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Cog className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  Sự phát triển của lực lượng sản xuất
                </h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Luôn có tiến bộ khoa học kỹ thuật, cải tiến công cụ lao động, phương thức sản xuất, tổ chức lao động...
              </p>
              <div className="bg-muted/50 p-3 rounded text-sm text-muted-foreground">
                Điều này đòi hỏi QHSX phải thay đổi để bắt nhịp với LLSX mới. Nếu không, QHSX trở thành chướng ngại.
              </div>
            </div>

            {/* Core Contradiction */}
            <div className="space-y-4 p-6 bg-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-semibold text-secondary">
                  Mâu thuẫn nội tại giữa LLSX và QHSX
                </h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Đây là mâu thuẫn cốt lõi, vận động của xã hội chủ yếu diễn ra từ sự giải quyết mâu thuẫn này.
              </p>
              <div className="bg-muted/50 p-3 rounded text-sm text-muted-foreground">
                Thông qua <strong className="text-secondary">đấu tranh, cách mạng hoặc cải cách</strong>.
              </div>
            </div>

            {/* Superstructure Impact */}
            <div className="space-y-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Building className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  Tác động của kiến trúc thượng tầng
                </h3>
              </div>
              <p className="text-foreground leading-relaxed mb-3">
                Kiến trúc thượng tầng dù phản ánh cơ sở hạ tầng nhưng cũng có thể trì hoãn hoặc thúc đẩy biến đổi.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Luật pháp</span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Tư tưởng</span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Chế độ chính trị</span>
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">Tập quán văn hóa</span>
              </div>
            </div>

            {/* Class Struggle */}
            <div className="space-y-4 p-6 bg-secondary/5 rounded-lg border border-secondary/20">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-semibold text-secondary">
                  Đấu tranh giai cấp
                </h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Là con đường thực tiễn để giải quyết mâu thuẫn, đòi hỏi thay đổi QHSX, thay đổi kiến trúc thượng tầng.
              </p>
              <div className="bg-secondary/20 p-3 rounded border-l-4 border-secondary">
                <p className="text-secondary font-medium text-sm">
                  Không chỉ là xung đột mà là động lực cho sự thay đổi tiến bộ.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Objective Conditions */}
      <Card className="section-card border-secondary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-secondary flex items-center gap-3">
            <Globe className="w-7 h-7" />
            Điều kiện khách quan và đặc thù lịch sử
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Điều kiện tự nhiên</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Môi trường tự nhiên, dân số, địa lý, tài nguyên... ảnh hưởng đến cách thức sản xuất và phát triển.
              </p>
            </div>

            <div className="text-center p-6 bg-secondary/5 rounded-lg border border-secondary/20">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">Quan hệ quốc tế</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Giao lưu văn hóa, tiếp thu công nghệ, ảnh hưởng chính trị tạo những điều kiện mới thúc đẩy biến đổi.
              </p>
            </div>

            <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/20">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Yếu tố chủ quan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Con người, ý thức, lãnh đạo, chính sách — quyết định hướng đi và tốc độ biến đổi xã hội.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Necessity and Law */}
      <Card className="section-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Sự cần thiết & quy luật</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Tính khách quan
              </h4>
              <p className="text-foreground leading-relaxed">
                Biến đổi xã hội là khách quan, không phụ thuộc vào mong muốn cá nhân,
                vì nó xuất phát từ điều kiện vật chất và mâu thuẫn nội tại.
              </p>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
              <h4 className="text-lg font-semibold text-secondary mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Hướng tiến bộ
              </h4>
              <p className="text-foreground leading-relaxed">
                Xã hội phát triển theo hướng nâng cao, tiến lên những hình thái cao hơn
                với trình độ sản xuất và quan hệ sản xuất tiến bộ hơn.
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg text-center">
            <p className="text-muted-foreground leading-relaxed italic">
              &ldquo;Không có xã hội nào giữ mãi hình thái lạc hậu nếu lực lượng sản xuất phát triển vượt trội,
              nếu có đấu tranh giai cấp yêu cầu đổi mới.&rdquo;
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="text-center">
        <Button
          onClick={onNext}
          className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
          size="lg"
        >
          Tiếp tục <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  )
}