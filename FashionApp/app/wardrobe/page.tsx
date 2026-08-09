"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Plus, X, Trash2 } from "lucide-react";

const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

interface WardrobeItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  photoId: string;
  timesWorn?: number;
}

export default function WardrobePage() {
  const [items, setItems] = useState<WardrobeItem[]>([
    { id: "1", name: "Classic White Tee", brand: "Woolworths", category: "Tops", photoId: "1467043237213-65f2da53396f", timesWorn: 12 },
    { id: "2", name: "Oversized Hoodie", brand: "H&M", category: "Tops", photoId: "1576188973526-0e5d7047b0cf", timesWorn: 8 },
    { id: "3", name: "Gray Cardigan", brand: "Zara", category: "Tops", photoId: "1516762689617-e1cffcef479d", timesWorn: 5 },
    { id: "4", name: "White Sneakers", brand: "Nike", category: "Shoes", photoId: "1544441893-675973e31985", timesWorn: 15 },
    { id: "5", name: "Chelsea Boots", brand: "ASOS", category: "Shoes", photoId: "1479064555552-3ef4979f8908", timesWorn: 6 },
    { id: "6", name: "Tan Brogues", brand: "Aldo", category: "Shoes", photoId: "1614676471928-2ed0ad1061a4", timesWorn: 4 },
    { id: "7", name: "Orange Beanie", brand: "Uniqlo", category: "Accessories", photoId: "1556905055-8f358a7a47b2", timesWorn: 3 },
    { id: "8", name: "Wool Coat", brand: "Zara", category: "Outerwear", photoId: "1525507119028-ed4c629a60a3", timesWorn: 7 },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Tops", "Shoes", "Accessories", "Outerwear"];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                         item.brand.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  const addItem = () => {
    const names = [
      { name: "Striped Sweater", brand: "Zara", category: "Tops" },
      { name: "Cargo Pants", brand: "H&M", category: "Bottoms" },
      { name: "Denim Jacket", brand: "Levi's", category: "Outerwear" },
      { name: "White Sneakers", brand: "Adidas", category: "Shoes" },
    ];
    const item = names[Math.floor(Math.random() * names.length)];
    const photoIds = ["1521572163474-6864f9cf17ab", "1541099649105-f69ad21f3246", "1594938291221-94f18cbb5660"];
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        ...item,
        photoId: photoIds[Math.floor(Math.random() * photoIds.length)],
        timesWorn: 0,
      },
    ]);
  };

  const removeItem = (id: string, name: string) => {
    if (confirm(`Remove "${name}" from wardrobe?`)) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  const stats = {
    total: items.length,
    categories: new Set(items.map(i => i.category)).size,
    brands: new Set(items.map(i => i.brand)).size,
    worn: items.reduce((sum, i) => sum + (i.timesWorn || 0), 0),
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-14">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-foreground font-bodoni">
            My <span className="text-[#D4A574]">Wardrobe</span>
          </h1>
          <button
            onClick={addItem}
            className="ml-auto flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90 bg-[#D4A574] text-[#0E0B09]"
          >
            <Plus className="w-4 h-4" /> Add Item
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Total Items", value: stats.total },
            { label: "Categories", value: stats.categories },
            { label: "Brands", value: stats.brands },
            { label: "Total Worn", value: stats.worn },
          ].map((stat) => (
            <div key={stat.label} className="p-3 rounded-xl border border-[rgba(244,237,228,0.07)] bg-[rgba(244,237,228,0.02)] text-center">
              <p className="text-xl font-bold text-foreground font-bodoni">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, brand, color..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg text-sm bg-[#1A1614] border border-[#2A2522] text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#D4A574]"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#D4A574] text-[#0E0B09]"
                  : "bg-[#1A1614] text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden border border-[rgba(244,237,228,0.06)] bg-[rgba(244,237,228,0.02)] hover:border-[rgba(212,165,116,0.3)] transition-all">
              <img
                src={img(item.photoId, 200, 200)}
                alt={item.name}
                className="w-full aspect-square object-cover"
              />
              {item.timesWorn && item.timesWorn > 0 && (
                <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/60 text-white">
                  {item.timesWorn}x
                </span>
              )}
              <button
                onClick={() => removeItem(item.id, item.name)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
              <div className="p-3">
                <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.brand}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-[rgba(244,237,228,0.05)]">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">Your wardrobe is empty</h3>
            <p className="text-sm text-muted-foreground mb-4">Start building your digital wardrobe by adding items</p>
            <button
              onClick={addItem}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-90 bg-[#D4A574] text-[#0E0B09]"
            >
              <Plus className="w-4 h-4 inline mr-1" /> Add Your First Item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}