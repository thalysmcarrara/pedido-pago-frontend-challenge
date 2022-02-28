import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../src/pages/index';
import { useRouter } from 'next/router';

const employeeMock = require('./mocks/employee.json');

jest.mock('next/router');

describe('Home', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({ asPath: '/'});
  });

  it('renders a heading', () => {
    render(<Home employees={employeeMock}/>);

    const heading = screen.getByRole('heading', {
      name: /Organização/i, 
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders a table', () => {
    render(<Home employees={employeeMock}/>);
    
    const employee = screen.getAllByTestId("employee-name");

    expect(employee.length).toBe(3);
  });

  it('renders nav links', () => {
    render(<Home employees={employeeMock}/>);

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(2);
  });

  it("tests the user's stream to open and close the popup", () => {
    render(<Home employees={employeeMock}/>);

    const popoverButton = screen.getAllByTestId('popover-button');

    userEvent.click(popoverButton[0]);

    const closePopoverButton = screen.getByTestId('close-popup-button');

    expect(closePopoverButton).toBeInTheDocument();

    userEvent.click(closePopoverButton);

    const closePopoverButtonRemoved = screen.queryByTestId('close-popup-button');

    expect(closePopoverButtonRemoved).not.toBeInTheDocument();
  });
})