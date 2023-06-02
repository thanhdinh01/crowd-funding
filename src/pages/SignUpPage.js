import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import Field from "../components/common/Field";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Checkbox from "../components/checkbox/Checkbox";
import useToggleValue from "../hooks/useToggleValue";
import Button from "../components/button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import { authRegister } from "../store/auth/auth-slice";

const schema = yup.object().shape({
  name: yup.string().required("Fullname is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character ")
    .required("Password is required"),
});

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    show: toggleTerm,
    setShow: setToggleTerm,
    handleToggle: handleToggleTerm,
  } = useToggleValue();
  const { show: togglePassword, handleToggle: handleTogglePassword } =
    useToggleValue();
  const [errorTerm, setErrorTerm] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = (data) => {
    if (!toggleTerm) {
      setErrorTerm(!errorTerm);
      return null;
    }
    if (!isValid) return null;
    // console.log(data);
    dispatch(authRegister(data));
    reset({
      name: "",
      email: "",
      password: "",
    });
    setErrorTerm(false);
    setToggleTerm(false);
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-xs font-medium text-text3 lg:text-sm lg:mb-[30px] mb-[25px] text-center">
        Already have an account?{" "}
        <Link to={"/sign-in"} className="underline text-primary">
          Sign in
        </Link>
      </p>
      <button className=" w-full py-[13px] lg:px-[100px] px-[40px] border border-strokeColor dark:border-darkStroke rounded-xl mb-5 flex items-center justify-center">
        <span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#FBC02D"
            />
            <path
              d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
              fill="#E53935"
            />
            <path
              d="M12.5002 22C15.0832 22 17.4302 21.0115 19.2047 19.404L16.1097 16.785C15.1057 17.5455 13.8577 18 12.5002 18C9.89916 18 7.69066 16.3415 6.85866 14.027L3.59766 16.5395C5.25266 19.778 8.61366 22 12.5002 22Z"
              fill="#4CAF50"
            />
            <path
              d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
              fill="#1565C0"
            />
          </svg>
        </span>
        <span className="ml-2 font-semibold text-text2 dark:text-white text-[16px]">
          Sign up with google
        </span>
      </button>
      <p className="lg:text-[14px] text-xs font-normal text-text2 dark:text-white  text-center">
        Or sign up with email
      </p>
      <form className="mt-[5px] lg:mt-5" onSubmit={handleSubmit(handleSignUp)}>
        <Field error={errors?.name?.message}>
          <Label name="name">Full Name *</Label>
          <Input
            error={errors?.name}
            type="text"
            placeholder="Jhon Doe"
            name="name"
            control={control}
          ></Input>
        </Field>

        <Field error={errors?.email?.message}>
          <Label name="email">Email *</Label>
          <Input
            error={errors?.email}
            type="text"
            placeholder="example@gmail.com"
            name="email"
            control={control}
          ></Input>
        </Field>

        <Field error={errors?.password?.message}>
          <Label name="password">Password *</Label>
          <Input
            error={errors?.password}
            type={`${togglePassword ? "text" : "password"}`}
            placeholder="Create a password"
            name="password"
            control={control}
          >
            <IconEyeToggle
              onClick={handleTogglePassword}
              toggle={togglePassword}
            ></IconEyeToggle>
          </Input>
        </Field>

        <Checkbox
          error={
            errorTerm && !toggleTerm
              ? "The terms and conditions must be accepted."
              : ""
          }
          onClick={handleToggleTerm}
          checked={toggleTerm}
        >
          <p className="text-xs font-normal lg:text-sm text-text2 ">
            I agree to the{" "}
            <Link to="#" className="underline text-secondary">
              Tearms of Use
            </Link>{" "}
            and have read and understand the{" "}
            <Link to="#" className="underline text-secondary">
              Privacy policy.
            </Link>
          </p>
        </Checkbox>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
