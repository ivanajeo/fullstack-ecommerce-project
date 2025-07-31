"use client";

import React from 'react'

type SignUpProps = {
  action: (prevState: any, formData: FormData) => Promise<{message: string} | undefined>;
}

const SignUp = ({action}: SignUpProps) => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp