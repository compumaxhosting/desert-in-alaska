export default function MessageFailedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf8f5]">
      <div className="rounded-xl bg-white p-8 text-center shadow-sm max-w-md">
        <h1 className="text-2xl font-semibold text-red-600 mb-3">
          Message Not Sent ❌
        </h1>
        <p className="text-sm text-[#6b5a4d]">
          Something went wrong while sending your message.
          <br />
          Please try again or contact us directly.
        </p>
      </div>
    </div>
  );
}
