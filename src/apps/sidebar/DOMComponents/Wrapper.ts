import { Fab } from "./Fab";
import { IFrame } from "./IFrame";
import { CloseButton } from "./CloseButton";

export class Wrapper {
  public wrapperElement!: HTMLDivElement;

  constructor(fab: Fab, iFrame: IFrame, closeButton: CloseButton) {
    this.wrapperElement = document.createElement("div");
    this.wrapperElement.id = "jellyPartyWrapper";
    this.wrapperElement.style.position = "fixed";
    this.wrapperElement.style.top = "0";
    this.wrapperElement.style.right = "0";
    this.wrapperElement.style.bottom = "0";
    this.wrapperElement.style.margin = "0px";
    this.wrapperElement.style.height = "100vh";
    this.wrapperElement.style.width = "var(--jelly-party-sidebar-width)";
    this.wrapperElement.style.transition = "all 0.2s ease";
    this.wrapperElement.style.zIndex = "999999";
    this.wrapperElement.appendChild(fab.fabElement);
    this.wrapperElement.appendChild(iFrame.frameElement);
    this.wrapperElement.appendChild(closeButton.closeButtonElement);
  }
}
