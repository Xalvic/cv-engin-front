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
    // const url = "../../../../zx.json";
    // try {
    //   const response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }

    //   const json = await response.json();
    //   updateData(json.data);
    // } catch (error) {
    //   console.error(error);
    // }
    updateData({
      bio: "Seeking a responsible career opportunity to fully utilize my training and skills, while making an impact on your organization with my unique skills and passion.",
      contacts: {
        address: {
          address_line_1: "Kozhikode, India",
          address_line_2: "azdfzd",
          city: "Kozhikode",
          country: "India",
          state: "Kerala",
        },
        email: "puthukkuddymilan@gmail.com",
        phone: "9074964661",
        website:
          "milan.m64.in, linkedin.com/in/milan-puthukkuddy-308b191a7, github.com/Xalvic",
      },
      education: {
        course_name: "Bachelor of Computer Application",
        description: "University of Calicut",
        end_date: "1596236400",
        location: {
          city: "Kozhikode",
          state: "kerala",
        },
        name: "St. Xavier's Arts & Science College",
        start_date: "1501497200",
      },
      experience: {
        description:
          "Created chat bots that can be injected to other websites. Created internal tools for the Company. Created multiple HTML - JS based mobile games.",
        end_date: "0",
        location: {
          city: "Ernakulam",
          state: "Kerala",
        },
        name: "Riafy Technologies Pvt. Ltd.",
        role: "Front-End Developer",
        start_date: "1628140800",
      },
      interests: "Music, Cooking, Technology",
      languages:
        "English : Full Professional Proficiency, Malayalam : Native or Bilingual Proﬁciency, Hindi : Limited Working Proﬁciency",
      name: "Milan Puthukkudy",
      skills:
        "Angular, React, Vue, TypeScript, JavaScript, Sass, Git, Three Js, UI/UX Design, Adobe XD, HTML, CSS",
      title: "Front-End Developer",
      projects: {
        description:
          "A fully-featured visualization web app that features advanced features like, Realtime Accurate Mesh Collision Detection, Custom translation & scaling and rotation helpers (Gizmos).",
        end_date: "0",
        name: "Admaren Tech - Web-Based 3D Visualization App",
        start_date: "0",
        website:
          "https://play.google.com/store/apps/details?id=brain.training.game.music, https://play.google.com/store/apps/details?id=daily.puzzle.word.game, https://play.google.com/store/apps/details?id=jigsaw.games.puzzles, https://play.google.com/store/apps/details?id=city.word.game.smash, https://play.google.com/store/apps/details?id=crossword.games.word.puzzles&hl=en_IN&gl=US, https://tap.exchange",
      },
    });
  };

  return (
    <div className="w-1/4 px-6 py-4 border-r-1 h-screen overflow-y-auto custom-scroll relative">
      <h1 className="text-3xl font-semibold">Basics</h1>
      <Button onClick={getData} className="upload-button">
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
