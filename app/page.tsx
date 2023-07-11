"use client";
import { Metadata } from "next";
import { FC, useState } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home page",
  description: "...",
};

export default function Home() {
  const [session, setSession] = useState(false);
  return session ? <User /> : <Guest />;
}

const Guest: FC = () => (
  <section className="container mx-auto text-center py-20">
    <h3 className="text-4xl font-bold">Guest Homepage</h3>

    <div className="flex justify-center">
      <Link
        href="/login"
        className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-500"
      >
        Sign In
      </Link>
    </div>
  </section>
);

const User: FC = () => (
  <section className="container mx-auto text-center py-20">
    <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

    <div className="details">
      <h5>Unknown</h5>
    </div>

    <div className="flex justify-center">
      <button className="mx-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">
        Sign out
      </button>
    </div>

    <div className="flex justify-center">
      <Link
        href="/profile"
        className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-500"
      >
        Profile
      </Link>
    </div>
  </section>
);
