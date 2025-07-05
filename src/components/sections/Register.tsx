"use client";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "../../lib/utils";
import { useAuthStore } from "../../stores/auth";
import { useState } from "react";
import { SignUpForm } from "../layouts/SignUpForm";
import { LoginForm } from "../layouts/LoginForm";
import { Button } from "../ui/button";

export const Register = () => {
  const [formType, setFormType] = useState<"login" | "signup">("login");

  const { registerUser, ApiState, error, loginUser } = useAuthStore();

  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <div
        style={{
          background:
            "linear-gradient(rgb(95 110 33) 21%, rgb(221 204 103 / 58%) 59%, rgb(89 75 32) 100%)",
        }}
        className="md:w-1/2 w-full h-full bg-sky-500 flex justify-center items-center"
      >
        <Card
          className={cn(
            "md:w-[60%] w-[90%] md:h-[40em] bg-white/75 h-[90%] backdrop-blur-2xl rounded-lg flex flex-col justify-center  items-start p-4"
          )}
        >
          <CardHeader className={cn("w-full")}>
            <CardTitle className={cn("w-full h-8 text-center text-xl")}>
              {" "}
              {formType === "signup" ? "Sign Up" : "Log in"}
            </CardTitle>
            <CardDescription>
              {formType === "signup"
                ? "sign up and start planning your trips"
                : "Welcome back"}
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("w-full")}>
            {formType === "signup" ? (
              <SignUpForm registerUser={registerUser} ApiState={ApiState} />
            ) : (
              <LoginForm ApiState={ApiState} loginUser={loginUser} />
            )}
            {error && <p className="text-red-500">{error}</p>}
          </CardContent>
          <CardFooter className={cn("w-full mt-4 ")}>
            <div className="w-full  flex justify-start items-center gap-3 p-3">
              {formType === "signup" ? (
                <>
                  <p>Already have an account?</p>
                  <Button
                    className=" bg-green-300/35"
                    onClick={() => setFormType("login")}
                  >
                    Login
                  </Button>
                </>
              ) : (
                <>
                  <p>Don&apos;t have an account yet?</p>
                  <Button
                    className=" bg-green-300/35"
                    onClick={() => setFormType("signup")}
                    variant={"outline"}
                  >
                    Sign up
                  </Button>
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
      <Image
        src={"/assets/images/loginBg2.jpg"}
        width={1600}
        height={2159}
        alt="door"
        className="w-1/2 h-full object-cover hidden md:block"
        placeholder="blur"
        blurDataURL="/assets/images/loginBg2blur.jpg"
        sizes="100vw"
      />
    </div>
  );
};
