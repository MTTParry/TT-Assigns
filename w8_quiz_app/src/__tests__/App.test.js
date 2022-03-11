import { render, screen } from '@testing-library/react';
import App from '../App';
import Questions from '../components/Questions';

// First Test - Pass
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

// Second Test - Pass
describe("Questions", () => {
  test("renders Questions component", () => {
    render(<Questions />);
  });
});

// Third Test - Pass
test("renders title element", () => {
    render(<App />);
    const titleElement = screen.getByText(/Week 8: Quiz App/);
    expect(titleElement);
});

// Fourth Test
