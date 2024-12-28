import { useState } from "react"
import { loginFormElements } from "../../config"
import CommonForm from "../common-form";

const initialFormData = {
    email: "",
    password: "",
};

const LoginComponent = () => {

    const [loginFormData, setLoginFormData] = useState(initialFormData);

    return (
        <div>
            <h1>Login page/component</h1>
            <CommonForm
                formData={loginFormData}
                setFormData={setLoginFormData}
                formControls={loginFormElements}
                buttonText={'Login'}

            />
        </div>
    )
}

export default LoginComponent;