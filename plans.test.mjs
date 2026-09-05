import test from 'node:test';
import assert from 'node:assert/strict';
import { matchingPlans } from './plans.mjs';
for (const [size, expected] of [[4,[]],[5,['The Studio']],[12,['The Studio','The Floor']],[13,['The Floor']],[30,['The Floor','The Whole Crew']],[31,['The Whole Crew']],[60,['The Whole Crew']],[61,[]]]) {
  test('matches team size ' + size, () => assert.deepEqual(matchingPlans(size).map(p=>p.name),expected));
}
for (const size of [0,-1,1.5,NaN,Infinity,'12',Number.MAX_SAFE_INTEGER+1]) {
  test('rejects invalid size ' + String(size), () => assert.throws(()=>matchingPlans(size),RangeError));
}
