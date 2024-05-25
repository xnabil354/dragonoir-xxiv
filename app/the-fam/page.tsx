"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";
import names from "../../data/name-major.json";
import images from "../../data/teachers_images.json";
import ProfileCard from "@/components/ProfileCardTeacher";

type Profile = {
  id: string;
  name: string;
  education: string;
  position: string;
  additional_duties: string;
  joined: string;
  retirement: string;
  imageUrl?: string | null;
};

export default function TheFam() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
  };

  const getProfileWithImage = (profile: Profile) => {
    const image = images.find((img) => img.id === profile.id);
    return { ...profile, imageUrl: image ? image.url : null };
  };

  const matchesSearchTerm = (profile: Profile, searchLower: string) => {
    const fieldsToSearch = [
      profile.id, profile.name, profile.education, profile.position, 
      profile.additional_duties, profile.joined, profile.retirement
    ];

    return fieldsToSearch.some(field => field.toLowerCase().includes(searchLower));
  };

  const profiles = names
    .map(getProfileWithImage)
    .filter(profile => !searchTerm || matchesSearchTerm(profile, searchTerm.toLowerCase()));

  const renderImage = (src: string, alt: string, position: string) => (
    <Image
      src={src}
      alt={alt}
      width={180}
      height={180}
      className={`absolute ${position}`}
    />
  );

  return (
    <div className="mt-40">
      <div className="relative w-full min-[400px]:w-screen z-0">
        {renderImage("/assets/elements/the-fam/1.png", "decorative", "top-0 left-0")}
        {renderImage("/assets/elements/the-fam/2.png", "decorative", "top-[50vh] left-0")}
        {renderImage("/assets/elements/the-fam/3.png", "decorative", "top-[200vh] left-0")}
        {renderImage("/assets/elements/the-fam/4.png", "decorative", "top-0 right-0")}
        {renderImage("/assets/elements/the-fam/5.png", "decorative", "top-[50vh] right-0")}
        {renderImage("/assets/elements/the-fam/6.png", "decorative", "top-[200vh] right-0")}
      </div>
      <div className="flex flex-col items-center px-6">
        <div className="flex flex-col items-center">
          <h1 className="z-10 text-7xl font-mono text-center mb-8">
            Meet Our Staff & Teachers!
          </h1>
          <div className="flex items-center w-full max-w-xl bg-white rounded-md shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Teacher/Staff"
              className="flex-grow px-4 py-2"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <div className="px-4 py-2 bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-16 flex max-w-5xl flex-row flex-wrap justify-center gap-4">
          {profiles.length > 0 ? (
            profiles.map((profile, i) => (
              <ProfileCard
                key={i}
                profile={{
                  ...profile,
                  namaLengkap: profile.name,
                  posisi: profile.position,
                }}
              />
            ))
          ) : (
            <p className="text-center text-lg">
              No profiles found. Please try a different search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
