import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageSection = styled.div`
  margin: auto 360px;
`;
const ImageTitle = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 40px;
  height: 282px;
`;

export default function AddImage() {
  const [imgSrc, setimgSrc] = useState("/images/default-image.png");

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
    <ImageSection>
      <ImageTitle>이미지</ImageTitle>
      <Input type="file" accept="image/*" onChange={handleChange} />
      <Image src={imgSrc} alt="" width={200} height={150} priority />
    </ImageSection>
  );
}
