import {useState} from 'react'

export default function Upload() {
  const [url, setUrl] = useState()

  const uploadPhoto = async (e) => {
    setUrl('')

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const { data } = await response.json()
      setUrl(data)
      console.log('Uploaded successfully!');
    } else {
      console.error('Upload failed.');
    }
  };

  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={uploadPhoto}
        type="file"
        accept="image/png, image/jpeg"
      />
      {url && (
        <p><a href={url} target="_blank">{url}</a></p>
      )}
    </>
  );
}
