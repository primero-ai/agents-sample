import { createActivity } from '@primero-ai/temporal-graph-tools'

export type GoodbyeWorldInput = { name: string }

export const goodbyeWorldActivity = createActivity(
  async (input: GoodbyeWorldInput): Promise<void> => {
    console.log(`Goodbye, ${input.name}!`)
  },
  { id: 'goodbyeWorldActivity' },
)
