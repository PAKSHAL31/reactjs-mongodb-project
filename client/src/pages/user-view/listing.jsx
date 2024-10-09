import EventFilter from "@/components/user-view/filter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { sortOptions } from "@/config";
import { fetchAllFilteredEvents } from "@/store/user/event-slice";
import UserEventTile from "@/components/user-view/user-event-tile";
import { useSearchParams } from "react-router-dom";

const EventListing = () => {
  const dispatch = useDispatch();
  const { eventList } = useSelector((state) => state.userEvents);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams()

  function handleSort(value) {
    setSort(value);
  }

  function handleFilter(getFilteredId, getFilteredOption) {
    console.log(getFilteredId, getFilteredOption);
    let cpyFilters = { ...filters };
    const indexOfCurrentSection =
      Object.keys(cpyFilters).indexOf(getFilteredId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getFilteredId]: [getFilteredOption],
      };
    } else {
      const indexOfCurrentOption =
        cpyFilters[getFilteredId].indexOf(getFilteredOption);

      if (indexOfCurrentOption === -1)
        cpyFilters[getFilteredId].push(getFilteredOption);
      else cpyFilters[getFilteredId].splice(indexOfCurrentOption, 1);
    }
    setFilters(cpyFilters)
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters)); // on page load it is necessary to get from session storage
  }

  function createSearchParamsHelper(filterParams) {
    const queryParams = [];
    
    // check the whole key value pair. In the second step check if each key has value as an array if its then join value using array.
    for (const [key, value] of Object.entries(filterParams)) {
      if (Array.isArray(value) && value.length > 0) {
        const paramValue = value.join(",");
        //final string for the key will be join like this key=value1,valu2
        queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
      }
    }
    //console.log(queryParams, "queryParams");
    // last all keys will be joined by & key1=value1,value2&key2=value3
    return queryParams.join("&");
  }
  

  useEffect(() => {
    if (filters && Object.keys(filters).length > 0) {
      const createQueryString = createSearchParamsHelper(filters);
      setSearchParams(new URLSearchParams(createQueryString));
    }
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  },[]);

  useEffect(() => {
    dispatch(fetchAllFilteredEvents());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 p-4 md:p-6">
      <EventFilter filters={filters} handleFilter={handleFilter} />
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Events</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {eventList.length} Events
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDownIcon className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {eventList && eventList.length > 0
            ? eventList.map((eventItem) => (
                <UserEventTile
                  // handleGetProductDetails={handleGetProductDetails}
                  event={eventItem}
                  //handleAddtoCart={handleAddtoCart}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default EventListing;
