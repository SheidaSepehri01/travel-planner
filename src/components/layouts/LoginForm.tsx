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
import { useRouter } from "next/navigation";
import { ButtonStylish } from "../ui/ButtonStylish";

type propTypes = {
  ApiState: "loading" | "success" | "error" | "idle";
  loginUser: (username: string, password: string) => Promise<boolean>;
};
export const LoginForm = (props: propTypes) => {
  const { ApiState, loginUser } = props;

  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });
  const router = useRouter();
  const handleSubmit = async (formData: {
    username: string;
    password: string;
  }) => {
    const success = await loginUser(formData.username, formData.password);
    debugger;
    if (success) {
      router.push("/");
    }
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
        className="w-full h-full space-y-3"
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
        <div className="w-full h-max flex justify-end items-center">
          <ButtonStylish action={() => {}}>
            {ApiState === "loading" ? (
              <Image
                src={"/assets/icons/load.svg"}
                alt="loading"
                className="animate-spin"
                width={20}
                height={20}
              />
            ) : (
              "Login"
            )}{" "}
          </ButtonStylish>
        </div>
      </form>
    </Form>
  );
};
