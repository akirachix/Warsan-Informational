import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
  it('should render without errors', () => {
    render(<Footer />);
    const phoneNumberHeader = screen.getByText('Phone Number');
    const emailHeader = screen.getByText('Email');
    const addressHeader = screen.getByText('Our Address');
    const copyrightText = screen.getByText('@2023 Warsan. All Rights Reserved');
    expect(contactHeader).toBeInTheDocument();
    expect(phoneNumberHeader).toBeInTheDocument();
    expect(emailHeader).toBeInTheDocument();
    expect(addressHeader).toBeInTheDocument();
    expect(copyrightText).toBeInTheDocument();
  });
});