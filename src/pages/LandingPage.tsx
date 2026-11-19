import userPicture from "@/assets/marshall-picture.webp";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Workflow } from "lucide-react";
import {
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiTanstack,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiJsonwebtokens,
  SiGit,
  SiDocker,
  SiVercel,
  SiRender,
  SiNeon,
  SiGoogledrive,
} from "@icons-pack/react-simple-icons";

const LandingPage = () => {
  return (
    <div className="flex flex-col p-4 gap-8 max-w-200">
      <div className="flex flex-col sm:flex-row-reverse gap-2 items-center justify-center">
        <img
          className="w-1/2 sm:max-w-[320px] rounded-xl"
          src={userPicture}
          alt="User Picture"
        />
        <div className="flex flex-col">
          <Item className="p-0">
            <ItemContent>
              <ItemTitle className="text-3xl font-light">
                Hi, I'm <span className="font-bold">Marshall</span>
              </ItemTitle>
              <ItemDescription>
                A developer who enjoys developing applications and eager in
                learning new tech.
              </ItemDescription>
            </ItemContent>
          </Item>
          <div className="flex gap-2">
            <Badge
              render={
                <a
                  href="https://marcelo-resume-8da443.tiiny.site"
                  target="_blank"
                >
                  View my Resume <ArrowUpRight />
                </a>
              }
            />

            <Badge
              render={
                <a
                  href="https://www.linkedin.com/in/marshall-marcelo/"
                  target="_blank"
                >
                  LinkedIn <ArrowUpRight />
                </a>
              }
              className="bg-blue-600 text-white"
              variant="ghost"
            />
            <Badge
              render={
                <a href="https://github.com/Marshall-Marcelo" target="_blank">
                  <SiGithub /> GitHub <ArrowUpRight />
                </a>
              }
              className="border-black"
              variant="ghost"
            />
          </div>
        </div>
      </div>
      <div>
        <span className="text-2xl font-semibold">Skills</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-light">Frontend Development</span>
            <div className="flex gap-1 flex-wrap">
              <Badge variant="ghost" className="bg-yellow-300">
                <SiJavascript /> JavaScript
              </Badge>
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
                <SiShadcnui /> Shadcn UI
              </Badge>
              <Badge variant="ghost" className="bg-orange-500 text-white">
                <SiHtml5 /> HTML
              </Badge>
              <Badge variant="ghost" className="bg-blue-500 text-white">
                <SiCss /> CSS
              </Badge>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-light">Backend Development</span>
            <div className="flex gap-1 flex-wrap">
              <Badge>
                <SiNodedotjs /> Node.js
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
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-light">Cloud Services</span>
            <div className="flex gap-1 flex-wrap">
              <Badge variant="ghost" className="bg-black text-white">
                <SiVercel /> Vercel
              </Badge>
              <Badge variant="ghost" className="bg-green-500 text-white">
                <SiNeon /> Neon
              </Badge>
              <Badge variant="ghost" className="bg-black text-white">
                <SiRender /> Render
              </Badge>
              <Badge variant="ghost" className="bg-green-700 text-white">
                <SiGoogledrive /> Google Drive
              </Badge>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-light">Tools</span>
            <div className="flex gap-1 flex-wrap">
              <Badge variant="ghost" className="bg-orange-600 text-white">
                <SiGit /> Git
              </Badge>
              <Badge variant="ghost" className="bg-blue-500 text-white">
                <SiDocker /> Docker
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
