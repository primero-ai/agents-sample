import { createWorkflowBuilder } from '@primero-ai/temporal-graph-tools'
import { goodbyeWorldActivity, helloWorldActivity, HelloWorldInput, niceToMeetYouActivity, runQueryActivity } from './activities'

export const builderAgent = createWorkflowBuilder<HelloWorldInput>({
  workflowName: 'agentWorkflow',
  proxyOptions: { startToCloseTimeout: '2 minutes' },
})
  .then(helloWorldActivity)
  .then(runQueryActivity)
  .parallel([goodbyeWorldActivity, niceToMeetYouActivity])
  .commit()
