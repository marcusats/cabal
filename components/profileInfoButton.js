import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tooltip,
  FormControl,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Spinner } from "@uiball/loaders";
import { Input, Button } from "@chakra-ui/react";
import LoadingWrapper from "../helper/loadingWrapper";
export default function ProfileInfoButton({ item, idx }) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setLoading(true);
    // todo: get status and data value
    setLoading(false);
  }, []);
  return (
    <>
      <Tooltip
        label={
          item.value !== null ? "Completed" : "Todo: Click To Store Your Info"
        }
      >
        <button
          onClick={() => setVisible(true)}
          className={`profile-info-btn ${idx % 2 ? "" : "odd"}`}
        >
          <LoadingWrapper loading={loading} type={"dot-spinner"} size={20}>
            <span class={`status ${completed ? "success" : "todo"}`}></span>
          </LoadingWrapper>
          <p>{item.title}</p>
        </button>
      </Tooltip>

      <Modal isOpen={visible} size={"lg"} onClose={() => setVisible(false)}>
        <ModalOverlay />
        <ModalContent className={"custom-modal"}>
          <ModalHeader>{item.title}</ModalHeader>
          <ModalCloseButton />
          <FormControl>
            <ModalBody>
              {item.value ? (
                item.value
              ) : (
                <div>
                  <Input
                    placeholder={"Enter your " + item.title.toLowerCase()}
                    size="sm"
                    variant="outline"
                  />
                  <Button size="sm">Save Changes</Button>
                </div>
              )}
            </ModalBody>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  );
}
