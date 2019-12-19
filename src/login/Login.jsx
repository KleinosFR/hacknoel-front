import React from "react";
import Header from "../layout/Header";
import Footers from "../layout/Footers";
import LoginForm from "./LoginForm";
import SignupForm from "../Signup/SignupForm";

export default function Login() {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footers />
        </div>
    );
}
