import { useId } from "react";
import { EazyInput } from "./EazyInput";
import { useTextInput } from "../../hooks";

export const EazyInputFixture: React.FC<EazyInputFixtureProperties> = ({
  required,
}: EazyInputFixtureProperties) => {
  const id = useId();
  const input = useTextInput();

  return (
    <div>
      <label htmlFor={id}>Input:</label>
      <div>
        <EazyInput id={id} input={input} required={required} />
      </div>
    </div>
  );
};

interface EazyInputFixtureProperties {
  required?: boolean;
}
