"use client";

import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";
const getTextColor = (backgroundColor: string): string => (colord(backgroundColor).isDark() ? "#dddddd" : "#333333");

tailwindColors;
export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center" dir="ltr">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

const ColorBox: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <div lang="en" className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase" style={{ backgroundColor: color, color: getTextColor(color) }}>
    <span>{name}</span>
    <span>{color}</span>
  </div>
);
