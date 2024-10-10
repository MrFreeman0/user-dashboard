import { useMemo } from "react";
import {
  ISortState,
  TSortBy,
  TSortSelection,
} from "../../interfaces/ISortInterface";
import "./DashboardHeader.scss";
import StyledInput from "../StyledInput/StyledInput";
import StyledSelect from "../StyledSelect/StyledSelect";
interface IProps {
  onQueryChange: (query: string) => void;
  onSortSelectionChange: (value: TSortSelection) => void;
  onSortByChange: (value: TSortBy) => void;
  sortState: ISortState;
}

const DashboardHeader = (props: IProps) => {
  // Destructure
  const { sortState, onQueryChange, onSortSelectionChange, onSortByChange } =
    props;

  //Memoized handlers
  const handleQueryChange = useMemo(
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      onQueryChange(event.target.value);
    },
    [onQueryChange]
  );

  const handleSortSelectionChange = useMemo(
    () => (event: React.ChangeEvent<HTMLSelectElement>) => {
      onSortSelectionChange(event.target.value as TSortSelection);
    },
    [onSortSelectionChange]
  );

  const handleSortByChange = useMemo(
    () => (event: React.ChangeEvent<HTMLSelectElement>) => {
      onSortByChange(event.target.value as TSortBy);
    },
    [onSortByChange]
  );

  return (
    <div>
      <StyledInput
        placeholder={"Search by name, email or address"}
        onChange={handleQueryChange}
      />
      <StyledSelect
        value={sortState.sortWith}
        onChange={handleSortSelectionChange}
      >
        <option value={"name"}>Username</option>
        <option value={"email"}>Email</option>
      </StyledSelect>
      <StyledSelect value={sortState.sortBy} onChange={handleSortByChange}>
        <option value={"asc"}>Ascending</option>
        <option value={"desc"}>Descending</option>
      </StyledSelect>
    </div>
  );
};

export default DashboardHeader;
