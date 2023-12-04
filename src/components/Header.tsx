"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      role="banner"
      className="h-[80px] border-b border-primary pl-[60px] pr-[60px]"
    >
      <nav
        aria-label="메인 네비게이션"
        className="flex items-center justify-between"
      >
        <Link
          href="/"
          className="flex h-[80px] w-[140px] items-center justify-center"
        >
          <Image
            src="/Logo.png"
            alt="홈페이지로 이동하는 로고 이미지"
            width={120}
            height={55}
          />
        </Link>
        <ul className="text-primary-500 flex w-[500px] justify-between text-16 ">
          <li>
            <Link href="/about" className="" accessKey="1">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/best" className="text-primary-500" accessKey="2">
              BEST
            </Link>
          </li>
          <li>
            <Link href="/brand" className="text-primary-500" accessKey="3">
              BRAND
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-primary-500" accessKey="4">
              WOMEN
            </Link>
          </li>
          <li>
            <Link href="/men" className="text-primary-500" accessKey="4">
              MEN
            </Link>
          </li>
          <li>
            <Link href="/magazine" className="text-primary-500" accessKey="4">
              MAGAZINE
            </Link>
          </li>
        </ul>

        <div className="flex h-[80px] w-[280px] justify-between pl-[80px] ">
          <button
            aria-label="검색창 열기"
            onClick={() => {}}
            className="bg-center bg-no-repeat"
          >
            <Image
              src="/search-icon.svg"
              alt="검색 아이콘"
              width={24}
              height={24}
            />
          </button>
          <button
            aria-label="마이페이지로 이동하기"
            onClick={() => {}}
            className="bg-center bg-no-repeat"
          >
            <Image
              src="/user-icon.svg"
              alt="유저 아이콘"
              width={24}
              height={24}
            />
          </button>
          <button
            aria-label="로그인 또는 로그아웃하기"
            onClick={() => {}}
            className="bg-center bg-no-repeat"
          >
            <Image
              src="/signin-icon.svg"
              alt="로그인 로그아웃 아이콘"
              width={24}
              height={24}
            />
          </button>
          <button
            aria-label="찜 목록 보기"
            onClick={() => {}}
            className="bg-center bg-no-repeat"
          >
            <Image
              src="/blackheart-icon.svg"
              alt="찜 아이콘"
              width={24}
              height={24}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
