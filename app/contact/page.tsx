"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="container mx-auto p-4">
        <Hero title="Contact Us" subtitle="Reach out to Mo" />

        <form
          className="grid gap-4 mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
        >
          <label className="field-label">Name</label>
          <input type="text" name="name" className="field-input" />

          <label className="field-label">Email</label>
          <input type="email" name="email" className="field-input" />

          <label className="field-label">Message</label>
          <textarea name="message" className="field-input" />

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}