'use client';

import styles from './marketing-navigation.module.css';
import { useIsLoggedIn } from '@/hooks/use-is-logged-in';
import { Dialog } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@taptree-co/ui';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

export default function MarketingNavigation({ children }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLoggedIn = useIsLoggedIn();

  return (
    <>
      <header className="fixed top-4 w-full z-10">
        <div className="max-w-xl mx-auto px-4">
          <nav
            className={cn(
              'flex items-center justify-between gap-x-6 rounded-full bg-white backdrop-blur-sm py-2 px-3',
              styles.navigation
            )}
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <svg viewBox="0 0 321 321" width={20} height={20} fill="none">
                  <path
                    fill="#000"
                    d="M274.378 238.093c-5.317-1.294-9.643-2.294-15.133-.863 4.97 10.285 16.184 15.791 19.854 27.397-6.04 4.376-11.93 9.021-18.212 13.056-3.82 2.453-7.051-.443-9.629-2.957-16.22-15.814-32.313-31.76-48.464-47.645-4.872-4.793-3.234-8.289.77-13.301 9.452-11.834 19.807-16.768 35.501-12.938 20.746 5.063 42.184 7.223 63.11 11.646 12.161 2.57 12.144 5.498 4.462 15.158-8.402 10.564-18.83 13.018-32.259 10.447ZM256.64 122.137c16.457-11.519 31.325-23.9429 48.749-32.2715 18.235 28.4345-6.623 37.8945-24.382 53.5475 11.681 0 19.657-.317 27.597.09 7.856.403 12.585 8.04 11.212 16.275-1.202 7.205 1.862 13.824-11.702 13.54-23.025-.482-46.038 1.936-69.101.256-6.983-.508-9.661-3.031-10.418-10.17-1.456-13.748 1.684-24.56 14.544-31.554 4.581-2.492 8.564-6.082 13.501-9.713ZM166.97 319.516c-4.997.645-9.028.836-13.056 1.058-8.656.476-12.677-3.687-12.659-12.275.048-22.641.079-45.284-.083-67.925-.053-7.372 3.462-9.148 10.419-9.853 14.259-1.446 24.321 2.64 32.304 15.329 10.956 17.413 23.976 33.513 35.644 50.497 8.06 11.733 5.621 15.677-8.817 17.241-9.764 1.058-17.229-1.333-22.714-10.079-4.035-6.435-9.22-12.148-14.488-18.952-4.697 11.776 2.206 24.401-6.55 34.959ZM261.404 75.9306c-12.074 12.0203-23.605 23.363-34.994 34.8474-5.405 5.451-8.993 5.972-15.884.148-12.089-10.217-15.184-20.9447-11.443-36.0537 4.16-16.8019 5.799-34.2144 8.984-51.2776 1.123-6.0142 1.372-14.55294 10.861-12.765 8.767 1.6517 17.614 4.7972 18.139 16.2726.44 9.6238-3.744 18.9258-2.054 30.2879 6.363-5.6708 11.961-10.6758 17.578-15.6603 4.803-4.263 18.153-5.6158 21.876 2.0378 2.786 5.7285 4.506 4.0077 3.786 10.9767-.76 7.3672-8.053 11.7168-12.846 17.108-1.073 1.2073-2.265 2.3089-4.003 4.0782ZM67.9827 225.02c9.0189-8.653 17.4275-16.701 26.1004-25.003 14.8409 11.361 26.0949 21.912 19.9789 42.728-4.857 16.53-5.55 34.244-8.954 51.26-1.082 5.413-.239 15.128-10.4942 12.598-8.7499-2.158-18.8278-4.141-18.8279-16.881-.0001-8.716 4.3381-17.241 1.1824-26.827-9.6432 3.644-14.2525 17.084-24.9745 14.97-6.6682-1.316-12.1598-8.596-19.1925-13.974 9.8794-15.239 23.1016-25.999 35.1814-38.871ZM9.82011 222.99c-17.3096-24.272 6.51729-33.41 24.18899-46.337-8.0677-1.297-16.137-2.973-20.6931-2.943-9.50487.061-14.70859-1.321-12.991193-13.621C2.4411 144.932 2.23828 143.294 17.8476 143.054c17.7949-.274 35.6058.287 53.3939-.156 10.0974-.251 12.6486 3.984 13.3158 13.695.9123 13.279-3.2979 21.953-14.4876 29.145-15.969 10.264-30.9521 22.053-46.5388 32.928-3.8039 2.654-7.5104 6.522-13.71079 4.324ZM140.611 29.1981c.355-5.9558.837-11.2154.564-16.4356-.483-9.22454 3.156-12.864232 12.756-12.7603027C170.95.186258 171.518.0563117 171.684 17.4964c.186 19.3659-.102 38.7365.119 58.1016.083 7.257-1.717 9.8587-10.097 10.7627-16.223 1.7497-26.351-4.2449-34.718-17.5995-9.621-15.3567-21.158-29.5-31.2331-44.5905-6.1814-9.2582-4.0884-11.3508 6.5581-14.63792 12.713-3.92508 20.564.75942 27.494 10.71012 2.66 3.8201 4.034 9.8248 10.804 8.9552ZM66.5748 48.1218c14.1484 13.9315 27.5747 27.4046 41.1922 40.6815 5.513 5.3747 5.941 8.5622.303 15.6887-10.8346 13.693-22.789 14.785-38.2272 11.101-16.0584-3.833-32.7064-5.13-48.9356-8.348-5.5757-1.105-14.44328.213-14.31874-9.3687.12839-9.871 10.74244-20.4889 19.36684-19.8094 8.7969.6931 17.5302 2.1935 27.269 3.4683-2.223-9.7435-14.4668-13.2569-15.7476-24.5844 5.4968-5.2732 11.9725-22.0953 29.0981-8.829Z"
                  />
                </svg>

                <span className="font-bold text-sm">Linky</span>
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end gap-x-1">
              <Button asChild variant="ghost" className="hidden sm:flex">
                <Link href="/i/pricing">Pricing</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="hidden sm:flex">
                    Resources <ChevronDownIcon className="w-5 h-5 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-96 rounded-2xl">
                  <DropdownMenuItem asChild className="items-start rounded-2xl">
                    <Link
                      href="/i/explore"
                      className="grid grid-cols-[40px_1fr] items-start"
                    >
                      <PhotoIcon className="w-5 h-5 mt-1" />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold font-serf">
                          Explore
                        </span>
                        <span className="text-sm text-black/60">
                          Some of the best link-in-bio pages created by the
                          Linky community.
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="items-start rounded-2xl">
                    <Link
                      href="/i/blog"
                      className="grid grid-cols-[40px_1fr] items-start"
                    >
                      <BookOpenIcon className="w-5 h-5 mt-1" />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold font-serf">
                          Blog
                        </span>
                        <span className="text-sm text-black/60">
                          Product updates, tutorials, and other helpful content
                          from the Linky team.
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="items-start rounded-2xl">
                    <Link
                      href="/i/learn"
                      className="grid grid-cols-[40px_1fr] items-start"
                    >
                      <AcademicCapIcon className="w-5 h-5 mt-1" />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold font-serf">
                          Learn
                        </span>
                        <span className="text-sm text-black/60">
                          Common questions and answers about Linky and
                          link-in-bio.
                        </span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {isLoggedIn ? (
                <Button asChild variant="ghost" className="hidden sm:flex">
                  <a href="/edit">Dashboard →</a>
                </Button>
              ) : (
                children
              )}
              <button
                type="button"
                className="-m-2.5 inline-flex sm:hidden items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-3">
              <Link
                href="/"
                className="-m-1.5 p-1.5 flex items-center gap-2 flex-1"
              >
                <svg viewBox="0 0 321 321" width={20} height={20} fill="none">
                  <path
                    fill="#000"
                    d="M274.378 238.093c-5.317-1.294-9.643-2.294-15.133-.863 4.97 10.285 16.184 15.791 19.854 27.397-6.04 4.376-11.93 9.021-18.212 13.056-3.82 2.453-7.051-.443-9.629-2.957-16.22-15.814-32.313-31.76-48.464-47.645-4.872-4.793-3.234-8.289.77-13.301 9.452-11.834 19.807-16.768 35.501-12.938 20.746 5.063 42.184 7.223 63.11 11.646 12.161 2.57 12.144 5.498 4.462 15.158-8.402 10.564-18.83 13.018-32.259 10.447ZM256.64 122.137c16.457-11.519 31.325-23.9429 48.749-32.2715 18.235 28.4345-6.623 37.8945-24.382 53.5475 11.681 0 19.657-.317 27.597.09 7.856.403 12.585 8.04 11.212 16.275-1.202 7.205 1.862 13.824-11.702 13.54-23.025-.482-46.038 1.936-69.101.256-6.983-.508-9.661-3.031-10.418-10.17-1.456-13.748 1.684-24.56 14.544-31.554 4.581-2.492 8.564-6.082 13.501-9.713ZM166.97 319.516c-4.997.645-9.028.836-13.056 1.058-8.656.476-12.677-3.687-12.659-12.275.048-22.641.079-45.284-.083-67.925-.053-7.372 3.462-9.148 10.419-9.853 14.259-1.446 24.321 2.64 32.304 15.329 10.956 17.413 23.976 33.513 35.644 50.497 8.06 11.733 5.621 15.677-8.817 17.241-9.764 1.058-17.229-1.333-22.714-10.079-4.035-6.435-9.22-12.148-14.488-18.952-4.697 11.776 2.206 24.401-6.55 34.959ZM261.404 75.9306c-12.074 12.0203-23.605 23.363-34.994 34.8474-5.405 5.451-8.993 5.972-15.884.148-12.089-10.217-15.184-20.9447-11.443-36.0537 4.16-16.8019 5.799-34.2144 8.984-51.2776 1.123-6.0142 1.372-14.55294 10.861-12.765 8.767 1.6517 17.614 4.7972 18.139 16.2726.44 9.6238-3.744 18.9258-2.054 30.2879 6.363-5.6708 11.961-10.6758 17.578-15.6603 4.803-4.263 18.153-5.6158 21.876 2.0378 2.786 5.7285 4.506 4.0077 3.786 10.9767-.76 7.3672-8.053 11.7168-12.846 17.108-1.073 1.2073-2.265 2.3089-4.003 4.0782ZM67.9827 225.02c9.0189-8.653 17.4275-16.701 26.1004-25.003 14.8409 11.361 26.0949 21.912 19.9789 42.728-4.857 16.53-5.55 34.244-8.954 51.26-1.082 5.413-.239 15.128-10.4942 12.598-8.7499-2.158-18.8278-4.141-18.8279-16.881-.0001-8.716 4.3381-17.241 1.1824-26.827-9.6432 3.644-14.2525 17.084-24.9745 14.97-6.6682-1.316-12.1598-8.596-19.1925-13.974 9.8794-15.239 23.1016-25.999 35.1814-38.871ZM9.82011 222.99c-17.3096-24.272 6.51729-33.41 24.18899-46.337-8.0677-1.297-16.137-2.973-20.6931-2.943-9.50487.061-14.70859-1.321-12.991193-13.621C2.4411 144.932 2.23828 143.294 17.8476 143.054c17.7949-.274 35.6058.287 53.3939-.156 10.0974-.251 12.6486 3.984 13.3158 13.695.9123 13.279-3.2979 21.953-14.4876 29.145-15.969 10.264-30.9521 22.053-46.5388 32.928-3.8039 2.654-7.5104 6.522-13.71079 4.324ZM140.611 29.1981c.355-5.9558.837-11.2154.564-16.4356-.483-9.22454 3.156-12.864232 12.756-12.7603027C170.95.186258 171.518.0563117 171.684 17.4964c.186 19.3659-.102 38.7365.119 58.1016.083 7.257-1.717 9.8587-10.097 10.7627-16.223 1.7497-26.351-4.2449-34.718-17.5995-9.621-15.3567-21.158-29.5-31.2331-44.5905-6.1814-9.2582-4.0884-11.3508 6.5581-14.63792 12.713-3.92508 20.564.75942 27.494 10.71012 2.66 3.8201 4.034 9.8248 10.804 8.9552ZM66.5748 48.1218c14.1484 13.9315 27.5747 27.4046 41.1922 40.6815 5.513 5.3747 5.941 8.5622.303 15.6887-10.8346 13.693-22.789 14.785-38.2272 11.101-16.0584-3.833-32.7064-5.13-48.9356-8.348-5.5757-1.105-14.44328.213-14.31874-9.3687.12839-9.871 10.74244-20.4889 19.36684-19.8094 8.7969.6931 17.5302 2.1935 27.269 3.4683-2.223-9.7435-14.4668-13.2569-15.7476-24.5844 5.4968-5.2732 11.9725-22.0953 29.0981-8.829Z"
                  />
                </svg>
                <span className="font-medium">Linky</span>
              </Link>
              {children}

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  <Link
                    href="/i/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/i/explore"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/i/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/i/learn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Learn
                  </Link>
                  <Link
                    href="https://x.com/taptree-co"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Twitter / X
                  </Link>
                  <Link
                    href="https://github.com/taptree-co/linky"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    View Source on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
