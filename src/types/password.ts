export interface PasswordEntry {
  id: string;
  title: string;
  username: string;
  password: string;
  url?: string;
  notes?: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
}

export interface PasswordCategory {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface PasswordStrength {
  score: number;
  label: "Very Weak" | "Weak" | "Fair" | "Good" | "Strong";
  color: string;
}

export interface SearchFilters {
  category?: string;
  isFavorite?: boolean;
  query?: string;
}
