// pages/index.tsx

import { useEffect, useState } from 'react';
import React, { useState } from "react";
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill";

const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Luxury Villa",
  "Beachfront",
  // … add any other filters you want to show initially
];

export default function HomePage() {
  // Track which filters are active
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Toggle filter on/off
  const toggleFilter = (label: string) => {
    setActiveFilters((prev) =>
      prev.includes(label)
        ? prev.filter((f) => f !== label)
        : [...prev, label]
    );
  };

  // Filter properties based on selected filters
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) => {
    if (activeFilters.length === 0) return true;
    // check if property.category contains all active filters
    return activeFilters.every((f) => property.category.includes(f));
  });

  return (
    <div className="space-y-10">
      {/* ===== Hero ===== */}
      <section className="relative h-[60vh] w-full bg-gray-800">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Find your favorite place here!
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* ===== Filters ===== */}
      <section className="container mx-auto px-4">
        <h2 className="mb-2 text-xl font-semibold">Filters:</h2>
        <div className="flex flex-wrap gap-2">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              active={activeFilters.includes(label)}
              onClick={() => toggleFilter(label)}
            />
          ))}
        </div>
      </section>

      {/* ===== Listing Grid ===== */}
      <section className="container mx-auto px-4 pb-10">
        <h2 className="mb-4 text-2xl font-semibold">Available Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((prop: PropertyProps, idx: number) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{prop.name}</h3>
                  <span className="flex items-center space-x-1 text-yellow-500">
                    {/* star icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.950.69h4.174c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.363 1.118l1.286 3.971c.3.921-.755 1.688-1.539 1.118l-3.377-2.455a1 1 0 00-1.175 0l-3.377 2.455c-.784.570-1.838-.197-1.539-1.118l1.286-3.971a1 1 0 00-.363-1.118L2.048 9.398c-.783-.570-.38-1.810.588-1.810h4.174a1 1 0 00.950-.690l1.286-3.971z" />
                    </svg>
                    <span className="text-sm font-semibold">
                      {prop.rating.toFixed(2)}
                    </span>
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  {prop.address.city}, {prop.address.country}
                </p>

                <p className="mt-2 text-lg font-bold text-blue-600">
                  ${prop.price.toLocaleString()}
                  {prop.discount && (
                    <span className="ml-2 text-sm text-red-500">
                      {prop.discount}% off
                    </span>
                  )}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {prop.category.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-sm text-gray-600">
                  <span>🛏 {prop.offers.bed}</span>
                  <span>�� {prop.offers.shower}</span>
                  <span>👥 {prop.offers.occupants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
