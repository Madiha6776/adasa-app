export default function PageButton({ page, currentPage, changePage }) {
  return (
    <button
      onClick={() => changePage(page)}
      className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
        currentPage === page
          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
      }`}
    >
      {page}
    </button>
  );
}