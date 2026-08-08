// GOODHAUL: Contact form (demo only)

import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useToast } from "../hooks/useToast";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Message sent — we'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent-dark mb-2">Get in touch</p>
      <h1 className="font-display text-4xl font-bold text-ink mb-3">Contact us</h1>
      <p className="text-ink-soft mb-10">
        Questions about an order, a product, or just want to say hi? Send a note below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          id="name"
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Input
          id="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Input
          id="message"
          label="Message"
          textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <Button type="submit" variant="primary" size="lg">
          Send message
        </Button>
      </form>

      <div className="tear-divider my-10" />
      <p className="text-sm text-ink-soft font-mono">support@goodhaul.example · +91 98765 43210</p>
    </div>
  );
}

export default Contact;
