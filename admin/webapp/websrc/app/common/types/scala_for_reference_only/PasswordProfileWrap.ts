// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

import { PasswordProfile, isPasswordProfile } from './PasswordProfile';

export interface PasswordProfileWrap {
  config: PasswordProfile;
}

export function isPasswordProfileWrap(v: any): v is PasswordProfileWrap {
  return (
    (v['config'] && isPasswordProfile(v['config']))
  );
}