import React from "react";

import { SelectItemType } from "@/lib/constants/baseConstants";
import clsxm from "@/lib/helpers/clsxm";

type SelectFormProps = {
  labelName: string;
  labelHTMLFor: string;
  selectOptions: SelectItemType[];
} & React.ComponentPropsWithRef<"select">;

const SelectForm = React.forwardRef<HTMLSelectElement, SelectFormProps>(
  ({ labelName, selectOptions, labelHTMLFor, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={labelHTMLFor}>{labelName}</label>
        <select
          ref={ref}
          className={clsxm("select-input", className)}
          {...rest}
        >
          {selectOptions.map((option, index) => (
            <option value={option.value} key={index}>
              {option.optionLabel}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectForm;
