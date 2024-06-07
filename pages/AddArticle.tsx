import { Container } from "@/styles/CommonStyles";
import btn_submit from "@/public/btn_submit.svg";
import Image from "next/image";
import styled from "styled-components";

const AddArticlePage = () => {
  return (
    <Container>
      <div className="SubmitSection">
        <div>게시글 쓰기</div>
        <Image src={btn_submit} width={74} height={42} />
      </div>
      <div className="title">
        <label htmlFor="title">제목</label>
        <input id="title" placeholder="제목을 입력해주세요" />
      </div>
      <div className="content">
        <label htmlFor="content">제목</label>
        <input id="content" placeholder="내용을 입력해주세요" />
      </div>
      <div className="image">
        <label htmlFor="image">이미지</label>\
        <input id="image" placeholder="이미지 등록" />
      </div>
    </Container>
  );
};

export default AddArticlePage;
