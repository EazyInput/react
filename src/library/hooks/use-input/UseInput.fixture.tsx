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
          onChange={input.handleChange}
          required={required}
        ></input>
      </label>
      <p>Is Dirty {input.dirty ? "yes" : "no"}</p>
      <p>Is Error {input.error === "" ? "no" : "yes"}</p>
    </div>
  );
};

interface UseInputFixtureProperties {
  required?: boolean;
}
