import { motion } from 'framer-motion';

const publicProjects = [
  {
    href: 'https://asiafoodexpo.ph',
    img: '/images/asiafood.png',
  },
  {
    href: 'https://rocreative.studio/',
    img: '/images/roc.png',
  },
  {
    href: 'https://getlibre.org/',
    img: '/images/libre.png',
  },
  {
    href: 'https://www.wilsonworksph.com/',
    img: '/images/wilsonworks.png',
  },
];

const demoProjects = [
  {
    href: 'https://bookstore.centstudio.xyz/',
    img: '/images/store.png',
  },
  {
    href: 'https://course.centstudio.xyz/',
    img: '/images/booking-course.png',
  },
  {
    href: 'https://upbook.centapps.online/',
    img: '/images/upbook.png',
  },
  {
    href: 'https://invoice.centapps.online/',
    img: '/images/invoice.png',
  },
];
export default function Works() {
  return (
    <div>
      <h4 className="text-base font-semibold md:text-lg">Portfolio</h4>
      <br />
      <p className="font-semibold">Public projects I worked with</p>
      <br />
      <div className="grid gap-3 lg:grid-cols-3">
        {publicProjects.map((pr) => (
          <a key={pr.href} href={pr.href} target="_blank" rel="noreferrer">
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={pr.img}
              alt={pr.href}
              className="col-span-1 rounded-md shadow-md"
            />
          </a>
        ))}
      </div>
      <br />
      <p className="font-semibold">Demo Projects</p>
      <br />
      <div className="grid gap-3 lg:grid-cols-3">
        {demoProjects.map((pr) => (
          <a key={pr.href} href={pr.href} target="_blank" rel="noreferrer">
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={pr.img}
              alt={pr.href}
              className="col-span-1 rounded-md shadow-md"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
