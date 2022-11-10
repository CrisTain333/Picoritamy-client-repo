import React from "react";
import { FaEnvira } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div>
      {" "}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Blogs
          </h2>
        </div>
        <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaEnvira className="text-2xl text-green-500" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Difference between SQL and NoSQL ?
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.Remember that SQL dialects share many properties
                though they interface with distinct databases. Flavors of NoSQL
                vary far more across their attendant systems, so comparison can
                be more useful between multiple non-relational technologies vs.
                SQL generally.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaEnvira className="text-2xl text-green-500" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                What is JWT, and how does it work?
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                JWT Means (JSON Web Token)? JSON Web Token (JWT) is an open
                standard (RFC 7519) for securely transmitting information
                between parties as JSON object.It is compact, readable and
                digitally signed using a private key/ or a public key pair by
                the Identity Provider(IdP). So the integrity and authenticity of
                the token can be verified by other parties involved.The purpose
                of using JWT is not to hide data but to ensure the authenticity
                of the data. JWT is signed and encoded, not encrypted.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaEnvira className="text-2xl text-green-500" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                What is the difference between javascript and NodeJS?
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed.
                Node.js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language. It requires
                libraries that can be conveniently accessed from JavaScript
                programming to be more helpful.Node.js can now operate
                non-blocking software tasks out of any JavaScript programming.
                It contains no OS-specific constants. Node.js establishes a
                strong relationship with the system files, allowing companies to
                read and write to the hard drive.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <FaEnvira className="text-2xl text-green-500" />
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                How does NodeJS handle multiple requests at the same time?
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                The entire NodeJS architecture is not single-threaded. NodeJS receives multiple
                client requests and places them into EventQueue. NodeJS is built
                with the concept of event-driven architecture. NodeJS has its
                own EventLoop which is an infinite loop that receives requests
                and processes them. EventLoop is the listener for the
                EventQueue. If NodeJS can process the request without I/O
                blocking then the event loop would itself process the request
                and sends the response back to the client by itself. But, it is
                possible to process multiple requests parallelly using the
                NodeJS cluster module or worker_threads module.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
