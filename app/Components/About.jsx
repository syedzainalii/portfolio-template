import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = ({ isDarkMode }) => {
  return (
    <div 
      id='about' 
      className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20 overflow-x-hidden'
    >
      <h4 className='text-center mb-1 text-xl font-Ovo'>
        Introduction
      </h4>

      <h2 className='text-center text-4xl sm:text-5xl font-Ovo'>
        About Me
      </h2>

      <div className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 my-12 lg:my-20'>
        
        {/* User Image Wrapper */}
        <div className='w-56 sm:w-80 rounded-3xl shrink-0'>
          <Image 
            src={assets.user_image} 
            alt="user" 
            className='w-full rounded-3xl shadow-lg' 
          />
        </div>

        {/* Text Content Area */}
        <div className='flex-1'>
          <div className='mb-6 font-Ovo text-gray-700 dark:text-white/90 text-base sm:text-lg leading-relaxed text-left'>
            <p className='mb-4'>
              I'm a student of University of Pakistan, pursuing Bachelor a Degree in Bachlor Sciences, 
              with training in Webdesigning. Next.js is essentially the "power suit" for React, taking a library that was originally 
              just about UI components and turning it into a full-scale engine for the web. Created by Guillermo Rauch and the 
              team at Vercel (formerly Zeit) in 2016, it solved the "blank page" problem of standard React apps, where users had 
              to wait for a massive chunk of JavaScript to load before seeing anything. By introducing Server-Side Rendering (SSR) 
              and Static Site Generation (SSG), Next.js allows the server to do the heavy lifting, handing the browser a fully 
              formed HTML page so your site feels instant and search engines don't have to squint to see your content.
            </p>
            <p className='mb-4'>
              In 2025, the framework has evolved into a bit of a Swiss Army knife with the stability of Next.js 15. 
              It’s moved away from the old-school pages folder toward the App Router architecture, which uses React 
              Server Components to keep your bundles lean by only sending JavaScript to the client when it's actually 
              needed for interactivity. It also includes Turbopack, a Rust-based successor to Webpack that makes local 
              development so fast it feels like you're editing code in real-time. Whether you’re using Incremental 
              Static Regeneration (ISR) to update a blog post without a full rebuild or Middleware to handle 
              authentication at the "edge," the framework tries to automate the boring stuff like routing, image 
              optimization, and font hosting.
            </p>

          </div>

          <ul className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 w-full'> 
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className='border border-gray-400 dark:border-gray-600 rounded-2xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:shadow-white transition-all duration-300 dark:hover:bg-darkHover/50 hover:-translate-y-1'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2'/>
                <h3 className='my-3 font-semibold text-gray-800 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed dark:text-white/70'>{description}</p> 
              </li>
            ))}
          </ul>

          <h4 className='mt-10 mb-4 text-gray-700 font-Ovo dark:text-white/80'>
            Tools I use
          </h4>

          <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li 
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-lightHover hover:shadow-black transition-all duration-300 dark:hover:shadow-white dark:hover:bg-darkHover/50 hover:scale-110'
              >
                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About