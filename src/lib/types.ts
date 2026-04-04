import type {
  User,
  Listing,
  SearcherProfile,
  InvestorProfile,
  SellerProfile,
  UserRole,
} from "@/generated/prisma";

export type SessionUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: UserRole;
};

export type ListingWithSeller = Listing & {
  seller: Pick<User, "id" | "name" | "image" | "verificationStatus">;
  _count?: {
    savedBy: number;
    inquiries: number;
  };
};

export type SearcherWithUser = SearcherProfile & {
  user: Pick<User, "id" | "name" | "image" | "country" | "city" | "bio" | "verificationStatus">;
};

export type InvestorWithUser = InvestorProfile & {
  user: Pick<User, "id" | "name" | "image" | "country" | "city" | "verificationStatus">;
};

export type SellerWithUser = SellerProfile & {
  user: Pick<User, "id" | "name" | "image" | "country" | "city" | "verificationStatus">;
};

export type ListingFilters = {
  search?: string;
  country?: string[];
  sector?: string[];
  ebitdaMin?: number;
  ebitdaMax?: number;
  revenueMin?: number;
  revenueMax?: number;
  sort?: string;
  page?: number;
};
