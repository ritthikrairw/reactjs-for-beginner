import Link from "next/link";

interface NavItemProps {
  link: string;
  label: string;
}

export default function NavItem({ link, label }: NavItemProps) {
  return (
    <Link href={link} className='text-sm text-gray-600'>
      {label}
    </Link>
  );
}
