export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer rounded-full border-gray-300 bg-gray-100 text-primary focus:ring-primary"
        {...props}
      />
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
}

export default Checkbox;
