import { Link } from "react-router-dom";
import { newsArticles } from "../data/NewsData";

export function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[#3b2f2f] mb-10">
        Latest News
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsArticles.map(article => (
          <Link
            to={`/news/${article.id}`}
            key={article.id}
            className="block bg-white/80 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
          >
            <img 
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#3b2f2f]">
                {article.title}
              </h2>

              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {article.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
