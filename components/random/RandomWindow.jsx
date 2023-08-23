"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Eye, X } from "phosphor-react";
import { useTopBrands } from "@/components/useBrands";
import {
  extractReviewBonus,
  extractReviewImage,
  extractLink,
} from "@/components/brandUtils";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [randomBrand, setRandomBrand] = useState(null);
  const [isActive, setIsActive] = useState(false); // Добавляем состояние для класса "active"
  const brandData = useTopBrands(112);

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastClosedTime = localStorage.getItem("lastClosedTime");

      if (!lastClosedTime || Date.now() - lastClosedTime > 60000) {
        const randomIndex = Math.floor(Math.random() * brandData.length);
        setRandomBrand(brandData[randomIndex]);
        setShowModal(true);
        setIsActive(true); // Добавляем класс "active" через 5 секунд
      }
    }, 5000); // 5000 миллисекунд = 5 секунд

    return () => clearTimeout(timer);
  }, [brandData]);

  const closeModal = () => {
    setShowModal(false);
    setIsActive(false); // Удаляем класс "active"
    localStorage.setItem("lastClosedTime", Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const lastClosedTime = localStorage.getItem("lastClosedTime");
      if (!lastClosedTime || Date.now() - lastClosedTime > 60000) {
        const randomIndex = Math.floor(Math.random() * brandData.length);
        setRandomBrand(brandData[randomIndex]);
        setShowModal(true);
      }
    }, 60000); // 1000 миллисекунд = 10 минут

    return () => clearInterval(interval);
  }, [brandData]);

  return (
    showModal && randomBrand && (
      <div className={`modal-overlay ${isActive ? "active" : ""}`}>
        <div className="modal-content relative">
          <p>Random Brand</p>
          <span className="mb-2">Pay attention to a random brand suggested just for you</span>
          <div className="card-brand flex items-center mt-2" key={randomBrand.id}>
            <div className="brandImage p-3">
              <Link href={`/bonuses/${randomBrand.id}`}>
                <Image
                  src={extractReviewImage(randomBrand.content.rendered)}
                  alt={randomBrand.title.rendered}
                  width={150}
                  height={75}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="brandContent p-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: extractReviewBonus(randomBrand.content.rendered),
                }}
              />
            </div>
              <div className="buttons p-3">
                <Link
                  className="btn btn-secondary flex justify-center items-center mb-1"
                  href={`/bonuses/${randomBrand.id}`}
                >
                  <Eye className="mr-1" size={20} />
                 Review
                </Link>
                <Link
                  className="btn btn-primary flex justify-center items-center mt-1"
                  href={extractLink(randomBrand.content.rendered)}
                >
                  <Play className="mr-1" size={20} />
                  Play
                </Link>
              </div>
          </div>
          <button className="absolute top-3 right-3" onClick={closeModal}><X size={20} /></button>
        </div>
      </div>
    )
  );
};

export default Modal;
