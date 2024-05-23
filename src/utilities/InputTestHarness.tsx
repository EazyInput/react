import { ReactNode } from "react";

export const InputTestHarness: React.FC<InputTestHarnessProperties> = ({
  children,
  id,
}: InputTestHarnessProperties) => {
  return (
    <div>
      <label htmlFor={id}>
        Input: <div>{children}</div>
      </label>
    </div>
  );
};

interface InputTestHarnessProperties {
  id: string;
  children: ReactNode;
}
