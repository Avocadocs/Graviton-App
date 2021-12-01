import { ReactElement } from "react";

/*
 * Prompt API
 */
export abstract class Prompt {
    public static promptName: string = "Prompt";
    public static container: () => ReactElement = () => <div/>;
    public static shortcut: string | undefined;
}