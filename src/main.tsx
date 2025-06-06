// index.js
import App from "./App";
// import { AuthProvider } from "react-oidc-context";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import './index.css'; // ou './main.css', dependendo de como você nomeou

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_QShRBdcHo",
  client_id: "6ldghjnvmtv1vjkkomripqncnr",
  redirect_uri: "https://localhost",
  response_type: "code",
  scope: "phone openid email",
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider> 
  </StrictMode>,
)
