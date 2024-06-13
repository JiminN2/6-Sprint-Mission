import btn_submit from "@/public/btn_submit.svg";
import Image from "next/image";
import styled from "styled-components";
import AddImage from "@/components/AddImage";

export default function AddArticlePage() {
  return (
    <>
      <Container>
        <div className="SubmitSection">
          <div className="게시글_쓰기">게시글 쓰기</div>
          <Image src={btn_submit} width={74} height={42} alt="등록" />
        </div>
        <div className="Section">
          <label htmlFor="title">*제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="Section">
          <label htmlFor="content">*내용</label>
          <input
            id="content"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </Container>
      <div>
        <AddImage />
      </div>
    </>
  );
}
// Container 스타일 정의
const Container = styled.div`
  padding: 20px;
  margin: auto 360px;

  .SubmitSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .게시글_쓰기 {
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 700;
    line-height: 23.87px;
  }

  .title,
  .content {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
  }

  .Section {
    margin-bottom: 24px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 16px 24px 16px 24px;
    font-size: 16px;
    border: none;
    border-radius: 12px;
    background-color: #f3f4f6;
    height: 30px;
  }
`;
