import { FileFormat } from "../utils/client";
import { Tab } from "./tab";

export default class EditorTab extends Tab {
  public save(): void {
    return;
  }

  static isCompatible(format: FileFormat): boolean {
    switch (format) {
      default:
        return true;
    }
  }

  /* eslint-disable */
  constructor(path: string, initialContent: string) {
    super(path);
  }
}
