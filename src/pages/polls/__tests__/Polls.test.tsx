import {debug} from 'jest-preview';
import {render, screen, waitFor} from "@testing-library/react";
import {GET_POLLS_INVENTORY, Polls} from "..";
import {MockedProvider, MockedResponse} from '@apollo/client/testing';

const pollMock: MockedResponse =
  {
    request: {
      query: GET_POLLS_INVENTORY
    },
    result: {
      data: {
        poll: [{id: 1, name: "first"}, {id: 2, name: "second"}]
      }
    }
  }

describe("Polls", () => {
  it("should work as expected", async () => {
    render(
      <MockedProvider mocks={[pollMock]} addTypename={false}>
        <Polls/>
      </MockedProvider>
    )

    await waitFor(() => expect(screen.getByText(/first/i)).toBeInTheDocument())
  })
})
