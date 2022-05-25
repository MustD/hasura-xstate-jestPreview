import {createMachine} from "xstate";

export const states = {
  START: "start",
  TIMEOUT: "timeout",
  DONE: "done"
}

// https://xstate.js.org/docs/
// https://stately.ai/viz
export const delayMachine = createMachine({
  id: "editPoll",
  schema: {
    events: {} as { type: "START" }
  },
  initial: states.START,
  states: {
    [states.START]: {
      on: {
        START: {target: states.TIMEOUT}
      }
    },
    [states.TIMEOUT]: {
      invoke: {
        id: "loadingTimeout",
        src: () => new Promise(r => setTimeout(r, 2000)),
        onDone: {
          target: states.DONE
        }
      }
    },
    [states.DONE]: {
      type: "final"
    },
  }
})
