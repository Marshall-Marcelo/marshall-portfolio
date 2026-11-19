import trackeatLanding from "@/assets/trackeat-landing.png";
import { Badge } from "@/components/ui/badge";
import {
  SiTypescript,
  SiTanstack,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiNeon,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Workflow } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col p-4 gap-8">
      <div className="flex flex-col gap-2 sm:flex-row items-center">
        <img
          className="sm:w-1/2 border rounded-xl"
          src={trackeatLanding}
          alt="TrackEat Landing"
        />
        <div className="flex flex-col gap-1">
          <a
            className="text-xl font-semibold flex w-fit hover:cursor-pointer hover:text-muted-foreground"
            href="https://trackeat-frontend.vercel.app/"
            target="_blank"
          >
            TrackEat <ArrowUpRight strokeWidth={1} size={14} />
          </a>
          <p className="text-sm text-muted-foreground">
            TrackEat is a web application that allows users to log their daily
            meals and discover unnoticed recurring food patterns in their diet.
          </p>
          <div className="flex flex-col">
            <span className="font-medium">Tech Used</span>
            <div className="flex gap-1 flex-wrap">
              <Badge variant="ghost" className="bg-blue-600 text-white">
                <SiTypescript /> TypeScript
              </Badge>
              <Badge variant="ghost" className="bg-sky-500 text-white">
                <SiReact /> React
              </Badge>
              <Badge variant="ghost" className="bg-[#38bdf8] text-white">
                <SiTailwindcss /> Tailwind
              </Badge>
              <Badge>
                <SiTanstack /> Tanstack Router
              </Badge>
              <Badge>
                <SiTanstack /> React Query
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <SiExpress /> Express
              </Badge>
              <Badge variant="ghost" className="bg-blue-500 text-white">
                <SiPostgresql /> PostgreSQL
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <Workflow /> REST API
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <SiJsonwebtokens /> JWT
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <SiVercel /> Vercel
              </Badge>
              <Badge variant="ghost" className="bg-green-500 text-white">
                <SiNeon /> Neon
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <SiRender /> Render
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
