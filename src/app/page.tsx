import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

// kinde
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();

  if (await isAuthenticated()) {
    return redirect('/dashboard');
  }

  return (
    <div className="pt-20 sm:pt-22 pb-20 sm:pb-40 flex flex-col items-center gap-8 justify-center text-center">
      <div>
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Course Finder is public!
          </p>
        </div>
        <h1 className="max-w-3xl text-4xl font-bold md:text-6xl lg:text-6xl">
          Choose your{' '}
          <span className="bg-gradient-to-r from-primary to-blue-400 inline-block text-transparent bg-clip-text">
            next course
          </span>{' '}
          with confidence 🚀
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 dark:text-white sm:text-lg">
          Find the best courses to learn the latest technologies and skills. We
          have a wide range of courses from top universities and institutions
          around the world. Start learning today!
        </p>
      </div>

      {/* gradient */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11ren)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8 sm:mt-24">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/assets/dashboard-preview.jpg"
                  alt="product preview"
                  width={2368}
                  height={1452}
                  className="rounded-md bg-white p-2 sm:p-8 md:p-2 shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-13ren)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm-left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="mt-10 font-bold text-4xl text-gray-900 dark:text-white sm:text-5xl">
            Find your courses in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-white">
            We have a wide range of courses from top universities and
            institutions around the world. Start learning today!
          </p>
        </div>
      </div>

      {/* Steps */}
      <ol className="my-8 space-y-4 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 1</span>
            <span className="text-xl font-semibold">
              Sign up for an account
            </span>
            <span className="mt-2 text-zink-700">
              Either stanting out with a free plan or choose our{' '}
              <Link
                href="/pricing"
                className="text-blue-700 underline-offset-2"
              >
                pro plan
              </Link>
              {''}.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 2</span>
            <span className="text-xl font-semibold">Choose your courses</span>
            <span className="mt-2 text-zink-700">
              We&apos;ve got a wide range of courses
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-blue-600">Step 3</span>
            <span className="text-xl font-semibold">Start learning today</span>
            <span className="mt-2 text-zink-700">
              It&apos;s time to start learning and improve your skills - it only
              takes a few minutes to get started!
            </span>
          </div>
        </li>
      </ol>

      {/* Bottom image */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flow-root">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
              src="/assets/schedule.jpg"
              alt="Schedule view"
              width={2546}
              height={1488}
              className="rounded-md bg-white p-2 sm:p-8 md:p-2 shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
