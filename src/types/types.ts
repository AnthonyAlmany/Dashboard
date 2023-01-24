import { MouseEventHandler } from "react";

export type ContainerType = {
    children: React.ReactNode
}

export type ButtonProps = {
    label: string;
   onClick: MouseEventHandler;
}