/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { haircut } from "@/app/mockData/haircut";
import { Button, Modal } from "flowbite-react";
import DabuzzzText from "@/app/components/DabuzzzText";
import { CloseOutlined } from "@ant-design/icons";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const columns: { src: string }[][] = [[], [], [], []];

  haircut.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="lg:mb-16 mb-8 flex-grow py-4 lg:px-60 px-4">
      <section className="text-center lg:mb-16 mb-8">
        <i className="text-primary opacity-50 font-medium text-4xl">Gallery</i>
        <div className="lg:text-[6rem] text-[5rem] lg:leading-[8rem] leading-[5rem] text-primary">
          <DabuzzzText />
        </div>
      </section>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {column.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                onClick={() => openModal(item.src)}
                className="overflow-hidden rounded-xl hover:shadow-xl transition-all md:h-auto h-80"
              >
                <img
                  className="md:h-full max-w-full object-cover object-center cursor-pointer hover:scale-110 transition-all duration-200"
                  src={item.src}
                  alt={`Haircut ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal dismissible show={isModalOpen} onClose={closeModal}>
        <Modal.Body className="p-0 relative">
          <Button onClick={closeModal} className="absolute top-2 right-2 rounded-full bg-primary">
            <CloseOutlined sizes="large" />
          </Button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full-size haircut"
              className="w-full h-auto"
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
