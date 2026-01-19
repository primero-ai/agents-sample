import { createActivity } from '@primero-ai/temporal-graph-tools'

export type HelloWorldInput = { name: string }

export const helloWorldActivity = createActivity(
  async (input: HelloWorldInput): Promise<HelloWorldInput> => {
    console.log(`Hello, ${input.name}!`)

    return input
  },
  { id: 'helloWorldActivity' },
)
