import Image from "next/image";
import logo from "../public/logo-texto.png";
function Header() {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <div
          className="flex items-center justify-between flex-wrap p-1"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="flex items-center flex-shrink-0 text-white pl-16 pt-6">
            <span>
              <Image
                className="object-fill h-42 w-72"
                src={logo}
                alt="SOBERANA"
                width={300}
                height={300}
              ></Image>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
