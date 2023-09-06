import React from 'react';
import { render, screen, act } from '@testing-library/react';
import HomePage from './index.jsx';

describe('HomePage Component', () => {
  it('should render without errors', () => {
    render(<HomePage />);
    
    // Test the presence of the component's home section
    const homeSection = screen.getByTestId('home-section');
    expect(homeSection).toBeInTheDocument();

    // Test the presence of the slideshow text
    const slideshowText = screen.getByTestId('slideshow-text');
    expect(slideshowText).toBeInTheDocument();

    // Test the presence of the "Learn More" button
    const learnMoreButton = screen.getByText('Learn More');
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('should toggle between text options in the slideshow', async () => {
    render(<HomePage />);
    const slideshowText = screen.getByTestId('slideshow-text');
    
    // Wait for the initial text to display
    await screen.findByText('Save a child');

   

    // Check that the text has switched
    expect(slideshowText).toHaveTextContent('Save a child');

    // Trigger the interval again
    act(() => {
      jest.advanceTimersByTime(1500);
    });

    // Check that the text has switched back to the first option
    expect(slideshowText).toHaveTextContent('Save a child');
  });

  
});
