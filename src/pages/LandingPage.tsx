import userPicture from "@/assets/marshall-picture.webp";
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";

const LandingPage = () => {
  return (
    <div className="flex flex-col pt-4 gap-2">
      <div className="flex flex-col sm:flex-row-reverse gap-2 items-center">
        <img
          className="w-1/2 sm:max-w-[320px] rounded-xl"
          src={userPicture}
          alt="User Picture"
        />
        <Item>
          <ItemContent>
            <ItemTitle className="text-3xl font-light">
              Hi, I'm <span className="font-bold">Marshall</span>
            </ItemTitle>
            <ItemDescription>
              <p>
                A developer who enjoys developing applications and eager in
                learning new tech.
              </p>
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
      <div>
        <span>Tech Stack ko</span>
        <div>display</div>
      </div>
    </div>
  );
};

export default LandingPage;
