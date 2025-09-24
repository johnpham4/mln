'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Eye,
  Lightbulb,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const AIUsageSection = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const principles = [
    {
      id: 'transparency',
      icon: <Eye className="w-5 h-5" />,
      title: 'Minh bạch',
      color: 'bg-primary/5 border-primary/20',
      badge: 'bg-primary/10 text-primary',
      description: 'Công khai sử dụng AI và quy trình làm việc',
      details: {
        tools: ['ChatGPT-4', 'Claude 3.5 Sonnet', 'v0.dev'],
        purposes: ['Tạo nội dung sơ bộ', 'Kiểm tra logic', 'Thiết kế giao diện'],
        prompts: [
          'Giải thích học thuyết hình thái kinh tế-xã hội của Marx',
          'Tạo chatbot hỗ trợ học tập triết học Marxist',
          'Thiết kế giao diện web học tập tương tác'
        ]
      }
    },
    {
      id: 'responsibility',
      icon: <Shield className="w-5 h-5" />,
      title: 'Có trách nhiệm',
      color: 'bg-secondary/5 border-secondary/20',
      badge: 'bg-secondary/10 text-secondary',
      description: 'Kiểm chứng thông tin và chịu trách nhiệm nội dung',
      details: {
        verification: [
          'Giáo trình Lý luận chính trị (2019/2021)',
          'Tạp chí Cộng sản',
          'Tư liệu văn kiện Đảng',
          'Nghị quyết chính thống'
        ],
        examples: [
          'Phương thức sản xuất = LLSX + QHSX → Xác nhận qua giáo trình LLCT',
          'Quá trình lịch sử 5 hình thái → Xác nhận qua lyluanchinhtrivatruyenthong.vn',
          'Mâu thuẫn LLSX-QHSX → Xác nhận qua Tạp chí Cộng sản'
        ]
      }
    },
    {
      id: 'creativity',
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Sáng tạo',
      color: 'bg-primary/5 border-primary/20',
      badge: 'bg-primary/10 text-primary',
      description: 'AI hỗ trợ, không thay thế hoàn toàn',
      details: {
        support: [
          'Tạo sơ đồ tư duy về các khái niệm',
          'Thiết kế câu hỏi cho minigame tương tác',
          'Xây dựng chatbot hỗ trợ học tập',
          'Tạo video minh họa ngắn'
        ],
        human: [
          'Phân tích và tổng hợp nội dung',
          'Chỉnh sửa và hoàn thiện',
          'Đánh giá độ chính xác',
          'Quyết định nội dung cuối cùng'
        ]
      }
    },
    {
      id: 'integrity',
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Liêm chính học thuật',
      color: 'bg-secondary/5 border-secondary/20',
      badge: 'bg-secondary/10 text-secondary',
      description: 'Cam kết không để AI thay thế hoàn toàn',
      details: {
        commitments: [
          'Cam kết bằng văn bản về việc sử dụng AI',
          'Phân định rõ AI output vs nội dung tự viết',
          'Đối chiếu nguồn chính thống cho thông tin AI'
        ],
        evidence: [
          'Slide "AI Usage" chi tiết trong presentation',
          'Ghi chú kiểm chứng cho mọi luận điểm',
          'Link drive tài liệu tham khảo đầy đủ'
        ]
      }
    }
  ];

  const verificationData = [
    {
      topic: 'Học thuyết hình thái kinh tế-xã hội',
      points: [
        {
          claim: 'Phương thức sản xuất = sự thống nhất của lực lượng sản xuất và quan hệ sản xuất',
          source: 'Giáo trình Mác-Lênin, Công ty Luật TNHH Minh Khuê',
          verified: true
        },
        {
          claim: 'Quá trình lịch sử: 5 hình thái kinh tế-xã hội',
          source: 'lyluanchinhtrivatruyenthong.vn',
          verified: true
        }
      ]
    },
    {
      topic: 'Mâu thuẫn LLSX và QHSX',
      points: [
        {
          claim: 'LLSX phát triển, QHSX trở thành vật cản',
          source: 'Tạp chí Cộng sản, Ban Tuyên giáo',
          verified: true
        },
        {
          claim: 'Thay đổi QHSX qua cải cách hoặc cách mạng',
          source: 'Văn kiện LLCT, lyluanchinhtrivatruyenthong.vn',
          verified: true
        }
      ]
    },
    {
      topic: 'Đấu tranh giai cấp',
      points: [
        {
          claim: 'Đấu tranh giai cấp là động lực lịch sử',
          source: 'Tuyên ngôn Đảng Cộng sản, Tư liệu Văn kiện',
          verified: true
        },
        {
          claim: 'Hình thức đa dạng: kinh tế, chính trị, tư tưởng',
          source: 'Trường Chính Trị Bình Thuận',
          verified: true
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-3xl text-primary flex items-center gap-3">
            <Shield className="w-8 h-8" />
            Ứng dụng AI có trách nhiệm
          </CardTitle>
          <CardDescription className="text-lg">
            Minh bạch, sáng tạo và liêm chính trong việc sử dụng AI để hỗ trợ học tập
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-primary mb-3">Cam kết sử dụng AI</h3>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi cam kết sử dụng AI một cách minh bạch, có trách nhiệm và sáng tạo.
              AI chỉ đóng vai trò hỗ trợ, không thay thế hoàn toàn quá trình nghiên cứu và học tập.
              Mọi thông tin được kiểm chứng qua các nguồn chính thống.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Nguyên tắc 4 trụ cột */}
      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle) => (
          <Card key={principle.id} className={`${principle.color} hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-lg bg-white">
                  {principle.icon}
                </div>
                {principle.title}
              </CardTitle>
              <CardDescription>{principle.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                onClick={() => toggleSection(principle.id)}
                className="flex items-center gap-2"
              >
                {activeSection === principle.id ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
                Chi tiết
              </Button>

              {activeSection === principle.id && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  {principle.id === 'transparency' && (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2">Công cụ AI sử dụng:</h4>
                        <div className="flex flex-wrap gap-2">
                          {principle.details.tools?.map((tool, idx) => (
                            <Badge key={idx} variant="secondary">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Mục đích:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {principle.details.purposes?.map((purpose, idx) => (
                            <li key={idx}>{purpose}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Prompt chính:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {principle.details.prompts?.map((prompt, idx) => (
                            <li key={idx} className="italic">"{prompt}"</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {principle.id === 'responsibility' && (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2">Nguồn kiểm chứng:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {principle.details.verification?.map((source, idx) => (
                            <li key={idx}>{source}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ví dụ kiểm chứng:</h4>
                        <ul className="text-sm space-y-2">
                          {principle.details.examples?.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {principle.id === 'creativity' && (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">AI hỗ trợ:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {principle.details.support?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary">Con người thực hiện:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                          {principle.details.human?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {principle.id === 'integrity' && (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2">Cam kết:</h4>
                        <ul className="text-sm space-y-2">
                          {principle.details.commitments?.map((commitment, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{commitment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Bằng chứng:</h4>
                        <ul className="text-sm space-y-2">
                          {principle.details.evidence?.map((evidence, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ExternalLink className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{evidence}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bảng kiểm chứng chi tiết */}
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            Bảng kiểm chứng chi tiết
          </CardTitle>
          <CardDescription>
            Đối chiếu từng luận điểm với nguồn chính thống
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {verificationData.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {idx + 1}. {section.topic}
                </h3>
                <div className="space-y-3">
                  {section.points.map((point, pointIdx) => (
                    <div key={pointIdx} className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 mb-2">{point.claim}</p>
                          <p className="text-sm text-gray-600">
                            <strong>Nguồn xác nhận:</strong> {point.source}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Tài liệu tham khảo
            </h4>
            <p className="text-primary mb-3">
              <strong>Link Drive:</strong>{' '}
              <a
                href="https://drive.google.com/drive/folders/1xzXXyHJXaGi-W1x0J5JwNe1D-moP0vkm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary/80"
              >
                Thư mục tài liệu đầy đủ
              </a>
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Slide tiết 33: Khái niệm học thuyết hình thái kinh tế-xã hội</p>
              <p>• Slide tiết 36: Nguồn gốc giai cấp và vai trò đấu tranh giai cấp</p>
              <p>• Các tài liệu kiểm chứng từ nguồn chính thống</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AIUsageSection;