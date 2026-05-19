"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContentEditor({ slug, initialData }: { slug: string, initialData: any }) {
  const router = useRouter();
  const [formData, setFormData] = useState<Record<string, string>>(initialData);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, data: formData }),
      });

      if (res.ok) {
        setMessage("Content saved successfully!");
        router.refresh();
      } else {
        setMessage("Failed to save content.");
      }
    } catch (error) {
      setMessage("Error saving content.");
    } finally {
      setSaving(false);
    }
  };

  // Human readable label from key (e.g. heroTitleLine1 -> Hero Title Line 1)
  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-lg">
      <div className="flex justify-between items-center mb-md border-b border-outline-variant/20 pb-md">
        <div>
          <h1 className="text-headline-md capitalize">{slug} Page Content</h1>
          <p className="text-body-md text-on-surface-variant">Update the text shown on the {slug} page.</p>
        </div>
        <div className="flex items-center gap-md">
          {message && <span className="text-label-sm uppercase tracking-widest text-primary-container">{message}</span>}
          <button 
            type="submit" 
            disabled={saving}
            className="bg-primary text-on-primary px-lg py-md text-label-sm uppercase tracking-widest disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-xs">
            <label className="text-label-sm uppercase tracking-widest text-on-surface-variant">
              {formatLabel(key)}
            </label>
            {value.length > 80 ? (
              <textarea
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-surface-container border border-outline-variant/30 p-md text-body-md min-h-[120px] focus:border-primary focus:outline-none"
              />
            ) : (
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-surface-container border border-outline-variant/30 p-md text-body-md focus:border-primary focus:outline-none"
              />
            )}
          </div>
        ))}
      </div>
    </form>
  );
}
