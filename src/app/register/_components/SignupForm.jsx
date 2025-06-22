"use client";
import { useDispatch } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "@/store/slices/authSlice";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const formSchema = z
  .object({
    username: z.string().min(2, "Username is required"),
    email: z.string().email("Email must be a valid address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[a-z]/, "Password must include at least one lowercase letter")
      .regex(/[0-9]/, "Password must include at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default function SignupForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    dispatch(loginStart());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(userCredential.user, {
        displayName: values.username,
      });

      const user = userCredential.user;
      const safeUser = {
        uid: user.uid,
        displayName: values.username,
        email: user.email,
        photoURL: user.photoURL,
      };

      dispatch(loginSuccess(safeUser));
      router.push("/blogs");
    } catch (error) {
      dispatch(loginFailure(error.message));
      form.setError("email", { message: "Signup failed. " + error.message });
      console.error("Signup failed:", error.message);
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    dispatch(loginStart());

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const safeUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      dispatch(loginSuccess(safeUser));
      router.push("/blogs");
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.error("Google sign-in failed:", error.message);
    }
  };

  return (
    <div className="h-full flex justify-end items-center" data-aos="fade-right">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-lg"
        >
          <h1 className="text-4xl font-bold text-primary pb-3">
            Welcome to Yatraa!
          </h1>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-light text-lg">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    {...field}
                    className="rounded-md py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-light text-lg">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Eg. john@example.com"
                    {...field}
                    className="rounded-md py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-light text-lg">Password</FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <button
                      type="button"
                      className="absolute right-2.5 top-2.5"
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                    >
                      {isPasswordVisible ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      {...field}
                      className="rounded-md"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" font-light text-lg">
                  Verify Password
                </FormLabel>
                <FormControl>
                  <div className="relative w-full">
                    <button
                      type="button"
                      className="absolute right-2.5 top-2.5"
                      onClick={() => setIsPasswordVisible((prev) => !prev)}
                    >
                      {isPasswordVisible ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                    <Input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      {...field}
                      className="rounded-md"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full flex flex-col items-end gap-5 ">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
            <Button className="bg-primary rounded-md w-full" type="submit">
              Continue
            </Button>
          </div>

          <div className="w-full flex justify-center text-sm">
            <p>Already have an account?</p>
            <a
              href="/login"
              className="text-sm text-primary hover:underline ml-1"
            >
              Login
            </a>
          </div>

          <p className="text-primary text-xl text-center before:content-['-'] after:content-['-'] before:mr-2 after:ml-2">
            OR
          </p>
          <Button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-gray-100 text-black text-lg font-light flex items-center gap-2 justify-center hover:bg-primary/10 crusor-pointer"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </Button>
        </form>
      </Form>
    </div>
  );
}
