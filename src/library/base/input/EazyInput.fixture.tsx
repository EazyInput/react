import { useId } from "react";
import { EazyInput } from "./EazyInput";
import { useTextInput } from "../../hooks";

export const EazyInputFixture: React.FC<EazyInputFixtureProperties> = ({
  placeholder,
  required,
  title,
}: EazyInputFixtureProperties) => {
  const id = useId();
  const input = useTextInput();

  return (
    <div>
      <label htmlFor={id}>Input:</label>
      <div>
        <EazyInput
          id={id}
          input={input}
          required={required}
          placeholder={placeholder}
          title={title}
        />
      </div>
    </div>
  );
};

interface EazyInputFixtureProperties {
  placeholder: string;
  required?: boolean;
  title?: string;
}
