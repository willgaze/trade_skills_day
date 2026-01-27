import { siteConfig } from "@/config/site";

export function PilotBanner() {
  if (!siteConfig.pilotBanner.enabled) return null;

  return (
    <div className="bg-orange-500 px-4 py-2 text-center text-sm font-medium text-white">
      {siteConfig.pilotBanner.text}
    </div>
  );
}
