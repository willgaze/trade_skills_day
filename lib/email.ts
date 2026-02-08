import { Resend } from "resend";
import type { BookingFormData, InstructorFormData } from "@/lib/schemas";
import { getCourseBySlug } from "@/lib/courses";
import { locations } from "@/config/site";

// ---------------------------------------------------------------------------
// Resend client (lazy — only created when sending)
// ---------------------------------------------------------------------------

const ADMIN_EMAIL =
  process.env.ADMIN_EMAIL || "hello@tradeskillsday.co.uk";
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Trade Skills Day <hello@tradeskillsday.co.uk>";

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] RESEND_API_KEY not set — skipping email send");
    return null;
  }
  return new Resend(key);
}

// ---------------------------------------------------------------------------
// Shared HTML helpers
// ---------------------------------------------------------------------------

function emailLayout(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#1e293b;padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:700;">Trade Skills Day</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            ${content}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:20px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;font-size:13px;color:#94a3b8;">
              Trade Skills Day &middot; Andover &amp; Marlborough, UK<br />
              <a href="https://tradeskillsday.co.uk" style="color:#6366f1;text-decoration:none;">tradeskillsday.co.uk</a>
              &middot; hello@tradeskillsday.co.uk
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function dataRow(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 12px;font-size:14px;color:#64748b;white-space:nowrap;vertical-align:top;">${label}</td>
    <td style="padding:8px 12px;font-size:14px;color:#1e293b;">${value}</td>
  </tr>`;
}

function dataTable(rows: string): string {
  return `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;margin:16px 0;">${rows}</table>`;
}

// ---------------------------------------------------------------------------
// Resolve slugs to human-readable names
// ---------------------------------------------------------------------------

function resolveCourseName(slug: string): string {
  return getCourseBySlug(slug)?.title ?? slug;
}

function resolveLocationName(slug: string): string {
  return locations.find((l) => l.slug === slug)?.name ?? slug;
}

// ---------------------------------------------------------------------------
// Email templates
// ---------------------------------------------------------------------------

function bookingAdminEmail(data: BookingFormData): { subject: string; html: string } {
  const course = resolveCourseName(data.courseSlug);
  const location = resolveLocationName(data.preferredLocation);

  const rows = [
    dataRow("Name", data.name),
    dataRow("Email", `<a href="mailto:${data.email}" style="color:#6366f1;">${data.email}</a>`),
    dataRow("Phone", data.phone),
    dataRow("Course", course),
    dataRow("Location", location),
    ...(data.message ? [dataRow("Message", data.message)] : []),
  ].join("");

  const html = emailLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;color:#1e293b;">New Booking Request</h2>
    <p style="margin:0 0 16px;font-size:14px;color:#64748b;">A new booking request has been submitted.</p>
    ${dataTable(rows)}
    <p style="margin:16px 0 0;font-size:13px;color:#94a3b8;">Submitted at ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</p>
  `);

  return {
    subject: `New Booking Request: ${course} — ${data.name}`,
    html,
  };
}

function bookingConfirmationEmail(data: BookingFormData): { subject: string; html: string } {
  const course = resolveCourseName(data.courseSlug);
  const location = resolveLocationName(data.preferredLocation);

  const html = emailLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;color:#1e293b;">Booking Request Received</h2>
    <p style="margin:0 0 16px;font-size:15px;color:#334155;">
      Hi ${data.name},<br /><br />
      Thank you for your interest in <strong>${course}</strong> at our <strong>${location}</strong> venue.
      We have received your booking request and will be in touch within <strong>2 working days</strong> to
      confirm your place and arrange payment.
    </p>
    <h3 style="margin:24px 0 8px;font-size:15px;color:#1e293b;">Your Details</h3>
    ${dataTable([
      dataRow("Course", course),
      dataRow("Location", location),
      dataRow("Name", data.name),
      dataRow("Email", data.email),
      dataRow("Phone", data.phone),
    ].join(""))}
    <p style="margin:16px 0 0;font-size:14px;color:#334155;">
      If you have any questions in the meantime, reply to this email or contact us at
      <a href="mailto:hello@tradeskillsday.co.uk" style="color:#6366f1;">hello@tradeskillsday.co.uk</a>.
    </p>
  `);

  return {
    subject: `Booking Request Received — ${course}`,
    html,
  };
}

function instructorAdminEmail(data: InstructorFormData): { subject: string; html: string } {
  const rows = [
    dataRow("Name", data.name),
    dataRow("Email", `<a href="mailto:${data.email}" style="color:#6366f1;">${data.email}</a>`),
    dataRow("Phone", data.phone),
    dataRow("Trade", data.trade),
    dataRow("Experience", data.experience),
    ...(data.message ? [dataRow("Message", data.message)] : []),
  ].join("");

  const html = emailLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;color:#1e293b;">New Instructor Interest</h2>
    <p style="margin:0 0 16px;font-size:14px;color:#64748b;">Someone has expressed interest in instructing.</p>
    ${dataTable(rows)}
    <p style="margin:16px 0 0;font-size:13px;color:#94a3b8;">Submitted at ${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</p>
  `);

  return {
    subject: `New Instructor Interest: ${data.trade} — ${data.name}`,
    html,
  };
}

function instructorConfirmationEmail(data: InstructorFormData): { subject: string; html: string } {
  const html = emailLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;color:#1e293b;">Instructor Interest Received</h2>
    <p style="margin:0 0 16px;font-size:15px;color:#334155;">
      Hi ${data.name},<br /><br />
      Thank you for your interest in becoming an instructor with Trade Skills Day. We have received
      your details and will review them carefully. A member of our team will be in touch soon.
    </p>
    <h3 style="margin:24px 0 8px;font-size:15px;color:#1e293b;">What You Submitted</h3>
    ${dataTable([
      dataRow("Name", data.name),
      dataRow("Trade", data.trade),
      dataRow("Experience", data.experience),
    ].join(""))}
    <p style="margin:16px 0 0;font-size:14px;color:#334155;">
      If you have any questions, reply to this email or contact us at
      <a href="mailto:hello@tradeskillsday.co.uk" style="color:#6366f1;">hello@tradeskillsday.co.uk</a>.
    </p>
  `);

  return {
    subject: "Instructor Interest Received — Trade Skills Day",
    html,
  };
}

// ---------------------------------------------------------------------------
// Send helper
// ---------------------------------------------------------------------------

async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  try {
    await resend.emails.send({
      from: EMAIL_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error("[email] Failed to send email:", error);
  }
}

// ---------------------------------------------------------------------------
// Public: fire-and-forget email senders
// ---------------------------------------------------------------------------

export async function sendBookingEmails(data: BookingFormData): Promise<void> {
  const admin = bookingAdminEmail(data);
  const confirmation = bookingConfirmationEmail(data);

  await Promise.allSettled([
    sendEmail({ to: ADMIN_EMAIL, ...admin }),
    sendEmail({ to: data.email, ...confirmation }),
  ]);
}

export async function sendInstructorEmails(data: InstructorFormData): Promise<void> {
  const admin = instructorAdminEmail(data);
  const confirmation = instructorConfirmationEmail(data);

  await Promise.allSettled([
    sendEmail({ to: ADMIN_EMAIL, ...admin }),
    sendEmail({ to: data.email, ...confirmation }),
  ]);
}
