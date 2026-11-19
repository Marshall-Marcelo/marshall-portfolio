import { Item, ItemContent, ItemTitle, ItemMedia } from "@/components/ui/item";
import { cn } from "cn";
import headerIcon from "@/assets/header-icon.png";

const Header = () => {
  return (
    <nav className="flex justify-between shadow">
      <Item>
        <ItemMedia variant="image">
          <img src={headerIcon} alt="Portfolio Icon" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Marshall</ItemTitle>
        </ItemContent>
      </Item>
      <div className="flex">
        <HeaderItem title="Home" />
        <HeaderItem title="Projects" />
      </div>
    </nav>
  );
};

type HeaderItemProps = {
  title: string;
  className?: string;
};

const HeaderItem = ({ title, className }: HeaderItemProps) => {
  return (
    <Item
      className={cn(
        "w-fit hover:cursor-pointer hover:border-b-primary",
        className,
      )}
    >
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
      </ItemContent>
    </Item>
  );
};

export default Header;
