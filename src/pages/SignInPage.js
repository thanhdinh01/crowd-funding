import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToggleValue from "../hooks/useToggleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import Field from "../components/common/Field";
import Label from "../components/label/Label";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import { authLogin } from "../store/auth/auth-slice";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character ")
    .required("Password is required"),
});

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { show: togglePassword, handleToggle: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsLoading(false);
      navigate("/");
      toast.success(`Hello ${user?.name}!`, {
        pauseOnHover: false,
        autoClose: 2000,
      });
    } else if (!user && isSubmitting) {
      setIsLoading(true);
    }
  }, [isSubmitting, navigate, user]);

  const handleSignIn = (data) => {
    if (!isValid) return null;
    // console.log(data);
    dispatch(authLogin(data));
    // reset({
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-xs font-medium text-text3 lg:text-sm lg:mb-[30px] mb-[25px] text-center">
        Dont have an account?{" "}
        <Link to={"/sign-up"} className="underline text-primary">
          Sign up
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
        <span className="ml-2 font-semibold text-text2 text-[16px] dark:text-white">
          Sign in with google
        </span>
      </button>

      <form className="mt-[5px] lg:mt-5" onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter a password"
            name="password"
            control={control}
          >
            <IconEyeToggle
              onClick={handleTogglePassword}
              toggle={togglePassword}
            ></IconEyeToggle>
          </Input>
        </Field>

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
