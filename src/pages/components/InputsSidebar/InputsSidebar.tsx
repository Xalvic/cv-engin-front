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
    setFormData({
      ...formData,
      fullname: data.name,
      headline: data.title,
      email: data.contacts.email,
      location: `${data.contacts?.address?.city}, ${data.contacts?.address?.state}, ${data.contacts?.address?.country}`,
      website: data.contacts.website.split(",")[0].trim(),
      phone: data.contacts.phone,
      summary: data.bio,
    });
    dispatch(
      addBasicInfo({
        ...resumeData,
        fullname: data.name,
        headline: data.title,
        email: data.contacts.email,
        location: `${data.contacts?.address?.city}, ${data.contacts?.address?.state}, ${data.contacts?.address?.country}`,
        website: data.contacts.website.split(",")[0].trim(),
        phone: data.contacts.phone,
        summary: data.bio,
        skills: data.skills.split(","),
      })
    );
  };

  const getData = async () => {
    const url = "../../../../zx.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      updateData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-1/4 px-6 py-4 border-r-1 h-screen overflow-y-auto custom-scroll relative">
      <h1 className="text-3xl font-semibold">Basics</h1>
      <Button onClick={getData} className="upload-button">Upload</Button>
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
