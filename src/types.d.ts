declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  import * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export const ReactComponent;
}
