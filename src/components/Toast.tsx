"use client";
import { useEffect, useRef, useState } from "react";
import { Tick } from "./Icons";
export default function Toast() {
  const [msg, setMsg] = useState(""); const [show, setShow] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    const h = (e: Event) => { setMsg((e as CustomEvent<string>).detail); setShow(true); clearTimeout(t.current); t.current = setTimeout(() => setShow(false), 3800); };
    window.addEventListener("app:toast", h); return () => window.removeEventListener("app:toast", h);
  }, []);
  return <div className={`toast ${show ? "show" : ""}`} role="status"><i><Tick /></i><span>{msg}</span></div>;
}
