import {gql} from "@apollo/client";
import {Poll} from ".";

export type PollInventory = {
  poll: Poll[]
}

export const GET_POLLS_INVENTORY = gql`
  query getPolls {
    poll {
      id, name
    }
 }`;
