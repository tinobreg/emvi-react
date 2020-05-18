import { useState, useEffect } from "react";
import { throttle } from 'lodash';

const getViewportScroll = () => {
  let e = window;
  return e.scrollTop;
}

const useViewportScroll = () => {
  const [viewportScroll, setViewportScroll] = useState(getViewportScroll());

  useEffect(() => {
    const setFromEvent = () => setViewportScroll(getViewportScroll());
    const throttleSet = throttle(setFromEvent, 100, {loading:true, trailing:true})

    window.addEventListener("scroll", throttleSet);

    return () => {
      window.removeEventListener("scroll", throttleSet);
    };
  }, []);

  return viewportScroll;
}

export default useViewportScroll