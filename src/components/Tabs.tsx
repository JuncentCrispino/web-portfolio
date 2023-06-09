import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface ITabProp {
  tabs: { name: string; content: React.ReactNode }[];
}
export default function Tabs(props: ITabProp) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-end text-center text-base font-medium">
        {props.tabs.map((tab, i) => (
          <li key={tab.name} className="ml-2">
            <button
              type="button"
              className={clsx(
                'inline-block rounded-t-lg p-2 text-sm md:px-5 md:py-2.5 md:text-base',
                activeTab === i ? 'bg-[#d0fafe]' : 'bg-gray-300 opacity-70',
              )}
              onClick={() => setActiveTab(() => i)}
            >
              <p className="opacity-70">{tab.name}</p>
            </button>
          </li>
        ))}
      </ul>
      {props.tabs.map((tab, i) => (
        <div key={tab.name} className={clsx(activeTab !== i && 'hidden')}>
          <div className="rounded-b-2xl rounded-tl-2xl bg-gradient-to-t from-blue-100 to-cyan-100 shadow-xl">
            <div className="flex h-[600px] flex-col p-5">
              <AnimatePresence>
                {i === activeTab && (
                  <motion.div
                    className="box-scroll grow overflow-y-auto rounded-lg bg-slate-300/50 p-5 text-gray-900/75"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tab.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
