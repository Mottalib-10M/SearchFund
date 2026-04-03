-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailConnections" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "emailListings" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "emailMessages" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "profilePublic" BOOLEAN NOT NULL DEFAULT true;
