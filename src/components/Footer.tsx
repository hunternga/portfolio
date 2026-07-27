// import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              Nagarathinam R
            </h2>

            <p className="text-gray-400 mt-2">
              Senior Software Engineer
            </p>

          </div>

          <div className="flex gap-6 mt-8 md:mt-0">

            <a href="#">
              {/* <Github /> */}
            </a>

            <a href="#">
              {/* <Linkedin /> */}
            </a>

            <a href="#">
              {/* <Mail /> */}
            </a>

          </div>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Nagarathinam R. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}