import classNames from "classnames";
import React, { ReactNode } from "react";

type ContainerFluidProps = {
  children: ReactNode;
  className?: string;
};

const ContainerFluid: React.FC<ContainerFluidProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "md:px-10 flex h-20 max-w-[90rem] items-center justify-between px-4 sm:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContainerFluid;
