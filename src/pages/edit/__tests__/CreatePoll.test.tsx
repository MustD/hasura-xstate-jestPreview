import {render, screen} from "@testing-library/react";
import EditPoll from "..";
import preview from "jest-preview";
import {BrowserRouter} from "react-router-dom";
import {MockedProvider} from "@apollo/client/testing";

describe("CreatePoll", () => {
  it("should add text field", () => {
    render(<EditPoll/>, {
      wrapper: props => (
        <MockedProvider addTypename={true}>
          <BrowserRouter>
            {props.children}
          </BrowserRouter>
        </MockedProvider>
      )
    })

    preview.debug();
    expect(screen.getByText(/Edit/i)).toBeInTheDocument()
  })
})
