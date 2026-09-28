import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import usePosts from "../Hooks/usePosts";
import BlogHeader from "../Components/BlogHeader";
import SearchBar from "../Components/SearchBar";
import CategoryButton from "../Components/CategoryButton";
import ViewSwitcher from "../Components/ViewSwitcher";
import PostCard from "../Components/PostCard";
import Pagination from "../Components/Pagination";

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const { posts, categories, loading, error } = usePosts();
  const [searchParams] = useSearchParams();

  // ===== الـ state =====
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // ===== functions =====
  function changeSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  function changeCategory(name) {
    setCategory(name);
    setCurrentPage(1);
  }

  function changeView(type) {
    setView(type);
  }

  function changePage(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setCurrentPage(1);
  }

  useEffect(() => {
    setCategory(searchParams.get("category") || "all");
    setCurrentPage(1);
  }, [searchParams]);

  const filteredPosts = posts.filter((post) => {
    const matchCategory = category === "all" || post.category === category;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <BlogHeader />

      {/* شريط البحث */}
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <SearchBar search={search} changeSearch={changeSearch} />

            <div className="flex flex-wrap justify-center gap-2">
              <CategoryButton name="all" label="جميع المقالات" category={category} changeCategory={changeCategory} />
              {categories.map((cat) => (
                <CategoryButton
                  key={cat.name}
                  name={cat.name}
                  label={cat.name}
                  category={category}
                  changeCategory={changeCategory}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && <p className="text-center py-16 text-neutral-400">جاري التحميل...</p>}
        {error && <p className="text-center py-16 text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            {/* شريط النتايج */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-neutral-400">
                عرض <span className="font-bold text-white">{filteredPosts.length}</span> مقالات
              </p>

              <div className="flex items-center gap-4">
                <ViewSwitcher view={view} changeView={changeView} />

                {(search || category !== "all") && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-sm text-neutral-500 hover:text-orange-400 transition-colors"
                  >
                    <span className="text-lg">×</span>
                    مسح الفلاتر
                  </button>
                )}
              </div>
            </div>

            {/* الكروت */}
            {visiblePosts.length > 0 && (
              <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
                {visiblePosts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} view={view} />
                ))}
              </div>
            )}

            {/* الصفحات */}
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} changePage={changePage} />
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-25 h-25 mx-auto mb-8 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center">
                  <svg className="w-12 h-12 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xl font-bold md:text-2xl text-white mb-2">لا توجد مقالات</p>
                <p className="text-neutral-400 mb-6">حاول تعديل البحث أو الفلتر للعثور على ماتبحث عنه</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 rounded-xl font-bold text-white bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}