import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function Button({ children, active, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        "rounded border border-primary px-4 py-2 text-sm font-semibold leading-none text-black/70 hover:bg-primary hover:text-white",
        {
          "bg-primary text-white": active,
          "bg-white": !active,
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
