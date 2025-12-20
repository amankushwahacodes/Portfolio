"use server";

import { z } from "zod";
import { formSchema } from "./Schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/sections/Contact/email-tamplate";

// Get recipients from env or fallback to YOUR email
const getRecipients = () => {
  const env = process.env.RESEND_TO;
  if (!env) return ["amankushwaha.codes@gmail.com"];
  return env.split(",").map(e => e.trim()).filter(Boolean);
};

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // Validate input (important)
    const parsed = formSchema.safeParse(emailFormData);
    if (!parsed.success) {
      throw new Error("Invalid form data");
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      throw new Error("Mail service not configured");
    }

    const fromAddress =
      process.env.RESEND_FORM_EMAIL || "onboarding@resend.dev";

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: getRecipients(),
      subject: `New Contact Form Submission from ${emailFormData.fullName}`,
      replyTo: emailFormData.email,
      react: EmailTemplate({
        fullName: emailFormData.fullName,
        email: emailFormData.email,
        phoneNo: emailFormData.phoneNo,
        message: emailFormData.message,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error(
        typeof error === "string" ? error : JSON.stringify(error)
      );
    }

    return { success: true, data };
  } catch (err) {
    console.error("Email send failed:", err);
    throw err;
  }
};
