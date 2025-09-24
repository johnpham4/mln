"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  ArrowRight,
  Zap,
  AlertTriangle,
  RefreshCw,
  Users,
  Factory,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

interface TheorySectionProps {
  onNext: () => void
}

export default function TheorySection({ onNext }: TheorySectionProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="space-y-8">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Mâu thuẫn giữa Lực lượng sản xuất và Quan hệ sản xuất
          </CardTitle>
          <CardDescription className="text-lg">Vận dụng lý thuyết Marx về động lực phát triển xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Bản chất mâu thuẫn */}
          <Card className="interactive-element bg-muted/30 border-muted-foreground/20 hover:bg-muted/50 transition-colors">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("nature")}>
              <CardTitle className="text-xl text-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  Bản chất mâu thuẫn
                </div>
                {expandedSection === "nature" ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSection === "nature" && (
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-primary/10 border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary flex items-center gap-2">
                        <Factory className="w-5 h-5" />
                        Lực lượng sản xuất
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground text-pretty">
                        Có khuynh hướng phát triển, đổi mới, mở rộng năng lực sản xuất, áp dụng khoa học kỹ thuật mới,
                        cải tiến tổ chức lao động.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted border-muted-foreground/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-muted-foreground flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Quan hệ sản xuất
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground text-pretty">
                        Nếu vẫn giữ nguyên trạng thái cũ, lạc hậu, cố định, không phản ánh được trình độ LLSX mới, sẽ
                        trở thành vật cản lịch sử. Nó ngăn cản sản xuất phát triển, làm hạn chế tiến bộ xã hội.

                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
                  <p className="text-destructive font-medium text-center">
                    ⚡ Khi sự phát triển LLSX đến mức nhất định, nó có thể vượt khả năng phù hợp hoặc bị kìm hãm bởi
                    QHSX hiện tại
                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Khi mâu thuẫn bộc lộ */}
          <Card className="interactive-element bg-muted/30 border-muted-foreground/20 hover:bg-muted/50 transition-colors">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("crisis")}>
              <CardTitle className="text-xl text-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  Khi mâu thuẫn bộc lộ & cách giải quyết
                </div>
                {expandedSection === "crisis" ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSection === "crisis" && (
              <CardContent className="space-y-4">
                <div className="bg-muted border border-muted-foreground/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Khi mâu thuẫn trở nên gay gắt:</h4>
                  <p className="text-muted-foreground text-sm">
                    Xã hội có áp lực lớn để thay đổi. Công nghệ mới đòi hỏi cách sở hữu mới, tổ chức quản lý mới, phân
                    phối mới.
                  </p>
                </div>

                <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-2">Nếu QHSX không thay đổi:</h4>
                  <p className="text-destructive text-sm">→ Khủng hoảng kinh tế, khủng hoảng xã hội</p>
                </div>

                <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Cách giải quyết:</h4>
                  <p className="text-foreground text-sm">
                    Việc thay đổi không tự động, cần có sự chủ động từ con người: giai cấp bị áp bức, các lực lượng xã
                    hội tiến bộ, phong trào xã hội, cách mạng hoặc các cải cách lớn để thay QHSX cũ bằng quan hệ sản
                    xuất mới phù hợp hơn với LLSX mới.
                  </p>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Ví dụ minh họa */}
          <Card className="interactive-element bg-muted/30 border-muted-foreground/20 hover:bg-muted/50 transition-colors">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("examples")}>
              <CardTitle className="text-xl text-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  Ví dụ minh họa trong lịch sử
                </div>
                {expandedSection === "examples" ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSection === "examples" && (
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Card className="bg-primary/10 border-primary/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Từ Phong kiến → Tư bản chủ nghĩa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground">
                        Khi máy móc, công nghệ sản xuất được phát triển mạnh, cách tổ chức sản xuất phong kiến không còn
                        thích hợp → tư bản chủ nghĩa ra đời.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted border-muted-foreground/30">
                    <CardHeader>
                      <CardTitle className="text-lg text-muted-foreground">Mâu thuẫn trong Tư bản chủ nghĩa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground">
                        Các mâu thuẫn giữa sở hữu tư nhân với sản xuất xã hội hóa ngày càng lớn, dẫn đến mâu thuẫn giai
                        cấp rõ rệt.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-muted/20 p-6 rounded-lg border border-muted-foreground/20">
                  <h4 className="font-semibold text-lg mb-3 text-center text-foreground">Quy luật phát triển xã hội</h4>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded">LLSX phát triển</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded">
                      Mâu thuẫn với QHSX
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded">Thay đổi QHSX</span>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          <div className="text-center">
            <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" size="lg">
              Tiếp tục tìm hiểu <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
