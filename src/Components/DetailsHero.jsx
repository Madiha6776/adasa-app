import React from 'react'

import { Link } from "react-router-dom";

export default function DetailsHero({ post }) {
  const { title, image, category, date, readTime, author } = post;

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="relative overflow-hidden">
        
     
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[650px] flex flex-col justify-between py-10">

        <nav className="self-start inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#161616]/70 backdrop-blur-md border border-[#262626] text-sm">
          <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
            <i className="fa-solid fa-house"></i>
          </Link>
          <i className="fa-solid fa-chevron-left text-xs text-neutral-500"></i>
          <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">
            المدونة
          </Link>
          <i className="fa-solid fa-chevron-left text-xs text-neutral-500"></i>
          <Link to={`/blog?category=${category}`} className="text-orange-500 hover:text-orange-400 transition-colors">
            {category}
          </Link>
        </nav>

        <div>

          <div className="flex flex-wrap items-center gap-5 mb-6 text-neutral-300">
            <span className="px-5 py-2 rounded-full bg-orange-500 text-white font-bold">{category}</span>
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-calendar"></i>
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              {readTime}
            </span>
          </div>

          {/* العنوان */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-8">
            {title}
          </h1>

          {/* الكاتب */}
          <div className="inline-flex items-center gap-4 p-4 pe-8 rounded-2xl bg-[#161616]/70 backdrop-blur-md border border-[#262626]">
            <img src={author.avatar} alt={author.name} className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500" />
            <div>
              <p className="font-bold text-white text-lg">{author.name}</p>
              <p className="text-neutral-400">{author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}