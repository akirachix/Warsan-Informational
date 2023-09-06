import React from 'react';
import { render, screen, act } from '@testing-library/react';
import HomePage from './index.jsx';
import 'jest-styled-components';

jest.useFakeTimers(); // Enable fake timers

describe('HomePage Component', () => {
  it('should toggle between text options in the slideshow', async () => {
    render(<HomePage />);
    const slideshowText = screen.getByTestId('slideshow-text');
    const learnMoreButton = screen.getByText('Learn More');

    // Wait for the initial text to display
    await screen.findByText('Save a child');

    // Check that the initial text is displayed
    expect(slideshowText.textContent).toBe('Save a nation');

    // Trigger the interval again
    act(() => {
      jest.advanceTimersByTime(2500);
    });

    // Check that the text has switched to the second option
    expect(slideshowText.textContent).toBe('Save a child');

    // Check that the Learn More button is rendered
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('should have correct styling', () => {
    render(<HomePage />);
    const homeSection = screen.getByTestId('home-section');
    const slideshowText = screen.getByTestId('slideshow-text');
    const learnMoreButton = screen.getByText('Learn More');

    // Check background image and color
    expect(homeSection).toHaveStyleRule('background-image', 'url(/public/images/childone.jpg)');
    expect(homeSection).toHaveStyleRule('background-color', 'rgba(0, 0, 0, 0.8)');

    // Check text styling
    expect(slideshowText).toHaveStyle({
      fontWeight: 'bold',
      fontSize: '7rem',
      color: '#FFFFFF',
      marginTop: '-15%',
    });

    // Check button styling
    expect(learnMoreButton).toHaveStyle({
      width: '231.25px',
      height: '65px',
      backgroundColor: '#1175D2',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '480px',
      cursor: 'pointer',
    });
  });
});
