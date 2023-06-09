'use client';

import { Toaster } from 'react-hot-toast';

import InfoCard from './components/InfoCard';
import Tabs from './components/Tabs';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Resume from './views/Resume';
import Works from './views/Works';

const tabs = [
  { name: 'About Me', content: <AboutMe /> },
  { name: 'Resume', content: <Resume /> },
  { name: 'Works', content: <Works /> },
  { name: 'Contact', content: <Contact /> },
];

export default function Page() {
  return (
    <main className="min-h-screen ">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 15000 }}
      />
      <div className="mx-auto max-w-screen-xl">
        <div className="grid min-h-screen grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-0">
          <section className="col-span-1">
            <div className="mx-auto grid min-h-full max-w-[90%] place-items-center">
              <InfoCard />
            </div>
          </section>
          <section className="col-span-2">
            <div className="mx-auto mb-12 grid min-h-full max-w-[90%] place-items-center md:mb-0">
              <div className="w-full">
                <Tabs tabs={tabs} />
                <div />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
