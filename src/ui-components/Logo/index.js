import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/logoEZC.png"} width={"120"} height={"80"} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
