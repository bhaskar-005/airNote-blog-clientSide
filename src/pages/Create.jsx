import React, { useState } from "react";
import { Button, RTE, Input } from "../index";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MaxWidthWrapper from "../component/MaxWidthWrapper";

const Create = () => {
  const { register, handleSubmit } = useForm();
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState([]);

  const [body, SetBody] = useState("");
  const userStatus = useSelector((state) => state.isLogin.userdata);
  const [file, setFile] = useState(null);
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();

  //for handleing file chnage
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (data) => {
    // try to send image
    setloader(true);

    if (!file) {
      toast.info(`Please select an image`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setloader(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", data.title);
    categories.forEach((category, index) => {
      formData.append(`category[${index}]`, JSON.stringify(category));
    });
    formData.append("description", body);
    formData.append("userId", userStatus.id);
    formData.append("author", `${userStatus.firstName}-${userStatus.lastName}`);

    // Append other form data to FormData

    // Sending data to the backend
    try {
      const storedToken = localStorage.getItem('token')
      const res = await axios.post(
        import.meta.env.VITE_URL + "/post/createpost",
        formData,
        { 
          headers: {
            token: `${storedToken}`,
          },
          withCredentials: true
        }
      );

      if (res.status === 200) {
        navigate("/articles");
        toast.success(`Post created`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error(error);
      toast.info(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setloader(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCategoryInput(inputValue);
  };

  const handleAddCategory = () => {
    // Check if the category is not empty and does not already exist
    if (
      categoryInput.trim() !== "" &&
      !categories.some((category) => category.name === categoryInput)
    ) {
      setCategories([...categories, { name: categoryInput, id: Date.now() }]);
      setCategoryInput("");
    } else {
      console.log("Category is empty or already exists");
    }
  };

  const handleRemoveCategory = (item) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== item.id
    );
    setCategories(updatedCategories);
  };

  return (
    <MaxWidthWrapper>
    <div className="flex flex-col sm:flex-row justify-between sm:mx-28 mx-2 relative">
      {loader == true && (
        <div class="absolute bg-white bg-opacity-80 z-10 h-full w-full flex items-center justify-center">
          <div class="flex items-center">
            <span class="text-3xl mr-4">Uploading</span>
            <svg
              class="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-[30px] text-third_colour font-[700] my-2">
          Create Post
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          encType="multipart/form-data"
        >
          <Input
            placeholder={"title"}
            lable={"title *"}
            {...register("title", { required: true })}
          />

          {/* image uploader */}
          <div className="flex flex-col gap-1">
            <label className={` font-[500] text-third_colour `}>image *</label>
            <input type="file" onChange={handleFileChange} name="image" />
          </div>

          {/* ----------------------------category---------------- */}
          <div>
            <label className={` font-[500] text-third_colour `}>
              category *
            </label>
            <div className="flex flex-row mt-1">
              <input
                className={`h-[46px] text-[16px] font-[500] input focus:outline-none `}
                onChange={handleInputChange}
                value={categoryInput}
              />
              <button
                className="bg-first_colour ml-2 mt- mb-1 px-5 rounded-xl text-white"
                type="button"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
          <div className="max-w-[300px]">
            <ul className="flex gap-4 flex-wrap mb-4">
              {categories.map((item) => (
                <div
                  className="flex flex-row gap-4 input p-1 "
                  key={item.id}
                  id={item.id}
                >
                  <li className="">{item.name}</li>
                  <button
                    className="bg-second_colour text-white h-6 w-6 rounded-xl"
                    onClick={() => handleRemoveCategory(item)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </ul>
            {/* ----------------------------category---------------- */}
          </div>

          {/* ------------------------RTE------------------------ */}
          <label
            htmlFor="editor"
            className={` font-[500] text-third_colour p-0 m-0 `}
          >
            write your content *
          </label>
          <Editor
            apiKey={import.meta.env.VITE_TINY_API_KEY}
            id="editor"
            textareaName="content"
            onEditorChange={(newText) => {
              SetBody(newText);
            }}
            initialValue=""
            init={{
              valid_elements: "*[*]",
              height: 600,
              menubar: "insert",
              plugins: [
                "a11ychecker",
                "advlist",
                "advcode",
                "advtable",
                "autolink",
                "checklist",
                "codesample", // Added codesample plugin for code typing
                "export",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "powerpaste",
                "fullscreen",
                "formatpainter",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
                "image",
                "insert",
                "code",
                "textcolor",
              ],

              toolbar:
                "undo redo | casechange blocks | bold italic forecolor backcolor " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | codesample |  table",

              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px }",
              textcolor_cols: "5",
              textcolor_rows: "5",
            }}
          />

          {/* ------------------------RTE------------------------ */}
          <Button
            type="submit"
            text={"Upload Post"}
            className={"bg-first_colour text-white px-10"}
          />
        </form>
      </div>
    </div>
    </MaxWidthWrapper>
  );
};

export default Create;
