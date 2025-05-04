"use client";
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
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "../ui/button";

type propTypes = {
  ApiState: "loading" | "success" | "error" | "idle";
  registerUser: (username: string, password: string) => void;
};
export const SignUpForm = (props: propTypes) => {
  const { ApiState, registerUser } = props;
  const formSchema = z
    .object({
      username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
      }),
      confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });
  const handleSubmit = (formData: {
    username: string;
    password: string;
    confirmPassword: string;
  }) => {
    registerUser(formData.username, formData.password);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
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
                  placeholder="repeat your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel />
              <FormControl>
                <Input
                  placeholder="confirm password"
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
          className="w-full"
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
            "sign up"
          )}{" "}
        </Button>
      </form>
    </Form>
  );
};
