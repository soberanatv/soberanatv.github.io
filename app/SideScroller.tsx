'use client'

import { MouseEvent, useRef, ReactNode } from "react"

const totalTime = 100; // in milliseconds
const timeInterval = 10; // in milliseconds
const totalLength = 400; // in pixels
const length = totalLength * timeInterval / totalTime;

export default function SideScroller({ children }: { children: ReactNode }) {
  // ! Non-Null Assertion Operator been used | don't acess this ref before first render and don't forget to use it on a div
  const scrollDivRef = useRef<HTMLDivElement>(null!);
  // ! ---------------
  const mouseDownRef = useRef(false);
  const initialScrollRef = useRef(0);
  const initialXRef = useRef(0);
  const currIntervalIDRef = useRef<NodeJS.Timer>();

  function mouseDown({ pageX }: MouseEvent) {
    initialScrollRef.current = scrollDivRef.current.scrollLeft;
    initialXRef.current = pageX;
    mouseDownRef.current = true;
  }

  function mouseMove(e: MouseEvent) {
    if (!mouseDownRef.current) return;
    e.preventDefault();
    scrollDivRef.current.scrollLeft = initialScrollRef.current - (e.pageX - initialXRef.current) * 2;
  }

  function stopScroll() {
    mouseDownRef.current = false
  }

  function scroll(direction: 'R' | 'L') {
    window.clearInterval(currIntervalIDRef.current)
    const sign = direction == 'R' ? 1 : -1;
    const curr = scrollDivRef.current
    const intervalId = setInterval(() => curr.scrollLeft += length * sign, timeInterval)
    currIntervalIDRef.current = intervalId

    setTimeout(() => window.clearInterval(intervalId), totalTime)
  }

  // TODO do a better css (i don't like doing css, don't know how sass works and this is a PoC thus i'm not doing it)
  return (
    <div style={{ display: 'flex', alignItems: 'center', }}>
      <button className="side-scroll-button" onClick={() => scroll("L")}>&lt;</button>
      <div
        ref={scrollDivRef}
        className="side-scroller"
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseLeave={stopScroll}
        onMouseUp={stopScroll}
      >
        {children}
      </div>
      <button className="side-scroll-button" onClick={() => scroll("R")}>&gt;</button>
    </div>
  )
}