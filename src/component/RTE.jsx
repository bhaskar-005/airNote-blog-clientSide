import React, { useId } from "react";
import { useForm, Controller } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
const RTE = ({
  name,
  control, //this is responsible for taking all the state to react hook form
  //we can also use forwordref,
  label,
  ...props
}) => {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <Controller
        name={name || "RTE"}
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          // we want to render RTE
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>type your description</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "a11ychecker",
                "advlist",
                "advcode",
                "advtable",
                "autolink",
                "checklist",
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
              ],
              toolbar:
                "undo redo | casechange blocks | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default RTE;
