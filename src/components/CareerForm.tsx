"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import apiClient from "@/lib/axios";
import { Send, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CareerFormProps {
  onSubmitSuccess?: () => void;
}

export default function CareerForm({ onSubmitSuccess }: CareerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    linkedin: "",
    message: "",
  });

  const [files, setFiles] = useState({
    resume: null as File | null,
    coverLetter: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "resume" | "coverLetter"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }

      // Check file type (PDF, DOC, DOCX)
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload only PDF, DOC, or DOCX files");
        return;
      }

      setFiles((prev) => ({
        ...prev,
        [fileType]: file,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData to handle file uploads
      const formDataToSend = new FormData();

      // Add text fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company", ""); // Not applicable for career form
      formDataToSend.append(
        "subject",
        `Career Application - ${formData.position || "General Application"}`
      );
      formDataToSend.append(
        "message",
        `Position: ${formData.position}
Phone: ${formData.phone}
Years of Experience: ${formData.experience}
Portfolio URL: ${formData.portfolio}
LinkedIn: ${formData.linkedin}

Why Aurora Software Labs:
${formData.message}`
      );
      formDataToSend.append("formType", "career");

      // Add files if they exist
      if (files.resume) {
        formDataToSend.append("resume", files.resume);
      }
      if (files.coverLetter) {
        formDataToSend.append("coverLetter", files.coverLetter);
      }

      const response = await apiClient.post("/api/contact", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          portfolio: "",
          linkedin: "",
          message: "",
        });
        setFiles({
          resume: null,
          coverLetter: null,
        });
        onSubmitSuccess?.();
      } else {
        throw new Error(response.data.error || "Failed to submit application");
      }
    } catch (error) {
      console.error("Career form submission error:", error);
      // Handle Axios error response
      if (axios.isAxiosError(error)) {
        console.error("Response data:", error.response?.data);
        console.error("Response status:", error.response?.status);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Apply to Join Our Team</CardTitle>
        <CardDescription>
          Tell us about yourself and why you'd be a great fit for Aurora
          Software Labs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+233 XX XXX XXXX"
              />
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Position of Interest
              </label>
              <Input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="e.g., Frontend Developer, UI/UX Designer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Years of Experience
              </label>
              <Input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g., 3 years, Fresh Graduate"
              />
            </div>
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Portfolio/Website URL
              </label>
              <Input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              LinkedIn Profile
            </label>
            <Input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          {/* File Upload Section */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Resume / CV *
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "resume")}
                  className="hidden"
                  required
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#2ecc71] hover:bg-green-50 transition-colors"
                >
                  <Upload className="mr-2" size={20} />
                  {files.resume ? (
                    <span className="text-[#123524] font-medium">
                      {files.resume.name}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Click to upload resume (PDF, DOC, DOCX)
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Letter (Optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="coverLetter"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "coverLetter")}
                  className="hidden"
                />
                <label
                  htmlFor="coverLetter"
                  className="flex items-center justify-center w-full p-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#2ecc71] hover:bg-green-50 transition-colors"
                >
                  <Upload className="mr-2" size={20} />
                  {files.coverLetter ? (
                    <span className="text-[#123524] font-medium">
                      {files.coverLetter.name}
                    </span>
                  ) : (
                    <span className="text-gray-500">
                      Click to upload cover letter (PDF, DOC, DOCX)
                    </span>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Why Aurora Software Labs?
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us about your passion for software development, your career goals, and why you want to join Aurora Software Labs..."
            />
          </div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md"
            >
              <CheckCircle size={20} />
              <span>
                Application submitted successfully! We'll be in touch soon.
              </span>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md"
            >
              <AlertCircle size={20} />
              <span>
                Failed to submit application. Please try again or email us
                directly.
              </span>
            </motion.div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Send size={20} />
                </motion.div>
                Submitting Application...
              </>
            ) : (
              <>
                <Send className="mr-2" size={20} />
                Submit Application
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 rounded-md border-l-4 border-[#2ecc71] bg-green-50">
          <p className="text-sm text-[#123524]">
            <strong className="text-[#123524]">Note:</strong> We review all
            applications carefully. Even if there isn't a perfect match right
            now, we'll keep your information for future opportunities that align
            with your skills.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
