import { requireAdminSession } from "@/lib/admin-auth";
import { getPageContent, getAllEditablePages } from "@/lib/content";
import ContentEditor from "./ContentEditor";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ContentEditPage({ params }: { params: Promise<{ page: string }> }) {
  await requireAdminSession();
  
  const { page } = await params;
  
  // Validate that this page exists in our editable list
  const pages = await getAllEditablePages();
  const isValid = pages.some(p => p.slug === page);
  
  if (!isValid) {
    notFound();
  }

  const content = await getPageContent(page);

  return (
    <section className="px-margin py-xl min-h-[100svh]">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/admin" 
          className="inline-flex items-center gap-xs text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary mb-xl transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Dashboard
        </Link>
        
        <div className="bg-surface-container-lowest border border-outline-variant/20 p-lg">
          <ContentEditor slug={page} initialData={content} />
        </div>
      </div>
    </section>
  );
}
