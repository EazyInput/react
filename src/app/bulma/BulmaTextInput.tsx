import "../../../node_modules/bulma/bulma.scss";
import { useTextInput } from "../../library/hooks";
import { EazyTextTemplate } from "../../library/templates/EazyTextTemplate";

export const BulmaTextInput: React.FC = () => {
  const input = useTextInput();

  return (
    <EazyTextTemplate
      innerStyle="control"
      input={input}
      labelContent="Text Input"
      labelStyle="label"
      outerStyle="field"
      placeholder="Bulma Text Input"
      staticStyle="input"
    />
  );
};
