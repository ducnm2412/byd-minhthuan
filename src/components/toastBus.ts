"use client";
import { useEffect } from "react";

export function toast(msg: string) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app:toast", { detail: msg }));
}
export function validPhone(v: string) { return /^(\+84|0)\d{9,10}$/.test(v.replace(/[\s.]/g, "")); }

export type SelectTarget = "testdrive" | "quote" | "compareA";
export function selectModel(target: SelectTarget, id: string) {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("app:select", { detail: { target, id } }));
}
export function useSelectListener(target: SelectTarget, cb: (id: string) => void) {
  useEffect(() => {
    const h = (e: Event) => { const d = (e as CustomEvent<{ target: SelectTarget; id: string }>).detail; if (d.target === target) cb(d.id); };
    window.addEventListener("app:select", h); return () => window.removeEventListener("app:select", h);
  }, [target, cb]);
}

/** Đọc ?xe=<id> trên URL một lần khi mount, để trang con chọn sẵn dòng xe. */
export function useQueryModel(cb: (id: string) => void) {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("xe");
    if (id) cb(id);
  }, [cb]);
}
