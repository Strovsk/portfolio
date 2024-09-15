import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Menu from './Menu';


describe('Menu', () => {
  it('Should have 3 buttons', () => {
    render(<Menu />);

    const resumeAction = screen.getByTestId('see-resume');
    const techAction = screen.getByTestId('tech-skills');
    const projectAction = screen.getByTestId('projects');
    
    expect(resumeAction).toBeInTheDocument();
    expect(techAction).toBeInTheDocument();
    expect(projectAction).toBeInTheDocument();
  });
  
  it('Should redirect to the right url', () => {
    render(<Menu />);

    const techAction = screen.getByTestId('tech-skills');
    const projectAction = screen.getByTestId('projects');

    expect(techAction.children[0]).toHaveAttribute('href', '#tech-skills');
    expect(projectAction.children[0]).toHaveAttribute('href', '#projects');
  });
});
