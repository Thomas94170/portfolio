import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { CheckCircle2 } from "lucide-react";
import type { Skill } from "../data/skills";

export function SkillCard({ category, items }: Skill) {
  return (
    <Card className="mt-6">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          {category}
        </Typography>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-500" />
              {item}
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
}