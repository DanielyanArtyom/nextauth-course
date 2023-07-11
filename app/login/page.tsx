"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Login",
  description: "...",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-3/4 mx-auto flex flex-col gap-10">
      <div className="title">
        <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        <p className="w-3/4 mx-auto text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          repellendus!
        </p>
      </div>

      <form className="flex flex-col gap-5">
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

        <div className="input-button">
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
        <div className="input-button">
          <button className={styles.button_custom} type="button">
            Sign In With google
            <Image
              src="/assets/google.svg"
              width={20}
              height={20}
              alt="google svg"
            />
          </button>
        </div>
        <div className="input-button">
          <button className={styles.button_custom} type="button">
            Sign In With Github
            <Image
              src="/assets/github.svg"
              width={20}
              height={20}
              alt="github svg"
            />
          </button>
        </div>
      </form>

      <p className="text-center text-gray-400">
        don't have an account yet?{" "}
        <Link href="/register" className="text-blue-500">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Login;
