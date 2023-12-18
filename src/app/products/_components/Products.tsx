"use client";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

const getProducts = async (sortOrder) => {
  try {
    const query = sortOrder ? `?sort=${JSON.stringify(sortOrder)}` : "";
    const response = await axios.get(`https://localhost/api/products/${query}`);
    return response.data.item || [];
  } catch (error) {
    console.error("Error 🥲", error);
    return [];
  }
};

export default function Products({ selectedBrand }) {
  // 향수 목록 상태 관리
  const [products, setProducts] = useState([]);
  // 드롭 다운 메뉴 표시 상태
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // 드롭 다운 메뉴 제목 상태 관리
  const [selectedName, setSelectedName] = useState("정렬");
  // 정렬 옵션 배열
  const sortOptions = [
    { key: "price-asc", name: "낮은 가격순" },
    { key: "price-desc", name: "높은 가격순" },
  ];

  // 드롭다운 메뉴에서 정렬 선택 시 호출되는 함수
  const handleSortSelection = async (key) => {
    let sortOrder;
    if (key === "price-desc") {
      sortOrder = { price: -1 };
    } else {
      sortOrder = { price: 1 };
    }

    // 정렬된 상품 목록 가져옴
    const sortedProducts = await getProducts(sortOrder);
    // 선택된 브랜드에 따라 상품 목록 필터링
    const filteredProducts = selectedBrand
      ? sortedProducts.filter(
          (product) => product.extra.brand === selectedBrand
        )
      : sortedProducts;

    setProducts(filteredProducts);
    setSelectedName(sortOptions.find((option) => option.key === key).name); // 드롭다운 메뉴 이름 업데이트
    setDropdownOpen(false); // 드롭다운 닫기
  };

  // 컴포넌트가 마운트될 때 상품 데이터를 가져오는 useEffect
  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await getProducts(); // 기본 정렬 사용 (ID 기준)
      const filteredProducts = selectedBrand
        ? allProducts.filter((product) => product.extra.brand === selectedBrand)
        : allProducts;
      setProducts(filteredProducts);
    };

    fetchData();
  }, [selectedBrand]);

  return (
    <div className="w-[984px]">
      <div className="flex justify-between">
        {/* 상품 개수 */}
        <p className="mb-[110px]">{products.length}개의 상품이 있습니다.</p>
        {/* 드롭다운 메뉴 */}
        <div className="mb-[110px]">
          <button
            onClick={() => {
              setDropdownOpen(!dropdownOpen);
            }}
            className="flex h-[40px] w-[140px] items-center justify-start border-[1px] border-primary pl-[12px] hover:bg-secondary"
          >
            {selectedName}
          </button>
          {dropdownOpen && (
            <ul className="absolute flex h-[80px] w-[140px] flex-col gap-[10px] border-[1px] border-primary">
              {sortOptions.map((option) => (
                <li
                  key={option.key}
                  onClick={() => handleSortSelection(option.key)}
                  className="flex cursor-pointer items-center justify-start py-[5px] pl-[12px] hover:bg-secondary"
                >
                  {option.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* 상품 목록 */}
      <ul className="flex w-[1000px] flex-row flex-wrap">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}
