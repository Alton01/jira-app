"use client";
import { ResponsiveModal } from "@/components/responsive-modal";

import { CreateWorkSpaceForm } from "./create-workspace-form";
import { useCreateWorkSpaceModal } from "../hooks/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkSpaceModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkSpaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
