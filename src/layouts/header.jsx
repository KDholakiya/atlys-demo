import { useEffect } from "react";
import { ReactSVG } from "react-svg";
// import LogoSVG from ''

const Header = () => {
  useEffect(() => {
    console.log("HEADER RENDERED");
    return () => {
      console.log("HEADER DESTROYED");
    }
  });
  return (
    <div className="sticky top-0 z-[2000] flex flex-col bg-inherit md:relative">
      <nav className="container-fluid font-heading font-medium">
        <div className="px-4 py-2 sm:px-6 md:mx-12 lg:px-8 2xl:mx-32">
          <div className="flex h-10 w-full items-center justify-between gap-4 md:h-16">
            <div className="relative flex w-full items-center justify-between">
              <div className="flex flex-1 flex-row items-center gap-4">
                <a className="text-zinc-300" href="/en-IN">
                  <div className="flex flex-row items-center gap-2 ">
                    <ReactSVG src={'assets/svg/logo.svg'} />
                  </div>
                </a>
              </div>
              <div className="flex flex-1 items-center justify-end gap-4 text-primary"><a
                href="/en-IN/on-time-guaranteed">
                <div className="flex cursor-pointer items-center text-left text-xs font-semibold">
                  <div className="translate-x-0 opacity-100">
                    <span>
                      <ReactSVG src={'assets/svg/onTime.svg'} />
                    </span>
                  </div>
                  <div className="opacity-100">
                    <div className="ml-1 leading-tight underline">
                      <p>On Time</p>
                      <p className="-mt-0.5">Guaranteed</p>
                    </div>
                  </div>
                </div>
              </a>
                <div className="flex items-center justify-end justify-items-center space-x-4">
                  <div className="realtive">
                    <a aria-label="Login"
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-primary"
                      href="/en-IN/sign-in">
                      <ReactSVG src={'assets/svg/user.svg'} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;