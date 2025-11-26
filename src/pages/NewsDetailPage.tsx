import { useParams, Link } from "react-router-dom";
import { newsArticles } from "../data/NewsData";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";

export function NewsDetailPage() {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return <p className="text-center py-20">Article not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <img 
        src={article.image}
        alt={article.title}
        className="w-full h-80 object-cover rounded-xl mb-6 shadow"
      />

      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-4">
        {article.title}
      </h1>

      <p className="text-gray-600 whitespace-pre-line leading-relaxed mb-8">
        {article.content}
      </p>

      {/* Social Share */}
      <div className="flex items-center gap-4 text-gray-600 mb-10">
        <Facebook className="w-5 h-5 text-blue-600" />
        <Twitter className="w-5 h-5 text-blue-400" />
        <Instagram className="w-5 h-5 text-pink-500" />
        <a 
          href="https://wa.me/27620710311"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send className="w-5 h-5 text-green-600" />
        </a>
      </div>

      <Link 
        to="/news"
        className="text-[#6b7a4f] font-semibold hover:underline"
      >
        ← Back to News
      </Link>
    </div>
  );
}
