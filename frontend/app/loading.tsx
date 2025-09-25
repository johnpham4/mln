'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Target, Users } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/karl-marx-portrait.png"
          alt="Karl Marx Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-600/90 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <BookOpen className="w-4 h-4" />
          <span className="text-sm font-medium">Triết học Marxist</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Câu hỏi nghiên cứu
        </h1>

        {/* Quote box */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8 shadow-lg">
          <div className="text-6xl text-amber-400 mb-4 font-serif">&ldquo;</div>
          <p className="text-lg md:text-xl text-white leading-relaxed italic">
            Trình bày lý thuyết về học thuyết hình thái kinh tế - xã hội, vận dụng để phân tích mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, vai trò của đấu tranh giai cấp, từ đó lý giải vì sao xã hội luôn vận động và biến đổi.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
            <Target className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Học thuyết hình thái</h3>
            <p className="text-sm text-gray-200">Cơ sở lý thuyết và sự phát triển xã hội</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
            <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
              <div className="w-6 h-6 bg-amber-400 rounded-full relative">
                <div className="absolute inset-0 bg-amber-400/50 rounded-full animate-ping"></div>
              </div>
            </div>
            <h3 className="font-semibold text-white mb-1">Mâu thuẫn cơ bản</h3>
            <p className="text-sm text-gray-200">Động lực phát triển xã hội</p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
            <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Đấu tranh giai cấp</h3>
            <p className="text-sm text-gray-200">Vai trò trong vận động xã hội</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button className="bg-red-700/90 hover:bg-red-600/90 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm border border-red-500/30 transition-all duration-200">
            <span className="mr-2">🔍</span>
            Bắt đầu khám phá câu trả lời
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Loading animation */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-white font-medium drop-shadow-lg">
            Đang khởi tạo hệ thống{dots}
          </p>
          <p className="text-sm text-gray-200">
            Nhấn vào nút trên để bắt đầu hành trình tìm hiểu triết học Marxist
          </p>
        </div>
      </div>
    </div>
  );
}
