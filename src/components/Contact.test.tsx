import { describe, expect, it, vi, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@/test/render";

vi.mock("@emailjs/browser", async () => {
  const actual = await vi.importActual<typeof import("@emailjs/browser")>("@emailjs/browser");
  return {
    ...actual,
    default: { send: vi.fn().mockResolvedValue({ status: 200, text: "OK" }) },
  };
});

import emailjs from "@emailjs/browser";
import Contact from "./Contact";

const sendSpy = vi.mocked(emailjs.send);

describe("Contact form validation", () => {
  beforeEach(() => {
    sendSpy.mockClear();
  });

  it("renders the three required input fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Your Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Message")).toBeInTheDocument();
  });

  it("disables the submit button until all fields are valid", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /send message/i });
    expect(submitButton).toBeDisabled();

    await user.type(screen.getByLabelText("Your Name"), "Test User");
    await user.type(screen.getByLabelText("Your Email"), "test@example.com");
    await user.type(screen.getByLabelText("Your Message"), "This is a long enough test message.");

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it("flags an invalid email format inline", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.type(screen.getByLabelText("Your Email"), "not-an-email");
    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });

  it("flags a message shorter than 10 characters", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.type(screen.getByLabelText("Your Message"), "short");
    expect(await screen.findByText(/message must be at least 10 characters/i)).toBeInTheDocument();
  });

  it("sends the message via emailjs when all fields are valid", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.type(screen.getByLabelText("Your Name"), "Test User");
    await user.type(screen.getByLabelText("Your Email"), "test@example.com");
    await user.type(screen.getByLabelText("Your Message"), "This is a long enough test message.");

    const submitButton = screen.getByRole("button", { name: /send message/i });
    await waitFor(() => expect(submitButton).toBeEnabled());
    await user.click(submitButton);

    await waitFor(() => {
      expect(sendSpy).toHaveBeenCalledTimes(1);
    });
    const [, , templateParams] = sendSpy.mock.calls[0]!;
    expect(templateParams).toMatchObject({
      from_name: "Test User",
      reply_to: "test@example.com",
      message: "This is a long enough test message.",
    });
  });
});
