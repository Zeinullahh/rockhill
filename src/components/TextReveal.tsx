'use client';

import {useLayoutEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';

export default function TextReveal(){
 const marker=useRef<HTMLSpanElement>(null);
 const pathname=usePathname();

 useLayoutEffect(()=>{
  const main=marker.current?.closest('main');
  if(!main||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  const items=Array.from(main.querySelectorAll<HTMLElement>('section h1, section h2, section h3, section p, section .tag, section .fact-row, section .home-actions, section .villa-caption'));
  const observer=new IntersectionObserver(entries=>{
   for(const entry of entries){
    if(entry.isIntersecting){
     entry.target.classList.add('text-reveal-visible');
     observer.unobserve(entry.target);
    }
   }
  },{threshold:0.08,rootMargin:'0px 0px -24px 0px'});

  for(const item of items){
   item.classList.add('text-reveal');
   observer.observe(item);
  }

  return ()=>{
   observer.disconnect();
   for(const item of items)item.classList.remove('text-reveal','text-reveal-visible');
  };
 },[pathname]);

 return <span ref={marker} hidden/>;
}
