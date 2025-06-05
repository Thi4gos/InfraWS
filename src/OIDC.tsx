import type { OidcClientSettings } from "oidc-client-ts";

const oidcConfig: OidcClientSettings = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_QShRBdcHo",
  client_id: "6ldghjnvmtv1vjkkomripqncnr",
  redirect_uri: window.location.origin,
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: window.location.origin,
};

export default oidcConfig;