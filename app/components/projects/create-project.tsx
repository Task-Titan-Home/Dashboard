import React, { useState } from "react";
import { Input, Button, Textarea, Card, Spacer } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface CreateProjectProps {
  onCreateProject: (name: string, description: string) => Promise<void>;
}

const CreateProject: React.FC<CreateProjectProps> = ({ onCreateProject }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await onCreateProject(values.name, values.description);
        formik.resetForm();
      } catch (error) {
        console.error("Failed to create project:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Card className="bg-neutral-900 text-black mx-auto p-6 max-w-md">
      <form onSubmit={formik.handleSubmit}>
        <h2>Create a New Project</h2>
        <Spacer y={1} />
        <Input
          fullWidth
          clearable
          label="Project Name"
          name="name"
          placeholder="Enter the project name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          status={
            formik.errors.name && formik.touched.name ? "error" : "default"
          }
          helperText={
            formik.errors.name && formik.touched.name ? formik.errors.name : ""
          }
        />
        <Spacer y={1} />
        <Textarea
          fullWidth
          clearable
          label="Project Description"
          name="description"
          placeholder="Enter the project description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          status={
            formik.errors.description && formik.touched.description
              ? "error"
              : "default"
          }
          helperText={
            formik.errors.description && formik.touched.description
              ? formik.errors.description
              : ""
          }
        />
        <Spacer y={1.5} />
        <Button
          type="submit"
          disabled={isSubmitting}
          shadow
          color="primary"
          auto
        >
          {isSubmitting ? "Creating..." : "Create Project"}
        </Button>
      </form>
    </Card>
  );
};

export default CreateProject;
