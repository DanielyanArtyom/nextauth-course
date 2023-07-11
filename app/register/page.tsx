"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Register",
  description: "...",
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setCShowPassword] = useState(false);

  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          repellendus!
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className={styles.input_group}>
          <input
            type="text"
            name="name"
            placeholder="User name"
            className={styles.input_text}
          />
          <span className="icon flex items-center px-4">
            <HiOutlineUser size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input_text}
          />
          <span className="icon flex items-center px-4">
            <HiAtSymbol size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={showPassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            type={showCPassword ? "password" : "text"}
            name="confirm_password"
            placeholder="Confirm Password"
            className={styles.input_text}
          />
          <span
            className="icon flex items-center px-4"
            onClick={() => setCShowPassword((prev) => !prev)}
          >
            <HiFingerPrint size={25} />
          </span>
        </div>

        <div className="input-button">
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>

      <p className="text-center text-gray-400">
        Have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default Register;
