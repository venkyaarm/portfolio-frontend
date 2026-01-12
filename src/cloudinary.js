export async function uploadFile(file) {
  const cloudName = "doi1kxw5o";              // ✅ correct
  const uploadPreset = "portfolio_upload";   // ✅ must be UNSIGNED

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(url, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Cloudinary error:", errorText);
    throw new Error("Cloudinary upload failed");
  }

  const data = await response.json();
  return data.secure_url;
}
