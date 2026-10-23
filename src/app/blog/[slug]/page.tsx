"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useBlogPost, useBlogPosts } from "@/hooks";
import { bodyParagraphs } from "@/lib/text/body-paragraphs";

function formatPublished(value?: string | null): string {
  return value ? new Date(value).toLocaleDateString() : "Unpublished";
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: post, isLoading, isError } = useBlogPost(slug);
  const { data: relatedPosts } = useBlogPosts();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Loading...
          </h1>
        </div>
        <div className="h-64 bg-slate-100 animate-pulse rounded-2xl" />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Post Not Found
          </h1>
        </div>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <p className="font-semibold text-red-900">Blog post not found</p>
            <Link href="/blog">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-20 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link href="/blog">
        <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest italic">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </Link>

      {/* Post Header */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          {post.category && <Badge variant="outline">{post.category.name}</Badge>}
          {post.featured && (
            <Badge className="bg-brand-lime text-neutral-900">Featured</Badge>
          )}
        </div>
        <h1 className="text-4xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author_name || 'DeepSense Team'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatPublished(post.published_at)}</span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section>
        <Card className="rounded-2xl border">
          <CardContent className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {bodyParagraphs(post.body).map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Post Actions */}
      <section className="flex gap-4">
        <Button variant="outline" className="flex-1">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.items.some((p) => p.slug !== post.slug) && (
        <section>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.items
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <Card className="rounded-2xl border hover:border-brand-lime transition-all cursor-pointer group h-full flex flex-col">
                    <CardContent className="p-6">
                      {relatedPost.category && (
                        <Badge variant="outline" className="w-fit mb-3 text-xs">
                          {relatedPost.category.name}
                        </Badge>
                      )}
                      <h3 className="font-bold italic group-hover:text-brand-lime transition-colors line-clamp-2 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                        <Calendar className="w-3 h-3" />
                        {formatPublished(relatedPost.published_at)}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
