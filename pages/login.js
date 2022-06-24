import React from "react";
import Head from "next/head";
import Link from "next/link";
import { siteName } from "../assets/variables";
import { LockClosedIcon } from "@heroicons/react/solid";
const singup = () => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Singup | {siteName}</title>
      </Head>
      <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-secondary-dark max-w-md w-full space-y-8 box-shadow p-12 rounded-xl">
          <div>
            <h1 className="mx-auto  text-4xl font-bold text-indigo-700 text-center">
              {siteName}
            </h1>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
              Or{" "}
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                <Link href="/singup">Sing Up</Link>
              </span>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full mb-3 px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-200 dark:bg-light-gray text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-gray-200 dark:bg-light-gray text-gray-900 dark:text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between flex-col sm:flex-row">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    Forgot your password?
                  </span>
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default singup;
