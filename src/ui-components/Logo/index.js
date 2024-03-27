import Image from "next/image";
import Link from "next/link";
import styles from './Logo.module.css';

const useLogo = () => {
  const Logo = () => {
    return (
      <div>
        <Link href={`/`}>
          <Image src={"/EZC-logo.png"} width={"290"} height={"160"} alt="logo" />
        </Link>
      </div>
    );
  };

  const HomeLogo = () => {
    return (
      <div className={styles["homeLogo"]}>
        <Link href={`/`}>
          <Image src={"/Ez-logo.png"} width={"235"} height={"48"} alt="logo" />
        </Link>
      </div>
    );
  };

  return {Logo, HomeLogo}
}

export default useLogo;
