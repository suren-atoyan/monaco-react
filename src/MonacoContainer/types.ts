import { type ReactNode, type RefObject } from "react";

export type ContainerProps = {
  width: number | string;
  height: number | string;
  isEditorReady: boolean;
  loading: ReactNode | string;
  _ref: RefObject<HTMLDivElement>;
  className?: string;
  wrapperProps?: object;
};
