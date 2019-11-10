import React, { SFC } from "react";

export const isPrerendering = navigator.userAgent === 'ReactSnap';
export const Live: SFC = ({ children }) => <>{ !isPrerendering && children }</>;