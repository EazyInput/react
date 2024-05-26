import "../../../node_modules/bulma/bulma.scss";
import { useTextInput } from "../../library/hooks";
import { EazyTextTemplate } from "../../library/templates/EazyTextTemplate";

export const BulmaTextInput: React.FC = () => {
  const input = useTextInput();

  return (
    <EazyTextTemplate
      innerStyle="control"
      input={input}
      outerStyle="field"
      placeholder="Bulma Text Input"
      labelContent="Text Input"
    />
  );
};
