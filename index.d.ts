// import type { SvgProps as DefaultSvgProps } from 'react-native-svg';
declare module "*.jpg";
declare module "*.png";
declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }

