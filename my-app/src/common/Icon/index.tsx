import { IconProps } from "../types";

export const Icon = ({ src, width, height }: IconProps) => (
  <img src={`/img/icons/${src}`} alt={src} width={width} height={height} />
);