'use client';

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMdCalendar,
  IoMdCall,
  IoMdMail,
} from 'react-icons/io';
import { RiMapPin2Fill } from 'react-icons/ri';

export default function InfoCard() {
  return (
    <div className="relative mt-[200px] w-full rounded-2xl bg-gradient-to-t from-blue-100 to-cyan-100 shadow-xl md:mt-[100px]">
      <div className="absolute left-[50%] top-[-100px] translate-x-[-50%]">
        <img
          src="/images/id.jpg"
          alt="profile"
          className="aspect-square rounded-2xl object-cover shadow-md"
        />
      </div>
      <div className="h-28" />
      <div className="flex justify-center gap-2">
        <a href="https://www.linkedin.com/in/juncent-crispino-827040196/">
          <IoLogoLinkedin className="h-8 w-8 rounded-full bg-white/80 p-1 text-green-600 shadow" />
        </a>
        <a href="https://www.facebook.com/juncentofficial/">
          <IoLogoFacebook className="h-8 w-8 rounded-full bg-white/80 p-1 text-green-600 shadow" />
        </a>
        <a href="https://www.instagram.com/centy_j/">
          <IoLogoInstagram className="h-8 w-8 rounded-full bg-white/80 p-1 text-green-600 shadow" />
        </a>
      </div>
      <div className="p-5 pt-0 opacity-70">
        <p className="mt-2 text-center text-2xl font-semibold underline ">
          Juncent Crispino
        </p>
        <p className="mt-1 text-center text-sm font-semibold">
          Full-Stack Web Developer
        </p>

        <div className="h-4" />
        <div className="grid grid-cols-1 divide-y divide-gray-400 rounded-2xl bg-slate-300/50 p-5">
          <div className="flex items-center gap-x-3 pb-3 font-medium">
            <IoMdCall className="h-9 w-9 rounded-lg bg-white/80 p-2 text-red-600" />
            <section>
              <small>Phone</small>
              <br />
              <p className="text-sm md:text-base">+63 933 820 2743</p>
            </section>
          </div>
          <div className="flex items-center gap-x-3 py-3 font-medium">
            <IoMdMail className="h-9 w-9 rounded-lg bg-white/80 p-2 text-lime-600 shadow" />
            <section>
              <small>Email</small>
              <br />
              <p className="text-sm md:text-base">juncent.crispino@gmail.com</p>
            </section>
          </div>

          <div className="flex items-center gap-x-3 py-3 font-medium">
            <RiMapPin2Fill className="h-9 w-9 rounded-lg bg-white/80 p-2 text-sky-600 shadow" />
            <section>
              <small>Location</small>
              <br />
              <p className="text-sm md:text-base">Baliwag, Bulacan</p>
            </section>
          </div>
          <div className="flex items-center gap-x-3 pt-3 font-medium">
            <IoMdCalendar className="h-9 w-9 rounded-lg bg-white/80 p-2 text-purple-600 shadow" />
            <section>
              <small>Birthday</small>
              <br />
              <p className="text-sm md:text-base">October 28, 1994</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
