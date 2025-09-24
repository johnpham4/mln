"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Sword, ArrowRight, Target, TrendingUp, Shield } from "lucide-react"
import { useState } from "react"

interface ClassStruggleSectionProps {
  onNext: () => void
}

export default function ClassStruggleSection({ onNext }: ClassStruggleSectionProps) {
  const [activeRole, setActiveRole] = useState<string | null>(null)

  const handleRoleClick = (type: string) => {
    setActiveRole(activeRole === type ? null : type)
  }

  const roleData = {
    historical: {
      title: "Động lực trực tiếp của lịch sử",
      icon: Target,
      color: "primary",
      content: {
        title: "Đặc điểm và vai trò:",
        items: [
          "Thúc đẩy sự thay đổi xã hội, làm lộ rõ mâu thuẫn",
          "Thúc ép sự cải cách hoặc cách mạng để thay đổi quan hệ sản xuất",
          "Làm cho quan hệ sản xuất phù hợp với lực lượng sản xuất mới",
        ],
      },
    },
    protection: {
      title: "Bảo vệ lợi ích giai cấp",
      icon: Shield,
      color: "secondary",
      content: {
        title: "Đặc điểm và vai trò:",
        items: [
          "Cải thiện điều kiện sống của giai cấp bị áp bức",
          "Đạt được sự công nhận về quyền lợi chính đáng",
          "Tham gia vào quản lý và điều hành xã hội",
        ],
      },
    },
    consciousness: {
      title: "Phát triển ý thức giai cấp",
      icon: TrendingUp,
      color: "accent",
      content: {
        title: "Đặc điểm và vai trò:",
        items: [
          "Giúp các thành viên nhận thức về vị thế của mình",
          "Tạo sự liên kết và đoàn kết trong giai cấp",
          "Tổ chức lực lượng để đấu tranh hiệu quả",
        ],
      },
    },
  }

  return (
    <div className="space-y-8">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <Sword className="w-8 h-8" />
            Vai trò của đấu tranh giai cấp
          </CardTitle>
          <CardDescription className="text-lg">Động lực trực tiếp của lịch sử xã hội</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Khái niệm và nguồn gốc */}
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-3">
              <Users className="w-7 h-7" />
              Khái niệm và nguồn gốc
            </h3>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border">
                <h4 className="font-semibold text-primary mb-3">Giai cấp là gì?</h4>
                <p className="text-pretty mb-4">
                  Những tập đoàn người có địa vị khác nhau trong chế độ sản xuất, đặc biệt khác nhau về:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Quan hệ sở hữu tư liệu sản xuất</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Vai trò trong lao động và quản lý</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Phân phối sản phẩm lao động</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Địa vị xã hội và quyền lực</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-lg">
                <h4 className="font-semibold text-secondary mb-3">Nguồn gốc giai cấp</h4>
                <div className="space-y-3">
                  <p className="text-sm">
                    <span className="font-medium">Nguồn gốc trực tiếp:</span> Sự ra đời và tồn tại của chế độ chiếm hữu
                    tư nhân về tư liệu sản xuất
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Nguồn gốc sâu xa:</span> Tình trạng phát triển chưa đạt tới trình độ
                    xã hội hóa cao của lực lượng sản xuất
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-destructive flex items-center gap-3">
              <Sword className="w-7 h-7" />
              Nội dung đấu tranh giai cấp
            </h3>

            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border">
                <h4 className="font-semibold text-primary mb-3">Ba hình thức đấu tranh cơ bản</h4>
                <p className="text-pretty mb-4">
                  Đấu tranh giai cấp là cuộc đấu tranh lợi ích, quyền lực, phân phối giữa tập đoàn người này và người khác trong xã hội, giữa giai cấp thống trị và giai cấp bị trị.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Đấu tranh kinh tế
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Yêu cầu cải thiện đời sống vật chất, tăng lương, giảm giờ làm việc, bảo vệ quyền lợi kinh tế.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Đấu tranh chính trị
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Giành quyền lực chính trị, lật đổ chế độ áp bức, đấu tranh cho dân chủ và bình đẳng.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold text-accent-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Đấu tranh tư tưởng
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Thay đổi ý thức xã hội, phê phán tư tưởng cũ, xây dựng hệ tư tưởng mới tiến bộ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-center">Vai trò trong quá trình phát triển xã hội</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(roleData).map(([key, data]) => {
                const IconComponent = data.icon
                return (
                  <Card
                    key={key}
                    className={`interactive-element border-${data.color}/20 hover:border-${data.color}/40 transition-all duration-300 cursor-pointer ${
                      activeRole === key ? `ring-2 ring-${data.color}/50` : ""
                    }`}
                    onClick={() => handleRoleClick(key)}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className={`text-lg text-${data.color} flex flex-col items-center gap-3`}>
                        <IconComponent className="w-8 h-8" />
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>

            {activeRole && (
              <Card className="w-full animate-in slide-in-from-top-2 duration-300">
                <CardContent className="pt-6">
                  <div
                    className={`bg-${roleData[activeRole as keyof typeof roleData].color}/5 p-6 rounded-lg border border-${roleData[activeRole as keyof typeof roleData].color}/10`}
                  >
                    <h4 className={`font-semibold text-${roleData[activeRole as keyof typeof roleData].color} mb-4`}>
                      {roleData[activeRole as keyof typeof roleData].content.title}
                    </h4>
                    <div className="space-y-3">
                      {roleData[activeRole as keyof typeof roleData].content.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 bg-${roleData[activeRole as keyof typeof roleData].color} rounded-full mt-2`}
                          ></div>
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="text-center">
            <Button onClick={onNext} className="bg-primary hover:bg-primary/90 text-lg px-6 py-3" size="lg">
              Tiếp tục khám phá <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
