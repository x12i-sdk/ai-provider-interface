import assert from 'node:assert/strict';
import { assertValidCallSpec } from '@x12i/ai-provider-interface';

const request = { requestId: 'demo-request', provider: 'demo-provider', mode: 'sync', operation: 'demo.responses.create', args: { model: 'fixture', input: 'Hello' } };
assertValidCallSpec(request);
assert.throws(() => assertValidCallSpec({ ...request, provider: '' }));
console.log({ requestId: request.requestId, operation: request.operation, valid: true });
// This validates an envelope. It invokes no provider or vendor SDK.
