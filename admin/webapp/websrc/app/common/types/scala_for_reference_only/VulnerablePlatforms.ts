// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { Array, isArray } from './Array';
import { Error, isError } from './Error';

export interface VulnerablePlatforms {
  platforms: Array;
  error?: Error;
}

export function isVulnerablePlatforms(v: any): v is VulnerablePlatforms {
  return (
    v['platforms'] &&
    isArray(v['platforms']) &&
    (!v['error'] || (v['error'] && isError(v['error'])))
  );
}
