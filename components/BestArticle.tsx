import Image from "next/image";
import styles from "./BestArticle.module.css";
import badge from "@/public/badge.svg";
import { Article } from "@/interface/Article.interface";
import Iconheart from "@/public/ic_heart.svg";
import formatDate from "@/formatDate";

export default function BestArticle({ article }: { article: Article }) {
  // 방어적 코드 추가
  if (!article) {
    return <div>Article data is not available</div>;
  }

  const articleImage = article.image || "";
  const createdAt = formatDate(article.createdAt);

  return (
    <>
      <div className={styles.Container}>
        <Image
          className={styles.badge}
          src={badge}
          alt="배지"
          width={102}
          height={30}
        />
        <ul className={styles.articleSection}>
          <li>
            <div className={styles.title}>{article.title}</div>
            <Image
              className={styles.image}
              src={articleImage}
              alt={article.title}
              width={50}
              height={50}
            />
            <div className={styles.info}>
              <h2 className={styles.writer}>{article.writer.nickname}</h2>
              <div className={styles.like}>
                <Image src={Iconheart} alt="하트" width={20} height={20} />
                {article.likeCount}
              </div>
              <div className={styles.createdAt}>{createdAt}</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
