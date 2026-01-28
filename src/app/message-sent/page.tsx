import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MessageSentPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[hsl(20_45%_12%)] via-[hsl(20_35%_22%)] to-[hsl(210_25%_30%)] opacity-95" />

        {/* Content */}
        <div className="relative z-10 px-6 text-center text-white max-w-xl">
          <div className="mb-6 text-xl uppercase tracking-widest text-[#ffffff] font-serif">
            Message Delivered
          </div>

          <h1 className="text-4xl sm:text-5xl font-medium leading-tight">
            Thank You
            <br />
            <span className="text-[#c88a4a]">Your Message Was Sent</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/85 font-serif">
            We’ve received your request and one of our specialists will contact
            you shortly.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/"
              className="rounded-md bg-[#8b5428] px-8 py-4 text-sm font-semibold text-white hover:bg-[#73431f] transition"
            >
              Back to Home
            </Link>

            <Link
              href="/services"
              className="rounded-md border border-white/60 px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
