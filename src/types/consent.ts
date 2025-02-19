export interface ConsentInfo {
  appName: string;
  appLogo: string;
  scopes: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
}
