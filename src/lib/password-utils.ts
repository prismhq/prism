import { PasswordStrength } from "../types/password";

export function calculatePasswordStrength(password: string): PasswordStrength {
  let score = 0;

  // Length check
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (password.length >= 16) score += 1;

  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  // Deduct points for common patterns
  if (/(.)\1{2,}/.test(password)) score -= 1; // Repeated characters
  if (/123|abc|qwe|password|admin/i.test(password)) score -= 2; // Common sequences

  // Ensure score is within bounds
  score = Math.max(0, Math.min(score, 5));

  const strengthMap: Record<number, PasswordStrength> = {
    0: { score: 0, label: "Very Weak", color: "text-red-500" },
    1: { score: 1, label: "Very Weak", color: "text-red-500" },
    2: { score: 2, label: "Weak", color: "text-orange-500" },
    3: { score: 3, label: "Fair", color: "text-yellow-500" },
    4: { score: 4, label: "Good", color: "text-blue-500" },
    5: { score: 5, label: "Strong", color: "text-green-500" },
  };

  return strengthMap[score];
}

export function generatePassword(
  length: number = 16,
  includeUppercase: boolean = true,
  includeLowercase: boolean = true,
  includeNumbers: boolean = true,
  includeSymbols: boolean = true
): string {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (includeUppercase) chars += uppercase;
  if (includeLowercase) chars += lowercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  if (chars === "") {
    chars = lowercase + numbers; // Fallback
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

export function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    return new Promise((resolve, reject) => {
      try {
        document.execCommand("copy");
        textArea.remove();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
