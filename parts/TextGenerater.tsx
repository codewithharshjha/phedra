"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Our Team Members and Company place ${<br/>}
 Where we Grind alot like asshole people`


export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
