import React from "react";
import ListUser from "../components/ListUser";
import { Suspense } from "react";
import Link from "next/link";

const Usuarios = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 className="text-4xl font-bold">Database</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/users/create" className="btn btn-primary">
            Add New User
          </Link>
        </div>
        <Suspense fallback="Loading...">
          <ListUser />
        </Suspense>
      </div>
    </div>
  );
};

export default Usuarios;
