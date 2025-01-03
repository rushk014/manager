// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import {
  ComplianceProfileConfig,
  isComplianceProfileConfig,
} from './ComplianceProfileConfig';

export interface ComplianceProfileConfigData {
  config: ComplianceProfileConfig;
}

export function isComplianceProfileConfigData(
  v: any
): v is ComplianceProfileConfigData {
  return v['config'] && isComplianceProfileConfig(v['config']);
}
