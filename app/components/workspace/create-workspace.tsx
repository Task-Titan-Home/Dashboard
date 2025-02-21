import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import createWorkspaceMutation from "@/app/graphql/workspace/workspace"; // Correctly import the mutation function

export default function App() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await createWorkspaceMutation({ name });
      console.log("Workspace created successfully:", data);
      onOpenChange();
    } catch (error) {
      console.error("Error creating workspace:", error);
      setError("Failed to create workspace. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mt-20 flex flex-col items-center space-x-4">
        <h1 className="font-cal text-4xl">No Workspace Yet</h1>
        <Image
          alt="missing site"
          src="https://illustrations.popsy.co/gray/web-design.svg"
          width={400}
          height={400}
        />
        <p className="text-lg text-stone-500">
          You do not have any workspaces yet. Create one to get started.
        </p>
      </div>
      <Button onPress={onOpen} disabled={loading}>
        Create Workspace
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <ModalHeader>Create New Workspace</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Input
                fullWidth
                size="lg"
                placeholder="Workspace Name"
                aria-label="Workspace Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
              {error && (
                <p className="text-red-500">
                  Error creating workspace: {error}
                </p>
              )}
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => onOpenChange()}
                >
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={loading}>
                  Create Workspace
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
