"use client";

import React from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegFilePdf } from "react-icons/fa";

export default function HireMeButton() {
  const [pulse, setPulse] = React.useState(false);

  React.useEffect(() => {
    try {
      const seen = sessionStorage.getItem("hiremePulsed");
      if (!seen) {
        setPulse(true);
        setTimeout(() => {
          setPulse(false);
          sessionStorage.setItem("hiremePulsed", "1");
        }, 3500);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  return (
      <div className="fixed top-4 right-4 z-50 hidden md:block">
        <Link
          href="https://drive.google.com/file/d/1jtrm63YTsosS6sV-Sm-f1NAC7pPZrXb3/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Aman Kushwaha's Resume"
        > 
          <Button
            variant="outline"
            className={`gap-2   rounded-md border border-gray-300 bg-white px-4 text-sm font-medium text-black transition hover:bg-gray-100 dark:border-gray-700 dark:bg-transparent dark:text-white dark:hover:bg-gray-800 ${pulse ? "animate-pulse" : ""}`}
          >
            <span>View Resume</span>
          </Button>
        </Link>
      </div>
  );
}
