import React from "react";

import clsxm from "@/lib/helpers/clsxm";

type InputFieldProps = {
  labelName: string;
} & React.ComponentPropsWithRef<"input">;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ labelName, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor="content">{labelName}</label>
        <input ref={ref} className={clsxm("text-input", className)} {...rest} />
      </div>
    );
  }
);

export default InputField;
