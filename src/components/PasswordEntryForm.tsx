import React, { useState } from "react";
import {
  Button,
  Input,
  Label,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Separator,
} from "../components/ui";
import {
  generatePassword,
  calculatePasswordStrength,
} from "../lib/password-utils";
import { PasswordEntry } from "../types/password";

interface PasswordEntryFormProps {
  onSubmit: (
    entry: Omit<PasswordEntry, "id" | "createdAt" | "updatedAt">
  ) => void;
  onCancel: () => void;
  initialData?: Partial<PasswordEntry>;
}

export function PasswordEntryForm({
  onSubmit,
  onCancel,
  initialData,
}: PasswordEntryFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    username: initialData?.username || "",
    password: initialData?.password || "",
    url: initialData?.url || "",
    notes: initialData?.notes || "",
    category: initialData?.category || "Personal",
    isFavorite: initialData?.isFavorite || false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const passwordStrength = calculatePasswordStrength(formData.password);

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(
      passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols
    );
    setFormData((prev) => ({ ...prev, password: newPassword }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {initialData ? "Edit Password" : "Add New Password"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="e.g., Gmail Account"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                placeholder="Personal"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username/Email *</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="username@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                value={formData.url}
                onChange={(e) => handleInputChange("url", e.target.value)}
                placeholder="https://example.com"
                type="url"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <div className="flex gap-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter password"
                required
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPassword(!showPassword)}
                className="px-3"
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </div>

            {formData.password && (
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className={passwordStrength.color}>
                  {passwordStrength.label}
                </Badge>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      passwordStrength.score <= 1
                        ? "bg-red-500"
                        : passwordStrength.score <= 2
                        ? "bg-orange-500"
                        : passwordStrength.score <= 3
                        ? "bg-yellow-500"
                        : passwordStrength.score <= 4
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                    style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Password Generator</Label>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={handleGeneratePassword}
              >
                Generate
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length" className="text-xs">
                  Length
                </Label>
                <Input
                  id="length"
                  type="number"
                  min="8"
                  max="64"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(Number(e.target.value))}
                  className="h-8"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="uppercase"
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="uppercase" className="text-xs">
                  ABC
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="lowercase"
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="lowercase" className="text-xs">
                  abc
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="numbers"
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="numbers" className="text-xs">
                  123
                </Label>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="symbols"
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="rounded"
              />
              <Label htmlFor="symbols" className="text-xs">
                !@#$
              </Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Additional notes..."
              className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              id="favorite"
              type="checkbox"
              checked={formData.isFavorite}
              onChange={(e) =>
                handleInputChange("isFavorite", e.target.checked)
              }
              className="rounded"
            />
            <Label htmlFor="favorite">Mark as favorite</Label>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update Password" : "Save Password"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
