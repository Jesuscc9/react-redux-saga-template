import { useFormik } from "formik";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export const Login = () => {
  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const { username, password } = values;
      dispatch(authActions.login(username, password));
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleSubmit} className="form flex p-6 center-absolute">
      <label htmlFor="user-input" className="input-label">
        Nombre de usuario
      </label>
      <input
        type="text"
        value={values.username}
        onChange={handleChange}
        name="username"
        id="user-input"
        placeholder="Usuario..."
        className="input"
      />
      <div className="br"></div>
      <label htmlFor="password-input" className="input-label">
        Contraseña
      </label>
      <div className="flex items-center justify-between input-container">
        <input
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          name="password"
          id="password-input"
          placeholder="Clave..."
          className="pr-7 w-full border-none input-contained"
        />
        <button title="Show Password" className="px-3 icon" type="button" onClick={handleShowPass}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>

      <div className="br"></div>
      <div className="center-content">
        <button type="submit" className="btn-primary">
          Iniciar sesion
        </button>
      </div>
    </form>
  );
};