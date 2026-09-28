import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* شبكة المربعات */}
      <div className="absolute inset-0 bg-[url('/grid.svg')]" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative text-center px-4 animate-fade-in">
        {/* 404 */}
        <h1 className="text-9xl md:text-[12rem] font-bold leading-none bg-linear-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">عفواً! الصفحة غير موجودة</h2>

        <p className="text-lg text-neutral-400 max-w-md mx-auto mb-10">
         الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-linear-to-l from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="fa-solid fa-house"></i>
          الذهاب للرئيسية
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-neutral-300 bg-[#161616] border border-[#262626] hover:text-white hover:border-orange-500/50 transition-all duration-300"
          >
            <i className="fa-solid fa-newspaper"></i>
            تصفح المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}