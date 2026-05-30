"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/shared/config/site";

type Status = "idle" | "sending" | "sent";

const labels = {
  es: {
    heading: "Escríbenos",
    subheading: "Cotiza tu arreglo o resuelve cualquier duda.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    message: "Mensaje",
    messagePlaceholder: "¿Qué arreglo tienes en mente?",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    sent: "¡Mensaje enviado! Te respondemos pronto.",
  },
  en: {
    heading: "Write to us",
    subheading: "Get a quote or ask us anything.",
    name: "Name",
    namePlaceholder: "Your name",
    message: "Message",
    messagePlaceholder: "What arrangement do you have in mind?",
    submit: "Send message",
    sending: "Sending…",
    sent: "Message sent! We'll get back to you soon.",
  },
};

type ContactFormProps = {
  locale: "es" | "en";
};

export function ContactForm({ locale }: ContactFormProps) {
  const t = labels[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus("sending");

    const phone = siteConfig.phone.replace(/\D/g, "");
    const text = encodeURIComponent(`Hola, soy ${name}. ${message}`);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

    setTimeout(() => {
      setStatus("sent");
      setName("");
      setMessage("");
    }, 800);
  }

  return (
    <div>
      <h3 className="font-[var(--font-serif)] text-[clamp(1.9rem,2.4vw,2.5rem)] font-normal leading-[1.08] tracking-[-0.025em] text-[#2C2C2C]">
        {t.heading}
      </h3>
      <p className="mt-2 font-[var(--font-shanti)] text-[14px] text-[#6C6258]">
        {t.subheading}
      </p>

      {status === "sent" ? (
        <p className="mt-6 font-[var(--font-shanti)] text-[15px] text-[#7D5940]">
          {t.sent}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="font-[var(--font-shanti)] text-[12px] tracking-[0.12em] text-[#7D5940]"
            >
              {t.name}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="h-11 border border-[#D8C9B8] bg-transparent px-4 font-[var(--font-shanti)] text-[14px] text-[#2C2C2C] placeholder:text-[#AAAAAA] focus:border-[#7D5940] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="font-[var(--font-shanti)] text-[12px] tracking-[0.12em] text-[#7D5940]"
            >
              {t.message}
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="resize-none border border-[#D8C9B8] bg-transparent px-4 py-3 font-[var(--font-shanti)] text-[14px] text-[#2C2C2C] placeholder:text-[#AAAAAA] focus:border-[#7D5940] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-1 inline-flex h-[50px] w-fit min-w-[190px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[7px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC] disabled:opacity-50"
          >
            <span className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden px-6 font-[var(--font-serif)] text-[17px] font-normal text-[#2C2C2C]">
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100" />
              <span className="relative z-10 whitespace-nowrap">
                {status === "sending" ? t.sending : t.submit}
              </span>
              <Send
                size={16}
                strokeWidth={1.4}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
