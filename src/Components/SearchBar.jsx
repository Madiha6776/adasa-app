import React from 'react'

export default function SearchBar({ search, changeSearch }) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="text"
        value={search}
        onChange={(e) => changeSearch(e.target.value)}
        placeholder="ابحث في المقالات..."
        className="w-full px-5 py-3 pl-12 rounded-xl bg-[#161616] border border-[#262626] text-white placeholder:text-neutral-500 focus:outline-none focus:border-orange-500/50 transition-colors"
      />
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
}