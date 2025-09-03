import React, { type ReactNode, forwardRef } from "react";

// export const Item = forwardRef(({ id, ...props }, ref) => {
//   return (
//     <div {...props} ref={ref}>
//       {id}
//     </div>
//   );
// });

export type AppItemProps = {
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
};

// export const AppItem = forwardRef(
//   ({ ...props }, ref: React.ForwardedRef<HTMLDivElement>) => {
//     // console.log(props);

//     return (
//       <div
//         // layout
//         {...props}
//         ref={ref}
//         style={{
//           ...props.style,
//           width: `calc(${props.colSpan} * var(--icon-size) + ${props.colSpan - 1} * var(--gap-size))`,
//           height: `calc(${props.rowSpan} * var(--icon-size) + ${props.rowSpan - 1} * var(--gap-size))`,
//           borderRadius: "var(--icon-radius)",
//           gridRow: `span ${props.rowSpan}`,
//           gridColumn: `span ${props.colSpan}`,
//         }}
//         className={`relative bg-white shadow-2xl cursor-pointer select-none content-center text-center ${props.className}`}
//       >
//         {props.children}
//       </div>
//     );
//   }
// );

export function AppItem({
  rowSpan = 1,
  colSpan = 1,
  style,
  className,
  children,
  ref,
  ...props
}: AppItemProps) {
  return (
    <div
      // layout
      {...props}
      ref={ref}
      style={{
        ...style,
        width: `calc(${colSpan} * var(--icon-size) + ${colSpan - 1} * var(--gap-size))`,
        height: `calc(${rowSpan} * var(--icon-size) + ${rowSpan - 1} * var(--gap-size))`,
        borderRadius: "var(--icon-radius)",
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${colSpan}`,
      }}
      className={`relative bg-white shadow-2xl cursor-pointer select-none content-center text-center ${className}`}
    >
      {children}
    </div>
  );
}
