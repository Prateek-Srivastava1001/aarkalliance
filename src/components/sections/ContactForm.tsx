"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle } from "lucide-react";
import { site, services } from "@/lib/content";

const inputClass =
  "w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-bone placeholder:text-faint transition-colors focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/50";

export function ContactForm() {
  const params = useSearchParams();
  const preselect = params.get("service") ?? "";

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: preselect,
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const serviceLabel =
    services.find((s) => s.id === form.service)?.title ?? form.service;

  const buildMessage = () =>
    [
      `Name: ${form.name}`,
      form.company && `Company / Property: ${form.company}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      serviceLabel && `Service of interest: ${serviceLabel}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry${serviceLabel ? `: ${serviceLabel}` : ""}`;
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage())}`;
    window.location.href = href;
  };

  const handleWhatsApp = () => {
    const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
      buildMessage()
    )}`;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleEmail} className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">
            Name<span className="text-brand"> *</span>
          </label>
          <input
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">
            Company / Property
          </label>
          <input
            value={form.company}
            onChange={update("company")}
            placeholder="Hotel or company"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">
            Email<span className="text-brand"> *</span>
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+91 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium text-muted">
          Service of interest
        </label>
        <select value={form.service} onChange={update("service")} className={inputClass}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
          <option value="multiple">Multiple / turnkey</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium text-muted">
          Project details<span className="text-brand"> *</span>
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about the scope, location and timeline..."
          className={inputClass}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          <Mail className="h-4 w-4" />
          Send enquiry
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:border-brand/50 hover:text-brand"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp us
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-faint">
        Sending opens your email app / WhatsApp with the details pre-filled.
      </p>
    </form>
  );
}
