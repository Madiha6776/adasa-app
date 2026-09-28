import React from 'react'
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

export default function LatestPosts({ posts }) {
  const latest = posts.filter((post) => !post.featured).slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-[#161616]/80 border border-[#262626] text-sm text-neutral-300">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              الأحدث
            </span>
            <h2 className="text-x3 md:text-6xl font-bold text-white mb-3">أحدث المقالات</h2>
            <p className="text-neutral-400 text-lg max-w-lg">محتوى جديد طازج من المطبعة</p>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
          >
            عرض جميع المقالات
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* الكروت */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}