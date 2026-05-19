"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Construct the payload
    const payload = {
      title: formData.get("title"),
      category: formData.get("category"),
      excerpt: formData.get("excerpt"),
      readTime: formData.get("readTime"),
      date: formData.get("date"),
      imageUrl: formData.get("imageUrl"),
      content: formData.get("content"),
    };

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setMessage(result.message || "Failed to create blog post");
        return;
      }

      setStatus("success");
      setMessage("Blog created successfully!");
      
      setTimeout(() => {
        router.push("/blog");
      }, 2000);
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "An unexpected error occurred.");
    }
  }

  return (
    <section className="px-margin py-xl max-w-4xl mx-auto">
      <div className="mb-xl">
        <Link href="/admin" className="text-primary text-label-sm uppercase tracking-widest hover:underline mb-sm inline-block">
          &larr; Back to Admin
        </Link>
        <h1 className="text-headline-lg mb-sm">Write a New Blog</h1>
        <p className="text-body-md text-on-surface-variant">
          Publish a new article directly to the live blog page.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <label className="space-y-xs md:col-span-2">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Title</span>
            <input name="title" required className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>
          
          <label className="space-y-xs">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Category</span>
            <input name="category" required placeholder="e.g. Event Production" className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>
          
          <label className="space-y-xs">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Read Time</span>
            <input name="readTime" required placeholder="e.g. 5 min read" className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>

          <label className="space-y-xs">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Published Date</span>
            <input name="date" required placeholder="e.g. May 19, 2026" className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>

          <label className="space-y-xs">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Cover Image URL (Optional)</span>
            <input name="imageUrl" type="url" placeholder="https://..." className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>

          <label className="space-y-xs md:col-span-2">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Excerpt</span>
            <textarea name="excerpt" required rows={2} placeholder="A short 1-2 sentence summary..." className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container" />
          </label>

          <label className="space-y-xs md:col-span-2">
            <span className="text-label-sm uppercase tracking-widest text-on-surface-variant">Full Content</span>
            <textarea name="content" required rows={12} placeholder="Write the main blog content here..." className="w-full border border-outline-variant/25 bg-surface-container px-md py-md text-body-md outline-none focus:border-primary-container font-mono text-sm" />
          </label>
        </div>

        {status === "error" && (
          <div className="border border-red-500/40 bg-red-500/10 px-md py-md text-body-md text-red-200">
            <p>{message}</p>
          </div>
        )}

        {status === "success" && (
          <div className="border border-primary-container/40 bg-primary-container/10 px-md py-md text-body-md text-on-surface">
            <p>{message}</p>
          </div>
        )}

        <button type="submit" disabled={status === "submitting"} className="bg-primary-container text-on-primary-container px-lg py-md text-label-sm uppercase tracking-widest font-bold hover:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100">
          {status === "submitting" ? "Publishing..." : "Publish Blog Post"}
        </button>
      </form>
    </section>
  );
}
