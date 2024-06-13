import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        const data = await response.json();
        setError(data.message || "회원가입 실패");
      }
    } catch (error) {
      setError("서버 에러가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            사용자 이름:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
