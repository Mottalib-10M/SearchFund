"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Users } from "lucide-react";

type ConnectionUser = {
  id: string;
  name: string | null;
  image: string | null;
  role: string;
  searcherProfile?: { slug: string | null } | null;
  investorProfile?: { slug: string | null } | null;
  sellerProfile?: { slug: string | null } | null;
};

function getProfileUrl(user: ConnectionUser): string | null {
  const role = user.role.toUpperCase();
  if (role === "SEARCHER" && user.searcherProfile?.slug) {
    return `/searchers/${user.searcherProfile.slug}`;
  }
  if (role === "INVESTOR" && user.investorProfile?.slug) {
    return `/investors/${user.investorProfile.slug}`;
  }
  if (role === "SELLER" && user.sellerProfile?.slug) {
    return `/sellers/${user.sellerProfile.slug}`;
  }
  return null;
}

type Connection = {
  id: string;
  requesterId: string;
  receiverId: string;
  status: "PENDING" | "ACCEPTED" | "DECLINED";
  message: string | null;
  createdAt: string;
  requester: ConnectionUser;
  receiver: ConnectionUser;
};

const tabs = ["All", "Pending", "Accepted"] as const;

export default function ConnectionsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);

  const currentUserId = (session?.user as Record<string, unknown> | undefined)?.id as string | undefined;

  useEffect(() => {
    async function fetchConnections() {
      try {
        const res = await fetch("/api/connections");
        if (res.ok) {
          const data = await res.json();
          setConnections(data.connections);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    }
    fetchConnections();
  }, []);

  const handleAction = async (connectionId: string, action: "accept" | "decline") => {
    try {
      const res = await fetch("/api/connections", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectionId, action }),
      });
      if (res.ok) {
        setConnections((prev) =>
          prev.map((c) =>
            c.id === connectionId
              ? { ...c, status: action === "accept" ? "ACCEPTED" : "DECLINED" }
              : c
          )
        );
      }
    } catch {
      // ignore
    }
  };

  const filtered = connections.filter((c) => {
    if (activeTab === "All") return c.status !== "DECLINED";
    if (activeTab === "Pending") return c.status === "PENDING";
    if (activeTab === "Accepted") return c.status === "ACCEPTED";
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-apple-black">Connections</h1>
      <p className="text-apple-gray-500 mt-1">People in your network</p>

      {/* Tabs */}
      <div className="mt-6 flex gap-6 border-b border-apple-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-apple-black font-medium border-b-2 border-apple-accent"
                : "text-apple-gray-500 hover:text-apple-gray-700"
            }`}
          >
            {tab}
            {tab === "Pending" && connections.filter((c) => c.status === "PENDING" && c.receiverId === currentUserId).length > 0 && (
              <span className="ml-1.5 bg-apple-accent text-white text-xs rounded-full px-1.5 py-0.5">
                {connections.filter((c) => c.status === "PENDING" && c.receiverId === currentUserId).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="mt-8 text-sm text-apple-gray-500">Loading connections...</p>
      ) : filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-apple-gray-100">
            <Users className="h-5 w-5 text-apple-gray-500" />
          </div>
          <p className="mt-4 text-lg font-semibold text-apple-black">
            {activeTab === "All" ? "No connections yet" : `No ${activeTab.toLowerCase()} connections`}
          </p>
          <p className="mt-1 text-sm text-apple-gray-500">
            Start connecting with searchers, investors, and sellers
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link href="/searchers" className="text-sm font-medium text-apple-accent hover:underline">
              Browse searchers
            </Link>
            <Link href="/investors" className="text-sm font-medium text-apple-accent hover:underline">
              Browse investors
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {filtered.map((conn) => {
            const otherUser =
              conn.requesterId === currentUserId ? conn.receiver : conn.requester;
            const isPendingForMe =
              conn.status === "PENDING" && conn.receiverId === currentUserId;
            const profileUrl = getProfileUrl(otherUser);

            const avatar = otherUser.image ? (
              <img
                src={otherUser.image}
                alt={otherUser.name ?? "User"}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-apple-gray-100 flex items-center justify-center text-sm font-medium text-apple-gray-700 shrink-0">
                {(otherUser.name ?? "?").charAt(0).toUpperCase()}
              </div>
            );

            const userInfo = (
              <>
                {avatar}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-apple-black truncate">
                    {otherUser.name ?? "Anonymous"}
                  </p>
                  <p className="text-xs text-apple-gray-500">
                    {otherUser.role.charAt(0) + otherUser.role.slice(1).toLowerCase()}
                  </p>
                </div>
              </>
            );

            const Wrapper = profileUrl ? Link : "div";
            const wrapperProps = profileUrl
              ? { href: profileUrl, className: "flex items-center justify-between gap-4 bg-white border border-apple-gray-100 rounded-xl p-4 hover:bg-apple-gray-100/50 transition-colors" }
              : { className: "flex items-center justify-between gap-4 bg-white border border-apple-gray-100 rounded-xl p-4" };

            return (
              // @ts-expect-error - dynamic wrapper
              <Wrapper key={conn.id} {...wrapperProps}>
                <div className="flex items-center gap-3 min-w-0">
                  {userInfo}
                </div>

                <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.preventDefault()}>
                  {isPendingForMe ? (
                    <>
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAction(conn.id, "accept"); }}
                        className="bg-apple-accent text-white text-xs font-medium rounded-full px-4 py-1.5 hover:bg-apple-accent-hover transition-colors cursor-pointer"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleAction(conn.id, "decline"); }}
                        className="border border-apple-gray-300 text-apple-gray-700 text-xs font-medium rounded-full px-4 py-1.5 hover:bg-apple-gray-100 transition-colors cursor-pointer"
                      >
                        Decline
                      </button>
                    </>
                  ) : (
                    <span
                      className={`text-xs font-medium rounded-full px-3 py-1 ${
                        conn.status === "ACCEPTED"
                          ? "bg-green-50 text-green-700"
                          : conn.status === "PENDING"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-apple-gray-100 text-apple-gray-500"
                      }`}
                    >
                      {conn.status === "ACCEPTED"
                        ? "Connected"
                        : conn.status === "PENDING"
                          ? "Pending"
                          : "Declined"}
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      )}
    </div>
  );
}
