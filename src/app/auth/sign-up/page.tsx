// server side page

import { getCurrentSession, loginUser, registerUser } from '@/actions/auth'
import { redirect } from 'next/navigation';
import React from 'react'
import SignUp from '@/components/auth/SignUp';
import { z } from 'zod';

const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
})

const SignUpPage = async () => {
  // if user has logged in, redirect to homepage
  const { user } = await getCurrentSession();

  if (user) {
    return redirect("/");
  }

  const action = async (prevState: any, formData: FormData) => {
    "use server";
    // validate the input fields
    const parsed = SignupSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
      return {
        message: "Invalid form data",
      };
    }

    // register the user
    const { email, password } = parsed.data;
    const { user, error } = await registerUser(email, password);

    if (error) {
      return { message: error };
    } else if (user) {
      await loginUser(email, password);
      return redirect("/"); // redirect to the homepage
    }
  }

  return <SignUp action={action} />
}

export default SignUpPage
