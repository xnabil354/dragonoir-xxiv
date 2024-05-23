import Image from "next/image";
import Link from "next/link";

export interface ProfileCardProps {
  profile: {
    id: string;
    namaLengkap: string;
    posisi: string;
    imageUrl: string | null;
  };
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Link
      className="rounded-2xl bg-white bg-opacity-30 backdrop-blur border-2 border-white border-opacity-30 hover:scale-105 transition-all duration-100 flex flex-col w-[192px] items-center text-center gap-4 py-8 px-4"
      href={`/the-fam/${profile.id}`}
    >
      {profile.imageUrl ? (
        <Image
          src={profile.imageUrl}
          alt={profile.id}
          width={128}
          height={128}
          className="text-xs rounded-full"
        />
      ) : (
        <div className="w-[128px] h-[128px] bg-gray-200 rounded-full flex items-center justify-center">
          No Image
        </div>
      )}
      <h1 className="break-words">
        {`${profile.namaLengkap} - ${profile.posisi}`}
      </h1>
    </Link>
  );
}
