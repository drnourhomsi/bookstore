import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle, Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export function DefaultHeader() {
    return (
        <Navbar>
            <NavbarBrand as={Link} href='https://flowbite-react.com'>
                <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Book Store</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href='/' active>Home</NavbarLink>
                <NavbarLink as={Link} href='/about'>About</NavbarLink>
                <NavbarLink href='/services'>Services</NavbarLink>
                <NavbarLink href='/contact'>Contact</NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
        </Navbar>
  ) ;
}


export function DefaultFooter() {
    return (
        <Footer container className='rounded-none'>
            <FooterCopyright href="#" by="BookStore™" year={2024} />
            <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
        </Footer>
    )
}