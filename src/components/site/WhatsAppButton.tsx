import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917383303388?text=Hello%20Raj%20Enterprise%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-elegant animate-float-pulse"
      style={{ background: "oklch(0.65 0.2 145)" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
