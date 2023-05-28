import React from "react";
import Annotation from "../../assets/Annotation.jpg";
import logo from "../../assets/logo.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let localstorageUser = "";
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      localstorageUser = localStorage.setItem("user", JSON.stringify(values));
    },
  });

  const loginHandler = () => {
    if (JSON.parse(localStorage.getItem("user"))) { 
      navigate("/");
    } else {
      alert("please login to our site");
    }
  };

  return (
    <div className="bg-purple-600 w-screen h-screen">
      <div className="bg-white absolute w-10/12 h-[75%] top-[13%] left-[9%] flex p-4 gap-[22%]">
        <div className="w-[42%] mt-[4%] ml-[3%] max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden ">
          <img src={Annotation} alt="annotation" />
        </div>
        <div className="mt-[3%] flex-col gap-20 items-center">
          <img src={logo} alt="logo" className="w-[30%]" />
          <h1 className="font-bold text-[#6F11E1] text-xl">Welcome back</h1>
          <p className="text-xs text-gray-500 w-[70%]">
            A Lorem Ipsum text generator is specifically designed to generate a
            dummy text or placeholder text.
          </p>
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="userName">Username</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                id="userName"
                name="userName"
                type="text"
                className="w-[50%] border-slate-300 border-2 focus:border-purple-600 "
              />
              {formik.touched.userName && formik.errors.userName ? (
                <div>{formik.errors.userName}</div>
              ) : null}
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <label htmlFor="password">Password</label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id="password"
                name="password"
                type="text"
                className="w-[50%] border-slate-300 border-2 focus:border-purple-600"
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              onClick={loginHandler}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded- w-[30%] py-1 text-sm mt-12"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
