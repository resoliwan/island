require('source-map-support').install();
import RPCService from '../services/rpc-service';
import { ISLAND, LogicError } from '../utils/error';

import { ExternalRpc } from '../services/rpc-service';
declare module '../services/rpc-service' {
  interface ExternalRpc {
    getString(o: string): string;
  }
}

ExternalRpc.prototype.getString = (o: string) => o;

describe('Improved RPC', () => {
  const rpcService = new RPCService('haha');
  
  it('should have test a RPC', () => {
    expect(() => rpcService.externalRpc.test()).toThrow(new LogicError(ISLAND.LOGIC.L0007_NOT_IMPLEMENTED));
  });
  
  it('should be augmented', () => {
    expect(rpcService.externalRpc.getString('haha')).toBe('haha');
  });
});
