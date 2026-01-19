import { createActivity } from '@primero-ai/temporal-graph-tools'
import { ResourceQueryClient } from '@primero-ai/agents-helpers'

export type RunQueryInput = { name: string }

export const runQueryActivity = createActivity(
  async (input: RunQueryInput): Promise<RunQueryInput> => {
    const client = new ResourceQueryClient()
    const result = await client.query({ sql: `SELECT '${input.name}'` })

    console.log('Query result:', JSON.stringify(result.rows, null, 2))
    
    return input
  },
  { id: 'runQueryActivity' },
)
