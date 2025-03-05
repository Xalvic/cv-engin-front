import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

// Define a generic type for the dialog props
interface InfoCollectDialogProps<T extends Record<string, string>> {
  theArray: { name: string; show: string; type: string }[];
  theData: T;
  onClickEvent: (value: T & { id: string }) => void;
}

const InfoCollectDialog = <T extends Record<string, string>>({
  theData,
  theArray,
  onClickEvent
}: InfoCollectDialogProps<T>) => {
  const [infoArray] = useState(theArray);
  const [infoData, setInfoData] = useState<T>(theData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveData = () => {
    // Create a new object with id
    const dataWithId = {
      ...infoData,
      id: crypto.randomUUID(),
    };

    // Call the click event handler with the new object
    onClickEvent(dataWithId);

    // Reset the form data
    setInfoData(theData);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add a new item</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Item</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {infoArray
              .filter((field) => field.show.trim() !== "")
              .map((field) => (
                <div 
                  key={field.name} 
                  className="grid grid-cols-4 items-center gap-4"
                >
                  <Label htmlFor={field.name} className="text-right">
                    {field.show}
                  </Label>
                  <Input
                    type={field.type}
                    onChange={handleInputChange}
                    id={field.name}
                    name={field.name}
                    value={infoData[field.name] || ''}
                    className="col-span-3"
                  />
                </div>
              ))}
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

export default InfoCollectDialog;