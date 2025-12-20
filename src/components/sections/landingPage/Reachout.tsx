"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/magicui/highlighter";
import { Reveal } from "@/components/common/reveal";

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
          <a
            href="https://wa.me/917284913858?text=Hi%20Aman%20👋%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2">
              Whatsapp
            </Button>
          </a>

          {/* <a href="mailto:amankushwaha.codes@gmail.com?subject=Interested%20in%20Hiring%20You">
            <Button variant="outline" className="flex items-center gap-2">
              Email
            </Button>
          </a> */}
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
        </div>
      </Reveal>
    </section>
  );
};

export default Reachout;
