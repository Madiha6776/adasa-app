export default function Content({ post }) {
  const { content } = post;

  const headings = content
    .split("\n\n")
    .filter((block) => block.startsWith("## "))
    .map((block) => block.replace("## ", ""));

  function goToSection(number) {
    document
      .getElementById(`section-${number}`)
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="sticky top-28 p-8 rounded-2xl bg-[#161616] border border-[#262626]">
      <div className="flex items-center gap-4 mb-8">
        <span className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
          <i className="fa-solid fa-list-ul text-orange-500"></i>
        </span>
        <h3 className="text-lg font-bold text-white">محتويات المقال</h3>
      </div>

      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li key={heading}>
            <button
              onClick={() => goToSection(index + 1)}
              className="group w-full text-start flex items-center gap-4 p-3 rounded-xl text-neutral-400 hover:text-white hover:bg-[#1f1f1f] transition-colors"
            >
              <span className="w-8 h-8 shrink-0 rounded-lg bg-[#262626] text-xs flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {index + 1}
              </span>
              {heading}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
