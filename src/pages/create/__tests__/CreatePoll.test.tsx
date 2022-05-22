import {render, screen} from "@testing-library/react";
import {CreatePoll} from "..";
import preview from "jest-preview";
import userEvent from "@testing-library/user-event";

describe("CreatePoll", () => {
  it("should add text field", () => {
    render(<CreatePoll/>)
    userEvent.click(screen.getByText(/add/))
    userEvent.click(screen.getByText(/add/))
    userEvent.click(screen.getByText(/add/))

    preview.debug();
    expect(screen.getByText(/add 3/)).toBeInTheDocument()
  })
})
