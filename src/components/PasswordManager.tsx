import { useState, useEffect } from "react";
import { Button, Card, CardContent } from "../components/ui";
import { PasswordEntryForm } from "./PasswordEntryForm";
import { PasswordList } from "./PasswordList";
import { PasswordEntry } from "../types/password";

export function PasswordManager() {
  const [passwords, setPasswords] = useState<PasswordEntry[]>([]);
  const [editingPassword, setEditingPassword] = useState<PasswordEntry | null>(
    null
  );
  const [view, setView] = useState<"list" | "form">("list");

  // Load passwords from localStorage on mount
  useEffect(() => {
    const savedPasswords = localStorage.getItem("passwords");
    if (savedPasswords) {
      try {
        const parsed = JSON.parse(savedPasswords);
        // Convert date strings back to Date objects
        const passwordsWithDates = parsed.map(
          (
            p: Omit<PasswordEntry, "createdAt" | "updatedAt"> & {
              createdAt: string;
              updatedAt: string;
            }
          ) => ({
            ...p,
            createdAt: new Date(p.createdAt),
            updatedAt: new Date(p.updatedAt),
          })
        );
        setPasswords(passwordsWithDates);
      } catch (error) {
        console.error("Failed to parse saved passwords:", error);
      }
    }
  }, []);

  // Save passwords to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);

  const handleAddPassword = (
    passwordData: Omit<PasswordEntry, "id" | "createdAt" | "updatedAt">
  ) => {
    const newPassword: PasswordEntry = {
      ...passwordData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setPasswords((prev) => [newPassword, ...prev]);
    setView("list");
  };

  const handleEditPassword = (password: PasswordEntry) => {
    setEditingPassword(password);
    setView("form");
  };

  const handleUpdatePassword = (
    passwordData: Omit<PasswordEntry, "id" | "createdAt" | "updatedAt">
  ) => {
    if (!editingPassword) return;

    setPasswords((prev) =>
      prev.map((p) =>
        p.id === editingPassword.id
          ? { ...p, ...passwordData, updatedAt: new Date() }
          : p
      )
    );

    setEditingPassword(null);
    setView("list");
  };

  const handleDeletePassword = (id: string) => {
    if (confirm("Are you sure you want to delete this password?")) {
      setPasswords((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleToggleFavorite = (id: string) => {
    setPasswords((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, isFavorite: !p.isFavorite, updatedAt: new Date() }
          : p
      )
    );
  };

  const handleCancel = () => {
    setEditingPassword(null);
    setView("list");
  };

  const stats = {
    total: passwords.length,
    favorites: passwords.filter((p) => p.isFavorite).length,
    categories: Array.from(new Set(passwords.map((p) => p.category))).length,
  };

  if (view === "form") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" onClick={handleCancel}>
            ← Back to List
          </Button>
        </div>
        <PasswordEntryForm
          onSubmit={editingPassword ? handleUpdatePassword : handleAddPassword}
          onCancel={handleCancel}
          initialData={editingPassword || undefined}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          🔐 Password Manager
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Secure, organized, and easy-to-use password management
        </p>

        <div className="flex justify-center mb-6">
          <Button size="lg" onClick={() => setView("form")} className="px-8">
            + Add New Password
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">{stats.total}</div>
            <div className="text-sm text-muted-foreground">Total Passwords</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">
              {stats.favorites}
            </div>
            <div className="text-sm text-muted-foreground">Favorites</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary">
              {stats.categories}
            </div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </CardContent>
        </Card>
      </div>

      {/* Password List */}
      {passwords.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <div className="text-6xl mb-4">🔐</div>
            <h2 className="text-2xl font-semibold mb-2">
              Welcome to Password Manager!
            </h2>
            <p className="text-muted-foreground mb-6">
              Get started by adding your first password entry. Your data is
              stored locally and securely.
            </p>
            <Button size="lg" onClick={() => setView("form")}>
              Add Your First Password
            </Button>
          </CardContent>
        </Card>
      ) : (
        <PasswordList
          passwords={passwords}
          onEdit={handleEditPassword}
          onDelete={handleDeletePassword}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>🔒 Your passwords are stored locally in your browser</p>
        <p className="mt-1">Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </div>
  );
}
