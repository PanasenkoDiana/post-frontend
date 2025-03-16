import React, { useState } from "react";

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage: FileList | null;
}

export function RegisterPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.status === "error") {
        alert(result.message);
      } else {
        alert("Регистрация прошла успешно!");
      }
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка при регистрации.");
    }
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="username"
          placeholder="Имя пользователя"
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Почта"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Подтверждение пароля"
          required
        />
        <br />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleFileChange}
        />
        {imageSrc && <img src={imageSrc} alt="preview" width="100" />}
        <br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
