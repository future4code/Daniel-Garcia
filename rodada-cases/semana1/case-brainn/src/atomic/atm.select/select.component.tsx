import * as React from "react";
import { Selector } from "..";
import { IcChevronDown } from "../../app/components";
import {
  SelectMenuItemStyled,
  SelectOptionsStyled,
  SelectStyled,
  SelectWrapperStyled,
} from "./select.component.styled";

interface option {
    option: string;
    action: () => void;
}
export interface SelectProps {
    selected: string;
    options: option[];
}
export const Select: React.FC<SelectProps> = ({selected, options}) => {
  const [open, setOpen] = React.useState(false);
    const mappedOptions = options.map((list) => {
      return (
        <SelectOptionsStyled onClick={list.action}>
          <Selector>{list.option}</Selector>
        </SelectOptionsStyled>
      );
    });

  return (
    <SelectWrapperStyled>
      <SelectStyled open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Selector>{selected}</Selector>
        <IcChevronDown />
      </SelectStyled>
      <SelectMenuItemStyled open={open}>{mappedOptions}</SelectMenuItemStyled>
    </SelectWrapperStyled>
  );
};
