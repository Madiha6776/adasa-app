import React from 'react'

import PageButton from "./PageButton";

export default function Pagination({ currentPage, totalPages, changePage }) {
  // أرقام الصفحات: [1, 2, 3, 4, 5]
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-12">
      <div className="flex justify-center items-center gap-2">
        {/* السابق */}
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-3 rounded-xl border border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 transition-all duration-300 disabled:bg-[#0a0a0a] disabled:text-neutral-600 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* الأرقام */}
        <div className="flex items-center gap-1">
          {pages.map((page) => (
            <PageButton key={page} page={page} currentPage={currentPage} changePage={changePage} />
          ))}
        </div>

        {/* التالي */}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-3 rounded-xl border border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 transition-all duration-300 disabled:bg-[#0a0a0a] disabled:text-neutral-600 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="text-center text-neutral-500 mt-4 text-sm">
        صفحة {currentPage} من {totalPages}
      </p>
    </div>
  );
}