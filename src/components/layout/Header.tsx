interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}

export function Header({ title, icon, actions }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-border ">
      <div className="flex items-center gap-3 ">
        {icon && <div className="text-muted-foreground size-6">{icon}</div>}
        <h1 className="text-foreground font-bold text-[20px] leading-[100%] tracking-[0px]">
          {title}
        </h1>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
