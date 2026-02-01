"use client";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { socialLinks } from "@/data/socialLinks";
import { FaRegFilePdf } from "react-icons/fa";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
// import { FaRegFilePdf } from "react-icons/fa";

export default function QuickInfo() {

  return (
    <aside className="space-y-4">
      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
          Status
        </h3>
        <div className="text-secondary space-y-2 text-sm dark:text-gray-300">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for work
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Open to freelance
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
          Focus
        </h3>
        <ul className="text-secondary list-inside list-disc space-y-1 text-sm dark:text-gray-300">
          <li>Full-Stack Development</li>
        </ul>
      </div>

      <div>
        {/* <Link
                href= "https://drive.google.com/file/d/1jtrm63YTsosS6sV-Sm-f1NAC7pPZrXb3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500">
                      <Button 

                  
                      
        variant={"outline"}
        className=" w-[180px] md:w-full"
        size={"lg"}
        > {<FaRegFilePdf />}
          Resume
        </Button>
              </Link> */}

        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full gap-2 md:hidden"
        >
          <a
            href="https://drive.google.com/file/d/1ceuADEliJ0tdDKtsM3IwnaMKvW087uLg/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaRegFilePdf className="h-4 w-4" />
            Resume
          </a>
        </Button>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold tracking-wider text-gray-900 uppercase dark:text-white">
          Socials
        </h3>
        <div className="flex gap-4 px-2 md:px-8 self-start">
          {Object.entries(socialLinks).map(([name, { href, icon: Icon }]) => (
            <Tooltip key={name} delayDuration={6}>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Icon className="h-[20px] w-[20px]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </aside>
  );
}
