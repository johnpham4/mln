'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConclusionSection = () => {
  const [activeSection, setActiveSection] = useState<number | null>(1);
  const [showConclusion, setShowConclusion] = useState(false);

  const sections = [
    {
      id: 1,
      title: "Đặt vấn đề",
      subtitle: "Câu hỏi kiến tạo cốt lõi",
      content: {
        question: "Vậy tại sao xã hội loài người không đứng yên ổn định mà luôn vận động, phát triển không ngừng?",
        context: "Có người cho rằng xã hội càng phát triển thì càng ổn định, nhưng thực tế cho thấy luôn có biến động, thay đổi và khủng hoảng."
      }
    },
    {
      id: 2,
      title: "Bản chất vận động",
      subtitle: "Tính chất cơ bản của vật chất",
      content: {
        main: "Vận động vốn là một thuộc tính và phương thức tồn tại của mọi vật chất và không có gì là đứng yên tuyệt đối bao gồm xã hội loài người.",
        detail: "Ổn định và phát triển chính là 2 trạng thái vận động của các sự vật, hiện tượng trong xã hội là hình thái của vận động xã hội."
      }
    },
    {
      id: 3,
      title: "Minh chứng lịch sử",
      subtitle: "Những biến động qua các thời kỳ",
      content: {
        intro: "Theo lịch sử phát triển của thế giới vẫn luôn tồn tại những sự bất ổn qua từng thời kỳ:",
        historical: [
          "Chiến tranh thế giới thứ nhất và thứ hai",
          "Cuộc khủng hoảng đại suy thoái năm 1929-1939",
          "Cuộc khủng hoảng dầu mỏ năm 1970",
          "Khủng hoảng tài chính toàn cầu năm 2008"
        ],
        recent: "Gần đây nổi bật với nhiều cuộc bạo loạn, bạo động và biểu tình ở các nước khác nhau trên thế giới."
      }
    },
    {
      id: 4,
      title: "Nguyên nhân mâu thuẫn",
      subtitle: "Động lực phát triển xã hội",
      content: {
        core: "Sự mâu thuẫn xã hội chính là động lực phát triển và xã hội thì luôn tồn tại những mâu thuẫn.",
        causes: [
          "Giữa các lực lượng sản xuất và quan hệ sản xuất",
          "Giữa cái cũ và cái mới",
          "Giữa lợi ích cá nhân và lợi ích cộng đồng"
        ],
        development: "Sự phát triển mang tính tiến hóa (cải tiến dần dần) nhưng đôi khi cũng mang tính cách mạng tạo ra những biến đổi nhảy vọt."
      }
    },
    {
      id: 5,
      title: "Bản chất không đứng yên",
      subtitle: "Vận động là thuộc tính tuyệt đối",
      content: {
        essence: "Xã hội loài người không thể đứng yên mà ổn định được vì bản chất là xã hội luôn vận động.",
        example: "Ví dụ: như cây cối và ngay cả chiếc bàn tưởng như đứng yên thì thực chất nó cũng đang vận động.",
        relativity: "Nếu cho rằng xã hội càng phát triển thì càng ổn định thì sự ổn định đó chỉ mang tính tương đối và tạm thời. Sự thay đổi, đổi mới và tiến về phía trước mới mang tính tuyệt đối."
      }
    }
  ];

  const toggleSection = (id: number) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-balance">
          Câu Hỏi Kiến Tạo
        </h1>
        <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
          Khám phá câu hỏi cốt lõi về sự vận động không ngừng của xã hội loài người
        </p>
      </div>

      {/* Interactive Sections */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <Card
            key={section.id}
            className={`section-card cursor-pointer transition-all duration-300 hover:shadow-lg ${
              activeSection === section.id ? 'border-primary/50 bg-primary/5' : ''
            }`}
            onClick={() => toggleSection(section.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-primary mb-1">
                    {index + 1}. {section.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {section.subtitle}
                  </p>
                </div>
                <div className="transition-transform duration-200">
                  {activeSection === section.id ? (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              </div>
            </CardHeader>

            {/* Expandable Content */}
            <div className={`transition-all duration-300 overflow-hidden ${
              activeSection === section.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <CardContent className="pt-0">
                {section.id === 1 && (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">{section.content.context}</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-primary text-lg">Câu hỏi kiến tạo:</p>
                      <p className="text-foreground mt-2">{section.content.question}</p>
                    </div>
                  </div>
                )}

                {section.id === 2 && (
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed font-medium">{section.content.main}</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">{section.content.detail}</p>
                    </div>
                  </div>
                )}

                {section.id === 3 && (
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed">{section.content.intro}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.content.historical?.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <span className="text-primary font-bold text-sm mt-0.5">•</span>
                          <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-foreground leading-relaxed">{section.content.recent}</p>
                    </div>
                  </div>
                )}

                {section.id === 4 && (
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-primary leading-relaxed font-medium">{section.content.core}</p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-foreground font-medium">Nguyên nhân của những mâu thuẫn:</p>
                      {section.content.causes?.map((cause, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <span className="text-primary font-bold">•</span>
                          <span className="text-muted-foreground">{cause}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed">{section.content.development}</p>
                    </div>
                  </div>
                )}

                {section.id === 5 && (
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed font-medium">{section.content.essence}</p>
                    <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-primary">Ví dụ minh họa:</strong> {section.content.example}
                      </p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-foreground leading-relaxed">
                        <strong className="text-primary">Kết luận:</strong> {section.content.relativity}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Conclusion Button */}
      <div className="text-center">
        <button
          onClick={() => setShowConclusion(!showConclusion)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg"
        >
          {showConclusion ? 'Ẩn kết luận tổng hợp' : 'Xem kết luận tổng hợp'}
        </button>
      </div>

      {/* Final Conclusion */}
      {showConclusion && (
        <Card className="section-card border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">
              Kết Luận Tổng Hợp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Về tính ổn định tương đối
              </h4>
              <p className="text-foreground leading-relaxed">
                Nếu cho rằng xã hội càng phát triển thì càng ổn định thì có thể khẳng định về sự ổn định đó
                chỉ mang tính <strong className="text-primary">tương đối và tạm thời</strong>. Vẫn sẽ cần có sự thay đổi, đổi mới và chính sự luôn tiến về phía trước đó mới mang tính tuyệt đối.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Về phương thức phát triển hợp lý
              </h4>
              <p className="text-foreground leading-relaxed">
                Chúng ta vẫn cần đề cao tư tưởng đổi mới, ổn định và phát triển cần xây dựng và phát triển dần
                để tạo nên những thay đổi nhỏ từ từ, từng chút một. Nếu quá nhanh chóng và nhảy vọt trong khi xã hội chưa kịp thích ứng
                thì tất yếu sẽ xảy ra các biến động và khủng hoảng lớn.
              </p>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Ứng dụng tại Việt Nam
              </h4>
              <p className="text-foreground leading-relaxed">
                Hiện tại nhà nước ta đang lấy việc <strong className="text-primary">phát triển bền vững</strong> làm mục tiêu
                trong việc phát triển dài hạn của đất nước - thể hiện sự hiểu biết sâu sắc về quy luật vận động và phát triển của xã hội.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ConclusionSection;
