import { Item, ItemContent, ItemTitle, ItemMedia } from "@/components/ui/item";
import { cn } from "cn";
import headerIcon from "@/assets/header-icon.png";
import { Link } from "react-router";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <nav
      className={cn(
        "flex justify-between shadow-md rounded-2xl mt-2 mx-4",
        className,
      )}
    >
      <Item>
        <ItemMedia variant="image">
          <img src={headerIcon} alt="Portfolio Icon" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Marshall</ItemTitle>
        </ItemContent>
      </Item>
      <div className="flex items-center">
        <Link to="/">
          <HeaderItem title="Home" />
        </Link>
        <Link to="/projects">
          <HeaderItem title="Projects" />
        </Link>
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
