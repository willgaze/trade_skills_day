import type { Location } from "@/config/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-heading text-xl">{location.name}</CardTitle>
        <CardDescription>{location.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {location.description}
        </p>
      </CardContent>
    </Card>
  );
}
