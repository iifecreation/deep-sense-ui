"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useBlogPosts, useBlogCategories, useFeaturedPosts } from "@/hooks";

export default function BlogPage() {
  const { data: posts, isLoading: postsLoading, isError: postsError } = useBlogPosts();
  const { data: categories, isLoading: categoriesLoading } = useBlogCategories();
  const { data: featuredPosts, isLoading: featuredLoading } = useFeaturedPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts?.items?.filter((post: any) => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category_slug === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  if (postsLoading || categoriesLoading || featuredLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Blog<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="p-6">
                <div className="h-32 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (postsError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Blog<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <p className="font-semibold text-red-900">Failed to load blog posts</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Page Header */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Blog<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Insights, updates, and industry news from the DeepSense team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts?.items?.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-brand-lime" />
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Featured Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.items.slice(0, 2).map((post: any) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="rounded-2xl border hover:border-brand-lime transition-all cursor-pointer group">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-brand-lime text-neutral-900">Featured</Badge>
                    <CardTitle className="text-lg font-bold italic group-hover:text-brand-lime transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.published_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.read_time || '5 min read'}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="text-xs font-bold uppercase tracking-widest italic"
          >
            All
          </Button>
          {categories?.map((category: any) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.slug)}
              className="text-xs font-bold uppercase tracking-widest italic"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post: any) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="rounded-2xl border hover:border-brand-lime transition-all cursor-pointer group h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category_name}
                  </Badge>
                  {post.featured && (
                    <Badge className="bg-brand-lime text-neutral-900 text-xs">Featured</Badge>
                  )}
                </div>
                <CardTitle className="text-base font-bold italic group-hover:text-brand-lime transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.published_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.read_time || '5 min'}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-3 text-center py-12 text-muted-foreground">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="font-semibold">No blog posts found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>
    </div>
  );
}
