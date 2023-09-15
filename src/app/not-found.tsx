import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your pages not Found</h2>
        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
