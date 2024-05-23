import Division from "./Division";

export default function TheTeam() {
  return (
    <div className="mt-40 flex flex-col gap-10 justify-start items-center">
      <h1 className="text-7xl font-mono text-center mb-8">
        Meet the Team!
      </h1>
      <Division
        name="Ketua Panitia"
        people={[
          { id: "fais-hamdani", namaLengkap: "Fais Hamdani" }
        ]}
      />
      <Division
        name="PANITIA"
        people={[
          { id: "wishnutama-putera-ilham", namaLengkap: "Wishnutama Putera Ilham" },
          { id: "dimas-prasetyo", namaLengkap: "Dimas Prastyo" },
          { id: "joseph-farrel", namaLengkap: "Joseph Farrel" },
        ]}
      />
    </div>
  );
}
