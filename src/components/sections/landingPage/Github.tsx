"use client";
import { Reveal } from "@/components/common/reveal";

import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <Reveal>
      <section className="mb-8 px-8 transition-colors duration-300">
        <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          GitHub Contributions.
        </div>
        <Link
          href="https://github.com/amankushwahacodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-lg border bg-white p-4 shadow-sm transition hover:opacity-80 dark:bg-gray-950">
            <GitHubCalendar
              username="amankushwahacodes"
            />
          </div>
        </Link>
      </section>
    </Reveal>
  );
}
