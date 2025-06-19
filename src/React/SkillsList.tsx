import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 3h18c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1zm17 4H4v12h16V7zM5 4.5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm2 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm2 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-2 6l2 2-2 2-.5-.5L8 12.5l-1.5-1.5.5-.5zm4 3h5v1h-5v-1z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 2H8C6.895 2 6 2.895 6 4V20C6 21.105 6.895 22 8 22H16C17.105 22 18 21.105 18 20V4C18 2.895 17.105 2 16 2ZM16 18H8V6H16V18ZM12 19C12.552 19 13 19.448 13 20C13 20.552 12.552 21 12 21C11.448 21 11 20.552 11 20C11 19.448 11.448 19 12 19Z"></path>
    </svg>
  ),
  "Cloud Computing": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
    ],
    "Mobile Development": ["Mobile-friendly web apps", "Flutter mobile apps"],
    "Cloud Computing": [
      "Deploy apps to cloud platforms",
      "Manage cloud servers and storage",
      "Monitor and optimize performance",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section className="text-left pt-3 md:pt-9" aria-labelledby="skills-title">
      <h3
        id="skills-title"
        className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6"
      >
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          const panelId = `panel-${category.replace(/\s+/g, "-")}`;
          return (
            <li key={category} className="w-full">
              <div className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl border border-[var(--white-icon-tr)] overflow-hidden">
                <button
                  onClick={() => toggleItem(category)}
                  className="flex items-center justify-between w-full gap-3 p-4 text-left hover:bg-opacity-80 transition-all"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    {CategoryIcons[category]}
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`transition-all duration-300 px-4 ${
                    isOpen
                      ? "max-h-[500px] pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--white-icon)] text-sm pt-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="pr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SkillsList;
