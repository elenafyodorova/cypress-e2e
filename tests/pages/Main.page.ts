import TextareaComponent from "@/tests/pages/components/Textarea.component";
import ButtonComponent from "@/tests/pages/components/Button.component";

export class MainPage {
    public textarea: TextareaComponent;
    public button: ButtonComponent;

    public constructor() {
        this.textarea = new TextareaComponent()
        this.button = new ButtonComponent()
    }
}