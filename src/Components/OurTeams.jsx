import React from 'react'

import usePosts from "../Hooks/usePosts";
import AuthorCard from "./AuthorCard";

export default function OurTeam() {
  const { posts, loading, error } = usePosts();

  const authors = posts
    .map((post) => post.author)
    .filter((author, index, arr) => arr.findIndex((a) => a.name === author.name) === index);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-[#161616]/80 border border-[#262626] text-sm text-neutral-300">
            فريقنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على كتابنا</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        {loading && <p className="text-center text-neutral-400">جاري التحميل...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* الكروت */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>
      </div>
    </section>
  );
}