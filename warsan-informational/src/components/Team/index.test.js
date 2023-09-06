import React from 'react';
import { render, screen } from '@testing-library/react';
import Team from './index.jsx';
describe('Team Component', () => {
  it('should render without errors', () => {
    render(<Team />);

    // Testing presence of the component title
    const teamTitle = screen.getByText('OUR TEAM');
    expect(teamTitle).toBeInTheDocument();

    // Testing each team member's image and name
    const teamMembers = screen.getAllByRole('img');
    expect(teamMembers).toHaveLength(5); 

    //Testing specific team member details
    const teamMember1 = screen.getByTestId('Aniso');
    const teamMember2 = screen.getByTestId('Eunice');
    const teamMember3 = screen.getByTestId('Susan');
    const teamMember4 = screen.getByTestId('Clever');
    const teamMember5 = screen.getByTestId('Joy');

    // Testing presence team member's image and name
    expect(teamMember1).toBeInTheDocument();
    expect(teamMember2).toBeInTheDocument();
    expect(teamMember3).toBeInTheDocument();
    expect(teamMember4).toBeInTheDocument();
    expect(teamMember5).toBeInTheDocument();

    // Testing for specific team member images by alt text
    const teamMember1Image = screen.getByAltText('Aniso');
    const teamMember2Image = screen.getByAltText('Eunice');
    const teamMember3Image = screen.getByAltText('Susan');
    const teamMember4Image = screen.getByAltText('Clever');
    const teamMember5Image = screen.getByAltText('Joy');

    // Testing each team member's image 
    expect(teamMember1Image).toBeInTheDocument();
    expect(teamMember2Image).toBeInTheDocument();
    expect(teamMember3Image).toBeInTheDocument();
    expect(teamMember4Image).toBeInTheDocument();
    expect(teamMember5Image).toBeInTheDocument();
  });
});