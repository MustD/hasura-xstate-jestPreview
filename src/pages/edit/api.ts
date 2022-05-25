import {gql} from "@apollo/client";
import {Poll} from "../polls";

export type PollById = {
  poll_by_pk: Poll
}

export type PollByIdVars = {
  id: number
}

export const GET_POLL_BY_ID = gql`
  query getPoll ($id: Int!) {
  poll_by_pk(id: $id) {
    id
    name
  }
}`;
