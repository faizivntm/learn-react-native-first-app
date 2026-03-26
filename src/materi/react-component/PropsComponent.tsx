type Props = {
  nama: string;
  umur: number;
  sudahMenikah: "sudah" | "belum";
};

const PropsComponent = ({ nama, umur, sudahMenikah }: Props) => {
  return (
    <div>
      <p>
        Hello, nama saya {nama}, saya berumur {umur} dan {sudahMenikah}
      </p>
    </div>
  );
};

export default PropsComponent;
