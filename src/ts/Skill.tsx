import React from "react";

export const Skill = ({ name, score }: { name: string; score: number }) => (
  <div
    className={"skill " + (score >= 1 ? "high" : score >= 0.8 ? "mid" : "low")}
  >
    {name}
  </div>
);
