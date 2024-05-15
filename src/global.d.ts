//---PNG declaration---
declare module "*.png" {
  const value: any;
  export = value;
}

//---JPG declaration---
declare module "*.jpg" {
  const value: any;
  export = value;
}

//---SVG declaration---
declare module "*.svg" {
  import * as React from "react";

  interface SVGProps extends React.SVGProps<SVGSVGElement> {
    stroke: string;
  }

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export const ReactComponent;
}
