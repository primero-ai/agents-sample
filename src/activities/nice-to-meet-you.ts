import { createActivity } from '@primero-ai/temporal-graph-tools'

export type NiceToMeetYouInput = { name: string }

export const niceToMeetYouActivity = createActivity(
  async (input: NiceToMeetYouInput): Promise<void> => {
    console.log(`Nice to meet you, ${input.name}!`)
  },
  { id: 'niceToMeetYouActivity' },
)
