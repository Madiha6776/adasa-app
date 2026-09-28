import React from "react";

export default function ArticleContent({ post }) {
  const { excerpt, content } = post;

  const blocks = content.split("\n\n");

  const headings = blocks.filter((block) => block.startsWith("## "));

  return (
    <article>
      <blockquote className="mb-10 p-8 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-lg italic text-neutral-300">
        "{excerpt}"
      </blockquote>

      {/* المحتوى */}
      {blocks.map((block, index) => (
        <div key={index}>
          {block.startsWith("## ") && (
            <h2
              id={`section-${headings.indexOf(block) + 1}`}
              className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-white mt-12 mb-6 scroll-mt-28"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <i className="fa-solid fa-camera text-white"></i>
              </span>
              {block.replace("## ", "")}
            </h2>
          )}

          {/* لو فقرة */}
          {!block.startsWith("## ") && (
            <p className="text-lg text-neutral-300 leading-loose mb-6">
              {block}
            </p>
          )}
        </div>
      ))}
    </article>
  );
}
