export interface NewsArticle {
  id: string;
  title: string;
  image: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Divine Food Expands Distribution Network",
    image: "/images/news/news1.jpg",
    content: `Divine Food is proud to announce a major expansion ...`
  },
  {
    id: "2",
    title: "New Export Regulations for Halaal Products",
    image: "/images/news/news2.jpg",
    content: `New export regulations for Halaal-certified products ...`
  },
  {
    id: "3",
    title: "South African Brands Enter New Markets",
    image: "/images/news/news3.jpg",
    content: `Several SA brands are now partnering with ...`
  }
];
