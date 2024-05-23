import useInput from "../library/hooks/UseInput";

export const UseInputHarness: React.FC<UseInputHarnessProperties> = ({
  required,
}: UseInputHarnessProperties) => {
  const input = useInput<string>("", (x) => x);

  return (
    <div>
      <label htmlFor="input">
        label
        <input
          id="input"
          value={input.value}
          onChange={input.updateValue}
          required={required}
        ></input>
      </label>
    </div>
  );
};

interface UseInputHarnessProperties {
  required?: boolean;
}
