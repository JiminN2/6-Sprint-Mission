import { useState, useEffect } from "react";
import styles from "./BestArticle.module.css";
import useApiData from "@/pages/api/useApiData";
import { ArticleListResponse } from "@/interface/Article.interface";
import BestArticle from "./BestArticle";

const getPageSize = () => {
  if (typeof window === "undefined") {
    return 3;
  }

  const width = window.innerWidth;
  if (width < 768) return 1;
  else if (width < 1280) return 2;
  else return 3;
};

export default function BestArticleList() {
  const [pageSize, setPageSIze] = useState<number>(getPageSize());

  const fetchArticles = useApiData<ArticleListResponse>(
    `articles?page=1`,
    pageSize,
    "like"
  );

  const { data: ArticleList } = fetchArticles;

  useEffect(() => {
    const handleResize = () => {
      setPageSIze(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.articlesSection}>
      {ArticleList?.list?.map((article) => (
        <BestArticle article={article} key={article.id} />
      ))}
    </div>
  );
}
