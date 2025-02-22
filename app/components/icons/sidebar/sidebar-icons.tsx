// FULL CODE SNIPPET
// File: src/icons/sidebar/sidebar-icons.tsx

import React from "react";

/** Home Icon */
export const HomeIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75l7.5-6 7.5 6M4.5 10.5v9.75A1.5 1.5 0 006 21.75h3.75a.75.75 
           0 00.75-.75v-4.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.5c0 
           .414.336.75.75.75H18a1.5 1.5 0 001.5-1.5V10.5"
      />
    </svg>
  );
};

/** Tasks Icon (Clipboard with List) */
export const TasksIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75h6m-6 3h3m-3-6h6M9 
           4.5V6a.75.75 0 01-.75.75H5.25A2.25 
           2.25 0 003 9v9.75A2.25 2.25 0 
           005.25 21h13.5A2.25 2.25 0 
           0021 18.75V9a2.25 2.25 0 
           00-2.25-2.25h-3A.75.75 0 
           0115 6V4.5c0-.414-.336-.75-.75-.75h-4.5c-.414 
           0-.75.336-.75.75z"
      />
    </svg>
  );
};

/** Kanban Icon (Queue List) */
export const KanbanIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5M3.75 9.75h16.5M6 
           5.25v2.25M6 9.75v9M9 9.75v5.25M12 
           9.75v9M15 9.75v2.25M18 9.75v9"
      />
    </svg>
  );
};

/** AI Tools Icon (CPU Chip) */
export const AiToolsIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3v1.5m4.5-1.5v1.5m-6 
           0h7.5A2.25 2.25 0 0118 6.75v7.5a2.25 
           2.25 0 01-2.25 2.25H6.75A2.25 
           2.25 0 014.5 14.25V6.75A2.25 
           2.25 0 016.75 4.5h7.5zm-6 
           9.75h4.5m-4.5-3h4.5M3 
           9.75h1.5m-1.5 4.5h1.5m13.5-4.5H21m-1.5 
           4.5H21M9.75 21v-1.5m4.5 
           1.5v-1.5"
      />
    </svg>
  );
};

/** Calendar Icon */
export const CalendarIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 2.25v1.5m10.5-1.5v1.5m-12 
           1.5h13.5c.621 0 1.125.504 
           1.125 1.125v13.5c0 .621-.504 
           1.125-1.125 1.125H5.25c-.621 
           0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 
           1.125-1.125zm3 5.25h.008v.008H8.25v-.008zm3 
           0h.008v.008h-.008v-.008zm3 
           0h.008v.008h-.008v-.008zm3 
           0h.008v.008h-.008v-.008z"
      />
    </svg>
  );
};

/** Reports Icon (Chart Bar) */
export const ReportsIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v18h16.5M8.25 
           17.25v-6M12 17.25v-3M15.75 
           17.25V7.5"
      />
    </svg>
  );
};

/** Integrations Icon (Puzzle Piece) */
export const IntegrationsIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6.75A2.25 2.25 0 0115.75 
           4.5h.75a2.25 2.25 0 012.25 
           2.25v2.25h-1.5a1.5 1.5 0 
           00-1.5 1.5v.75a1.5 1.5 0 
           001.5 1.5h1.5v2.25a2.25 
           2.25 0 01-2.25 2.25h-.75a1.5 
           1.5 0 00-1.5 1.5v1.5H9a1.5 
           1.5 0 01-1.5-1.5v-1.5a1.5 
           1.5 0 00-1.5-1.5H4.5V9.75a1.5 
           1.5 0 011.5-1.5h1.5v-.75A2.25 
           2.25 0 009.75 5.25H12a1.5 
           1.5 0 001.5-1.5V4.5z"
      />
    </svg>
  );
};

/** Settings Icon (Cog) */
export const SettingsIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 
           0113.806-4.198m1.008 
           6.713A7.5 7.5 0 0112 
           19.5m-1.125-9.75h4.125m-2.625 
           3h1.125m4.519 0h1.028a2.25 
           2.25 0 001.894-3.464l-.616-1.067a2.25 
           2.25 0 01-.13-1.898l.425-1.054a2.25 
           2.25 0 00-1.439-2.879l-1.19-.34a2.25 
           2.25 0 01-1.428-1.197l-.518-1.036a2.25 
           2.25 0 00-3.186-.874l-1.007.588a2.25 
           2.25 0 01-2.148 0l-1.007-.588a2.25 
           2.25 0 00-3.186.874l-.518 
           1.036a2.25 2.25 0 01-1.428 
           1.197l-1.19.34a2.25 2.25 0 
           00-1.439 2.88l.425 1.053c.223.55.2 
           1.168-.13 1.898l-.616 1.067a2.25 
           2.25 0 001.894 3.464H6.75"
      />
    </svg>
  );
};

/** Changelog Icon (Document Text) */
export const ChangeLogIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25 14.25 
           3H6.75A2.25 2.25 0 
           004.5 5.25v13.5A2.25 2.25 
           0 006.75 21h10.5a2.25 
           2.25 0 002.25-2.25V8.25zM9 
           9h3.75M9 12.75h6M9 
           16.5h6"
      />
    </svg>
  );
};

/** Filter/Adjustments Icon */
export const FilterIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75m-9.75 
           0a1.5 1.5 0 01-3 
           0m3 0a1.5 1.5 0 00-3 
           0m-3 0H3.75M6 
           12h13.5m-13.5 0a1.5 
           1.5 0 01-3 
           0m3 0a1.5 1.5 0 00-3 
           0m-3 0h9.75m.75 6h5.25m-5.25 
           0a1.5 1.5 0 01-3 
           0m3 0a1.5 1.5 0 00-3 
           0m-3 0H3.75"
      />
    </svg>
  );
};
