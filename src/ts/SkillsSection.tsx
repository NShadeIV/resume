import React from "react";

export enum SkillType { CATEGORY, STRONG, REGULAR };
export const SkillsSection = ({
  skills
}: {
  skills: Array<[string, SkillType]>;
}) => <>
  <div className="label skillslabel">Skills</div>
  <section className="skills">
    {skills.map(([skill, skillType]) => 
      skillType === SkillType.CATEGORY ?
        <h2>{skill}</h2>
      : skillType === SkillType.STRONG ?
        <strong>{skill}</strong>
      : <span>{skill}</span>
    )}
  </section>
</>;