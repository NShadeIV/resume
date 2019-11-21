import React from "react";

type AnchorProps = JSX.IntrinsicElements["a"];
type SpanProps = JSX.IntrinsicElements["span"];

export const NakedA = (props: AnchorProps | SpanProps) => "href" in props && props.href ? (
    <a {...Object.assign(props.href && props.href.startsWith("http") ? {target:"_blank", rel:"noreferrer"} : {}, props)}>
      {props.children}
    </a>
  ) : (
    <span {...props}>{props.children}</span>
  );