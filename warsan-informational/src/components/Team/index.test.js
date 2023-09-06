import React from "react";
import { render } from "@testing-library/react";
import Team from "./index";

// Define a mock teamMembers array for testing.
const mockTeamMembers = [
  {
    id: "Aniso",
    name: "Aniso Mohamed Kilas",
    role: "Frontend Developer",
    imageSrc: "/images/aniso.jpg",
  },
  {
    id: "Eunice",
    name: "Eunice Musenyia",
    role: "Full Stack Developer",
    imageSrc: "/images/eunice.jpg", // Fix the image source here.
  },
  {
    id: "Susan",
    name: "Susan Maina",
    role: "Software Developer",
    imageSrc: "/images/susan.jpg",
  },
];

describe("Team Component", () => {
  it("renders team members correctly", () => {
    const { getAllByTestId } = render(<Team />);
    const memberElements = getAllByTestId(/^(Aniso|Eunice|Susan|Clever|Joy)$/);
    expect(memberElements).toHaveLength(mockTeamMembers.length);
  });

  it("displays member names and roles", () => {
    const { getByText } = render(<Team />);
    mockTeamMembers.forEach((member) => {
      const nameElement = getByText(member.name);
      const roleElement = getByText(member.role);
      expect(nameElement).toBeInTheDocument();
      expect(roleElement).toBeInTheDocument();
    });
  });

  it("matches snapshots", () => {
    const { asFragment } = render(<Team />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies responsive styles", () => {
    // Simulate a screen width of 800px.
    window.innerWidth = 800;
    const { container } = render(<Team />);
    const memberImages = container.querySelectorAll(".team-member img");

    expect(memberImages[0]).toHaveStyle("width: 150px");
    expect(memberImages[0]).toHaveStyle("height: 150px");

    // Simulate a screen width of 600px.
    window.innerWidth = 600;
    const { container: container600px } = render(<Team />);
    const memberImages600px = container600px.querySelectorAll(".team-member img");

    expect(memberImages600px[0]).toHaveStyle("width: 120px");
    expect(memberImages600px[0]).toHaveStyle("height: 120px");
  });
});
