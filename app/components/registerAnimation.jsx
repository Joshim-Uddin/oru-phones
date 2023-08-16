import React from "react";
import Lottie from "lottie-react";
import register from "@/public/register.json";

const RegisterAnimation = () => {
    return (
        <Lottie animationData={register}></Lottie>
    );
};

export default RegisterAnimation;