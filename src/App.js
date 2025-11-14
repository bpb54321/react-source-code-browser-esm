import { useEffect, useState } from "react";
import { Counter } from "./Counter.js";

export default function App() {

  return (
   <>
    <h1>Counters</h1>
    <section>
      <Counter name="One" />
      <Counter name="Two" />
    </section>
   </>
  );
}
