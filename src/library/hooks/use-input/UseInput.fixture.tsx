import useInput from "./UseInput";

export const UseInputFixture: React.FC<UseInputFixtureProperties> = ({
  required,
}: UseInputFixtureProperties) => {
  const input = useInput<string>("", (value) => value);

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

interface UseInputFixtureProperties {
  required?: boolean;
}
