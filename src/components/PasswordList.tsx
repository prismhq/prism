import { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
} from "../components/ui";
import { copyToClipboard, formatDate } from "../lib/password-utils";
import { PasswordEntry, SearchFilters } from "../types/password";

interface PasswordListProps {
  passwords: PasswordEntry[];
  onEdit: (password: PasswordEntry) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export function PasswordList({
  passwords,
  onEdit,
  onDelete,
  onToggleFavorite,
}: PasswordListProps) {
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPasswords = passwords.filter((password) => {
    const matchesQuery =
      !searchQuery ||
      password.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      password.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      password.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !filters.category || password.category === filters.category;
    const matchesFavorite =
      filters.isFavorite === undefined ||
      password.isFavorite === filters.isFavorite;

    return matchesQuery && matchesCategory && matchesFavorite;
  });

  const categories = Array.from(new Set(passwords.map((p) => p.category)));

  const handleCopyPassword = async (password: string) => {
    try {
      await copyToClipboard(password);
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy password:", error);
    }
  };

  const handleCopyUsername = async (username: string) => {
    try {
      await copyToClipboard(username);
      // You could add a toast notification here
    } catch (error) {
      console.error("Failed to copy username:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Search & Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search passwords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setFilters({})}
              className="whitespace-nowrap"
            >
              Clear Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.isFavorite === undefined ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  isFavorite: prev.isFavorite === undefined ? true : undefined,
                }))
              }
            >
              {filters.isFavorite === undefined ? "All" : "Favorites Only"}
            </Button>

            {categories.map((category) => (
              <Button
                key={category}
                variant={filters.category === category ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    category: prev.category === category ? undefined : category,
                  }))
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Password List */}
      <div className="space-y-4">
        {filteredPasswords.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              <p className="text-lg">No passwords found</p>
              <p className="text-sm">Try adjusting your search or filters</p>
            </CardContent>
          </Card>
        ) : (
          filteredPasswords.map((password) => (
            <Card
              key={password.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">
                        {password.title}
                      </h3>
                      {password.isFavorite && (
                        <Badge
                          variant="secondary"
                          className="text-brand-600 bg-brand-100"
                        >
                          ⭐ Favorite
                        </Badge>
                      )}
                      <Badge variant="outline">{password.category}</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-muted-foreground">
                            Username
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopyUsername(password.username)
                            }
                            className="h-6 px-2 text-xs"
                          >
                            Copy
                          </Button>
                        </div>
                        <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                          {password.username}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-muted-foreground">
                            Password
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopyPassword(password.password)
                            }
                            className="h-6 px-2 text-xs"
                          >
                            Copy
                          </Button>
                        </div>
                        <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                          {"•".repeat(Math.min(password.password.length, 20))}
                        </p>
                      </div>
                    </div>

                    {password.url && (
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Website
                        </span>
                        <a
                          href={password.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          {password.url}
                        </a>
                      </div>
                    )}

                    {password.notes && (
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Notes
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {password.notes}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Created: {formatDate(password.createdAt)}</span>
                      <span>Updated: {formatDate(password.updatedAt)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(password)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onToggleFavorite(password.id)}
                    >
                      {password.isFavorite ? "❤️" : "🤍"}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(password.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Summary */}
      <Card>
        <CardContent className="py-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Total: {passwords.length} passwords</span>
            <span>Showing: {filteredPasswords.length} passwords</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
