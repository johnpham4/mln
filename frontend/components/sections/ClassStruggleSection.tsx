import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Quote,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

interface ClassStruggleSectionProps {
  onNext: () => void
}

export default function ClassStruggleSection({ onNext }: ClassStruggleSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <Users className="w-8 h-8" />
            Vai trò của đấu tranh giai cấp
          </CardTitle>
          <CardDescription className="text-lg">Động lực trực tiếp của sự thay đổi xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
            <Quote className="w-10 h-10 text-primary mb-4" />
            <blockquote className="text-xl italic text-pretty mb-4">
              &quot;Lịch sử của mọi xã hội cho đến nay là lịch sử của đấu tranh giai cấp&quot;
            </blockquote>
            <cite className="text-muted-foreground font-medium">- Karl Marx & Friedrich Engels</cite>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="interactive-element border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Giai cấp thống trị</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Sở hữu tư liệu sản xuất chính</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kiểm soát quyền lực chính trị</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Thống trị ý thức hình thái</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Bảo vệ lợi ích riêng</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="interactive-element border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Giai cấp bị trị</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Không sở hữu tư liệu sản xuất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Bị áp bức, bóc lột</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Đấu tranh cho quyền lợi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Tạo ra sự thay đổi xã hội</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Các hình thức đấu tranh giai cấp</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="interactive-element bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Kinh tế</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">
                    Đình công, biểu tình đòi tăng lương, cải thiện điều kiện làm việc
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-secondary">Chính trị</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">
                    Đấu tranh giành quyền lực nhà nước, thay đổi chế độ chính trị
                  </p>
                </CardContent>
              </Card>

              <Card className="interactive-element bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg text-accent-foreground">Tư tưởng</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pretty">
                    Tuyên truyền, giáo dục, phê phán ý thức hình thái thống trị
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
              size="lg"
            >
              Đến kết luận <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}