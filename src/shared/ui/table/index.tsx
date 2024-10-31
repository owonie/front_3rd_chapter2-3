import { Table as BaseTable } from "./Table"
import { TableBody } from "./TableBody"
import { TableCell } from "./TableCell"
import { TableHead } from "./TableHead"
import { TableHeader } from "./TableHeader"
import { TableRow } from "./TableRow"
import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"


interface TableType extends ForwardRefExoticComponent<
  HTMLAttributes<HTMLTableElement> & RefAttributes<HTMLTableElement>
> {
  Body: typeof TableBody;
  Cell: typeof TableCell;
  Head: typeof TableHead;
  Header: typeof TableHeader;
  Row: typeof TableRow;
}

const Table: TableType = BaseTable as TableType;

Table.Body = TableBody
Table.Head = TableHead
Table.Header = TableHeader
Table.Row = TableRow
Table.Cell = TableCell

Table.displayName = "Table";

export default Table;