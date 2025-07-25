'use client'

import { useEffect } from 'react';

export default function RedirectM() {
  useEffect(() => {
    window.location.href = "https://biblecharacterquiz.com/thank-you/m";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-white text-xl">
      Redirecting...
    </div>
  );
}
