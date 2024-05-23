import useInput from "../library/hooks/UseInput";

export const UseInputHarness: React.FC = () => {
  const input = useInput<string>("", (x) => x);

  return (
    <div>
      <label htmlFor="input">
        label
        <input
          id="input"
          value={input.value}
          onChange={input.updateValue}
        ></input>
      </label>
    </div>
  );
};
