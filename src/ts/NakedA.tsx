import React from "react";

type AnchorProps = JSX.IntrinsicElements["a"];
type SpanProps = JSX.IntrinsicElements["span"];

export const NakedA = (props: AnchorProps | SpanProps) =>
  "href" in props ? (
    <a {...props}>{props.children}</a>
  ) : (
    <span {...props}>{props.children}</span>
  );