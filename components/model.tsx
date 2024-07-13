import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function ResumeModalImage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button className="max-w-fit" color="secondary" onPress={onOpen}>
        View CV
      </Button>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        placement={"center"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(_onClose: any) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mohanlal Resume
              </ModalHeader>
              <ModalBody>
                <Image height={"full"} src="/resume.png" width={"full"} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
