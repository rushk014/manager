// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { DateTime, isDateTime } from './DateTime';

export interface ThreatDTO {
  name: string;
  reported_at: DateTime;
  workload_id: string;
  workload_name: string;
  count: number;
  severity: string;
  action: string;
  src_ip: string;
  dst_ip: string;
  src_port: number;
  dst_port: number;
  application: string;
  sess_ingress: boolean;
}

export function isThreatDTO(v: any): v is ThreatDTO {
  return (
    typeof v['name'] === 'string' &&
    v['reported_at'] &&
    isDateTime(v['reported_at']) &&
    typeof v['workload_id'] === 'string' &&
    typeof v['workload_name'] === 'string' &&
    typeof v['count'] === 'number' &&
    typeof v['severity'] === 'string' &&
    typeof v['action'] === 'string' &&
    typeof v['src_ip'] === 'string' &&
    typeof v['dst_ip'] === 'string' &&
    typeof v['src_port'] === 'number' &&
    typeof v['dst_port'] === 'number' &&
    typeof v['application'] === 'string' &&
    typeof v['sess_ingress'] === 'boolean'
  );
}
