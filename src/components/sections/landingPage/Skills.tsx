import { techSkills } from "@/data/Skills";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

export default function TechSkills() {
  const grouped = techSkills.reduce(
    (acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof techSkills>,
  );

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 lg:px-6">
      <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Tech Stack.
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <Tooltip key={skill.name} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <div className="flex cursor-default flex-col items-center justify-center">
                      <skill.icon
                        className={`${skill.size ?? "h-8 w-8"} ${skill.color}`}
                      />

                      {/* <span className="text-sm text-gray-700 sm:hidden dark:text-gray-300">
                        {skill.name}
                      </span> */}
                    </div>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p className="text-sm">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {/* {i < arr.length - 1 && <hr className="my-6 border-gray-300 dark:border-gray-700" />} */}
          </div>
        ))}
      </div>
    </section>
  );
}
