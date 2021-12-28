import React from "react"
import { Helmet } from "react-helmet";
import { LoginComponent } from "../components/_auth/index";
export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Kerja 365 | Sign in</title>
      </Helmet>
      <LoginComponent />
    </div>
  );
}
