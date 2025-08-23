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
    <Card className="bg-gray-900 border border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl text-white">
          Apply to Join Our Team
        </CardTitle>
        <CardDescription className="text-white/55">
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
                className="block text-sm font-medium mb-1 text-gray-300"
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
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-300"
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
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1 text-gray-300"
              >
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="+233 XX XXX XXXX"
              />
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium mb-1 text-gray-300"
              >
                Position of Interest
              </label>
              <Input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="e.g., Frontend Developer, UI/UX Designer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium mb-1 text-gray-300"
              >
                Years of Experience
              </label>
              <Input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="e.g., 3 years, Fresh Graduate"
              />
            </div>
            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium mb-1 text-gray-300"
              >
                Portfolio/Website URL
              </label>
              <Input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
                placeholder="https://yourportfolio.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium mb-1 text-gray-300"
            >
              LinkedIn Profile
            </label>
            <Input
              type="url"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          {/* File Upload Section */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium mb-1 text-gray-300"
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
                  className="flex items-center justify-center w-full p-3 border-2 border-dashed rounded-md cursor-pointer transition-colors border-gray-600 hover:border-[#67c970] hover:bg-gray-700"
                >
                  <Upload className="mr-2 text-white" size={20} />
                  {files.resume ? (
                    <span className="font-medium text-[#67c970]">
                      {files.resume.name}
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      Click to upload resume (PDF, DOC, DOCX)
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium mb-1 text-gray-300"
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
                  className="flex items-center justify-center w-full p-3 border-2 border-dashed rounded-md cursor-pointer transition-colors border-gray-600 hover:border-[#67c970] hover:bg-gray-700"
                >
                  <Upload className="mr-2 text-white" size={20} />
                  {files.coverLetter ? (
                    <span className="font-medium text-[#67c970]">
                      {files.coverLetter.name}
                    </span>
                  ) : (
                    <span className="text-gray-400">
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
              className="block text-sm font-medium mb-1 text-gray-300"
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
              className="bg-gray-800 border border-white/20 text-white placeholder:text-gray-400 resize-none"
              placeholder="Tell us about your passion for software development, your career goals, and why you want to join Aurora Software Labs..."
            />
          </div>

          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 p-3 rounded-md text-green-400 bg-green-900/20"
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
              className="flex items-center gap-2 p-3 rounded-md text-red-400 bg-red-900/20"
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
            className="w-full text-black bg-white hover:bg-white/80"
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

        <div className="mt-6 p-4 rounded-md border-l-4 border-[#67c970] bg-green-900/10">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Note:</strong> We review all
            applications carefully. Even if there isn't a perfect match right
            now, we'll keep your information for future opportunities that align
            with your skills.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
