import React from 'react'

import CategoryCard from "./CategoryCard";

const categoryStyles = {
  "إضاءة": { icon: "fa-sun", gradient: "from-orange-500 to-yellow-500" },
  "بورتريه": { icon: "fa-user", gradient: "from-orange-600 to-orange-400" },
  "مناظر طبيعية": { icon: "fa-mountain-sun", gradient: "from-orange-500 to-yellow-500" },
  "تقنيات": { icon: "fa-sliders", gradient: "from-orange-500 to-yellow-500" },
  "معدات": { icon: "fa-sun", gradient: "from-orange-500 to-yellow-500" },
};

export default function Categories({ posts }) {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-[#161616]/80 border border-[#262626] text-sm text-neutral-300">
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            التصنيفات
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-3">استكشف حسب الموضوع</h2>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((name, index) => (
            <CategoryCard
              key={name}
              name={name}
              count={posts.filter((post) => post.category === name).length}
              icon={categoryStyles[name]?.icon || "fa-folder"}
              gradient={categoryStyles[name]?.gradient || "from-orange-500 to-yellow-500"}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
