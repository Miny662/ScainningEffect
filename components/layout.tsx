'use client';

import NextLink from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const tags = [
  {
    name: '#WebGPU',
    href: 'https://tympanus.net/codrops/demos/?tag=webgpu',
  },
  {
    name: '#Three.js',
    href: 'https://tympanus.net/codrops/demos/?tag=three-js',
  },
  {
    name: '#TSL',
    href: 'https://tympanus.net/codrops/demos/?tag=tsl',
  },
];

const Link = ({
  href,
  target,
  className,
  children,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}) => {
  return (
    <NextLink
      target={target}
      className={`pointer-events-auto hover:underline ${className}`}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export const Layout = () => {
  const pathname = usePathname();

  return (
    <div
      data-layout
      className={
        'absolute inset-0 z-50 h-screen w-full pointer-events-none p-5 text-xs md:p-10 md:text-sm'
      }
    >
      <div className="grid h-full w-full grid-cols-6 grid-rows-6 uppercase">
        <div
          className="h-10 w-full"
          style={{
            gridColumn: '1/8',
          }}
        >
          <div className="flex items-center space-y-2 flex-col md:grid grid-cols-3">
            <Link target="_blank" href={'https://tympanus.net/codrops/demos/'}>
              ( All demos )
            </Link>

            <Link
              href="https://tympanus.net/codrops/?p=90674"
              className="md:text-center"
            >
              ( Article )
            </Link>

            <div className="md:justify-items-end">
              <div className="flex space-x-4">
                {[
                  {
                    href: '/effect1/',
                    name: 'Effect/1',
                  },
                  {
                    href: '/effect2/',
                    name: 'Effect/2',
                  },
                  {
                    href: '/effect3/',
                    name: 'Effect/3',
                  },
                ].map((item, index) => {
                  return (
                    <Link
                      className={pathname === item.href ? 'underline' : ''}
                      key={index}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-xs w-full sm:w-96 opacity-65 frame"
          style={{
            gridRow: '6/7',
            gridColumn: '1/8',
          }}
        ></div>

        <div
          className="flex flex-col"
          style={{
            gridRow: '7/8',
            gridColumn: '1/4',
          }}
        >
          <Link
            href={'https://github.com/d3adrabbit/ScanningEffectWithDepthMap'}
            target="_blank"
          >
            Github
          </Link>

          <div className="space-x-2">
            {tags.map((item, index) => {
              return (
                <Link href={item.href} target="_blank" key={index}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="flex flex-col justify-end"
          style={{
            gridRow: '7/8',
            gridColumn: '7/8',
          }}
        >
          <Link href={'https://x.com/deadrabbbbit'} target="_blank">
            Made by deadrabbbbit
          </Link>
        </div>
      </div>
    </div>
  );
};
