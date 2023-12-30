import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'

const SocialMediaLinks = () => {
  return (
    <div className="absolute  right-12 top-[60%] ">      
        <div className="before:absolute before:h-32 before:w-[2px] before:rounded-full before:bg-yellow-500 before:top-[-9rem] before:left-2/4 before:translate-x-[-50%]   after:absolute after:h-32 after:w-[2px] after:rounded-full after:bg-yellow-500 after:bottom-[-9rem] after:left-2/4 after:translate-x-[-50%]">
          <div className="flex flex-col gap-12">
            <Link href={""}>
              <FaGithub className="text-yellow-500 text-xl hover:text-white hover:translate-y-[-2px] cursor-pointer" />
            </Link>
            <Link href={""}>
              <FaLinkedin className="text-yellow-500 text-xl hover:text-white hover:translate-y-[-2px] cursor-pointer" />
            </Link>
            <Link href={""}>
              <FaTelegram className="text-yellow-500 text-xl hover:text-white hover:translate-y-[-2px] cursor-pointer" />
            </Link>
          </div>
      </div>
    </div>
  );
}

export default SocialMediaLinks