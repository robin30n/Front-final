import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const navigate = useNavigate();
  let localstorageUser = "";
  const formik = useFormik({
    initialValues: {
      Title: "",
      Description: "",
      Category: "",
      ImageUrl: "",
      Price: "",
    },
    validationSchema: Yup.object({
      Title: Yup.string().required("Required"),
      Description: Yup.string().required("Required"),
      Category: Yup.string().required("Required"),
      ImageUrl: Yup.string().required("Required"),
      Price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      localstorageUser = localStorage.setItem(
        "product",
        JSON.stringify(values)
      );
    },
  });

  const addProductHandler = () => {
    toast.success("you add a product", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/");
  };

  const cancleProductHandler = () => {
    toast.error("you didn't add any product!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/");
  };

  return (
    <div className=" w-[80%] mt-[2%] mx-auto flex justify-center items-center ">
      <div className="bg-gray-200   shadow-md w-[35%] h-[70%] flex  items-center p-7 max-sm:w-[60%] max-sm:justify-center">
        <div className=" flex-col gap-20 ">
          <h1 className=" text-orange-700 text-lg text-center">Add Product</h1>
          <form
            className="mt-4 flex gap-3 flex-col"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex  items-center max-sm:flex-col ">
              <div className="flex flex-col ">
                <label htmlFor="Title" className="text-sm">
                  Title
                </label>
                
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Title}
                    id="Title"
                    name="Title"
                    type="text"
                    className=" focus:border-none  w-[80%] border-slate-300 border-2 focus:border-orange-600 text-sm max-sm:w-[100%]"
                  />
                  <span className="text-[12px] ">
                    {formik.touched.Title && formik.errors.Title ? (
                      <div>{formik.errors.Title}</div>
                    ) : null}
                  </span>
              
              </div>
              <div className="flex flex-col ">
                <label htmlFor="Price" className="text-sm">
                  Price
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Price}
                  id="Price"
                  name="Price"
                  type="text"
                  className=" focus:border-none w-[80%] border-slate-300 border-2 focus:border-orange-600 text-sm max-sm:w-[100%]"
                />
                <span className="text-[12px]">
                  {formik.touched.Price && formik.errors.Price ? (
                    <div>{formik.errors.Price}</div>
                  ) : null}
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center  max-sm:flex-col">
              <div className="flex flex-col gap-2">
                <label htmlFor="Category" className="text-sm">
                  Category
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Category}
                  id="Category"
                  name="Category"
                  type="text"
                  className="focus:border-none w-[80%] border-slate-300 border-2 focus:border-orange-600 text-sm max-sm:w-[100%] "
                />
                <span className="text-[12px] ">
                  {formik.touched.Category && formik.errors.Category ? (
                    <div>{formik.errors.Category}</div>
                  ) : null}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ImageUrl" className="text-sm">
                  Image Url
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ImageUrl}
                  id="ImageUrl"
                  name="ImageUrl"
                  type="text"
                  className=" focus:border-none w-[80%] border-slate-300 border-2 focus:border-orange-600 text-sm max-sm:w-[100%]"
                />
                <span className="text-[12px] ">
                  {formik.touched.ImageUrl && formik.errors.ImageUrl ? (
                    <div>{formik.errors.ImageUrl}</div>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Description" className="text-sm">
                Description
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Description}
                id="Description"
                name="Description"
                type="text"
                className="focus:border-none max-sm:w-[100%] border-slate-300 border-2 focus:border-orange-600 text-sm w-[91%]"
              />
              <span className="text-[12px] ">
                {formik.touched.Description && formik.errors.Description ? (
                  <div>{formik.errors.Description}</div>
                ) : null}
              </span>
            </div>

            <div className="flex gap-24  max-sm:gap-2 ">
              <button
                onClick={cancleProductHandler}
                className="border-orange-500 border-2 hover:bg-orange-200 text-gray-700 rounded- w-[30%] py-1 text-sm mt-12 max-sm:text-[12px] max-sm:w-[50%]"
              >
                Cancle
              </button>
              <button
                onClick={addProductHandler}
                className="bg-orange-600 hover:bg-orange-700 text-white rounded- w-[30%] py-1 text-sm mt-12 max-sm:text-[12px] max-sm:w-[50%]"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
