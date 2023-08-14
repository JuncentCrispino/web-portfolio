import { GrReactjs } from 'react-icons/gr';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import { IoLogoNodejs } from 'react-icons/io';
import { MdOutlineWork, MdSchool } from 'react-icons/md';
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiAmazondynamodb,
  SiMysql,
} from 'react-icons/si';
import { TbBrandNextjs, TbLicense } from 'react-icons/tb';

const technologies = [
  {
    name: 'AWS',
    icon: <SiAmazonaws className="text-orange-500" />,
  },
  {
    name: 'Javascript',
    icon: <SiJavascript className="text-yellow-500" />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript className="text-sky-600" />,
  },
  {
    name: 'NodeJS',
    icon: <IoLogoNodejs className="text-green-500" />,
  },
  {
    name: 'ExpressJS',
    icon: <SiExpress className="text-lime-600" />,
  },
  {
    name: 'NestJS',
    icon: <SiNestjs className="text-red-500" />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    name: 'DynamoDB',
    icon: <SiAmazondynamodb className="text-blue-600" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-sky-600" />,
  },
  {
    name: 'ReactJS',
    icon: <GrReactjs className="text-blue-700" />,
  },
  {
    name: 'NextJS',
    icon: <TbBrandNextjs className="text-gray-800" />,
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql className="text-pink-600" />,
  },
  {
    name: 'Docker',
    icon: <SiDocker className="text-sky-600" />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 className="text-red-700" />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className="text-pink-500" />,
  },
  {
    name: 'MaterialUI',
    icon: <SiMui className="text-blue-900" />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="text-sky-500" />,
  },
];
export default function Resume() {
  function calculateYearMonthDifference(givenDate: Date): {
    years: number;
    months: number;
  } {
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMs = currentDate.getTime() - givenDate.getTime();

    // Convert milliseconds to years and months
    const years = Math.floor(differenceInMs / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (differenceInMs % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30),
    );

    return { years, months };
  }

  const { years, months } = calculateYearMonthDifference(
    new Date('2021-11-02'),
  );

  return (
    <div>
      <section className="flex items-center gap-2">
        <MdOutlineWork className="h-9 w-9 rounded-lg bg-white/80 p-2 text-cyan-600 shadow" />
        <p className="mt-2 text-left text-lg font-semibold">Experience</p>
      </section>
      <br />
      <ul
        className="grid grid-cols-1 gap-x-5 space-y-5 md:grid-cols-2
md:space-y-0"
      >
        <li className="col-span-1">
          <p className="text-[17px] font-medium">Bluehive Business Solutions</p>
          <p className="text-[15.5px]">Full Stack Web Developer</p>
          <p className="text-[13px]">
            November 2021 - Present ({years} year, {months} months)
          </p>
        </li>
        <li className="col-span-1">
          <p className="text-[17px] font-medium">
            Department of Public Works and Highways
          </p>
          <p className="text-[15.5px]">Civil Engineer</p>
          <p className="text-[13px]">
            March 2018 - October 2021 (3 years 8 months)
          </p>
        </li>
      </ul>
      <br className="block md:hidden" />
      <section className="flex items-center gap-2">
        <MdSchool className="h-9 w-9 rounded-lg bg-white/80 p-2 text-rose-600 shadow" />
        <p className="mt-2 text-left text-lg font-semibold">Education</p>
      </section>
      <br />
      <ul className="grid grid-cols-1 gap-x-5 space-y-5 md:grid-cols-2 md:space-y-0">
        <li className="col-span-1">
          <p className="text-[17px] font-medium">
            Northern Iloilo State University
          </p>
          <p className="text-[15px]">
            Bachelor&apos;s degree, Civil Engineering{' '}
            <b className="font-black">·</b> (2012 - 2017)
          </p>
        </li>
        <li className="col-span-1">
          <p className="text-[17px] font-medium">
            Zuitt - Coding Bootcamp Philippines
          </p>
          <p className="text-[15px]">
            Full-Stack Web Development Course, Information Technology{' '}
            <b className="font-black">·</b> (2021 - 2021)
          </p>
        </li>
      </ul>
      <br />
      <br className="block md:hidden" />
      <section className="flex items-center gap-2">
        <TbLicense className="h-9 w-9 rounded-lg bg-white/80 p-2 text-sky-600 shadow" />
        <p className="mt-2 text-left text-lg font-semibold">Credentials</p>
      </section>
      <br />
      <ul className="grid grid-cols-1">
        <li className="col-span-1">
          <p className="text-[17px] font-medium">Licensed Civil Engineer</p>
          <p className="text-[15px]">
            Philippine Professional Regulation Commission
            <b className="font-black"> ·</b> (2018)
          </p>
        </li>
      </ul>
      <br />
      <section className="flex items-center gap-2">
        <HiSquare3Stack3D className="h-9 w-9 rounded-lg bg-white/80 p-2 text-emerald-600 shadow" />
        <p className="mt-2 text-left text-lg font-semibold">Technologies</p>
      </section>
      <br />
      <ul className="flex flex-wrap items-center gap-3">
        {technologies.map((tech) => (
          <li
            key={tech.name}
            className="flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 font-medium text-gray-900/70 shadow"
          >
            {tech.icon} {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
