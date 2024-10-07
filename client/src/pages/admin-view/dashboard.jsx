import { Button } from "@/components/ui/button";
import React, { Fragment, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CommonForm from "@/components/common/form";
import { addEventFormElements } from "@/config";
import ProductImageUpload from "@/components/admin-view/image-upload";

const initialEventData = {
  image: null,
  eventName: "",
  type: "",
  description: "",
  participantLimit: "",
  price: "",
  dateTime: "",
};

const AdminDashboard = () => {
  const [openCreateEventsDialog, setOpenCreateEventsDialog] = useState(false);
  const [formData, setFormData] = useState(initialEventData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  function onSubmit(event) {}

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateEventsDialog(true)}>
          Add New Event
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateEventsDialog}
        onOpenChange={() => {
          setOpenCreateEventsDialog(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add new Event</SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />
          <div className="py-6">
            <CommonForm
              formControls={addEventFormElements}
              buttonText={"Add"}
              formData={formData}
              setFormData={setFormData}
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminDashboard;
