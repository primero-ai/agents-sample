import { Connection, WorkflowClient } from '@temporalio/client'
import { builderAgent } from '../src'

const DEFAULT_NAMESPACE = 'default'
const DEFAULT_TASK_QUEUE = 'default'

async function run(): Promise<void> {
  const connection = await Connection.connect({
    address: process.env.TEMPORAL_ADDRESS ?? 'localhost:7233',
    tls: process.env.TEMPORAL_API_KEY ? {} : undefined,
    apiKey: process.env.TEMPORAL_API_KEY,
  })

  const client = new WorkflowClient({
    connection,
    namespace: process.env.TEMPORAL_NAMESPACE ?? DEFAULT_NAMESPACE,
  })

  const [agentHandle] = await Promise.all([
    client.start(builderAgent.workflowName, {
      taskQueue: process.env.TEMPORAL_TASK_QUEUE ?? DEFAULT_TASK_QUEUE,
      workflowId: `agent-${Date.now()}`,
      args: [{ name: 'John Doe' }],
    }),
  ])

  console.log('Agent Workflow started:', {
    workflowId: agentHandle.workflowId,
    runId: agentHandle.firstExecutionRunId,
  })
  const result = await Promise.all([agentHandle.result()])

  console.log('Workflows completed with result:', result)

  await connection.close()
}

run().catch((error) => {
  console.error('Failed to run workflow example:', error)
  process.exitCode = 1
})
