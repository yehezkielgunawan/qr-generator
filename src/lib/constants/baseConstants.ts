export type SelectItemType = {
  value: string;
  optionLabel: string;
};

export const QRStyleOptions: SelectItemType[] = [
  {
    value: "squares",
    optionLabel: "Squares",
  },
  {
    value: "dots",
    optionLabel: "Dots",
  },
];

export const colorOptions: SelectItemType[] = [
  {
    value: "#FFFFFF",
    optionLabel: "Default White",
  },
  {
    value: "#d1d5db",
    optionLabel: "Dark Gray",
  },
  {
    value: "#DEF2F1",
    optionLabel: "Primary Color",
  },
  {
    value: "#D6FFEB",
    optionLabel: "Secondary Color",
  },
];
