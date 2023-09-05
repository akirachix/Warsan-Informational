import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
  it('should render without errors', () => {
    render(<Footer />);
    
    // Updated selectors based on your JSX changes
    const phoneNumberHeader = screen.getByText('Phone Number');
    const emailHeader = screen.getByText('Email');
    const addressHeader = screen.getByText('Our Address');
    
    // Check if the text content is present in the updated structure
    expect(phoneNumberHeader).toBeInTheDocument();
    expect(emailHeader).toBeInTheDocument();
    expect(addressHeader).toBeInTheDocument();

    // Assert the copyright text using a different approach
    const copyrightText = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'div' && content.includes('@2023 Warsan. All Rights Reserved');
    });
    
    expect(copyrightText).toBeInTheDocument();
  });
});
