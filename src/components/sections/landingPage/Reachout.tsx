"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/magicui/highlighter";
import { Reveal } from "@/components/common/reveal";
import { FaLinkedin } from "react-icons/fa";

const Reachout = () => {
  return (
    <section className="mx-auto mt-12 max-w-4xl px-6">
      {/* Heading */}
      <Reveal>
        <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Highlighter action="underline" color="#FF9800">
            Reach Out.
          </Highlighter>
        </div>

        {/* Description */}
        <div className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
          When I’m not coding, you’ll probably find me solving problems or
          playing chess. If you have a question, an idea, or just want to say
          hi, feel free to reach out via email or social media.
        </div>
      </Reveal>

      <Reveal>
        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => {
              const email = "amankushwaha.codes@gmail.com";
              const subject = "Interested in Hiring You";

              window.open(
                `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            Email
          </Button>

          <Button variant="outline">
            <a href="https://www.linkedin.com/in/amankushwahacodes/">
              Linkedin
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
};

export default Reachout;
