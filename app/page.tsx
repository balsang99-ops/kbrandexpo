"use client";
import React, { useState } from 'react';
import { Globe, PlayCircle, CreditCard } from 'lucide-react';

export default function KBrandExpo() {
  const [lang, setLang] = useState('EN');

  // 1. Toss Payments 호출 로직
  const handlePayment = async () => {
    // 실제 Toss Payments SDK 연동부 (Client Key 필요)
    console.log("Toss Payments Global Checkout Initiated");
    alert("결제창으로 이동합니다. (Toss Payments Global SDK)");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 2. 글로벌 네비게이션 & 다국어 선택 */}
      <nav className="p-4 bg-white flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold text-blue-900">DR.MD K-BRAND EXPO</h1>
        <div className="flex gap-4">
          <button onClick={() => setLang('KR')} className={lang === 'KR' ? 'font-bold' : ''}>KR</button>
          <button onClick={() => setLang('EN')} className={lang === 'EN' ? 'font-bold' : ''}>EN</button>
          <Globe className="w-5 h-5 text-slate-600" />
        </div>
      </nav>

      {/* 3. K-BRAND Live Showroom (해피허브메타 임베딩 영역) */}
      <section className="container mx-auto my-8 p-4">
        <div className="bg-black aspect-video rounded-xl overflow-hidden flex items-center justify-center text-white relative">
          {/* 실제 해피허브메타 iframe이 들어갈 자리 */}
          <iframe 
            src="https://happyhubmeta.com/showroom/drmd" 
            className="w-full h-full border-0"
            title="Dr.MD Live Showroom"
          />
          <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            LIVE SHOWROOM
          </div>
        </div>
      </section>

      {/* 4. K-Brand Pay 섹션 */}
      <section className="bg-blue-50 p-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Secure Global Checkout</h2>
        <button 
          onClick={handlePayment}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
        >
          <CreditCard className="w-5 h-5" />
          Pay with Toss Payments
        </button>
      </section>
    </div>
  );
}
