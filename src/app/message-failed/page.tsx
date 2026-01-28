import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MessageFailedPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[hsl(0_45%_20%)] via-[hsl(10_40%_25%)] to-[hsl(210_25%_30%)] opacity-95" />

        {/* Content */}
        <div className="relative z-10 px-6 text-center text-white max-w-xl">
          <div className="mb-6 text-xs uppercase tracking-widest text-red-300 font-serif">
            Something Went Wrong
          </div>

          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Message
            <br />
            <span className="text-red-300">Not Sent</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85 font-serif">
            We couldn’t send your message right now. Please try again or contact
            us directly.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-[#8b5428] px-8 py-4 text-sm font-semibold text-white hover:bg-[#73431f] transition"
            >
              Try Again
            </Link>

            <Link
              href="/"
              className="rounded-md border border-white/60 px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
