"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequestQuoteForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/message-sent");
      } else {
        router.push("/message-failed");
      }
    } catch {
      router.push("/message-failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-lg font-semibold text-[#432719]">
          REQUEST A QUOTE
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME + PHONE */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-[#6b5a4d]">
                Full Name *
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="John Smith"
                className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-[#6b5a4d]">
                Phone Number *
              </label>
              <input
                name="phone"
                required
                type="text"
                placeholder="(313) 6543210"
                className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-1 block text-sm text-[#6b5a4d]">
              Email Address *
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
            />
          </div>

          {/* SERVICE */}
          <div>
            <label className="mb-1 block text-sm text-[#6b5a4d]">
              Service Needed
            </label>
            <select
              name="service"
              className="w-full rounded-md border border-[#e5ded8] bg-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
            >
              <option value="">Select a service...</option>
              <option>Fire Suppression</option>
              <option>HVAC</option>
              <option>Kitchen Exhaust</option>
              <option>Gas Piping</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="mb-1 block text-sm text-[#6b5a4d]">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full rounded-md border border-[#e5ded8] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#86522d]"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#86522d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f4224] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
