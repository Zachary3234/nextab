import { useState } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
  Button,
} from "@heroui/react";
import AppItem from "./AppItem/AppItem";
import { ReactSortable } from "react-sortablejs";

export function AppGrid() {
  const [appList, setAppList] = useState([
    { id: 1, name: "App1" },
    { id: 2, name: "App2" },
    { id: 3, name: "App3" },
    { id: 4, name: "App4" },
    { id: 5, name: "App5" },
    { id: 6, name: "App6", rowSpan: 2, colSpan: 2 },
    { id: 7, name: "App7" },
    { id: 8, name: "App8" },
    { id: 9, name: "App9" },
    { id: 10, name: "App10" },
    { id: 11, name: "App11" },
    { id: 12, name: "App12" },
    { id: 13, name: "App13" },
    { id: 14, name: "App14" },
    { id: 15, name: "App15" },
    { id: 16, name: "App16" },
    { id: 17, name: "App17" },
    { id: 18, name: "App18" },
    { id: 19, name: "App19" },
    { id: 20, name: "App20" },
  ]);

  return (
    <div className="w-full h-full flex flex-col">
      {/* App Grid Page */}
      <div className="h-full overflow-y-auto mx-auto bg-white/10">
        <ReactSortable
          animation={200}
          delayOnTouchOnly={true}
          delay={200}
          handle=".drag-item"
          swapThreshold={0.75}

          list={appList}
          setList={setAppList}
          className="mb-6 grid grid-cols-14 gap-6 bg-white/10"
        >
          {appList.map((item) => (
            <AppItem key={item.id} name={item.name} rowSpan={item.rowSpan} colSpan={item.colSpan}></AppItem>
          ))}
        </ReactSortable>
      </div>
      {/* Pagination */}
      <div className="mt-4 mx-auto">
        <Button onPress={() => {
          setAppList((prev) => {
            const newList = [...prev];
            const movedItem = newList.pop();
            if (movedItem) {
              newList.unshift(movedItem);
            }
            return newList;
          });
        }}>Move App</Button>
        {/* <Pagination isCompact color="warning" initialPage={1} total={10} /> */}
      </div>
    </div>
  );
}
