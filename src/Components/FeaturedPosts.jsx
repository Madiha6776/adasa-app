import React from 'react'

import { Link } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

export default function FeaturedPosts({ posts }) {
  const featured = posts.filter((post) => post.featured);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-[#161616]/80 border border-[#262626] text-sm text-neutral-300">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              مميز
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-3">مقالات مختارة</h2>
            <p className="text-neutral-400 text-lg max-w-lg">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            عرض الكل
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* الكروت */}
        <div className="space-y-8">
          {featured.map((post, index) => (
            <FeaturedCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}