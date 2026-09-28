import React from 'react'
import { Link, useParams } from "react-router-dom";
import usePosts from "../Hooks/usePosts";
import DetailsHero from "../Components/DetailsHero";
import ArticleContent from "../Components/ArticleContent";
import Content from "../Components/Content";

export default function BlogDetails() {
  const { slug } = useParams();
  const { posts, loading } = usePosts();

  const post = posts.find((post) => post?.slug == slug);

  return (
    <>
      {loading && <p className="text-center py-32 text-neutral-400">جاري التحميل...</p>}

      {/* المقال موجود */}
      {post && (
        <>
          <DetailsHero post={post} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ArticleContent post={post} />
            </div>
            <aside>
              <Content post={post} />
            </aside>
          </div>
        </>
      )}

      {!loading && !post && (
        <div className="text-center py-32">
          <h1 className="text-3xl font-bold text-white mb-4">المقال غير موجود</h1>
          <Link to="/blog" className="text-orange-500 hover:text-orange-400">
            الرجوع للمدونة
          </Link>
        </div>
      )}
    </>
  );
}