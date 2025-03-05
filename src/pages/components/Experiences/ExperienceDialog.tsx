import {
  Dialog,
  DialogContent,
  DialogClose,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface Experience {
  id: string;
  company: string;
  position: string;
  daterange: string;
  companyLocation: string;
  companyWebsite: string;
  companySummary: string;
}

type ButtonProps = {
  onClickEvent: (value: Experience) => void;
};

const ExperienceDialog = ({ onClickEvent }: ButtonProps) => {
  const [experienceData, setExperienceData] = useState<Experience>({
    id: "",
    company: "",
    position: "",
    daterange: "",
    companyLocation: "",
    companyWebsite: "",
    companySummary: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExperienceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(experienceData);
  };

  // useEffect(() => {
  //   console.log(experienceData);
  // }, [experienceData]);

  const saveData = () => {
    setExperienceData((prevData) => ({
      ...prevData,
      id: crypto.randomUUID(),
    }));
    onClickEvent(experienceData);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add a new item</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Experince</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="company" className="text-right">
                Company
              </Label>
              <Input
                value={experienceData.company}
                onChange={handleInputChange}
                id="company"
                name="company"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="position" className="text-right">
                Position
              </Label>
              <Input
                value={experienceData.position}
                onChange={handleInputChange}
                id="position"
                name="position"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="daterange" className="text-right">
                Date or Date Range
              </Label>
              <Input
                value={experienceData.daterange}
                onChange={handleInputChange}
                id="daterange"
                name="daterange"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="companyLocation" className="text-right">
                Location
              </Label>
              <Input
                value={experienceData.companyLocation}
                onChange={handleInputChange}
                id="companyLocation"
                name="companyLocation"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="companyWebsite" className="text-right">
                Website
              </Label>
              <Input
                value={experienceData.companyWebsite}
                onChange={handleInputChange}
                id="companyWebsite"
                name="companyWebsite"
                className="col-span-3"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="companySummary">Summary</Label>
              <Textarea
                value={experienceData.companySummary}
                onChange={handleInputChange}
                placeholder="Type your Summary here."
                id="companySummary"
                name="companySummary"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={saveData} type="submit">
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ExperienceDialog;
