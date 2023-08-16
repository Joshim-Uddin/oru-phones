import React from "react";
import Lottie from "lottie-react";
import login from "@/public/login.json";

const LoginAnimation = () => {
    return (
        <Lottie animationData={login}></Lottie>
    );
};

export default LoginAnimation;