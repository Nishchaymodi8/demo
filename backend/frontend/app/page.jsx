export default function Home() {
  const categories = [
    "👕 Fashion",
    "💍 Jewelry",
    "👜 Bags",
    "🪴 Decor",
    "📚 Books",
    "🎨 Handmade",
  ];

  const products = [
    {
      id: 1,
      title: "Vintage Hoodie",
      price: 599,
      image: "👕",
    },
    {
      id: 2,
      title: "Handmade Candle",
      price: 299,
      image: "🕯️",
    },
    {
      id: 3,
      title: "Mini Plant Pot",
      price: 399,
      image: "🪴",
    },
    {
      id: 4,
      title: "Aesthetic Tote Bag",
      price: 499,
      image: "👜",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              ✨ India's favourite indie marketplace
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Discover
              <span className="text-purple-600"> Unique </span>
              Products from
              <span className="text-pink-500"> Real Creators</span>
            </h1>

            <p className="text-gray-500 text-lg mt-6">
              Connect with independent vendors, explore handcrafted goods and
              shop directly through Instagram.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 rounded-2xl bg-purple-600 text-white font-semibold">
                Explore Products
              </button>

              <button className="px-6 py-3 rounded-2xl border border-gray-300">
                Meet Vendors
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
            <div className="text-7xl mb-5">🛍️</div>

            <h3 className="text-2xl font-bold">InstaBazaar</h3>

            <p className="text-gray-500 mt-2">
              Buy from creators and discover unique products.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition"
            >
              <p className="font-semibold">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>

          <button className="text-purple-600 font-semibold">View All →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{product.title}</h3>

                <p className="text-purple-600 font-bold mt-2">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-center p-14">
          <h2 className="text-4xl font-bold text-white">
            Start Selling on InstaBazaar
          </h2>

          <p className="text-white/80 mt-4">
            Join hundreds of creators and showcase your products.
          </p>

          <button className="mt-8 bg-white text-purple-700 font-bold px-8 py-4 rounded-2xl">
            Get Started Free
          </button>
        </div>
      </section>
    </main>
  );
}
