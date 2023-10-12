import Logo from "../logo/logo";
import NavItem from "../nav-item/nav-item";

export default function Header() {
  return (
    <header className='container py-6'>
      <div className='flex gap-4 justify-center items-center'>
        <NavItem link='/' label='Home' />
        <NavItem link='/about' label='About' />
        <Logo />
        <NavItem link='/blog' label='Blog' />
        <NavItem link='/contact' label='Contact' />
      </div>
    </header>
  );
}
