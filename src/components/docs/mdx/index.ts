import type { MDXComponents } from "mdx/types";
import { H2, H3, H4 } from "./Heading";
import { CodeBlock } from "./CodeBlock";
import { Image } from "./Image";
import { Table } from "./Table";
import { Callout } from "./Callout";
import { Steps } from "./Steps";
import { Tabs } from "./Tabs";
import { Terminal } from "./Terminal";
import { LinkCard } from "./LinkCard";
import { Accordion } from "./Accordion";
import { ApiTable } from "./ApiTable";
import { Badge } from "./Badge";
import { FileTree } from "./FileTree";

export function getMdxComponents(): MDXComponents {
  return {
    h2: H2,
    h3: H3,
    h4: H4,
    pre: CodeBlock,
    img: Image as MDXComponents["img"],
    table: Table,
    Image,
    Callout,
    Steps,
    Tabs,
    Terminal,
    LinkCard,
    Accordion,
    ApiTable,
    Badge,
    FileTree,
  };
}
