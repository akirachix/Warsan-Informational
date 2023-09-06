import React from 'react';
import { render, screen, act } from '@testing-library/react';
import HomePage from './index.jsx';
import 'jest-styled-components';

jest.useFakeTimers(); 

describe('HomePage Component', () => {
  it('should toggle between text options in the slideshow', async () => {
    render(<HomePage />);
    const slideshowText = screen.getByTestId('slideshow-text');
    const learnMoreButton = screen.getByText('Learn More');


    // Trigger the interval again
    act(() => {
      jest.advanceTimersByTime(2500);
    });

    // Check that the initial text is displayed
    expect(slideshowText.textContent).toBe('Save a child');


    // Check that the text has switched to the second option
    expect(slideshowText.textContent).toBe('Save a nation');

    // Check that the Learn More button is rendered
    expect(learnMoreButton).toBeInTheDocument();
  });

  it('should have correct background styling', () => {
    render(<HomePage />);
    const homeSection = screen.getByTestId('home-section');



  it('should have correct text styling', () => {
    render(<HomePage />);
    const slideshowText = screen.getByTestId('slideshow-text');

    const slideshowTextStyles = window.getComputedStyle(slideshowText);

    // Check text styling
    expect(slideshowTextStyles.getPropertyValue('font-weight')).toBe('bold');
    expect(slideshowTextStyles.getPropertyValue('font-size')).toBe('2em');
  });

  it('should have correct button styling', () => {
    render(<HomePage />);
    const learnMoreButton = screen.getByText('Learn More');

    const learnMoreButtonStyles = window.getComputedStyle(learnMoreButton);

    // Check button styling
    expect(learnMoreButtonStyles.getPropertyValue('width')).toBe('231.25px');
    expect(learnMoreButtonStyles.getPropertyValue('height')).toBe('65px');
    expect(learnMoreButtonStyles.getPropertyValue('background-color')).toBe('#1175D2');
    expect(learnMoreButtonStyles.getPropertyValue('color')).toBe('#fff');
    expect(learnMoreButtonStyles.getPropertyValue('border')).toBe('none');
    expect(learnMoreButtonStyles.getPropertyValue('border-radius')).toBe('5px');
    expect(learnMoreButtonStyles.getPropertyValue('justify-content')).toBe('center');
    expect(learnMoreButtonStyles.getPropertyValue('align-items')).toBe('center');
    expect(learnMoreButtonStyles.getPropertyValue('margin-top')).toBe('480px');
    expect(learnMoreButtonStyles.getPropertyValue('cursor')).toBe('pointer');
  });
})
});
