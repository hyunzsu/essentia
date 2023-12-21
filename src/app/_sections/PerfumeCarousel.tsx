import React from "react";

export default function PerfumeCarousel() {
  return (
    <section className="flex h-[800px] w-[1280px] items-center justify-center border-2">
      {/* 1. 섹션 제목 */}
      <div>
        <p className="mb-[24px] cursor-default text-[60px] font-medium">
          가을에 어울리는 향수 기획전
        </p>
        <p className="mb-[40px] cursor-default text-[18px] font-medium">
          찬바람 불기 시작할 때! 가을향수 구매타이밍은 지금!
        </p>
        <button
          type="button"
          className="w-[150px] border-2 border-primary px-[24px] py-[12px] hover:bg-secondary"
        >
          View All
        </button>
      </div>
    </section>
  );
}
