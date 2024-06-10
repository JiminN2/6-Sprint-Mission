import { useEffect, useState } from "react";
import Image from "next/image";

export default function AddImage() {
  const [imgSrc, setimgSrc] = useState<string>("/images/default-image.png");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setimgSrc(e.target?.result);
      }
    };
  };

  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);

  return (
    <div>
      <h2>이미지</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      <Image src={imgSrc} alt="" width={200} height={150} priority />
    </div>
  );
}
