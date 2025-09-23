import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Users,
  ArrowRight,
  ChevronRight,
} from "lucide-react"

interface ContradictionSectionProps {
  onNext: () => void
}

export default function ContradictionSection({ onNext }: ContradictionSectionProps) {
  return (
    <div className="space-y-8">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <Zap className="w-8 h-8" />
            Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất
          </CardTitle>
          <CardDescription className="text-lg">Động lực cơ bản của sự vận động xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="interactive-element border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-primary">
                  <Zap className="w-6 h-6" />
                  Lực lượng sản xuất
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Người lao động</h4>
                    <p className="text-sm text-muted-foreground">Yếu tố chủ thể, quyết định</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Tư liệu lao động</h4>
                    <p className="text-sm text-muted-foreground">Công cụ, máy móc, thiết bị</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Đối tượng lao động</h4>
                    <p className="text-sm text-muted-foreground">Nguyên liệu, tài nguyên thiên nhiên</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="interactive-element border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3 text-secondary">
                  <Users className="w-6 h-6" />
                  Quan hệ sản xuất
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Quan hệ sở hữu</h4>
                    <p className="text-sm text-muted-foreground">Về tư liệu sản xuất</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Quan hệ trao đổi</h4>
                    <p className="text-sm text-muted-foreground">Phân phối sản phẩm lao động</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">Quan hệ phân phối</h4>
                    <p className="text-sm text-muted-foreground">Thu nhập và lợi ích kinh tế</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-destructive flex items-center gap-3">
              <Zap className="w-7 h-7" />
              Mâu thuẫn cơ bản
            </h3>
            <p className="text-lg text-pretty mb-6">
              Khi lực lượng sản xuất phát triển nhanh hơn quan hệ sản xuất, sẽ xuất hiện mâu thuẫn. Quan hệ sản
              xuất cũ trở thành rào cản cho sự phát triển của lực lượng sản xuất.
            </p>
            <div className="bg-background p-6 rounded-lg border">
              <p className="font-semibold text-primary mb-2">Ví dụ thực tế:</p>
              <p className="text-pretty">
                Trong chế độ phong kiến, khi công nghệ và thương mại phát triển, các quan hệ phong kiến cũ (nông
                nô, thủ công nghiệp bang hội) trở thành rào cản, dẫn đến cách mạng tư sản.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={onNext}
              className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
              size="lg"
            >
              Khám phá đấu tranh giai cấp <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}