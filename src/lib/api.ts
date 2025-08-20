import axios from "axios";

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form submission types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  formType: "contact" | "career";
}

// API error handler
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Server responded with error status
      return (
        error.response.data?.error ||
        error.response.data?.message ||
        `Server Error: ${error.response.status}`
      );
    } else if (error.request) {
      // Request was made but no response received
      return "Network error. Please check your connection and try again.";
    } else {
      // Something else happened
      return error.message || "An unexpected error occurred.";
    }
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "An unknown error occurred.";
  }
};

// Form submission helper
export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>("/api/contact", data);
    return response.data;
  } catch (error) {
    throw new Error(handleApiError(error));
  }
};

// Validation helpers
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateForm = (data: Partial<ContactFormData>): string[] => {
  const errors: string[] = [];

  if (!validateRequired(data.name || "")) {
    errors.push("Name is required");
  }

  if (!validateRequired(data.email || "")) {
    errors.push("Email is required");
  } else if (!validateEmail(data.email || "")) {
    errors.push("Please enter a valid email address");
  }

  if (!validateRequired(data.message || "")) {
    errors.push("Message is required");
  }

  return errors;
};
