"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function CourseFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const trade = searchParams.get("trade") ?? "";
  const duration = searchParams.get("duration") ?? "";
  const location = searchParams.get("location") ?? "";

  const updateFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/courses?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push("/courses");
  }, [router]);

  const hasFilters = trade || duration || location;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
      <div className="flex-1">
        <label className="mb-1.5 block text-sm font-medium">Trade</label>
        <Select value={trade || "all"} onValueChange={(v) => updateFilter("trade", v)}>
          <SelectTrigger>
            <SelectValue placeholder="All trades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All trades</SelectItem>
            <SelectItem value="tiling">Tiling</SelectItem>
            <SelectItem value="plastering">Plastering</SelectItem>
            <SelectItem value="plumbing">Plumbing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="mb-1.5 block text-sm font-medium">Duration</label>
        <Select
          value={duration || "all"}
          onValueChange={(v) => updateFilter("duration", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any duration</SelectItem>
            <SelectItem value="1 day">1 day</SelectItem>
            <SelectItem value="2 days">2 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1">
        <label className="mb-1.5 block text-sm font-medium">Location</label>
        <Select
          value={location || "all"}
          onValueChange={(v) => updateFilter("location", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All locations</SelectItem>
            <SelectItem value="andover">Andover</SelectItem>
            <SelectItem value="marlborough">Marlborough</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {hasFilters && (
        <Button variant="outline" onClick={clearFilters}>
          Clear filters
        </Button>
      )}
    </div>
  );
}
