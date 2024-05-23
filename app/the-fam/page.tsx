"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import names from "../../data/name-major.json";
import images from "../../data/teachers_images.json";
import ProfileCard from "@/components/ProfileCard";

export default function TheFam() {
  const [id, setId] = useState("");
  const [education, setEducation] = useState("");
  const [position, setPosition] = useState("");
  const [additionalDuties, setAdditionalDuties] = useState("");
  const [joined, setJoined] = useState("");
  const [retirement, setRetirement] = useState("");

  // Gabungkan data images dengan profiles
  const profiles = names.map((profile) => {
    const image = images.find((img) => img.id === profile.id);
    return { ...profile, imageUrl: image ? image.url : null };
  }).filter((c) =>
    (id ? c.id.toLowerCase().includes(id.toLowerCase()) : true) &&
    (education ? c.education.toLowerCase().includes(education.toLowerCase()) : true) &&
    (position ? c.position.toLowerCase().includes(position.toLowerCase()) : true) &&
    (additionalDuties ? c.additional_duties.toLowerCase().includes(additionalDuties.toLowerCase()) : true) &&
    (joined ? c.joined.toLowerCase().includes(joined.toLowerCase()) : true) &&
    (retirement ? c.retirement.toLowerCase().includes(retirement.toLowerCase()) : true)
  );

  return (
    <div className="mt-40">
      <div className="relative w-full min-[400px]:w-screen z-0">
        <Image
          src={"/assets/elements/the-fam/1.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-0 left-0"
        />
        <Image
          src={"/assets/elements/the-fam/2.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[50vh] left-0"
        />
        <Image
          src={"/assets/elements/the-fam/3.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[200vh] left-0"
        />
        <Image
          src={"/assets/elements/the-fam/4.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-0 right-0"
        />
        <Image
          src={"/assets/elements/the-fam/5.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[50vh] right-0"
        />
        <Image
          src={"/assets/elements/the-fam/6.png"}
          alt={"1"}
          width={180}
          height={180}
          className="absolute top-[200vh] right-0"
        />
      </div>
      <div className="flex flex-col items-center px-6">
        <div className="flex flex-col items-center">
          <h1 className="z-10 text-7xl font-clash-display text-center mb-8">Meet Our Staff & Teachers!</h1>
          <div className="inline-flex flex-col md:flex-row justify-center shadow-sm">
            <input
              type="text"
              placeholder="Search by ID"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Search by Education"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Search by Position"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Search by Additional Duties"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={additionalDuties}
              onChange={(e) => {
                setAdditionalDuties(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Search by Joined"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={joined}
              onChange={(e) => {
                setJoined(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Search by Retirement"
              className="px-3 py-2 mr-9 rounded-t-md rounded-bl-none md:rounded-tr-none md:rounded-l-md bg-opacity-50 bg-white backdrop-blur"
              defaultValue={retirement}
              onChange={(e) => {
                setRetirement(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mt-16 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
          {profiles.length > 0 ? (
            profiles.map((profile, i) => (
              <ProfileCard key={i} profile={{...profile, namaLengkap: profile.name, posisi: profile.position }} />
            ))
          ) : (
            <p className="text-center text-lg">No profiles found. Please try a different search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
