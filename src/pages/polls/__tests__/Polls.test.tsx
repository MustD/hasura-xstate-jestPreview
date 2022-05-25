import {debug} from 'jest-preview';
import {render, screen, waitFor} from "@testing-library/react";
import {POLLS_INVENTORY, Polls} from "..";
import {MockedProvider, MockedResponse} from '@apollo/client/testing';
import {BrowserRouter} from "react-router-dom";

const pollMock: MockedResponse =
  {
    request: {
      query: POLLS_INVENTORY
    },
    result: {
      data: {
        poll: [{id: 1, name: "first"}, {id: 2, name: "second"}]
      }
    }
  }

describe("Polls", () => {
  it("should work as expected", async () => {
    render(<Polls/>, {
      wrapper: props => (
        <MockedProvider mocks={[pollMock]} addTypename={true}>
          <BrowserRouter>
            {props.children}
          </BrowserRouter>
        </MockedProvider>
      )
    })

    await waitFor(() => expect(screen.getByText(/first/i)).toBeInTheDocument())
  })
})
