'use client'

import React, { MouseEvent, useRef, useState } from "react"

const time = 70
const interval = 10
const totalLength = 400
const length = (totalLength * interval) / time

export default function SideScroller({ children }: { children: React.ReactNode }) {
  const self = useRef({ current: { scrollLeft: 0 } } as unknown as HTMLDivElement);// force type because there's no way this can go
  const [down, setDown] = useState(false);
  const [initialScroll, setInitialScroll] = useState(0);
  const [initialX, setInitialX] = useState(0);

  function mouseDown({ pageX }: MouseEvent) {
    setInitialScroll(self.current.scrollLeft);
    setInitialX(pageX);
    setDown(true);
  }

  function mouseMove(e: MouseEvent) {
    if (!down) return;
    e.preventDefault();
    self.current.scrollLeft = initialScroll - (e.pageX - initialX) * 2;
  }

  function stopScroll() {
    setDown(false)
  }

  function scroll(direction: 'R' | 'L') {
    const sign = direction == 'R' ? 1 : -1;
    const curr = self.current
    const intervalId = setInterval(() => curr.scrollLeft += length * sign, interval)
    setTimeout(() => {
      window.clearInterval(intervalId)
    }, time)
  }

  // TODO do a better css (i don't like doing css, don't know how sass works and this is a PoC thus i'm not doing it)
  return (
    <div style={{ display: 'flex', alignItems: 'center', }}>
      <button className="side-scroll-button" onClick={() => scroll("L")}>&lt;</button>
      <div
        ref={self}
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