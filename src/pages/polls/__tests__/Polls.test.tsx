import preview from "jest-preview"
import {render} from "@testing-library/react";
import {Polls} from "..";
import {Button} from "@mui/material";

describe('Polls', () => {
  it('should work as expected', () => {
    render(<Button>hello</Button>)
    preview.debug();
  })
})
