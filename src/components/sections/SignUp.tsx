"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";

import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { useAuthStore } from "../../stores/auth";

export const SignUp = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const { registerUser, ApiState, error } = useAuthStore();

  const handleSubmit = (formData: { username: string; password: string }) => {
    registerUser(formData.username, formData.password);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden">
      <div
        style={{
          background:
            "linear-gradient(180deg,rgba(74, 177, 231, 0.89) 21%, rgba(204, 204, 204, 0.38) 59%, rgba(55, 108, 115, 1) 100%)",
        }}
        className="md:w-1/2 w-full h-full bg-sky-500 flex justify-center items-center"
      >
        <Card
          className={cn(
            "md:w-[60%] w-[90%] md:h-[40em] bg-white/75 h-[90%] backdrop-blur-2xl rounded-lg flex flex-col justify-center  items-start p-4"
          )}
        >
          <CardHeader className={cn("w-full")}>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              sign up and start planning your trips
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("w-full")}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => {
                  handleSubmit(data);
                })}
                className="w-full h-full "
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input placeholder="userName" {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel />
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant={ApiState === "loading" ? "secondary" : "outline"}
                >
                  {ApiState === "loading" ? (
                    <Image
                      src={"/assets/icons/load.svg"}
                      alt="loading"
                      className="animate-spin"
                      width={20}
                      height={20}
                    />
                  ) : (
                    "submit"
                  )}{" "}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <Link href={"/login"}>Login</Link>
            {error && <p className="text-red-500">{error}</p>}
          </CardFooter>
        </Card>
      </div>
      <Image
        src={"/assets/images/loginBg2.jpg"}
        width={1607}
        height={2159}
        alt="door"
        className="w-1/2 h-full object-cover hidden md:block"
        placeholder="blur"
        blurDataURL="/assets/images/mapblur.jpg"
        sizes="100vw"
      />
    </div>
  );
};
