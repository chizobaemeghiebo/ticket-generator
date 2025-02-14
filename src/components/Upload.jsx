import { useState } from "react";
import Download from "../assets/images/download.png";

const Upload = () => {
  const [uploadedImgState, setUploadedImgState] = useState();

  const handleImage = async (e) => {
    e.preventDefault();

    // Replace with your Cloudinary cloud name
    const cloudName = "do9m41q14";
    // Replace with your Cloudinary upload preset
    const uploadPreset = "upload_new";

    // get the image uploaded
    const file = e.target.files[0];

    // check if the image is of the correct type
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      // create a new form instance
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        // this is the returned object from the cloudinary
        const data = await response.json();
        // access your URL with secure_url
        console.log(data.secure_url);
        // setImg(data.secure_url);
        setUploadedImgState(data.secure_url);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("A jpeg/png file could not be found");
    }
  };

  return (
    <form>
      <label
        htmlFor="upload"
        className="relative flex flex-col items-center gap-2"
      >
        <img src={Download} alt="Upload file" />
        <p className="text-lighter font-display text-base text-center md:w-3/4 md:mx-auto">
          Drag & drop or click to upload
        </p>
        <input
          type="file"
          name="upload"
          id="upload"
          className="absolute hidden"
          accept="image/jpeg, image/png"
          onChange={handleImage}
        />
      </label>
    </form>
  );
};

export default Upload;
