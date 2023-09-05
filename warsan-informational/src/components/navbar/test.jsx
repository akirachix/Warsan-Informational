import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './index.jsx'; // Update the file path if needed
describe('Navbar Component', () => {
  it('should render without errors', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo');
    const brandName = screen.getByText('RAJO');
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const servicesLink = screen.getByText('Our Services');
    const contactLink = screen.getByText('Contact Us');
    const hamburgerMenu = screen.getByRole('button', { name: 'Hamburger Menu' });
    expect(logo).toBeInTheDocument();
    expect(brandName).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(hamburgerMenu).toBeInTheDocument();
  });
  it('should toggle the navigation menu when the hamburger menu is clicked', () => {
    render(<Navbar />);
    const hamburgerMenu = screen.getByRole('button', { name: 'Hamburger Menu' });
    const navList = screen.getByRole('list', { name: 'Navigation List' });
    fireEvent.click(hamburgerMenu);
    expect(navList).toHaveClass('open');
    fireEvent.click(hamburgerMenu);
    expect(navList).not.toHaveClass('open');
  });
});