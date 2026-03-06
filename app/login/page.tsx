"use client";

import { useState } from "react";
import { LoginSchema, LoginType } from "../schema/auth.schema";

export default function Login() {
    // 1. Setup states for our form inputs and validation errors
    const [formData, setFormData] = useState<LoginType>({email: "", password: ""});
    const [errors, setErrors] = useState<{email?: string; password?: string;}>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })

        if (errors[e.target.id as keyof typeof errors]) {
            setErrors({ ...errors, [e.target.id]: undefined})
        }
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = LoginSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setErrors({
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0]
            });
            return;
        }

        setErrors({});
        console.log("valid", result.data);
    }

    return (
        <main className="w-full min-h-screen bg-slate-950 flex items-center justify-center">
            <section className="sm:w-lg bg-slate-100 rounded-lg p-8">
                {/* 6. Attach the handleSubmit function to the form */}
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-medium pt-5">Login</h1>

                    <div className="pt-5">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className={`w-full border rounded-md p-2 outline-none ${errors.email ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'}`}
                        />
                        {/* 7. Display the email error message if it exists */}
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="pt-5">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={`w-full border rounded-md p-2 outline-none ${errors.password ? 'border-red-500' : 'border-slate-300 focus:border-blue-500'}`}
                        />
                        {/* 8. Display the password error message if it exists */}
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="mt-10 text-center w-full bg-blue-950 py-3 text-white rounded-md hover:bg-blue-900 transition-colors">
                        <button type="submit" className="w-full">SIGN IN</button>
                    </div>

                    <div className="mt-10 mb-5 text-center text-sm">
                        <p className="pb-2">Forgot Username/Password?</p>
                        <p>Don&apos;t have an account? <a href="#" className="text-blue-600 font-medium">Sign Up</a></p>
                    </div>
                </form>
            </section>
        </main>
    );
}