import { PerfumeCarousel } from "./_sections/_index";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex h-[800px] w-[1280px] items-center justify-center border-2">
        <h1>메인 상단 배너</h1>
      </section>
      <PerfumeCarousel />
      <section className="flex h-[800px] w-[1280px] items-center justify-center border-2">
        <h1>매거진 추천</h1>
      </section>
      <section className="flex h-[800px] w-[1280px] items-center justify-center border-2">
        <h1>브랜드 리스트</h1>
      </section>
    </main>
  );
}
