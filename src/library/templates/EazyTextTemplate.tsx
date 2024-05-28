import { useId } from "react";
import { EazyFeedback } from "../base/feedback/EazyFeedback";
import { EazyLabel } from "../base/label/EazyLabel";
import EazyTextInput from "../derived";
import IUseInput from "../interfaces/IUseInput";

export const EazyTextTemplate: React.FC<EazyTextTemplateProperties> = ({
  innerStyle,
  input,
  labelContent,
  labelStyle,
  outerStyle,
  placeholder,
  staticStyle,
}: EazyTextTemplateProperties) => {
  const id = useId();
  return (
    <div className={outerStyle}>
      <EazyLabel content={labelContent} id={id} style={labelStyle} />
      <div className={innerStyle}>
        <EazyTextInput
          id={id}
          input={input}
          placeholder={placeholder}
          staticStyle={staticStyle}
        />
      </div>
      <EazyFeedback input={input} />
    </div>
  );
};

interface EazyTextTemplateProperties {
  innerStyle?: string;
  input: IUseInput<string>;
  labelContent: string;
  labelStyle?: string;
  outerStyle?: string;
  placeholder: string;
  staticStyle?: string;
}
