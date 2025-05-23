// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { HttpEntity, isHttpEntity } from './HttpEntity';
import { StatusCode, isStatusCode } from './StatusCode';

export interface ErrorResponseException {
  responseStatus: StatusCode;
  response?: HttpEntity;
}

export function isErrorResponseException(v: any): v is ErrorResponseException {
  return (
    v['responseStatus'] &&
    isStatusCode(v['responseStatus']) &&
    (!v['response'] || (v['response'] && isHttpEntity(v['response'])))
  );
}
