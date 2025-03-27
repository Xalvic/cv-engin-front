import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Experiences from "../Experiences/Experiences";
import { useDispatch, useSelector } from "react-redux";
import { addBasicInfo } from "@/features/resumeDataSlice";
import { RootState, AppDispatch } from "@/store";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const token =
  "XSRF-TOKEN=eyJpdiI6IkRVenhPTlFudU9wWUZZQXNHZk9sTUE9PSIsInZhbHVlIjoicGFKRzhETWVSbXdSdklkaXRPZVJUcW9HV2tyT09LU0g0RmZKK2JLZGdDaWRkTGxWbzVtZ0RMY0MyY251VnlsN2tUTGpIL1J6bG5nSUQrdkk2ckprZmRuZ0NxSHdGNlhXbkRvSGdkWU9sMFhlaXFTa1dGSEJ6S1FqRi9PRU5lcFgiLCJtYWMiOiJkYWU4MzE5ZDkwMmExMTUzNWU1MTQ3ZGVlMjI4MmNkMGJiN2NkNmI0NWZiZjZjNWJiNTcyMmViZTc2Nzc1MjA0IiwidGFnIjoiIn0%3D; cv_engine_session=eyJpdiI6IkZwZzRlTjRUMXdwaVRHdGIzbW9yUWc9PSIsInZhbHVlIjoiZHFQVnhCZDBXNXVjOVR1Z0tJZWRiQnkrWXprZ1NXUzNtQ05pdVpzNE5BaXdhOGttNGtndlZRYWRnNTJUU3E1T292WmNJMkxSa0tKTUZUcWd1QlRkNDZKQUFxVDREZ0NFbER2a1p2K2oyZ1FnRjgzK2dNL2RGdFBhcFVjYWVuN2oiLCJtYWMiOiI2MGZhY2NhNWJkZjRiOWViYjJlODRjOTUzNDcxMTA1Y2YzMWI4OTRkYjQ4NTZiOGM1Y2U2OGNjYTgwN2VjYzVhIiwidGFnIjoiIn0%3D; BHAigE63oK6IjYObS9fyTogtEz8Cmuu0APHRFcWc=eyJpdiI6ImlrbDZvUmxHWTcvT1VpV3JMaklCdlE9PSIsInZhbHVlIjoidnRRdGRIV3JkekN5SzU5SnBGVFBwZTlaVUtDajVWMU1MNXZvaENpbzVESkJmZjZnOVMveG1BcGF6bjhJVldzRTh4NkU0aEZKS2FKMXdjOVZNdFl3cXd0RTYwdCtlSWk5ZlpwL1o5U2p2UkNvZmR3SzBNZFRFRDNUMExWVnhoL3dIYk9NUXM3bnZOc2VnUUNMY29GZFJEb3U5ZmRPVk5jcnB5ZEpNZnJWbHBRUmlncGI3U2RWTldudUN1UEJGQTJSeDc5bXNZNUZhZWVIVDc4UWtCLzRKZVQwSGhYblNhYVhSN2UwUzFUSEVOL1FyckJha2lmMWNJbUlKZy93anlua0NGc2ZSZmtxS1JWcHV3cHIxdjFEaHQ3bDZpNFpJUkh1Zi8vR0lNbkg0dGdZZTA4VlNSWHpCZmRVcFJUZ2ZQRllMWVN4S0MvNWZFQ3RjbDN5T1l5akZCZkxsRTN1YW5ZbWdIaExBdEpQcW1aaTFzakxZck1xcTNSS2g0K2NEd0hPIiwibWFjIjoiNThkNWJmYjc1NzkzZjY4NmZhZDU1MWQzNDdiMDAwNWE1N2EyODkyNGFjNGFlZDcwYmQ3ODBmZWQwMGM0ODJhMSIsInRhZyI6IiJ9";

function InputsSidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const resumeData = useSelector((state: RootState) => state.resumeData);

  const [formData, setFormData] = useState(resumeData);

  // Handle input changes
  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    dispatch(addBasicInfo({ ...resumeData, [e.target.name]: e.target.value }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateData = (data: any) => {
    console.log(data);
    // setFormData({
    //   ...formData,
    //   fullname: data.name,
    //   headline: data.title,
    //   email: data.contacts.email,
    //   location: `${data.contacts?.address?.city}, ${data.contacts?.address?.state}, ${data.contacts?.address?.country}`,
    //   website: data.contacts.website.split(",")[0].trim(),
    //   phone: data.contacts.phone,
    //   summary: data.bio,
    // });
    // dispatch(
    //   addBasicInfo({
    //     ...resumeData,
    //     fullname: data.name,
    //     headline: data.title,
    //     email: data.contacts.email,
    //     location: `${data.contacts?.address?.city}, ${data.contacts?.address?.state}, ${data.contacts?.address?.country}`,
    //     website: data.contacts.website.split(",")[0].trim(),
    //     phone: data.contacts.phone,
    //     summary: data.bio,
    //     skills: data.skills.split(","),
    //   })
    // );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fileInputEvent = (e: any) => {
    const file = e.target.files[0];
    if (file) getData(file);
  };
  const fileClick = () => {
    document.getElementById("fileInput")?.click();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getData = async (file: any) => {
    console.log(file); 
    const formData = new FormData();

    formData.append("pdf", file);

    fetch("https://cv-engine.vercel.app/api/api/cv/parse", {
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
        Cookie: token,
      },
      credentials: "include", // To include cookies (if required)
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        updateData(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="w-1/4 px-6 py-4 border-r-1 h-screen overflow-y-auto custom-scroll relative">
      <h1 className="text-3xl font-semibold">Basics</h1>
      <input type="file" onChange={fileInputEvent} id="fileInput" />
      <Button onClick={fileClick} className="upload-button">
        Upload
      </Button>
      <div className="grid gap-4 sm:grid-cols-2 mt-3">
        <div className="grid w-full max-w-sm items-center gap-1.5 sm:col-span-2">
          <Label htmlFor="text">Fullname</Label>
          <Input
            value={formData.fullname}
            onChange={onInputChange}
            type="text"
            name="fullname"
            placeholder="Fullname"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 sm:col-span-2">
          <Label htmlFor="text">Headline</Label>
          <Input
            value={formData.headline}
            onChange={onInputChange}
            type="text"
            name="headline"
            placeholder="Headline"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            value={formData.email}
            onChange={onInputChange}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Website</Label>
          <Input
            value={formData.website}
            onChange={onInputChange}
            type="url"
            name="website"
            placeholder="Website"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Phone</Label>
          <Input
            value={formData.phone}
            onChange={onInputChange}
            type="phone"
            name="phone"
            placeholder="Phone"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">Location</Label>
          <Input
            value={formData.location}
            onChange={onInputChange}
            type="text"
            name="location"
            placeholder="Location"
          />
        </div>
      </div>
      <Separator className="my-5" />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="text">Summary</Label>
        <Textarea
          value={formData.summary}
          onChange={onInputChange}
          name="summary"
          placeholder="Summary"
        ></Textarea>
      </div>
      <Separator className="my-5" />
      <Experiences />
    </div>
  );
}
export default InputsSidebar;
