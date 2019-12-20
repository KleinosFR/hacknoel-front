import React from "react";

import Header from "../layout/Header";
import Footers from "../layout/Footers";
import SignSelect from "./SignSelect";
import Form from "./Form";


export default function Login() {
    return (
        <div>

          <Form/>
          <Header />
          <SignSelect />
          <Footers />

        </div>
    )
}

