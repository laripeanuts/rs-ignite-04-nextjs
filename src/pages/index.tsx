import { Roboto } from "@next/font/google";

const customFont = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className={customFont.className}>
      <div>Hello</div>
    </main>
  );
}
