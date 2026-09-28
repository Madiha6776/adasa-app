import React from 'react'

import { Link } from "react-router-dom";

const stats = [
  { icon: "fa-newspaper", value: "+50", label: "مقالة" },
  { icon: "fa-users", value: "+10ألف", label: "قارئ" },
  { icon: "fa-folder-open", value: "4", label: "تصنيفات" },
  { icon: "fa-pen-nib", value: "6", label: "كاتب" },
];

export default function Hero() {
  return (
  <section className="relative overflow-hidden">
  {/* خلفية المربعات */}
  <div className="absolute inset-0 bg-[url('/grid.svg')]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
       
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-[#161616]/80 border border-[#262626] animate-fade-in">
            <span className="flex items-center gap-1">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
    </span>
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 [animation-delay:500ms]"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
    </span>
  </span>
            <span className="text-sm font-medium text-neutral-300">مرحباً بك في عدسة</span>
          </div>

          {/* العنوان */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف{" "}
            <span className="bg-linear-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
              فن
            </span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 group px-7 py-3.5 rounded-xl font-bold text-white bg-linear-to-l from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>استكشف المقالات</span>
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-neutral-300 bg-[#161616] border border-[#262626] hover:text-white hover:border-orange-500/50 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>

          {/* كروت الأرقام */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-4 rounded-2xl bg-[#161616]/60 border border-[#262626] backdrop-blur-sm hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <i className={`fa-solid ${stat.icon} text-2xl text-orange-500 mb-1`}></i>
                <p className="text-2xl md:text-3xl font-bold bg-linear-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}