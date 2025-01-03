// Generated by ScalaTS 0.5.9: https://scala-ts.github.io/scala-ts/

export class DashboardJsonProtocol {
  private static instance: DashboardJsonProtocol;

  private constructor() {}

  public static getInstance() {
    if (!DashboardJsonProtocol.instance) {
      DashboardJsonProtocol.instance = new DashboardJsonProtocol();
    }

    return DashboardJsonProtocol.instance;
  }
}

export const DashboardJsonProtocolInhabitant: DashboardJsonProtocol =
  DashboardJsonProtocol.getInstance();

export function isDashboardJsonProtocol(v: any): v is DashboardJsonProtocol {
  return (
    v instanceof DashboardJsonProtocol && v === DashboardJsonProtocolInhabitant
  );
}
