import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";
import type { Project } from "../data/projects";
import { Link } from "react-router-dom";

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: Project) {
  return (
    <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="small" className="mt-2 text-gray-600">
          {description}
        </Typography>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              value={tech}
              className="bg-blue-gray-50 text-blue-gray-900"
            />
          ))}
        </div>
        <Link to={link} variant="small" className="mt-2 text-gray-600">
          {link}
        </Link>
      </CardBody>
    </Card>
  );
}
