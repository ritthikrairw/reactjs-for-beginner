export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function InputText({ ...props }: InputTextProps) {
  return (
    <input
      className="w-full rounded-md border-none p-2 focus:ring-0"
      {...props}
    />
  );
}

export default InputText;
