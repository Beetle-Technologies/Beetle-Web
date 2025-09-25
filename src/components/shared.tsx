export function BodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"xl:container mx-auto w-[90%] min-h-full py-20 xl:py-28"}>
      {children}
    </div>
  );
}

export function TextLayout({
  children,
  num,
  title,
}: {
  children: React.ReactNode;
  num?: string;
  title?: string;
}) {
  return (
    <div className={"flex flex-col space-y-1 xl:space-y-2 py-3 xl:py-5"}>
      <div className={"text-xl xl:text-2xl text-[#101010] font-bold"}>
        <span>
          {num}
          {num && "."}
        </span>
        &nbsp;<span>{title}</span>
      </div>
      <div className={"text-[#505050] text-sm xl:text-base"}>{children}</div>
    </div>
  );
}

export function Line() {
  return <div className={"h-[1px] bg-[#505050] w-full xl:my-5 my-3"}></div>;
}
