import React from "react";
import Hero from "../Components/Hero";
import FeaturedPosts from "../Components/FeaturedPosts";
import usePosts from "../Hooks/usePosts";
import Categories from "../Components/Categories";
import NewPosts from "../Components/NewPosts";
import Newsletter from "../Components/Newsletter";

export default function Home() {
  const { posts, loading, error } = usePosts();

  return (
    <>
      <Hero />

      {loading && (
        <p className="text-center py-16 text-neutral-400">جاري التحميل...</p>
      )}
      {error && <p className="text-center py-16 text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <FeaturedPosts posts={posts} />
          <Categories posts={posts} />
          <NewPosts posts={posts} />
         
        </>
      )}
      <Newsletter />
        </>
  );
}
