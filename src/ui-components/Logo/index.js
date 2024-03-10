import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/EZC-logo.png"} width={"290"} height={"160"} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
