// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';

export interface ComplianceProfilesData {
  profiles: Array;
}

export function isComplianceProfilesData(v: any): v is ComplianceProfilesData {
  return v['profiles'] && isArray(v['profiles']);
}
