import React from 'react';
import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { CategoryTile } from '../components/CategoryTile';
import { ProductCard } from '../components/ProductCard';
import products from '../data/products.json';

export function HomePage() {
  // Get unique categories with counts
  const categories = products.reduce((acc, product) => {
    const existing = acc.find(c => c.name === product.category);
    if (existing) {
      existing.count++;
    } else {
      acc.push({ name: product.category, count: 1 });
    }
    return acc;
  }, [] as { name: string; count: number }[]);

  // Category images mapping
  const categoryImages: Record<string, string> = {
    mains: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    salads: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800',
    desserts: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
  };

  // Get first 6 products for featured section
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-[#3b2f2f] mb-4">
            Browse by Category
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our carefully curated selection of handmade dishes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CategoryTile
                  name={category.name}
                  image={categoryImages[category.name] || categoryImages.mains}
                  count={category.count}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-transparent to-[#f6efe9]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-[#3b2f2f] mb-4">
            Featured Dishes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Try our most popular and beloved creations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
